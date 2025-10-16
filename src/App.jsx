import React, { useEffect, useRef } from 'react'
import Navbar from './Navbar'
import Work from './com/Work'
import Stri from './com/Stri'
import Products from './components/Products'
import Marques from './components/marques' 
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'

function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
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
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container className='bg-zinc-900 min-h-screen w-full text-white'>
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
  )
}

export default App