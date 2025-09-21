// import React from 'react';

// interface LoaderProps {
//   size?: 'small' | 'medium' | 'large';
//   color?: string;
//   text?: string;
// }

// const Loader: React.FC<LoaderProps> = ({ 
//   size = 'medium', 
//   color = 'emerald-500',
//   text = 'Loading...'
// }) => {
//   const sizeClasses = {
//     small: 'w-8 h-8',
//     medium: 'w-12 h-12',
//     large: 'w-16 h-16'
//   };

//   const textSizeClasses = {
//     small: 'text-sm',
//     medium: 'text-base',
//     large: 'text-lg'
//   };

//   return (
//     <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50">
//       <div className="flex flex-col items-center space-y-4">
//         {/* Circular Loader */}
//         <div className="relative">
//           <div className={`${sizeClasses[size]} border-4 border-gray-200 rounded-full`}></div>
//           <div className={`${sizeClasses[size]} border-4 border-${color} border-t-transparent rounded-full animate-spin absolute top-0 left-0`}></div>
//         </div>
        
//         {/* Loading Text */}
//         <div className="text-center">
//           <p className={`${textSizeClasses[size]} font-medium text-gray-700 animate-pulse`}>
//             {text}
//           </p>
//           <div className="flex space-x-1 mt-2 justify-center">
//             <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce"></div>
//             <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
//             <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Loader;


// import React from 'react';

// interface LoaderProps {
//   size?: 'small' | 'medium' | 'large';
//   color?: 'emerald-500' | 'blue-500' | 'pink-500' | 'white' | string;
//   text?: string;
//   fullscreen?: boolean; // NEW - when false renders inline
// }

// const Loader: React.FC<LoaderProps> = ({
//   size = 'medium',
//   color = 'emerald-500',
//   text = 'Loading...',
//   fullscreen = true,
// }) => {
//   const sizeClasses = {
//     small: 'w-8 h-8',
//     medium: 'w-12 h-12',
//     large: 'w-16 h-16',
//   };

//   const textSizeClasses = {
//     small: 'text-sm',
//     medium: 'text-base',
//     large: 'text-lg',
//   };

//   // map common tailwind color strings to classes; fallback to a neutral if unknown
//   const colorClassMap: Record<string, string> = {
//     'emerald-500': 'border-emerald-500',
//     'blue-500': 'border-blue-500',
//     'pink-500': 'border-pink-500',
//     white: 'border-white',
//   };

//   const colorClass = colorClassMap[color] ?? 'border-emerald-500';

//   // wrapper classes: fullscreen cover vs inline container
//   const wrapperClass = fullscreen
//     ? 'fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50'
//     : 'flex items-center justify-center';

//   // spinner outer ring color (static gray ring) and animated colored ring on top
//   return (
//     <div className={wrapperClass}>
//       <div className="flex flex-col items-center space-y-3">
//         {/* Circular Loader */}
//         <div className="relative">
//           <div className={`${sizeClasses[size]} border-4 border-gray-200 rounded-full`} />
//           <div
//             className={`${sizeClasses[size]} border-4 ${colorClass} border-t-transparent rounded-full animate-spin absolute top-0 left-0`}
//           />
//         </div>

//         {/* Loading Text + dots */}
//         <div className={`text-center ${fullscreen ? 'mt-2' : ''}`}>
//           <p className={`${textSizeClasses[size]} font-medium text-gray-700 animate-pulse`}>
//             {text}
//           </p>

//           <div className="flex space-x-1 mt-2 justify-center">
//             <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" />
//             <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '0.12s' }} />
//             <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '0.24s' }} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Loader;



// import React from 'react';

// interface LoaderProps {
//   size?: 'small' | 'medium' | 'large';
//   text?: string;
//   fullscreen?: boolean;
// }

// const Loader: React.FC<LoaderProps> = ({
//   size = 'medium',
//   text = 'Loading...',
//   fullscreen = true,
// }) => {
//   const sizeClasses = {
//     small: 'w-8 h-8',
//     medium: 'w-12 h-12',
//     large: 'w-16 h-16',
//   };

//   const textSizeClasses = {
//     small: 'text-sm',
//     medium: 'text-base',
//     large: 'text-lg',
//   };

//   // wrapper classes: fullscreen cover vs inline container
//   const wrapperClass = fullscreen
//     ? 'fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50'
//     : 'flex items-center justify-center';

