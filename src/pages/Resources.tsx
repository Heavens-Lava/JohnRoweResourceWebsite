import React from 'react';
import { Download, BookOpen, FileText, Headphones, Video } from 'lucide-react';

const Resources = () => {
  const resourceCategories = [
    {
      title: 'Study Guides',
      icon: BookOpen,
      items: [
        { name: 'Faith Foundations Study Guide', type: 'PDF', size: '2.3 MB' },
        { name: 'Prayer and Devotion Workbook', type: 'PDF', size: '1.8 MB' },
        { name: 'Bible Reading Plan 2025', type: 'PDF', size: '0.5 MB' },
      ]
    },
    {
      title: 'Audio Sermons',
      icon: Headphones,
      items: [
        { name: 'Walking in Faith - Audio', type: 'MP3', size: '45 MB' },
        { name: 'Hope in Trials Series', type: 'MP3', size: '38 MB' },
        { name: 'Living with Purpose Collection', type: 'MP3', size: '52 MB' },
      ]
    },
    {
      title: 'Teaching Materials',
      icon: FileText,
      items: [
        { name: 'Small Group Discussion Questions', type: 'PDF', size: '1.2 MB' },
        { name: 'Youth Ministry Resources', type: 'PDF', size: '3.1 MB' },
        { name: 'Family Devotional Guide', type: 'PDF', size: '2.7 MB' },
      ]
    },
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Resources</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Download study guides, audio sermons, and teaching materials to support your spiritual journey
          </p>
        </div>

        {/* Featured Resource */}
        <div className="bg-gradient-to-r from-blue-800 to-blue-900 text-white rounded-lg p-8 mb-12">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Featured: Faith Foundations Study Guide</h2>
              <p className="text-blue-100 mb-4">
                A comprehensive 8-week study exploring the fundamentals of Christian faith
              </p>
              <div className="flex items-center space-x-4 text-sm text-blue-200">
                <span>PDF • 2.3 MB</span>
                <span>•</span>
                <span>8 Chapters</span>
                <span>•</span>
                <span>Discussion Questions Included</span>
              </div>
            </div>
            <button className="bg-white text-blue-800 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center space-x-2">
              <Download className="w-5 h-5" />
              <span>Download</span>
            </button>
          </div>
        </div>

        {/* Resource Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {resourceCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-gray-50 p-6 border-b border-gray-200">
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-800 p-2 rounded-lg">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div>
                          <h4 className="font-medium text-gray-900">{item.name}</h4>
                          <p className="text-sm text-gray-600">{item.type} • {item.size}</p>
                        </div>
                        <button className="text-blue-800 hover:text-blue-900 p-2 rounded-lg hover:bg-blue-50 transition-colors">
                          <Download className="w-5 h-5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Upload Section for Admin */}
        <div className="mt-12 bg-amber-50 border border-amber-200 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Video className="w-6 h-6 text-amber-700" />
              <div>
                <h3 className="text-lg font-semibold text-amber-900">Manage Resources</h3>
                <p className="text-amber-700">Upload new study materials, audio files, and documents</p>
              </div>
            </div>
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200">
              Add Resource
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;