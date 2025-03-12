import { useEffect, useRef, useState } from 'react';
import { debounce } from '@/lib/utils';
import Glide from '@glidejs/glide';

const useMobileCarousel = (mobileBreakpoint = 1024, config = {}) => {
  const glideRef = useRef(null);
  const glideInstanceRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const initializeCarousel = () => {
      if (!glideRef.current) return; // Ensure the ref exists before initializing Glide

      if (window.innerWidth <= mobileBreakpoint && !glideInstanceRef.current) {
        glideInstanceRef.current = new Glide(glideRef.current, {
          type: 'slider',
          perView: 3,
          focusAt: 0,
          gap: 0,
          rewind: false,
          breakpoints: {
            620: {
              perView: 2,
            },
          },
          ...config, // Allow custom configurations
        });

        // Update activeSlide state on slide change
        glideInstanceRef.current.on('run.after', () => {
          setActiveIndex(glideInstanceRef.current.index);
        });

        glideInstanceRef.current.mount();


        // Attach navigation buttons if they exist
        if (prevRef.current && nextRef.current) {
          prevRef.current.addEventListener('click', () =>
            glideInstanceRef.current.go('<')
          );
          nextRef.current.addEventListener('click', () =>
            glideInstanceRef.current.go('>')
          );
        }

      } else if (
        window.innerWidth > mobileBreakpoint &&
        glideInstanceRef.current
      ) {
        glideInstanceRef.current.destroy();
        glideInstanceRef.current = null;
      }
    };

    // Initialize carousel on mount
    const debouncedInitialize = debounce(initializeCarousel, 400);

    debouncedInitialize();

    window.addEventListener('resize', debouncedInitialize);

    return () => {
      // Cleanup event listener and Glide instance
      window.removeEventListener('resize', debouncedInitialize);
      if (glideInstanceRef.current) {
        glideInstanceRef.current.destroy();
      }
    };
  }, []);

  return { glideRef, prevRef, nextRef, activeIndex };
};

export default useMobileCarousel;