//   return (
//     <div className={wrapperClass}>
//       <div className="flex flex-col items-center space-y-3">
//         {/* Spinner with red gradient */}
//         <div className="relative">
//           <div className={`${sizeClasses[size]} border-4 border-gray-200 rounded-full`} />
//           <div
//             className={`${sizeClasses[size]} border-4 border-transparent rounded-full animate-spin absolute top-0 left-0`}
//             style={{
//               background:
//                 'conic-gradient(from 0deg, rgb(217,47,97), rgb(143,15,56))',
//               WebkitMask:
//                 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
//               WebkitMaskComposite: 'destination-out',
//               maskComposite: 'exclude',
//               padding: '2px',
//             }}
//           />
//         </div>

//         {/* Loading Text + dots */}
//         <div className={`text-center ${fullscreen ? 'mt-2' : ''}`}>
//           <p className={`${textSizeClasses[size]} font-medium text-gray-700 animate-pulse`}>
//             {text}
//           </p>

//           <div className="flex space-x-1 mt-2 justify-center">
//             <div
//               className="w-2 h-2 rounded-full animate-bounce"
//               style={{ background: 'linear-gradient(to right, rgb(217,47,97), rgb(143,15,56))' }}
//             />
//             <div
//               className="w-2 h-2 rounded-full animate-bounce"
//               style={{
//                 animationDelay: '0.12s',
//                 background: 'linear-gradient(to right, rgb(217,47,97), rgb(143,15,56))',
//               }}
//             />
//             <div
//               className="w-2 h-2 rounded-full animate-bounce"
//               style={{
//                 animationDelay: '0.24s',
//                 background: 'linear-gradient(to right, rgb(217,47,97), rgb(143,15,56))',
//               }}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Loader;


// import React from 'react';

// interface LoaderProps {
//   size?: 'small' | 'medium' | 'large';
//   text?: string;
//   fullscreen?: boolean;
// }

// const Loader: React.FC<LoaderProps> = ({
//   size = 'medium',
//   text = 'Loading page...',
//   fullscreen = true,
// }) => {
//   // concrete pixel sizes to make ring math simpler
//   const pxSizes: Record<string, number> = { small: 40, medium: 56, large: 80 };
//   const ringThickness = 6; // px thickness of ring
//   const outer = pxSizes[size];
//   const inner = Math.max(outer - ringThickness * 2, 8);

//   const wrapperClass = fullscreen
//     ? 'fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50'
//     : 'flex items-center justify-center';

//   // inner hole background should match overlay to "cut out" the ring.
//   // When fullscreen overlay is semi-opaque white, the hole should use same "page background"
//   // so it looks like a ring. Adjust if you use a different overlay color.
//   const innerHoleBg = fullscreen ? 'rgba(255,255,255,0.8)' : 'transparent';

//   const arcGradient = 'linear-gradient(90deg, rgb(217,47,97), rgb(143,15,56))';
//   // conic gradient that paints a partial arc then transparent rest:
//   // adjust the 'arcCoverage' percentage to control arc length (e.g. 25%).
//   const arcCoverage = 28; // percent of the circle used by the colored arc
//   const conic = `conic-gradient(from 0deg, rgb(217,47,97) 0% ${arcCoverage}%, rgba(0,0,0,0) ${arcCoverage}% 100%)`;

//   return (
//     <div className={wrapperClass}>
//       <div className="flex flex-col items-center space-y-3">
//         {/* Spinner */}
//         <div className="relative" style={{ width: outer, height: outer }}>
//           {/* static gray ring */}
//           <div
//             style={{
//               width: outer,
//               height: outer,
//               borderRadius: '9999px',
//               border: `${ringThickness}px solid #e5e7eb`, // gray-200
//               boxSizing: 'border-box',
//             }}
//           />

//           {/* moving arc overlay (spins). This is a full circular layer using conic gradient,
//               with a centered inner hole element that cuts out the center to produce a ring. */}
//           <div
//             className="absolute top-0 left-0 rounded-full animate-spin"
//             style={{
//               width: outer,
//               height: outer,
//               background: conic,
//               // make sure it sits above the gray ring:
//               pointerEvents: 'none',
//               // ensure smooth GPU-accelerated animation
//               willChange: 'transform',
//             }}
//           >
//             {/* centered inner hole to create ring thickness visually */}
//             <div
//               style={{
//                 width: inner,
//                 height: inner,
//                 borderRadius: '9999px',
//                 background: innerHoleBg,
//                 position: 'absolute',
//                 left: '50%',
//                 top: '50%',
//                 transform: 'translate(-50%, -50%)',
//               }}
//             />
//           </div>
//         </div>

