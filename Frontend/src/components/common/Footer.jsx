import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Footer Top - Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Social</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-facebook">
                  <path d="M4 2C2.343 2 1 3.343 1 5v14c0 1.657 1.343 3 3 3h14c1.657 0 3-1.343 3-3V5c0-1.657-1.343-3-3-3H4zm7 14H9v-5h2v5zm1-6H8V9h2V8c0-2.21 1.79-4 4-4h2V0h-3c-3.314 0-6 2.686-6 6v3H8v2h3v5z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-twitter">
                  <path d="M23 3a10.8 10.8 0 0 1-3.03.827A4.75 4.75 0 0 0 22.46 1a9.51 9.51 0 0 1-3.04 1.16A4.74 4.74 0 0 0 16.05 2c-3.15 0-5.72 2.59-5.72 5.76 0 .45.05.89.15 1.31-4.75-.24-8.99-2.51-11.82-5.98-.49.85-.77 1.85-.77 2.91 0 2.01 1.02 3.79 2.56 4.83a4.72 4.72 0 0 1-2.61-.73c-.07 2.69 1.91 4.99 4.61 5.51a4.72 4.72 0 0 1-2.58.09c.73 2.29 2.84 3.94 5.36 3.98-1.98 1.57-4.48 2.5-7.18 2.5-1.42 0-2.81-.14-4.15-.41a9.55 9.55 0 0 0 5.1 1.47c6.12 0 9.49-5.09 9.49-9.49 0-.14 0-.28-.02-.42A6.63 6.63 0 0 0 23 3z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-instagram">
                  <path d="M8 2a6 6 0 1 1 12 0 6 6 0 0 1-12 0zM4 8a4 4 0 0 1 8 0 4 4 0 0 1-8 0zm11.96 5c.51-.56.96-1.2 1.37-1.88-.14-.07-.29-.13-.44-.2A3.98 3.98 0 0 0 16 10.01c-.44 0-.88.1-1.3.29A4.016 4.016 0 0 0 12 13c-1.51 0-2.82-.92-3.53-2.18a4.016 4.016 0 0 0-.33-1.3 3.98 3.98 0 0 0-1.46-.96c-.07.15-.13.31-.2.47.68.58 1.38 1.1 2.12 1.53a5.941 5.941 0 0 0-.64-.92c-.52-.73-.9-1.55-.92-2.44 0-1.88 1.52-3.41 3.41-3.41.7 0 1.35.25 1.88.69a5.963 5.963 0 0 0 .2-1.12C18.32 5.07 18.07 4 17.2 4c-1.27 0-2.32.81-2.7 1.92-.25.6-.55 1.15-.91 1.68-.62.75-1.35 1.37-2.1 1.96z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
            <div className="flex">
              <input
                type="email"
                className="px-4 py-2 rounded-l-md text-black"
                placeholder="Enter your email"
              />
              <button className="bg-primary text-white px-4 py-2 rounded-r-md hover:bg-blue-600">Subscribe</button>
            </div>
          </div>
        </div>

        {/* Footer Bottom - Copyright */}
        <div className="text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Car Rental, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
