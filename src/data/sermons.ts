export interface Sermon {
  id: string;
  title: string;
  speaker: string;
  date: string;
  duration: string;
  series: string;
  thumbnail: string;
  description: string;
}

export const sampleSermons: Sermon[] = [
  {
    id: '1',
    title: 'Walking in Faith: Trusting God\'s Plan',
    speaker: 'Evangelist Jon Rowe',
    date: 'January 14, 2025',
    duration: '38:45',
    series: 'Faith Foundations',
    thumbnail: '',
    description: 'Exploring how we can trust in God\'s perfect plan even when we can\'t see the whole picture. Drawing from Abraham\'s journey of faith.'
  },
  {
    id: '2',
    title: 'The Power of Prayer in Daily Life',
    speaker: 'Evangelist Jon Rowe',
    date: 'January 7, 2025',
    duration: '42:20',
    series: 'Faith Foundations',
    thumbnail: '',
    description: 'Understanding prayer as more than just asking for things - it\'s about building a relationship with our Creator.'
  },
  {
    id: '3',
    title: 'Living with Purpose: God\'s Calling',
    speaker: 'Evangelist Jon Rowe',
    date: 'December 31, 2024',
    duration: '45:15',
    series: 'Living with Purpose',
    thumbnail: '',
    description: 'Discovering your unique calling and how God can use your gifts to serve others and glorify Him.'
  },
  {
    id: '4',
    title: 'Hope in Trials: Finding Strength',
    speaker: 'Evangelist Jon Rowe',
    date: 'December 24, 2024',
    duration: '35:30',
    series: 'Hope in Trials',
    thumbnail: '',
    description: 'When life gets difficult, where do we turn? Learning to find hope and strength in God during challenging times.'
  },
  {
    id: '5',
    title: 'The Gift of Grace',
    speaker: 'Evangelist Jon Rowe',
    date: 'December 17, 2024',
    duration: '40:12',
    series: 'Faith Foundations',
    thumbnail: '',
    description: 'Understanding God\'s incredible gift of grace and how it transforms our relationship with Him and others.'
  },
  {
    id: '6',
    title: 'Building Christian Character',
    speaker: 'Evangelist Jon Rowe',
    date: 'December 10, 2024',
    duration: '43:28',
    series: 'Living with Purpose',
    thumbnail: '',
    description: 'Practical steps for developing Christ-like character in our daily interactions and decisions.'
  },
  {
    id: '7',
    title: 'Finding Peace in Chaos',
    speaker: 'Evangelist Jon Rowe',
    date: 'December 3, 2024',
    duration: '39:45',
    series: 'Hope in Trials',
    thumbnail: '',
    description: 'In a world full of uncertainty and stress, discover how to find God\'s peace that surpasses understanding.'
  },
  {
    id: '8',
    title: 'The Foundation of Faith',
    speaker: 'Evangelist Jon Rowe',
    date: 'November 26, 2024',
    duration: '41:33',
    series: 'Faith Foundations',
    thumbnail: '',
    description: 'Exploring what it truly means to have faith and how to build a strong foundation for your spiritual life.'
  },
  {
    id: '9',
    title: 'Serving Others with Joy',
    speaker: 'Evangelist Jon Rowe',
    date: 'November 19, 2024',
    duration: '37:22',
    series: 'Living with Purpose',
    thumbnail: '',
    description: 'Learning to serve others not out of obligation, but from a heart of joy and love for Christ.'
  }
];