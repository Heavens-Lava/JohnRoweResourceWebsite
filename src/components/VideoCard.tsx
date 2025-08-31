import React from 'react';
import { Play, Calendar, User, Clock } from 'lucide-react';

interface Sermon {
  id: string;
  title: string;
  speaker: string;
  date: string;
  duration: string;
  series: string;
  thumbnail: string;
  description: string;
}

interface VideoCardProps {
  sermon: Sermon;
}

const VideoCard: React.FC<VideoCardProps> = ({ sermon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200 group">
      {/* Thumbnail */}
      <div className="relative aspect-video bg-gradient-to-br from-blue-800 to-blue-900">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-200">
            <Play className="w-8 h-8 text-white ml-1" />
          </div>
        </div>
        <div className="absolute top-4 left-4 bg-black bg-opacity-60 text-white px-2 py-1 rounded text-sm font-medium">
          {sermon.duration}
        </div>
        <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded-full text-xs font-medium">
          {sermon.series}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-800 transition-colors">
          {sermon.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {sermon.description}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-2">
            <User className="w-4 h-4" />
            <span>{sermon.speaker}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4" />
            <span>{sermon.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;