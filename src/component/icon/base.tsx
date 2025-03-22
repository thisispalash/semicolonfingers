'use client';

import clsx from 'clsx';
import { ElementType } from 'react';

interface BaseIconProps {
  as: ElementType;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
}

export default function Icon({
  as: IconComponent,
  className,
  size = 'md',
}: BaseIconProps) {
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
  };
  
  return (
    <span className={clsx(
      'inline-flex items-center justify-center',
      sizeClasses[size],
      className
    )}>
      <IconComponent />
    </span>
  );
}