import React from 'react';
import { Shield, FileText, Lock, Star, Code, Search, ChevronRight } from 'lucide-react';

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface BenefitsSectionProps {
  benefits: Benefit[];
  title?: string;
}

const BenefitsSection: React.FC<BenefitsSectionProps> = ({ 
  benefits, 
  title = "Benefits" 
}) => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            <span className="border-b-4 border-emerald-500 pb-2">{title}</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 border-4 border-dashed border-emerald-400 rounded-full"></div>
                <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                  {benefit.icon}
                </div>
                <div className="absolute -top-2 -right-2">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                    <ChevronRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;