import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaCode, FaRocket, FaStar } from 'react-icons/fa'

const Loader = ({ isLoading }) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval)
            return 100
          }
          return prev + Math.random() * 15
        })
      }, 100)

      return () => clearInterval(interval)
    } else {
      setProgress(100)
    }
  }, [isLoading])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[999999] bg-gradient-to-br from-zinc-900 via-purple-900/20 to-zinc-900 flex items-center justify-center overflow-hidden"
        >
          {/* Background animations */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
          </div>

          <div className="relative z-10 text-center">
            {/* Logo/Brand */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-8"
            >
              <div className="relative inline-flex items-center justify-center w-24 h-24">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse-slow"></div>
                <div className="relative bg-zinc-900 rounded-full w-20 h-20 flex items-center justify-center border-2 border-purple-500/50">
                  <FaCode className="text-3xl text-purple-400 animate-pulse" />
                </div>
              </div>
            </motion.div>

            {/* Loading text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-8"
            >
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent mb-2">
                YourLogo
              </h1>
              <p className="text-zinc-400 text-lg">Creating amazing experiences...</p>
            </motion.div>

            {/* Loading animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mb-8"
            >
              <div className="flex justify-center items-center space-x-2 mb-4">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-3 h-3 bg-purple-500 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "300px" }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="w-full max-w-xs mx-auto"
            >
              <div className="relative h-2 bg-zinc-800 rounded-full overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
              </div>
              <p className="text-zinc-500 text-sm mt-2">{Math.min(100, Math.round(progress))}%</p>
            </motion.div>

            {/* Floating icons */}
            <div className="absolute top-10 left-10 text-purple-500/30 animate-float">
              <FaRocket className="text-2xl" />
            </div>
            <div className="absolute top-20 right-10 text-pink-500/30 animate-float" style={{ animationDelay: '1s' }}>
              <FaStar className="text-xl" />
            </div>
            <div className="absolute bottom-20 left-20 text-blue-500/30 animate-float" style={{ animationDelay: '3s' }}>
              <FaCode className="text-2xl" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Loader
