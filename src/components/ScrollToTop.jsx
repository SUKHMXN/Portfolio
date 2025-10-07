import React, { useState, useEffect } from 'react';
import { ChevronUpIcon } from '@heroicons/react/24/solid';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up a listener for scrolling
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-110"
          aria-label="Go to top"
        >
          <ChevronUpIcon className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;