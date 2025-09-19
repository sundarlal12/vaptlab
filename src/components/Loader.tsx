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

import React from 'react';

interface LoaderProps {
  size?: 'small' | 'medium' | 'large';
  color?: 'emerald-500' | 'blue-500' | 'pink-500' | 'white' | string;
  text?: string;
  fullscreen?: boolean; // NEW - when false renders inline
}

const Loader: React.FC<LoaderProps> = ({
  size = 'medium',
  color = 'emerald-500',
  text = 'Loading...',
  fullscreen = true,
}) => {
  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-16 h-16',
  };

  const textSizeClasses = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
  };

  // map common tailwind color strings to classes; fallback to a neutral if unknown
  const colorClassMap: Record<string, string> = {
    'emerald-500': 'border-emerald-500',
    'blue-500': 'border-blue-500',
    'pink-500': 'border-pink-500',
    white: 'border-white',
  };

  const colorClass = colorClassMap[color] ?? 'border-emerald-500';

  // wrapper classes: fullscreen cover vs inline container
  const wrapperClass = fullscreen
    ? 'fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50'
    : 'flex items-center justify-center';

  // spinner outer ring color (static gray ring) and animated colored ring on top
  return (
    <div className={wrapperClass}>
      <div className="flex flex-col items-center space-y-3">
        {/* Circular Loader */}
        <div className="relative">
          <div className={`${sizeClasses[size]} border-4 border-gray-200 rounded-full`} />
          <div
            className={`${sizeClasses[size]} border-4 ${colorClass} border-t-transparent rounded-full animate-spin absolute top-0 left-0`}
          />
        </div>

        {/* Loading Text + dots */}
        <div className={`text-center ${fullscreen ? 'mt-2' : ''}`}>
          <p className={`${textSizeClasses[size]} font-medium text-gray-700 animate-pulse`}>
            {text}
          </p>

          <div className="flex space-x-1 mt-2 justify-center">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" />
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '0.12s' }} />
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '0.24s' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
