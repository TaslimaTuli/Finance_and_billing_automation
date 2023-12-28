// components/Footer.tsx

import React from 'react';
import Link from 'next/link';

const Footerr = () => {
  return (
    <footer className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* <div>
          <span className="font-bold text-lg">Finance and billing automation</span>
        </div> */}
        {/* <div className="flex items-center space-x-4">
          <Link href="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:underline">
            Terms of Service
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact Us
          </Link>
        </div>*/}
      </div> 
      <div className="text-center mt-4">
        <p>&copy; 2023 Finance and billing automation. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footerr;
