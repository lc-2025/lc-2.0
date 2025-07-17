import { LINKS_STRUCTURAL, WINDOW } from '@/utilities/constants';

const { LIGHT, DARK } = WINDOW.MEDIA.THEME;
const { PRIVACY, COOKIES } = LINKS_STRUCTURAL;
const METADATA = {
  NAME: 'Luca Cattide',
  KEYWORD: 'Software Engineer',
  BASEURL: 'https://lucati.de',
  TITLE: {
    HOME: {
      LABEL: 'Home <ↄ Software Engineer <ↄ Luca Cattide',
      DESCRIPTION:
        'Software Engineer <ↄ Mobile <ↄ Desktop and currently techniques',
    },
    ABOUT: {
      LABEL: 'About',
      DESCRIPTION: 'Biography <ↄ Past and adventures in my career',
    },
    PORTFOLIO: {
      LABEL: 'Portfolio',
      DESCRIPTION: 'Websites and application development catalogue',
    },
    CONTACTS: {
      LABEL: 'Contacts',
      DESCRIPTION: 'International online and offline availability',
    },
    PRIVACY: {
      LABEL: 'Privacy',
      DESCRIPTION: 'Decrees <ↄ Laws and systems on the reserved indication',
    },
    COOKIES: {
      LABEL: 'Cookies',
      DESCRIPTION: 'Cookies <ↄ Management <ↄ Functioning and protection',
    },
    SUFFIX: '<ↄ Software Engineer <ↄ Luca Cattide',
  },
  DESCRIPTION: 'Software Engineer <ↄ Full-Stack on the Web all over the world',
};
const { NAME, KEYWORD, BASEURL, DESCRIPTION, TITLE } = METADATA;
const METADATA_LAYOUT = {
  applicationName: 'LC V3',
  keywords: [
    `${KEYWORD} front end back end web full stack mobile desktop consulting italy world`,
  ],
  authors: [
    {
      name: NAME,
      url: BASEURL,
    },
  ],
  creator: NAME,
  title: {
    template: `%s ${TITLE.SUFFIX}`,
    default: NAME,
  },
  description: DESCRIPTION,
  metadataBase: new URL(BASEURL),
  icons: {
    icon: [
      {
        media: LIGHT,
        url: 'img/lc-favicon-light.svg',
        href: 'img/lc-favicon-light.svg',
      },
      {
        media: DARK,
        url: 'img/lc-favicon-dark.svg',
        href: 'img/lc-favicon-dark.svg',
      },
    ],
  },
};
const METADATA_VIEWPORT = {
  minimumScale: 1,
  initialScale: 1,
  width: 'device-width',
};
const TITLES = {
  HOME: {
    LIGHT: {
      HEADLINE: `**** ${METADATA.NAME} V3 ****`,
      TAGLINE: METADATA.KEYWORD,
    },
    DARK: {
      HEADLINE: `░▒▓█▓▒░     ░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓██████▓▒░        ░▒▓██████▓▒░ ░▒▓██████▓▒░▒▓████████▓▒░▒▓████████▓▒░▒▓█▓▒░▒▓███████▓▒░░▒▓████████▓▒░ \n░▒▓█▓▒░     ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░      ░▒▓█▓▒░   ░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░        \n░▒▓█▓▒░     ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░      ░▒▓█▓▒░   ░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░        \n░▒▓█▓▒░     ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓████████▓▒░      ░▒▓█▓▒░      ░▒▓████████▓▒░ ░▒▓█▓▒░      ░▒▓█▓▒░   ░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓██████▓▒░   \n░▒▓█▓▒░     ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░      ░▒▓█▓▒░   ░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░        \n░▒▓█▓▒░     ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░      ░▒▓█▓▒░   ░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░        \n░▒▓████████▓▒░▒▓██████▓▒░ ░▒▓██████▓▒░░▒▓█▓▒░░▒▓█▓▒░       ░▒▓██████▓▒░░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░      ░▒▓█▓▒░   ░▒▓█▓▒░▒▓███████▓▒░░▒▓████████▓▒░ \n                                                                                                                                               \n                                                                                                                                               `,
      TAGLINE: `:'######:::'#######::'########:'########:'##:::::'##::::'###::::'########::'########::::'########:'##::: ##::'######:::'####:'##::: ##:'########:'########:'########::\n'##... ##:'##.... ##: ##.....::... ##..:: ##:'##: ##:::'## ##::: ##.... ##: ##.....::::: ##.....:: ###:: ##:'##... ##::. ##:: ###:: ##: ##.....:: ##.....:: ##.... ##:\n ##:::..:: ##:::: ##: ##:::::::::: ##:::: ##: ##: ##::'##:. ##:: ##:::: ##: ##:::::::::: ##::::::: ####: ##: ##:::..:::: ##:: ####: ##: ##::::::: ##::::::: ##:::: ##:\n. ######:: ##:::: ##: ######:::::: ##:::: ##: ##: ##:'##:::. ##: ########:: ######:::::: ######::: ## ## ##: ##::'####:: ##:: ## ## ##: ######::: ######::: ########::\n:..... ##: ##:::: ##: ##...::::::: ##:::: ##: ##: ##: #########: ##.. ##::: ##...::::::: ##...:::: ##. ####: ##::: ##::: ##:: ##. ####: ##...:::: ##...:::: ##.. ##:::\n'##::: ##: ##:::: ##: ##:::::::::: ##:::: ##: ##: ##: ##.... ##: ##::. ##:: ##:::::::::: ##::::::: ##:. ###: ##::: ##::: ##:: ##:. ###: ##::::::: ##::::::: ##::. ##::\n. ######::. #######:: ##:::::::::: ##::::. ###. ###:: ##:::: ##: ##:::. ##: ########:::: ########: ##::. ##:. ######:::'####: ##::. ##: ########: ########: ##:::. ##:\n:......::::.......:::..:::::::::::..::::::...::...:::..:::::..::..:::::..::........:::::........::..::::..:::......::::....::..::::..::........::........::..:::::..::`,
    },
  },
};
const LINKS = [
  {
    label: PRIVACY.LABEL,
    title: PRIVACY.TITLE,
    link: PRIVACY.PATH,
  },
  {
    label: COOKIES.LABEL,
    title: COOKIES.TITLE,
    link: COOKIES.PATH,
  },
  {
    label: 'LinkedIn',
    title: 'Follow Luca Cattide on the LinkedIn professional profile',
    link: 'https://tinyurl.com/5556a4en',
  },
  {
    label: 'GitHub',
    title: 'Follow Luca Cattide on the GitHub digital repository',
    link: 'https://tinyurl.com/2przrwrx',
  },
];
const EASTER_EGG = {
  HEADLINE: `░▒▓█▓▒░     ░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓██████▓▒░        ░▒▓██████▓▒░ ░▒▓██████▓▒░▒▓████████▓▒░▒▓████████▓▒░▒▓█▓▒░▒▓███████▓▒░░▒▓████████▓▒░
░▒▓█▓▒░     ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░      ░▒▓█▓▒░   ░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░
░▒▓█▓▒░     ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░      ░▒▓█▓▒░   ░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░
░▒▓█▓▒░     ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓████████▓▒░      ░▒▓█▓▒░      ░▒▓████████▓▒░ ░▒▓█▓▒░      ░▒▓█▓▒░   ░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓██████▓▒░
░▒▓█▓▒░     ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░      ░▒▓█▓▒░   ░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░
░▒▓█▓▒░     ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░      ░▒▓█▓▒░   ░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░
░▒▓████████▓▒░▒▓██████▓▒░ ░▒▓██████▓▒░░▒▓█▓▒░░▒▓█▓▒░       ░▒▓██████▓▒░░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░      ░▒▓█▓▒░   ░▒▓█▓▒░▒▓███████▓▒░░▒▓████████▓▒░

                                                                                                                                               `,
  TAGLINE: `:'######:::'#######::'########:'########:'##:::::'##::::'###::::'########::'########::::'########:'##::: ##::'######:::'####:'##::: ##:'########:'########:'########::
'##... ##:'##.... ##: ##.....::... ##..:: ##:'##: ##:::'## ##::: ##.... ##: ##.....::::: ##.....:: ###:: ##:'##... ##::. ##:: ###:: ##: ##.....:: ##.....:: ##.... ##:
 ##:::..:: ##:::: ##: ##:::::::::: ##:::: ##: ##: ##::'##:. ##:: ##:::: ##: ##:::::::::: ##::::::: ####: ##: ##:::..:::: ##:: ####: ##: ##::::::: ##::::::: ##:::: ##:
. ######:: ##:::: ##: ######:::::: ##:::: ##: ##: ##:'##:::. ##: ########:: ######:::::: ######::: ## ## ##: ##::'####:: ##:: ## ## ##: ######::: ######::: ########::
:..... ##: ##:::: ##: ##...::::::: ##:::: ##: ##: ##: #########: ##.. ##::: ##...::::::: ##...:::: ##. ####: ##::: ##::: ##:: ##. ####: ##...:::: ##...:::: ##.. ##:::
'##::: ##: ##:::: ##: ##:::::::::: ##:::: ##: ##: ##: ##.... ##: ##::. ##:: ##:::::::::: ##::::::: ##:. ###: ##::: ##::: ##:: ##:. ###: ##::::::: ##::::::: ##::. ##::
. ######::. #######:: ##:::::::::: ##::::. ###. ###:: ##:::: ##: ##:::. ##: ########:::: ########: ##::. ##:. ######:::'####: ##::. ##: ########: ########: ##:::. ##:
:......::::.......:::..:::::::::::..::::::...::...:::..:::::..::..:::::..::........:::::........::..::::..:::......::::....::..::::..::........::........::..:::::..::`,
  SUMMARY: 'This website keeps a secret. Will you find it?',
};
const PORTFOLIO = [
  {
    name: 'Arch & Project',
    cover: {
      light: '/img/portfolio/lc-portfolio-arch-project.jpg',
      dark: '/img/portfolio/lc-portfolio-arch-project.jpg',
    },
    images: [
      '/img/portfolio/lc-portfolio-arch-project-1.jpg',
      '/img/portfolio/lc-portfolio-arch-project-2.jpg',
      '/img/portfolio/lc-portfolio-arch-project-3.jpg',
    ],
    caseStudy: {
      title: 'Between architecture and Web technology in the name of form',
      description:
        'An architectural firm that aims to make taste and aesthetic research its lever. On <mark><strong>Front-End</strong></mark> side a highly dynamic user-experience has been studied, which accompanies the <mark><strong>web</strong></mark> user in what resembles a catalogue in electronic-navigable version',
    },
    technologies: ['HTML', 'CSS', 'jQuery', 'GitHub', 'Apache'],
  },
  {
    name: 'Assunta Siani',
    cover: {
      light: '/img/portfolio/lc-portfolio-assunta-siani.jpg',
      dark: '/img/portfolio/lc-portfolio-assunta-siani.jpg',
    },
    images: [
      '/img/portfolio/lc-portfolio-assunta-siani-1.jpg',
      '/img/portfolio/lc-portfolio-assunta-siani-2.jpg',
      '/img/portfolio/lc-portfolio-assunta-siani-3.jpg',
    ],
    caseStudy: {
      title: 'Healthcare and prevention in a digital web treatment',
      description: `The wellness and nutrition centre introduced in this <mark><strong>web</strong></mark> portal, it's represented in a combination between design and movement. In <mark><strong>Front-End</strong></mark> development, a certain solidity is sought in the contents fruition, enhancing these at the same time. This through a balanced user-experience, which aims to focus attention on the main points of interest. Particular mention to the <mark></strong>Back-End</strong></mark> side on the reserved web area, which uses a system expressly created for viewing 3D scans directly from the browser`,
    },
    technologies: [
      'HTML',
      'CSS',
      'Compass',
      'jQuery',
      'SilverStripe',
      'GitLab',
      'Vagrant',
      'Capistrano',
      'Apache',
    ],
  },
  {
    name: 'Corporate Consulting',
    cover: {
      light: '/img/portfolio/lc-portfolio-corporate-consulting.jpg',
      dark: '/img/portfolio/lc-portfolio-corporate-consulting.jpg',
    },
    images: [
      '/img/portfolio/lc-portfolio-corporate-consulting-1.jpg',
      '/img/portfolio/lc-portfolio-corporate-consulting-2.jpg',
      '/img/portfolio/lc-portfolio-corporate-consulting-3.jpg',
    ],
    caseStudy: {
      title: 'Economics and management tools on the Web just a click away',
      description: `The financial consulting offered by this company, makes the information its strategy. Space is widely given to the topic discussed, with a particular emphasis by <mark><strong>Front-End</strong></mark> side on dynamic infographics and available <mark><strong>web</strong></mark> portfolio. As well as being customizable from the <mark><strong>Back-End</strong></mark> side. In the foreground, a special widget for the preventive calculation of savings onbusiness costs`,
    },
    technologies: [
      'HTML',
      'CSS',
      'Compass',
      'jQuery',
      'SilverStripe',
      'GitLab',
      'Vagrant',
      'Capistrano',
      'Apache',
    ],
  },
  {
    name: 'Greylab Inventory',
    cover: {
      light: '/img/portfolio/lc-portfolio-greylab-inventory.jpg',
      dark: '/img/portfolio/lc-portfolio-greylab-inventory.jpg',
    },
    images: [
      '/img/portfolio/lc-portfolio-greylab-inventory-1.jpg',
      '/img/portfolio/lc-portfolio-greylab-inventory-2.jpg',
      '/img/portfolio/lc-portfolio-greylab-inventory-3.jpg',
    ],
    caseStudy: {
      title: 'Professional control from the Web and speed of transmission',
      description: `A <mark><strong>web</strong></mark> management app designed for the business assets inventory. The basic idea, alongside the possibility of storing and intervening on an important amount of data, with a limited use of resources. This thanks to a <mark><strong>Back-End</strong></mark> integrated API. In this single-page application, the data status is being updated straight from the web, in real time, via the <mark><strong>Front-End</strong></mark>. Systems of user authentication, notification and ACL lists administration are present`,
    },
    technologies: [
      'HTML',
      'CSS',
      'Vue',
      'Laravel',
      'GitLab',
      'Vagrant',
      'Capistrano',
      'Apache',
    ],
  },
  {
    name: 'Karalis Konnection Companion',
    cover: {
      light: '/img/portfolio/lc-portfolio-karalis-konnection-companion.png',
      dark: '/img/portfolio/lc-portfolio-karalis-konnection-companion.png',
    },
    images: [
      '/img/portfolio/lc-portfolio-karalis-konnection-companion-1.png',
      '/img/portfolio/lc-portfolio-karalis-konnection-companion-2.png',
      '/img/portfolio/lc-portfolio-karalis-konnection-companion-3.png',
    ],
    caseStudy: {
      title: 'IT interventions through Web from tablet and smartphone',
      description: `The <mark><strong>web</strong></mark> services offered by Karalis Konnection, are supported by this mobile app for Android devices. Introducing itself on the <mark><strong>Front-End</strong></mark> with a minimailst interface and an user-experience oriented to usability, priority is given to customer needs. The web solutions proposed are limited but effective: custom quote request, helpdesk notification throughlocation of the position and evaluation/reviewing system`,
    },
    technologies: ['HTML', 'CSS', 'jQueryUI', 'PhoneGap', 'GooglePlay'],
  },
  {
    name: 'Munari Comunicazione',
    cover: {
      light: '/img/portfolio/lc-portfolio-munari-communication.jpg',
      dark: '/img/portfolio/lc-portfolio-munari-communication.jpg',
    },
    images: [
      '/img/portfolio/lc-portfolio-munari-communication-1.jpg',
      '/img/portfolio/lc-portfolio-munari-communication-2.jpg',
      '/img/portfolio/lc-portfolio-munari-communication-3.jpg',
    ],
    caseStudy: {
      title: 'Fantasy and form on the Web in straight contact',
      description: `This communication agency is introduced on the <mark><strong>web</strong></mark> according to its own attitude. Total care of the user-experience on the <mark><strong>Front-End</strong></mark> side, focused on animations and constantly changing rhythm contrasts, between desktop and mobile. Each section has its own formula, playing on simplicity and customization of navigation at the discretion of the web visitor`,
    },
    technologies: ['HTML', 'CSS', 'jQuery', 'Apache'],
  },
  {
    name: 'Sapi Showroom',
    cover: {
      light: '/img/portfolio/lc-portfolio-sapi-showroom.jpg',
      dark: '/img/portfolio/lc-portfolio-sapi-showroom.jpg',
    },
    images: [
      '/img/portfolio/lc-portfolio-sapi-showroom-1.jpg',
      '/img/portfolio/lc-portfolio-sapi-showroom-2.jpg',
      '/img/portfolio/lc-portfolio-sapi-showroom-3.jpg',
    ],
    caseStudy: {
      title: 'Web <) Fashion and trend on the virtual world carpet',
      description: `The showroom here introduced, combines the class with the typical <mark><strong>web</strong></mark> diffusion methods. Essential data showed on a consistent Front-End architecture. Photo galleries and sector collections are managed without altering the treated topic. This is enhanced by the implemented interface, which leaves ample space for images and their communication. User-experience present, but not invasive`,
    },
    technologies: ['HTML', 'CSS', 'jQuery', 'Apache'],
  },
  {
    name: 'Tommy Mikino',
    cover: {
      light: '/img/portfolio/lc-portfolio-tommy-mikino.jpg',
      dark: '/img/portfolio/lc-portfolio-tommy-mikino.jpg',
    },
    images: [
      '/img/portfolio/lc-portfolio-tommy-mikino-1.jpg',
      '/img/portfolio/lc-portfolio-tommy-mikino-2.jpg',
      '/img/portfolio/lc-portfolio-tommy-mikino-3.jpg',
    ],
    caseStudy: {
      title: 'Ultimate purchases from an interactive Web window',
      description: `A footwear line that makes the <mark><strong>web</strong></mark> its market. The e-commerce has been realized taking into account the extrovert attitude of the brand. High regard for the visual presentation on the web, while maintaining by side the sales characteristics, although these are present. The user-experience adopted on the <mark><strong>Front-End</strong></mark> is in fact reduced to the essential, hihglighting the e-commerce features than a more interactive experience`,
    },
    technologies: ['HTML', 'CSS', 'jQuery', 'Apache'],
  },
  {
    name: 'Whisky Shop',
    cover: {
      light: '/img/portfolio/lc-portfolio-whiskyshop.jpg',
      dark: '/img/portfolio/lc-portfolio-whiskyshop.jpg',
    },
    images: [
      '/img/portfolio/lc-portfolio-whiskyshop-1.jpg',
      '/img/portfolio/lc-portfolio-whiskyshop-2.jpg',
      '/img/portfolio/lc-portfolio-whiskyshop-3.jpg',
    ],
    caseStudy: {
      title: 'Online trading for the web niche audience',
      description: `A <mark><strong>web</strong></mark> sales portal entirely dedicated to whisky andrelated lovers, completely oriented to the customer. Here the usability on the <mark><strong>Front-End</strong></mark> side and the availability of the most detailed statistics are put in the first place. Typical web infrastructure, characterized by the hight implementation level in the creation and customization of ad-hoc <mark><strong>Back-End</strong></mark> features. All according to the commission needs`,
    },
    technologies: [
      'HTML',
      'CSS',
      'jQuery',
      'PrestaShop',
      'GitLab',
      'Vagrant',
      'Capistrano',
      'Apache',
    ],
  },
  {
    name: 'Disco Tram',
    cover: {
      light: '/img/portfolio/lc-portfolio-discotram.jpg',
      dark: '/img/portfolio/lc-portfolio-discotram.jpg',
    },
    images: [
      '/img/portfolio/lc-portfolio-discotram-1.jpg',
      '/img/portfolio/lc-portfolio-discotram-2.jpg',
      '/img/portfolio/lc-portfolio-discotram-3.jpg',
    ],
    caseStudy: {
      title: 'Mobile dance floor introduced on the Web rails',
      description: `The originality and the affirmation as a new vogue, makes this <mark><strong>web</strong></mark> exposition a reference point. In this common window, some of the current user-experience <mark><strong>Front-End</strong></mark> techniques are opportunely selected, pairing these with an effective divulgation. The result of this union, is enclosed in a synthetic web tool, with an adequate informative potential`,
    },
    technologies: [
      'HTML',
      'CSS',
      'Compass',
      'JavaScript',
      'SilverStripe',
      'GitLab',
      'Vagrant',
      'Capistrano',
      'Apache',
    ],
  },
  {
    name: 'eNeFTi',
    cover: {
      light: '/img/portfolio/lc-portfolio-enefti.png',
      dark: '/img/portfolio/lc-portfolio-enefti.png',
    },
    images: [
      '/img/portfolio/lc-portfolio-enefti-1.png',
      '/img/portfolio/lc-portfolio-enefti-2.png',
      '/img/portfolio/lc-portfolio-enefti-3.png',
      '/img/portfolio/lc-portfolio-enefti-4.png',
    ],
    caseStudy: {
      title: 'When NFT and Blockchain dates together on the Web',
      description: `A crypto-friendly e-commerce concept to aggregate blockchain attitude and new trends on the traditional <mark><strong>web</strong></mark>. This <mark><strong>Full-Stack</strong></mark> project relies on the MERN stack, as well as Front-End libraries and Back-End/DevOps tools to seamlessly provide a comfortable and pleasant user experience`,
    },
    technologies: [
      'HTML',
      'Tailwind',
      'SASS',
      'JavaScript',
      'TypeScript',
      'NextJS',
      'Motion',
      'Express',
      'GraphQL',
      'CoinGecko',
      'MongoDB',
      'Jest',
      'Testing Library',
      'Cypress',
      'Husky',
      'GitHub',
      'Docker',
      'Vercel',
      'Render',
    ],
  },
];

export {
  METADATA,
  METADATA_LAYOUT,
  METADATA_VIEWPORT,
  TITLES,
  LINKS,
  EASTER_EGG,
  PORTFOLIO,
};
