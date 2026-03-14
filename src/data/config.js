const config = {
  name: 'Yash Deore',
  title: 'Software Developer',
  subtitle: 'Web3 Builder \u00b7 Open Source Contributor \u00b7 CS & AI',
  bio: `I build modern web applications and decentralized systems. Studied Computer Science and Artificial Intelligence at IIIT. I like shipping things that people use \u2014 my open-source React library has 6,000+ NPM downloads. Currently focused on frontend engineering and blockchain tooling.`,

  social: {
    email: 'codemaninfinity17@gmail.com',
    github: 'https://github.com/yash-deore',
    linkedin: 'https://linkedin.com/in/yash-deore-coder',
    stackoverflow: 'https://stackoverflow.com/users/71496/yash-deore',
    leetcode: 'https://leetcode.com/yash-deore',
  },

  projects: [
    {
      name: 'react-ipfs-uploader',
      description: 'React component library for uploading files to IPFS. 6000+ downloads on NPM.',
      tags: ['React', 'IPFS'],
      url: 'https://www.npmjs.com/package/react-ipfs-uploader',
    },
    {
      name: 'ETH Global HackFS dApp',
      description: 'Hackathon-winning decentralized application using Ceramic & XMTP protocols.',
      tags: ['Solidity', 'Ceramic'],
      url: '#',
    },
    {
      name: 'Web3 Toolkit',
      description: 'Utilities for blockchain development and smart contract interaction.',
      tags: ['Ethers.js', 'Hardhat'],
      url: '#',
    },
    {
      name: 'Portfolio',
      description: 'This site. Minimal, fast, dark-first. React + Vite + Tailwind.',
      tags: ['React', 'Tailwind'],
      url: 'https://github.com/yash-deore/yash-deore',
    },
  ],

  experience: [
    {
      date: '2022 \u2014 2023',
      role: 'Frontend Developer',
      company: 'SaasPay',
      description:
        'Built frontend for a fintech SaaS platform \u2014 payment flows, dashboards, component libraries.',
    },
    {
      date: '2022',
      role: 'Web Developer',
      company: 'Spect',
      description:
        'Web interfaces for a Web3 project management and DAO coordination tool.',
    },
  ],

  skills: [
    'React',
    'Next.js',
    'TypeScript',
    'Redux',
    'Node.js',
    'Tailwind CSS',
    'Solidity',
    'Ethers.js',
    'Hardhat',
    'IPFS',
    'Ceramic',
    'MongoDB',
    'Git',
  ],

  education: [
    {
      date: '2020 \u2014 2024',
      institution: 'Indian Institute of Information Technology',
      degree: 'Computer Science and Artificial Intelligence',
    },
  ],

  writing: [
    {
      title: 'Building decentralized file storage with React and IPFS',
      url: '#',
      year: '2023',
    },
    {
      title: 'Lessons from shipping an NPM package to 6000 users',
      url: '#',
      year: '2022',
    },
    {
      title: 'What I learned at ETH Global HackFS',
      url: '#',
      year: '2022',
    },
  ],
};

export default config;
