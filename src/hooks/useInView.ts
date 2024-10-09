import { useEffect, useRef, useState } from 'react';

const useInView = (options: IntersectionObserverInit = {}, delayTime = 1000) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect(); // 可选：停止观察
          }
        },
        options
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        observer.disconnect();
      };
    }, delayTime)
  }, [options]);

  return { ref, isInView };
};

export default useInView;