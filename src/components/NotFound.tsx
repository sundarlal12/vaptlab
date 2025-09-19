import React from 'react';
import { AlertTriangle, Home, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Animation */}
        <div className="relative mb-8">
          <div className="text-9xl font-bold text-gray-200 select-none">404</div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center animate-pulse">
              <AlertTriangle className="w-16 h-16 text-white" />
            </div>
          </div>
        </div>

        {/* Content */}
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Page Not Found
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved. 
          Don't worry, our security experts are always here to help you navigate safely.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Home className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </button>
        </div>

        {/* Help Section */}
        <div className="mt-12 p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Need Help?</h3>
          <p className="text-gray-600 mb-4">
            If you believe this is an error, please contact our support team.
          </p>
          <a
            href="mailto:contact@vaptlabs.com"
            className="text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
          >
            contact@vaptlabs.com
          </a>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-20 w-20 h-20 bg-emerald-200 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-blue-200 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-10 w-12 h-12 bg-purple-200 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '2s' }}></div>
      </div>
    </div>
  );
};

export default NotFound;