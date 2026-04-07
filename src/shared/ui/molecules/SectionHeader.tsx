import React from 'react';

interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
  align?: 'left' | 'center' | 'right';
  titleClassName?: string;
  descriptionClassName?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
  className = '',
  align = 'center',
  titleClassName = '',
  descriptionClassName = '',
}) => {
  const aligns = {
    left: 'text-left focus:text-left items-start',
    center: 'text-center focus:text-center items-center',
    right: 'text-right focus:text-right items-end',
  };

  return (
    <div className={`mb-12 flex flex-col ${aligns[align]} ${className}`}>
      <h2 className={`text-4xl font-bold text-neutral-900 mb-4 ${titleClassName}`}>
        {title}
      </h2>
      {description ? (
        <p className={`text-xl text-neutral-600 max-w-3xl ${descriptionClassName}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
};

export default SectionHeader;
