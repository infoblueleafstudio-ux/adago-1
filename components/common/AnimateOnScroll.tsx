'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-in-up' | 'fade-in' | 'slide-up';
  delay?: number;
}

export default function AnimateOnScroll({ 
  children, 
  className = '', 
  animation = 'fade-in-up',
  delay = 0 
}: AnimateOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={elementRef}
      className={`${animation} ${isVisible ? 'animate' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
