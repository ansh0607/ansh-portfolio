import React, { memo } from 'react';
import { motion } from 'framer-motion';

const Maqrue = memo(function Maqrue({ imgurl }) {
  return (
    <div className="w-full py-8 space-y-8">
      {/* Upper row - scrolling right */}
      <div className="w-full overflow-hidden relative" style={{
        maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)'
      }}>
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{ x: ['-50%', '0%'] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {imgurl.map((url, i) => (
            <img 
              key={i} 
              src={url} 
              className="w-16 h-16 object-contain flex-shrink-0 mx-8" 
              alt={`marquee-item-${i}`}
            />
          ))}
          {imgurl.map((url, i) => (
            <img 
              key={`dup-${i}`} 
              src={url} 
              className="w-16 h-16 object-contain flex-shrink-0 mx-8" 
              alt={`marquee-item-${i}`}
            />
          ))}
        </motion.div>
      </div>

      {/* Lower row - scrolling left */}
      <div className="w-full overflow-hidden relative" style={{
        maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)'
      }}>
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {imgurl.map((url, i) => (
            <img 
              key={i} 
              src={url} 
              className="w-16 h-16 object-contain flex-shrink-0 mx-8" 
              alt={`marquee-item-${i}`}
            />
          ))}
          {imgurl.map((url, i) => (
            <img 
              key={`dup-${i}`} 
              src={url} 
              className="w-16 h-16 object-contain flex-shrink-0 mx-8" 
              alt={`marquee-item-${i}`}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
})

export default Maqrue;