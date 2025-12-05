import React, { useEffect, useRef, useState } from 'react'
import Navbar from './Navbar'
import Work from './com/Work'
import Stri from './com/Stri'
import Products from './components/Products'
import Marques from './components/marques' 
import Cards from './components/Cards'
import Footer from './components/Footer'
import Loader from './components/Loader'
import LocomotiveScroll from 'locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'

function App() {
  const scrollRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // 2.5 seconds loading time

    return () => clearTimeout(loadingTimer);
  }, []);

  useEffect(() => {
    if (!isLoading && scrollRef.current) {
      const locomotiveScroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        multiplier: 0.8,
        lerp: 0.1,
        class: 'is-reveal',
        smartphone: {
          smooth: true,
          multiplier: 1.2,
        },
        tablet: {
          smooth: true,
          multiplier: 1,
        },
        reloadOnContextChange: true,
      });

      // Update scroll on window resize
      window.addEventListener('resize', () => {
        locomotiveScroll.update();
      });

      return () => {
        if (locomotiveScroll) {
          locomotiveScroll.destroy();
        }
      };
    }
  }, [isLoading]);

  return (
    <>
      <Loader isLoading={isLoading} />
      <div 
        ref={scrollRef} 
        data-scroll-container 
        className={`bg-zinc-900 min-h-screen w-full text-white transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
      >
        <Navbar/>
        <div id="home" className='pt-20'>
          <Work/>
        </div>
        <Stri/>
        <Products/>
        <Marques/>
        <Cards/>
        <Footer/>
      </div>
    </>
  )
}

export default App