import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif text-[#B87333] mb-4">聯絡我們</h3>
            <div className="space-y-3">
              <p className="flex items-center text-gray-300">
                <Phone className="h-5 w-5 mr-2 text-[#B87333]" />
                +886 (02) 2345-6789
              </p>
              <p className="flex items-center text-gray-300">
                <Mail className="h-5 w-5 mr-2 text-[#B87333]" />
                info@patisserie.com.tw
              </p>
              <p className="flex items-center text-gray-300">
                <MapPin className="h-5 w-5 mr-2 text-[#B87333]" />
                台北市信義區甜點街123號
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-serif text-[#B87333] mb-4">營業時間</h3>
            <div className="space-y-2 text-gray-300">
              <p>週一至週五：上午 7:00 - 晚上 8:00</p>
              <p>週六：上午 8:00 - 晚上 9:00</p>
              <p>週日：上午 8:00 - 晚上 6:00</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-serif text-[#B87333] mb-4">社群媒體</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#B87333]">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#B87333]">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#B87333]">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>NTUB 1104B011 郭品均 作業用</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;