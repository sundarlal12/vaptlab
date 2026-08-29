import React, { useEffect, useRef } from "react";

// Rotating wireframe geodesic sphere with a handful of "network" nodes
// scattered around it, connected by thin lines - built with plain Canvas 2D
// + basic 3D rotation/projection math rather than pulling in a 3D library
// (Three.js etc.) for one decorative hero graphic. Colored in the site's
// own brand pink/red rather than copying the reference's green, to stay
// visually consistent with the rest of the site.

interface Point3D {
  x: number;
  y: number;
  z: number;
}

interface OuterNode {
  base: Point3D; // position on/near the sphere shell this node hangs off
  offset: Point3D; // extra outward displacement, gives the "escaping" look
  size: number;
  connectTo: number; // index into the sphere points this node links back to
}

const BRAND = { r: 217, g: 47, b: 97 };

// Evenly distributes N points on a unit sphere - simple, well-known
// approach for exactly this kind of wireframe-sphere visual.
function fibonacciSphere(count: number): Point3D[] {
  const points: Point3D[] = [];
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const radius = Math.sqrt(1 - y * y);
    const theta = goldenAngle * i;
    points.push({ x: Math.cos(theta) * radius, y, z: Math.sin(theta) * radius });
  }
  return points;
}

function distance(a: Point3D, b: Point3D): number {
  return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2 + (a.z - b.z) ** 2);
}

const SPHERE_POINT_COUNT = 42;
const NEIGHBORS_PER_POINT = 4;
const FEATURED_INDICES = new Set([0, 7, 16, 25, 34]);

const spherePoints = fibonacciSphere(SPHERE_POINT_COUNT);

// Precompute each point's nearest neighbors once (edges are a fixed
// property of the point cloud, independent of rotation).
const edges: [number, number][] = (() => {
  const result: [number, number][] = [];
  const seen = new Set<string>();
  spherePoints.forEach((p, i) => {
    const distances = spherePoints
      .map((q, j) => ({ j, d: i === j ? Infinity : distance(p, q) }))
      .sort((a, b) => a.d - b.d)
      .slice(0, NEIGHBORS_PER_POINT);
    distances.forEach(({ j }) => {
      const key = i < j ? `${i}-${j}` : `${j}-${i}`;
      if (!seen.has(key)) {
        seen.add(key);
        result.push([i, j]);
      }
    });
  });
  return result;
})();

// A handful of nodes that hang off the sphere's edge with a line back to
// it, matching the loose scattered clusters in the reference image.
const outerNodes: OuterNode[] = [3, 9, 14, 20, 29, 37].map((idx, i) => {
  const base = spherePoints[idx];
  const angle = i * 1.9;
  const dist = 0.55 + (i % 3) * 0.35;
  return {
    base,
    offset: {
      x: Math.cos(angle) * dist,
      y: Math.sin(angle * 1.3) * dist * 0.8,
      z: Math.sin(angle) * dist * 0.4,
    },
    size: i % 2 === 0 ? 5 : 3,
    connectTo: idx,
  };
});

function rotateY(p: Point3D, angle: number): Point3D {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return { x: p.x * cos - p.z * sin, y: p.y, z: p.x * sin + p.z * cos };
}

function rotateX(p: Point3D, angle: number): Point3D {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return { x: p.x, y: p.y * cos - p.z * sin, z: p.y * sin + p.z * cos };
}

const NetworkSphereVisual: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let angle = 0;
    let resizeObserver: ResizeObserver | null = null;
    let width = 0;
    let height = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const dpr = window.devicePixelRatio || 1;
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    resizeObserver = new ResizeObserver(resize);
    if (canvas.parentElement) resizeObserver.observe(canvas.parentElement);

    const draw = () => {
      angle += 0.0032;
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const scale = Math.min(width, height) * 0.34;

      const project = (p: Point3D) => {
        const rotated = rotateX(rotateY(p, angle), 0.35);
        const perspective = 1 / (2 - rotated.z);
        return {
          x: cx + rotated.x * scale * perspective,
          y: cy + rotated.y * scale * perspective,
          z: rotated.z,
        };
      };

      const projectedSphere = spherePoints.map(project);

      // Wireframe edges
      edges.forEach(([a, b]) => {
        const pa = projectedSphere[a];
        const pb = projectedSphere[b];
        const depthOpacity = 0.12 + ((pa.z + pb.z) / 4 + 0.5) * 0.28;
        ctx.strokeStyle = `rgba(${BRAND.r}, ${BRAND.g}, ${BRAND.b}, ${depthOpacity.toFixed(3)})`;
        ctx.lineWidth = 0.6;
        ctx.beginPath();
        ctx.moveTo(pa.x, pa.y);
        ctx.lineTo(pb.x, pb.y);
        ctx.stroke();
      });

      // Sphere vertices
      projectedSphere.forEach((p, i) => {
        const isFeatured = FEATURED_INDICES.has(i);
        const depthOpacity = 0.35 + (p.z / 2 + 0.5) * 0.5;
        ctx.fillStyle = `rgba(${BRAND.r}, ${BRAND.g}, ${BRAND.b}, ${depthOpacity.toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, isFeatured ? 4 : 1.6, 0, Math.PI * 2);
        ctx.fill();
      });

      // Outer scattered nodes + their connecting lines back to the sphere
      outerNodes.forEach((node) => {
        const raw: Point3D = {
          x: node.base.x + node.offset.x,
          y: node.base.y + node.offset.y,
          z: node.base.z + node.offset.z,
        };
        const p = project(raw);
        const anchor = projectedSphere[node.connectTo];

        ctx.strokeStyle = `rgba(${BRAND.r}, ${BRAND.g}, ${BRAND.b}, 0.35)`;
        ctx.lineWidth = 0.7;
        ctx.beginPath();
        ctx.moveTo(anchor.x, anchor.y);
        ctx.lineTo(p.x, p.y);
        ctx.stroke();

        ctx.fillStyle = `rgb(${BRAND.r}, ${BRAND.g}, ${BRAND.b})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, node.size, 0, Math.PI * 2);
        ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      resizeObserver?.disconnect();
    };
  }, []);

  return (
    <div className="relative w-full max-w-2xl aspect-square mx-auto">
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
};

export default NetworkSphereVisual;
