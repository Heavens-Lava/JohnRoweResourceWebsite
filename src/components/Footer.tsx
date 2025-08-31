import React from 'react';
import { Church, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Church Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-700 p-2 rounded-lg">
                <Church className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Southwest Church</h3>
                <p className="text-blue-200">of Christ</p>
              </div>
            </div>
            <p className="text-blue-200 leading-relaxed">
              Growing together in faith, fellowship, and service to our community through God's love.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-blue-200">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5" />
                <span>8720 W Indian School Rd, Phoenix, AZ 85037</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5" />
                <span>evangelist@southwestcoc.org</span>
              </div>
            </div>
          </div>

          {/* Service Times */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Service Times</h4>
            <div className="space-y-2 text-blue-200">
              <div>
                <p className="font-medium">Sunday Worship</p>
                <p>9:00 AM & 11:00 AM</p>
              </div>
              <div>
                <p className="font-medium">Wednesday Bible Study</p>
                <p>7:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
          <p>&copy; 2025 Southwest Church of Christ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;