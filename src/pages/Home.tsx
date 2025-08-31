import React from 'react';
import { Play, Calendar, Users, Book } from 'lucide-react';
import { Link } from 'react-router-dom';
import VideoCard from '../components/VideoCard';
import { sampleSermons } from '../data/sermons';

const Home = () => {
  const latestSermons = sampleSermons.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Welcome to Southwest Church of Christ
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Join us in worship, fellowship, and spiritual growth as we follow Christ together
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/live"
                className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>Watch Live</span>
              </Link>
              <Link
                to="/sermons"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Browse Sermons
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Times */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Us This Week</h2>
            <p className="text-lg text-gray-600">Everyone is welcome at Southwest Church of Christ</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="bg-blue-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sunday Worship</h3>
              <p className="text-gray-600 mb-2">9:00 AM & 11:00 AM</p>
              <p className="text-sm text-gray-500">Traditional and Contemporary Services</p>
            </div>
            
            <div className="text-center p-6 bg-amber-50 rounded-lg">
              <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Book className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Bible Study</h3>
              <p className="text-gray-600 mb-2">Wednesday 7:00 PM</p>
              <p className="text-sm text-gray-500">Deep dive into God's Word together</p>
            </div>
            
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fellowship</h3>
              <p className="text-gray-600 mb-2">Sunday 12:30 PM</p>
              <p className="text-sm text-gray-500">Connect with our church family</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Sermons */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Sermons</h2>
              <p className="text-lg text-gray-600">Recent messages from our pastor</p>
            </div>
            <Link
              to="/sermons"
              className="text-blue-800 hover:text-blue-900 font-semibold flex items-center space-x-2 transition-colors"
            >
              <span>View All</span>
              <Play className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestSermons.map((sermon) => (
              <VideoCard key={sermon.id} sermon={sermon} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Stay Connected</h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Never miss a sermon or church event. Join our community and grow in faith together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/resources"
              className="bg-white text-blue-800 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Explore Resources
            </Link>
            <Link
              to="/about"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;