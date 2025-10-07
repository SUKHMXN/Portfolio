import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-[#080809] py-6">
      <div className="container mx-auto px-6 text-center text-gray-600 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} Sukhman Singh. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
