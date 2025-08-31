import React from 'react';
import { Heart, Users, BookOpen, Globe } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Love & Compassion',
      description: 'We believe in showing Christ\'s love through our actions and words, caring for one another and our community.'
    },
    {
      icon: BookOpen,
      title: 'Biblical Truth',
      description: 'Our foundation is God\'s Word, and we strive to teach and live according to biblical principles.'
    },
    {
      icon: Users,
      title: 'Fellowship',
      description: 'We are a family of believers who support, encourage, and grow together in our faith journey.'
    },
    {
      icon: Globe,
      title: 'Community Service',
      description: 'We actively serve our local community and support missions around the world.'
    },
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Southwest Church of Christ</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            For over 50 years, Southwest Church of Christ has been a beacon of faith, hope, and love in our community. 
            We are committed to following Christ's teachings and sharing His love with everyone we meet.
          </p>
        </div>

        {/* Pastor Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
            <div className="w-48 h-48 bg-gradient-to-br from-blue-800 to-blue-900 rounded-lg flex items-center justify-center">
              <div className="text-white text-center">
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-10 h-10" />
                </div>
                <p className="text-sm font-medium">Pastor Photo</p>
              </div>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Pastor John Smith</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Pastor John has been faithfully serving Southwest Church of Christ for over 15 years. 
                He holds a Master of Divinity from Abilene Christian University and is passionate about 
                teaching God's Word with clarity and relevance for today's world.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-600">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Ministry Focus</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Expository Preaching</li>
                    <li>• Marriage & Family Counseling</li>
                    <li>• Community Outreach</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Education</h4>
                  <ul className="text-sm space-y-1">
                    <li>• M.Div, Abilene Christian University</li>
                    <li>• B.A. Biblical Studies</li>
                    <li>• Certified Biblical Counselor</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600">The principles that guide our church family</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-800 p-3 rounded-lg">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-blue-800 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            To glorify God by making disciples of Jesus Christ through worship, biblical teaching, 
            loving fellowship, and compassionate service to our community and the world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;