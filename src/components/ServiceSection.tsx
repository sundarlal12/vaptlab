// src/components/ServiceSection.tsx
import React from "react";
import { FileText } from "lucide-react"; // icon

interface ServiceSectionProps {
  title: string;
  subtitle: string;
  image: string;
  onContactClick?: () => void;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  title,
  subtitle,
  image,
  onContactClick,
}) => {
  return (
    <div className="relative bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white py-20">
      {/* overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* text */}
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-emerald-400">
              {title}
            </h1>
            <p className="text-xl mb-8 text-gray-100">{subtitle}</p>
            <div className="flex flex-wrap gap-4">
              <button
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-colors"
                onClick={onContactClick}
              >
                <FileText className="w-5 h-5" />
                Sample VAPT Report
              </button>
            </div>
          </div>

          {/* image */}
          <div className="relative">
            <img
              src={image}
              alt={title}
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
