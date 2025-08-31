import React, { useState } from 'react';
import { Search, Filter, Upload, Calendar } from 'lucide-react';
import VideoCard from '../components/VideoCard';
import { sampleSermons } from '../data/sermons';

const Sermons = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSeries, setSelectedSeries] = useState('all');

  const series = ['all', 'Faith Foundations', 'Living with Purpose', 'Hope in Trials'];

  const filteredSermons = sampleSermons.filter((sermon) => {
    const matchesSearch = sermon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         sermon.speaker.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSeries = selectedSeries === 'all' || sermon.series === selectedSeries;
    
    return matchesSearch && matchesSeries;
  });

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Sermon Library</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our collection of sermons and teachings to deepen your faith and understanding
          </p>
        </div>

        {/* Admin Upload Section */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Upload className="w-6 h-6 text-blue-800" />
              <div>
                <h3 className="text-lg font-semibold text-blue-900">Upload New Sermon</h3>
                <p className="text-blue-700">Add videos, audio files, and sermon notes</p>
              </div>
            </div>
            <button className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200">
              Upload Content
            </button>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4 sm:space-y-0 sm:flex sm:items-center sm:space-x-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search sermons, speakers, or topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-400" />
            <select
              value={selectedSeries}
              onChange={(e) => setSelectedSeries(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {series.map((seriesName) => (
                <option key={seriesName} value={seriesName}>
                  {seriesName === 'all' ? 'All Series' : seriesName}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Sermon Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSermons.map((sermon) => (
            <VideoCard key={sermon.id} sermon={sermon} />
          ))}
        </div>

        {filteredSermons.length === 0 && (
          <div className="text-center py-12">
            <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-600 mb-2">No sermons found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sermons;