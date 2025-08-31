import React, { useState } from 'react';
import { Play, Users, MessageCircle, Volume2, Settings } from 'lucide-react';

const Live = () => {
  const [isLive, setIsLive] = useState(true);
  const [viewerCount, setViewerCount] = useState(127);

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            {isLive && (
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-red-600 font-semibold uppercase text-sm tracking-wider">Live Now</span>
              </div>
            )}
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {isLive ? 'Live Worship Service' : 'Join Us Live'}
          </h1>
          <p className="text-lg text-gray-600">
            {isLive 
              ? 'Sunday Morning Worship - Faith Foundations Series' 
              : 'Our next live service will begin soon'
            }
          </p>
        </div>

        {/* Video Player Section */}
        <div className="mb-8">
          <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl">
            <div className="aspect-video bg-gradient-to-br from-blue-900 to-blue-800 flex items-center justify-center">
              {isLive ? (
                <div className="text-center text-white">
                  <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Play className="w-12 h-12 text-white ml-1" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">Live Stream Active</h3>
                  <p className="text-blue-200">Pastor John Smith - "Walking in Faith"</p>
                </div>
              ) : (
                <div className="text-center text-white">
                  <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Play className="w-12 h-12 text-white ml-1" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">Stream Offline</h3>
                  <p className="text-blue-200">Next service: Sunday at 9:00 AM</p>
                </div>
              )}
            </div>
            
            {/* Live Stream Controls */}
            {isLive && (
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="flex items-center space-x-4 text-white">
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5" />
                    <span className="font-medium">{viewerCount} viewers</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button className="p-2 bg-black bg-opacity-50 rounded-lg hover:bg-opacity-70 transition-opacity">
                    <Volume2 className="w-5 h-5 text-white" />
                  </button>
                  <button className="p-2 bg-black bg-opacity-50 rounded-lg hover:bg-opacity-70 transition-opacity">
                    <Settings className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Live Chat & Schedule */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Live Chat */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center space-x-3 mb-6">
                <MessageCircle className="w-6 h-6 text-blue-800" />
                <h3 className="text-xl font-semibold text-gray-900">Live Chat</h3>
                {isLive && (
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                    Active
                  </span>
                )}
              </div>
              
              {isLive ? (
                <div>
                  <div className="h-64 bg-gray-50 rounded-lg mb-4 p-4 overflow-y-auto">
                    <div className="space-y-3">
                      <div className="text-sm">
                        <span className="font-semibold text-blue-800">Sarah M:</span>
                        <span className="text-gray-700 ml-2">Wonderful message today!</span>
                      </div>
                      <div className="text-sm">
                        <span className="font-semibold text-green-700">Mike J:</span>
                        <span className="text-gray-700 ml-2">Praying for everyone watching</span>
                      </div>
                      <div className="text-sm">
                        <span className="font-semibold text-purple-700">Grace K:</span>
                        <span className="text-gray-700 ml-2">Thank you Pastor John for this teaching</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      placeholder="Type your message..."
                      className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                      Send
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 text-gray-500">
                  <MessageCircle className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                  <p>Chat will be available during live services</p>
                </div>
              )}
            </div>
          </div>

          {/* Service Schedule */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Upcoming Services</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-800 pl-4 py-2">
                <h4 className="font-semibold text-gray-900">Sunday Worship</h4>
                <p className="text-sm text-gray-600">Today • 11:00 AM</p>
                <p className="text-sm text-blue-800 font-medium">Faith Foundations - Part 3</p>
              </div>
              
              <div className="border-l-4 border-amber-500 pl-4 py-2">
                <h4 className="font-semibold text-gray-900">Bible Study</h4>
                <p className="text-sm text-gray-600">Wednesday • 7:00 PM</p>
                <p className="text-sm text-amber-700 font-medium">Book of James Study</p>
              </div>
              
              <div className="border-l-4 border-green-600 pl-4 py-2">
                <h4 className="font-semibold text-gray-900">Youth Service</h4>
                <p className="text-sm text-gray-600">Friday • 7:30 PM</p>
                <p className="text-sm text-green-700 font-medium">Building Character</p>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600 text-center">
                All times are Central Time Zone
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Live;