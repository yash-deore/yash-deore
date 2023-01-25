// gitprofile.config.js

const config = {
  github: {
    username: 'yash-deore', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'yash-deore-coder',
    twitter: '',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '71496/yash-deore', // format: userid/username
    website: '',
    phone: '',
    email: 'codemaninfinity17@gmail.com',
  },
  resume: {
    fileUrl: 'https://resume.io/r/9PDMXionw', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'React Js',
    'Next Js',
    'Ethers Js',
    'Hardhat',
    'Solidity',
    'IPFS',
    'Ceramic Protocol',
    'Git',
    'Node Js',
    'Mongo DB',
    'CSS',
    'Tailwind',
    'Bootstrap',
  ],
  experiences: [
    {
      company: 'SaasPay',
      position: 'Frontend Developer',
      from: 'September 2022',
      to: 'May 2023',
      companyLink: '',
    },
    {
      company: 'Spect',
      position: 'Web Developer',
      from: 'June 2022',
      to: 'July 2022',
      companyLink: '',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'INDIAN INSTITUTE OF INFORMATION TECHNOLOGY',
      degree: 'Computer Science and Artificial Intelligence',
      from: '2020',
      to: '2024',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'ETH Global Hack FS 2022',
      description:
        'The project bagged prizes from two protocols(Ceramic and XMTP). I worked on the Ceramic Database layer and thanks to Mike for working on XMTP',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://ethglobal.com/showcase/self-sovereign-health-records-mq03o',
    },
    {
      title: '5k+ Downloads on NPM',
      description:
        'react-ipfs-uploader managed to get 5k+ downloads on NPM. It is a package that gives you react components that allow you to upload files to IPFS.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://www.npmjs.com/package/react-ipfs-uploader',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'winter',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with ❤️ by <a 
      class="text-primary" href="https://www.linkedin.com/in/yash-deore-coder/"
      target="_blank"
      rel="noreferrer"
      >Yash Deore</a> with <a 
        class="text-primary" href="https://github.com/arifszn/gitprofile"
        target="_blank"
        rel="noreferrer"
      >@arifszn/gitprofile</a>`,
};

export default config;
