// import React from "react";
// import Lottie from "lottie-react";
// import radarJson from "./vapt-radar.json";
// import "./VaptRadar.css";

// type Props = {
//   width?: number | string;
//   height?: number | string;
//   logoSrc?: string;
// };

// export default function VaptRadar({
//   width = 720,
//   height = 720,
//   logoSrc = "https://vaptlabs.com/vapt-labs-logo.png", // or /logo.png in public
// }: Props) {
//   return (
//     <div className="vapt-radar-root" style={{ width, height }}>
//       <Lottie animationData={radarJson} loop={true} />
//       <div className="vapt-radar-center">
//         <img src={logoSrc} alt="VAPT logo" className="vapt-radar-logo" />
//       </div>
//     </div>
//   );
// }


// src/components/VaptRadar.tsx
import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";

export default function VaptRadar() {
  const [data, setData] = useState<any | null>(null);

  useEffect(() => {
    fetch("/animations/vapt-radar.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch JSON: " + res.status);
        return res.json();
      })
      .then((json) => {
        console.log("Radar JSON loaded:", json);
        setData(json);
      })
      .catch((err) => console.error("Radar JSON error:", err));
  }, []);

  if (!data) {
    return (
      <div style={{ width: 720, height: 720, background: "#111", color: "#fff" }}>
        Loading radar…
      </div>
    );
  }

  return <Lottie animationData={data} loop={true} style={{ width: 720, height: 720 }} />;
}
