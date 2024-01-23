import { FaFigma, FaHtml5, FaCss3, FaJs, FaReact, FaWordpress, FaShopify, FaSquarespace, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiNextdotjs } from 'react-icons/si';


export const stackData = [
  {
   name: 'HTML',
   icon: FaHtml5
  },
  {
   name: 'CSS',
   icon: FaCss3
  },
  {
   name: 'Tailwind',
   icon: SiTailwindcss
  },
  {
   name: 'JavaScript',
   icon: FaJs
  },
  {
   name: 'TypeScript',
   icon: SiTypescript
  },
  {
   name: 'ReactJS',
   icon: FaReact
  },
  {
   name: 'NextJS',
   icon: SiNextdotjs
  },
  {
   name: 'Figma',
   icon: FaFigma
  },
  {
   name: 'GitHub',
   icon: FaGithub
  },
  {
   name: 'WordPress',
   icon: FaWordpress
  },
  {
   name: 'Shopify',
   icon: FaShopify
  },
  {
   name: 'SquareSpace',
   icon: FaSquarespace
  },
];

export const projectData = [
    {
      id: "scumm-bar-brawl",
      title: "Scumm Bar Brawl",
      subtitle: "JS Mini Game",
      description: "An homage to the legendary Monkey Island insult sword fighting minigame.",
      category: "development",
      summary: "I wanted to create a Monkey Island themed online game as a personal project to celebrate my life-long love with this legendary series. A reoccurring mini-game in each title was the insult sword fighting, which seemed like the perfect choice to recreate to show my true fandom.",
      outcome: "The end result features original gameplay artwork and response patterns of the Monkey Island series, making it a beautiful recreation that fans will recognize and hopefully inspires new players to check out the actual Monkey Island series.",
      demo: "https://bryanfink.dev/scumm-bar-brawl/",
      github: "https://github.com/BryanMF87/scumm-bar-brawl",
      tools: ['Figma', 'HTML', 'SCSS', 'JavaScript', 'React'],
      deliverables: ['UX/UI', 'Web Design', 'Web Development', 'Research'],
      media: {
        cardImage: {
          url: "/projects/scumm-bar-brawl/card.png",
          alt: "Scumm Bar Brawl card image",
        },
        headerImage: {
          url: "/projects/scumm-bar-brawl/header.jpg",
          alt: "Scumm Bar Brawl header image",
        },
        firstMedia: {
          type: "video",
          url: "/projects/scumm-bar-brawl/intro.mp4",
        },
        secondMedia: {
          type: "video",
          url: "/projects/scumm-bar-brawl/fighting.mp4",
        },
        thirdMedia: {
          type: "video",
          url: "/projects/scumm-bar-brawl/guybrushwins.mp4",
        },
      },
      quote: {
        quote: "That&apos;s the second biggest monkey head I&apos;ve ever seen!",
        author: "Guybrush Threepwood"
      }
    },
    {
      id: "project-time-keeper",
      title: "Project Time Keeper",
      subtitle: "Productivity App",
      description: "A personal app created to keep track of billable hours",
      category: "development",
      summary: "I needed a way to track my billable hours for future projects. I wanted it to be easy to use and be able to keep track of multiple projects at once.",
      outcome: "The end result is a simple time tracker that records overall project time as well as breaks the project down by actionable item. It features mobile-first responsive design, local storage for information saving, and a night-mode for after hour coding use.",
      demo: "https://bryanfink.dev/time-keeper/",
      github: "https://github.com/BryanMF87/time-keeper",
      tools: ['Figma', 'HTML', 'CSS', 'JavaScript'],
      deliverables: ['UX/UI', 'Web Design', 'Web Development'],
      media: {
        cardImage: {
          url: "/projects/project-time-keeper/card.png",
          alt: "Time Keeper project card",
        },
        headerImage: {
          url: "/projects/project-time-keeper/header.jpg",
          alt: "Time Keeper project header",
        },
        firstMedia: {
          type: "video",
          url: "/projects/project-time-keeper/newproject.mp4",
        },
        secondMedia: {
          type: "image",
          url: "/projects/project-time-keeper/light.jpg",
          alt: "Time Keeper light mode"
        },
        thirdMedia: {
          type: "image",
          url: "/projects/project-time-keeper/dark.jpg",
          alt: "Time Keeper dark mode"
        },
      },
      quote: {
        quote: "Time management is life management.",
        author: "Robin Sharma"
      }
    },
    {
      id: "super-clean",
      title: "Super Clean",
      subtitle: "Website Design",
      description: "A professional cleaning SquareSpace website as fresh and beautiful as their service",
      category: "design",
      summary: "Super Clean came to me with their startup idea and sketches, then asked me to build them a no-code website that their users could book their services through.",
      outcome: "The website design features large amounts of crisp white space, warm accent colors, and end-result imagery that invokes a professionally clean feeling of a well cared for home. The website itself is hosted on the popular SquareSpace platform with a 3rd party booking system, where they can update future content in an easy, no-code way.",
      demo: "https://www.supercleanatl.com/",
      tools: ['Figma', 'SquareSpace', 'CSS', 'JavaScript'],
      deliverables: ['UX/UI', 'Web Design', 'Web Development'],
      media: {
        cardImage: {
          url: "/projects/super-clean/card.png",
          alt: "Super Clean project card",
        },
        headerImage: {
          url: "/projects/super-clean/about.png",
          alt: "Super Clean project header",
        },
        firstMedia: {
          type: "image",
          url: "/projects/super-clean/homepage.png",
          alt: "Super-Clean homepage"
        },
        secondMedia: {
          type: "image",
          url: "/projects/super-clean/homesketch.jpg",
          alt: "Initial sketch for the home page"
        },
        thirdMedia: {
          type: "image",
          url: "/projects/super-clean/aboutsketch.jpg",
          alt: "Initial sketch for the about page"
        },
        fourthMedia: {
          type: "image",
          url: "/projects/super-clean/intropage.png",
          alt: "Super Clean landing page"
        },
        fifthMedia: {
          type: "video",
          url: "/projects/super-clean/officemobile.mp4",
        },
        sixthMedia: {
          type: "video",
          url: "/projects/super-clean/homepagemobile.mp4",
        },
        seventhMedia: {
          type: "image",
          url: "/projects/super-clean/pageframes.jpg",
          alt: "Several pages of the finished Super Clean website design"
        },
      },
      quote: {
        quote: "Bryan converted our sketches and ideas into a beautiful website that is perfect for our business. Wonderful work!",
        author: "Vincent Wynn II"
      }
    },
    {
      id: "arcrypto",
      title: "ARCrypto",
      subtitle: "Digital ads",
      description: "A Crypto company in need of a graphic designer for their digital ads, posters, and weekly newsletter",
      category: "design",
      summary: "ARCrypto teaches their clients how to navigate the cryptocurrency market and promote themselves through digital ads and an email newsletter. They had tried a few designers but were having trouble finding someone who could create quality content that worked within their visual brand guidelines.",
      outcome: "After partnering with their marketing team, ARCrypto&apos;s digital ads now feature eye-catching designs that convert users across all major social media advertising platforms, and an email newsletter filled with engaging content that captivates their audience. The new designs align seamlessly with ARCrypto&apos;s brand identity, providing a cohesive and professional image for their educational services in the dynamic world of cryptocurrency.",
      tools: ['Figma'],
      deliverables: ['Graphic Design', 'Research', 'Copywriting'],
      media: {
        cardImage: {
          url: "/projects/arcrypto/card.jpg",
          alt: "ARCrypto project card",
        },
        headerImage: {
          url: "/projects/arcrypto/header.jpg",
          alt: "ARCrypto tropical getaway posters",
        },
        firstMedia: {
          type: "image",
          url: "/projects/arcrypto/baseflyers.jpg",
          alt: "ARCrypto digital ad base flyers"
        },
        secondMedia: {
          type: "image",
          url: "/projects/arcrypto/newsletters.jpg",
          alt: "ARCrypto newsletter digital ads"
        },
        thirdMedia: {
          type: "image",
          url: "/projects/arcrypto/gramposts.jpg",
          alt: "ARCrypto instagram story digital ads"
        },
        fourthMedia: {
          type: "image",
          url: "/projects/arcrypto/squares.jpg",
          alt: "ARCrypto instagram post digital ads"
        },
      },
      quote: {
        quote: "The client absolutely loved the work Bryan did for us and we are so happy to be working with him! Will definitly recommend to our partners in the future.",
        author: "Wilson Smith"
      }
    },
    {
      id: "germ-the-creator",
      title: "Germ The Creator",
      subtitle: "Booking Website",
      description: "A Wordpress website that combines barber scheduling with a professional photography business.",
      category: "development",
      summary: "German Ortega is a barber and photographer who marketed mostly through business cards and word of mouth. He wanted to scale his business and add services like online booking and a photography look book, so we made the decision to create his very own professional website.",
      outcome: "His fully responsive website was built on the powerful Wordpress platform to give him a no-code way of changing out his ever-evolving content, and add future services like merchandising, etc. The design reflects his bold, yet straight-forward style, and combines his seemingly unrelated professions into one common-sense business of making you look great with a haircut, and making sure the world knows about it through his professional photography",
      demo: "https://www.germthecreator.com",
      tools: ['Figma, Wordpress, HTML, CSS'],
      deliverables: ['UX/UI', 'Web Design', 'Web Development', 'Platform training', 'Copywriting'],
      media: {
        cardImage: {
          url: "/projects/germ-the-creator/barbergallery.png",
          alt: "Germ the Creator card image",
        },
        headerImage: {
          url: "/projects/germ-the-creator/barbergallery.png",
          alt: "Germ the Creator header image",
        },
        firstMedia: {
          type: "image",
          url: "/projects/germ-the-creator/frames.jpg",
          alt: "several layouts of Germ The Creator website"
        },
        secondMedia: {
          type: "video",
          url: "/projects/germ-the-creator/barberpage.mp4",
        },
        thirdMedia: {
          type: "video",
          url: "/projects/germ-the-creator/photographerpage.mp4",
        },
      },
      quote: {
        quote: "Bryan made everything incredibly easy, from suggesting the right platform to choosing the fonts, colors, and content to help elevate my brand.",
        author: "German Ortega"
      }
    },
  ];


  export const testimonialData = [
    {
      image: "/german2.png",
      alt: `German Ortega, Germ the Creator`,
      name: 'German Ortega',
      company: 'Germ the Creator',
      description: '"Bryan made everything incredibly easy, from suggesting the right platform to choosing the fonts, colors, and content to help elevate my brand."',
    },
    {
      image: "/mark3.png",
      alt: `Mark Simonton, Proud Provisions`,
      name: 'Mark Simonton',
      company: 'Proud Provisions',
      description: '"A super detailed project proposal and consistent communication meant that I knew exactly what to expect and built a lot of trust from the start."',
    },
    {
      image: "/wilson.png",
      alt: `Wilson Smith, ARCrypto`,
      name: 'Wilson Smith',
      company: 'ARCrypto',
      description: '"The client absolutely loved the work Bryan did for us and we are so happy to be working with him! Will definitly recommend to our partners in the future."',
    },
];

export const FAQData = [
  {
    question: 'How much does your services cost?',
    answer: 'Graphic services cost generally between $500 to $1,500 and web services between $2,0000 - $5,000 USD, depending on the size and scope of the project. The bigger and more complex a project is, the more time it takes to complete and the higher the costs.'
  },
  {
    question: 'How much time does it take?',
    answer: 'Based on size and scope of the project, graphic servics can take 1-7 business days, and web services can range from 5-12 weeks, depending.'
  },
  {
    question: 'How customized can my project be?',
    answer: 'You can have as little or as much customization / say-so in your project as you want. The biggest goal of every project is that you are satisfied with the end result.'
  },
  {
    question: 'You are ready to start a new project, now what?',
    answer: 'Great! We will set up a free 15 minute conference call to discuss your project and gather initial information. I will come back in 1-3 business days with a detailed proposal that outlines all aspects of your project, and if agreed upon, I will begin turning your idea into reality.'
  },
  {
    question: 'How do I accept payment?',
    answer: 'Projects are usually paid via card services in a 50/25/25 setup using, 50% project total to start the project, 25% at the "midway" point, and 25% at after the project is complete.'
  },
]