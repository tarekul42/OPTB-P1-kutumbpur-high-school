import React from 'react';

interface HeroProps {
  title: string;
  description?: string;
  className?: string;
  accentColor?: string;
  center?: boolean;
}

const Hero: React.FC<HeroProps> = ({
  title,
  description,
  className = '',
  accentColor = 'primary-900',
  center = true,
}) => {
  return (
    <div className={`relative overflow-hidden py-20 ${className}`}>
      <div className={`absolute inset-0 bg-linear-to-r from-${accentColor} to-primary-800 animate-gradient`}></div>
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className={center ? 'text-center' : 'text-left'}>
          <h1 className="text-5xl font-serif font-bold mb-6 drop-shadow-lg">
            {title}
          </h1>
          {description ? (
            <p className={`text-xl text-slate-100 max-w-3xl ${center ? 'mx-auto' : ''} font-medium drop-shadow-md`}>
              {description}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Hero;
