import React from 'react';

const Footer = () => {
  return (
      <footer className="bg-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center mb-4">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <img src="/Facebook.png" alt="Facebook" className="h-6 mx-4" /> {/* Added mx-4 */}
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <img src="/X.png" alt="Twitter" className="h-6 mx-4" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <img src="/Instagram.png" alt="Instagram" className="h-6 mx-4" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <img src="/LinkedIn.png" alt="LinkedIn" className="h-6 mx-4" />
            </a>
            <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
              <img src="/Google.png" alt="Google" className="h-6 mx-4" />
            </a>
          </div>

          <div className="flex justify-center space-x-6 mb-4">
            <a href="/" className="text-gray-800 text-sm font-medium uppercase">Home</a>
            <a href="/" className="text-gray-800 text-sm font-medium uppercase">Contact</a>
            <a href="/" className="text-gray-800 text-sm font-medium uppercase">Privacy Policy</a>
            <a href="/" className="text-gray-800 text-sm font-medium uppercase">Terms of Service</a>
          </div>

          <div className="flex justify-center">
            <img src="/LearnovationAcademyLogo.png" alt="Academy Logo" className="h-20" />
          </div>
        </div>
      </footer>
  );
};

export default Footer;