//         {/* Loading Text */}
//         <div className="text-center mt-2">
//           <p className="font-medium text-gray-700" style={{ fontSize: size === 'small' ? 12 : size === 'large' ? 18 : 14 }}>
//             {text}
//           </p>

//           {/* Gradient dots */}
//           <div className="flex space-x-2 mt-2 justify-center">
//             <div
//               className="rounded-full animate-bounce"
//               style={{
//                 width: 8,
//                 height: 8,
//                 background: arcGradient,
//                 animationDelay: '0s',
//               }}
//             />
//             <div
//               className="rounded-full animate-bounce"
//               style={{
//                 width: 8,
//                 height: 8,
//                 background: arcGradient,
//                 animationDelay: '0.12s',
//               }}
//             />
//             <div
//               className="rounded-full animate-bounce"
//               style={{
//                 width: 8,
//                 height: 8,
//                 background: arcGradient,
//                 animationDelay: '0.24s',
//               }}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Loader;


import React from 'react';

interface LoaderProps {
  size?: 'small' | 'medium' | 'large';
  text?: string;
  fullscreen?: boolean;
  arcCoverage?: number; // percent of circumference that should be colored (default 30)
}

const Loader: React.FC<LoaderProps> = ({
  size = 'medium',
  text = 'Loading page...',
  fullscreen = true,
  arcCoverage = 30,
}) => {
  // px sizes
  const pxSizes: Record<string, number> = { small: 40, medium: 56, large: 80 };
  const outer = pxSizes[size];
  const ringThickness = Math.max(Math.round(outer * 0.12), 6); // ring thickness
  const inner = Math.max(outer - ringThickness * 2, 8);

  const wrapperClass = fullscreen
    ? 'fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50'
    : 'flex items-center justify-center';

  const startColor = 'rgb(217,47,97)';
  const endColor = 'rgb(143,15,56)';
  const gray = '#e5e7eb'; // light gray

  // Solid gradient arc for first arcCoverage%, then solid gray for the rest
  // Example output: conic-gradient(rgb(217,47,97) 0% , rgb(143,15,56) 30%, #e5e7eb 30% 100%)
  const conic = `conic-gradient(${startColor} 0%, ${endColor} ${arcCoverage}%, ${gray} ${arcCoverage}% 100%)`;

  return (
    <div className={wrapperClass}>
      <div className="flex flex-col items-center space-y-3">
        {/* Spinner */}
        <div
          className="relative"
          style={{
            width: outer,
            height: outer,
            display: 'grid',
            placeItems: 'center',
          }}
          aria-hidden
        >
          {/* subtle transparent backdrop (keeps ring contrast) */}
          <div
            style={{
              width: outer,
              height: outer,
              borderRadius: '9999px',
              background: 'transparent',
              position: 'absolute',
              top: 0,
              left: 0,
            }}
          />

          {/* Rotating ring: solid gradient arc + solid gray remainder */}
          <div
            className="animate-spin"
            style={{
              width: outer,
              height: outer,
              borderRadius: '9999px',
              background: conic,
              WebkitMask: `radial-gradient(farthest-side, transparent calc(100% - ${ringThickness}px), black 0)`,
              mask: `radial-gradient(farthest-side, transparent calc(100% - ${ringThickness}px), black 0)`,
              position: 'absolute',
              top: 0,
              left: 0,
              willChange: 'transform',
            }}
          />

          {/* Center hole to make it a ring */}
          <div
            style={{
              width: inner,
              height: inner,
              borderRadius: '9999px',
              background: fullscreen ? 'rgba(255,255,255,0.8)' : 'transparent',
              position: 'relative',
              zIndex: 1,
            }}
          />
        </div>

        {/* Loading text */}
        <div className="text-center mt-2">
          <p
            style={{
              fontSize: size === 'small' ? 12 : size === 'large' ? 18 : 14,
              color: '#374151',
              fontWeight: 600,
            }}
          >
            {text}
          </p>

          {/* Gradient dots */}
          <div className="flex space-x-2 mt-2 justify-center">
            {[0, 0.12, 0.24].map((delay, i) => (
              <div
                key={i}
                className="rounded-full animate-bounce"
                style={{
                  width: 8,
                  height: 8,
                  background: `linear-gradient(90deg, ${startColor}, ${endColor})`,
                  animationDelay: `${delay}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
