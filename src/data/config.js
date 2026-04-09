const config = {
  name: 'Yash Deore',
  title: 'Software Engineer',
  subtitle: 'Backend Engineer \u00b7 Go \u00b7 Microservices \u00b7 CS & AI',
  bio: `Software Engineer with a Bachelor of Technology in Computer Science. Skilled in Go, gRPC, Protobuf, DynamoDB, Kafka, and React. Solving problems for a living.`,

  social: {
    email: 'yashdeoredeveloper@gmail.com',
    github: 'https://github.com/yash-deore',
    linkedin: 'https://linkedin.com/in/yash-deore-coder',
    leetcode: 'https://leetcode.com/yash-deore',
  },

  projects: [
    {
      name: 'Self Sovereign Health Records',
      description: 'Decentralized health records using Ceramic & LIT Protocol. Won two awards worth $2500 at ETH Global 2022.',
      tags: ['Node.js', 'Ceramic', 'LIT Protocol', 'React'],
      url: 'https://github.com/yash-deore',
    },
    {
      name: 'react-ipfs-uploader',
      description: 'NPM library with 7 React components for IPFS file/folder uploads. 2300+ downloads, used in 250+ GitHub repos.',
      tags: ['Node.js', 'IPFS', 'React'],
      url: 'https://www.npmjs.com/package/react-ipfs-uploader',
    },
  ],

  experience: [
    {
      date: 'Dec 2025 \u2014 Present',
      role: 'Software Engineer 2',
      company: 'Speakx AI',
      location: 'Delhi, India',
      bullets: [
        'Spearheaded gamification by engineering a multi-dimensional ranking system for city, state, and national leaderboards, resulting in a 15% increase in user engagement.',
        'Architected end-to-end flow for dynamic micro-leaderboards, driving an 11% increase in user engagement through granular competitive tracking.',
        'Developed the core backend logic and user flow for the "Home and Rent" module, expanding the platform\'s interactive capabilities.',
      ],
      stack: 'Go, gRPC, Protobuf, Redis, MongoDB, Kafka, LLMs',
    },
    {
      date: 'Oct 2024 \u2014 Nov 2025',
      role: 'Software Engineer',
      company: 'Zomato',
      location: 'Delhi, India',
      bullets: [
        'Pioneered Store Page and Brand Page from scratch. Reduced page load times by 40% via asynchronous calls and reducing external service calls.',
        'Architected merchant dashboard with custom middleware, delivering store and franchise management features to 300+ merchants.',
        'Designed Transaction History and Account Statements for merchants \u2014 90,000+ transactions and 9,000+ statements monthly.',
        'Implemented Consolidated Statements and Invoices, cutting cross-outlet reporting time from 3 hours to 15\u201330 minutes.',
        'Automated daily franchise payout generation, processing 300+ reports and 3,000+ transactions, eliminating 2 hours of manual work.',
      ],
      stack: 'Go, gRPC, Protobuf, DynamoDB, Kafka',
    },
  ],

  skills: [
    'Go (Golang)',
    'gRPC',
    'Protobuf',
    'DynamoDB',
    'Kafka',
    'Redis',
    'React.js',
    'APIs',
    'Microservices',
    'Backend Development',
    'SDLC',
    'Agile/Scrum',
    'Unit Testing',
    'Performance Optimization',
  ],

  education: [
    {
      date: '2020 \u2014 2024',
      institution: 'Indian Institute of Information Technology',
      degree: 'B.Tech in Computer Science, Minor in Artificial Intelligence',
      location: 'Lucknow, India',
    },
  ],

  blog: [
    {
      title: 'Understanding Zero-Knowledge Proofs in 10 Minutes',
      slug: 'understanding-zero-knowledge-proofs',
      description: 'A beginner-friendly breakdown of ZK proofs, how they work, and why they matter for blockchain privacy.',
      date: 'Mar 2026',
      tags: ['Web3', 'Cryptography'],
    },
    {
      title: 'Why I Switched from Redux to Zustand',
      slug: 'why-i-switched-from-redux-to-zustand',
      description: 'After two years of Redux boilerplate, I tried Zustand on a production app. Here\'s what changed.',
      date: 'Feb 2026',
      tags: ['React', 'State Management'],
    },
    {
      title: 'Ship Fast, Learn Faster: Lessons from Open Source',
      slug: 'ship-fast-learn-faster',
      description: 'What maintaining an NPM package with 6000+ downloads taught me about building software people actually use.',
      date: 'Jan 2026',
      tags: ['Open Source', 'Career'],
    },
    {
      title: 'A Practical Guide to IPFS Pinning Services',
      slug: 'practical-guide-to-ipfs-pinning',
      description: 'Comparing Pinata, Web3.Storage, and Infura for decentralized file storage in production apps.',
      date: 'Dec 2025',
      tags: ['IPFS', 'Web3'],
    },
  ],
};

export default config;
