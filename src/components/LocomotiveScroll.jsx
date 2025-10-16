import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

function LocomotiveScrollWrapper({ children }) {
  const scrollRef = useRef(null);
  const locomotiveScrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      locomotiveScrollRef.current = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        multiplier: 1,
        class: 'is-reveal',
        smartphone: {
          smooth: true,
        },
        tablet: {
          smooth: true,
        },
      });

      return () => {
        if (locomotiveScrollRef.current) {
          locomotiveScrollRef.current.destroy();
        }
      };
    }
  }, []);

  return (
    <div data-scroll-container ref={scrollRef}>
      {children}
    </div>
  );
}

export default LocomotiveScrollWrapper;
