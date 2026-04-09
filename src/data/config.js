const config = {
  name: 'Yash Deore',
  title: 'SDE 2 @ Speakx',
  subtitle: 'Golang \u00b7 gRPC \u00b7 Apache Kafka \u00b7 DynamoDB \u00b7 Protobuf',
  bio: `Graduated from IIIT Lucknow with a BTech in Computer Science and Artificial Intelligence in 2024. Proficient in backend technologies, including Go, gRPC, and Protocol Buffers, with hands-on experience in distributed systems and database integrations. Dedicated to creating impactful solutions for complex engineering challenges.`,

  social: {
    email: 'codemaninfinity17@gmail.com',
    github: 'https://github.com/yash-deore',
    linkedin: 'https://linkedin.com/in/yash-deorecoder',
    leetcode: 'https://leetcode.com/yash-deore',
  },

  projects: [
    {
      name: 'Self Sovereign Health Records',
      description: 'Decentralized health records using Ceramic & LIT Protocol. Won two awards worth $2500 at ETH Global Hack FS 2022.',
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
      role: 'Software Developer 2',
      company: 'SpeakX.ai',
      location: 'India',
      bullets: [
        'Spearheaded gamification by engineering a multi-dimensional ranking system for city, state, and national leaderboards, resulting in a 15% increase in user engagement.',
        'Architected end-to-end flow for dynamic micro-leaderboards, driving an 11% increase in user engagement through granular competitive tracking.',
        'Developed the core backend logic and user flow for the "Home and Rent" module, expanding the platform\'s interactive capabilities.',
      ],
      stack: 'Go, gRPC, Protobuf, Redis, MongoDB, Kafka, LLMs',
    },
    {
      date: 'Oct 2024 \u2014 Nov 2025',
      role: 'Software Developer',
      company: 'Zomato',
      location: 'Gurugram, Haryana, India',
      bullets: [
        'Developed Store Page and Brand Page from scratch, engineering an internal snippet creation module. Reduced page load times by 40% through asynchronous independent calls and fewer external service calls.',
        'Architected merchant dashboard by adapting the dining frontend and creating a new backend with custom middleware, delivering store and franchise management features to 300+ merchants.',
        'Designed Transaction History and Account Statements handling 90,000+ transactions and 9,000+ statements monthly. Built transaction insights for an aggregated view of merchant transactions over selected time periods.',
        'Implemented Consolidated Statements and Invoices aggregating data across multiple outlets, cutting cross-outlet reporting time from 3 hours to 15\u201330 minutes.',
        'Automated daily franchise payout generation and distribution, processing 300+ reports and 3,000+ transactions, eliminating 2 hours of manual work for merchants and finance teams.',
        'Contributed to campaign service development and created a linkage repository for District from scratch, powering 11 campaigns.',
        'Ensured promotional offers are applied only once per device. Integrated cohort-specific instant discounts and store page promo offers for brands.',
      ],
      stack: 'Go, gRPC, Protobuf, DynamoDB, Kafka',
    },
    {
      date: 'Dec 2023 \u2014 Oct 2024',
      role: 'Software Developer',
      company: 'Fi',
      location: 'Bengaluru, Karnataka, India',
      bullets: [
        'Reduced costs by 40% on S3 video storage by migrating to glaciers.',
        'Built the CKYC Orchestrator that centrally handled all types of KYCs for Fi Stock Guardian.',
        'Enabled logs exports in the pre-onboarding stage via Gmail. 9% decrease overall and a 93% decrease in black box issues in the onboarding journey.',
        'Resolved a 150% spike in the User Redis cluster by migrating from go-redis to rueidis, fixing connection pooling and context cancellation.',
        'Set up GitHub workflows for the Fi Stock Guardian repository.',
      ],
      stack: 'Go, gRPC, Protobuf, Redis',
    },
    {
      date: 'Sep 2022 \u2014 Apr 2023',
      role: 'Software Developer',
      company: 'SaaSPay',
      location: 'Bengaluru, Karnataka, India',
      bullets: [
        'Built new features across buyer, seller, and admin dashboards.',
        'Resolved bugs and discrepancies across all dashboards. Took ownership of the buyer dashboard, addressing all issues and increasing platform stability.',
      ],
      stack: '',
    },
    {
      date: 'Jun 2022 \u2014 Aug 2022',
      role: 'Software Developer',
      company: 'Spect',
      location: 'Bengaluru, Karnataka, India',
      bullets: [
        'Built a new filter feature for the DAO page, allowing users to filter tasks based on multiple parameters such as titles, tags, and more.',
      ],
      stack: '',
    },
  ],

  skills: [
    'Go (Golang)',
    'gRPC',
    'Protobuf',
    'DynamoDB',
    'Kafka',
    'Redis',
    'MongoDB',
    'Large Language Models (LLM)',
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
      institution: 'Indian Institute of Information Technology Lucknow',
      degree: 'B.Tech in Computer Science and Artificial Intelligence',
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
