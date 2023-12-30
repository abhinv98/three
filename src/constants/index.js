import { PCECroppedLogo, ae, TQI} from "../assets/images";
import {
    car,
    python,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    memo,
    quill
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Programming Language",
    }
];

export const education = [
    {
        title: "B.Tech - Computer Engineering",
        school_name: "Pillai College of Engineering",
        icon: PCECroppedLogo,
        iconBg: "#accbe1",
        date: "Aug 2016 - May 2023",
        points: [
            "CGPA - 7.51"
        ],
    },
    {
        title: "HSC - 12th ",
        school_name: "Atomic Energy Junior College",
        icon: ae,
        iconBg: "#fbc3bc",
        date: "Aug 2015 - May 2016",
        points: [
            "%age - 67.54"
        ],
    },
    {
        title: "SSC - 10th",
        school_name: "Atomic Energy Central School",
        icon: ae,
        iconBg: "#b7e4c7",
        date: "Aug 2013 - May 2014",
        points: [
            "%age - 90.6"
        ],
    },
    
];

export const experiences = [
    {
        title: "Web Development Intern",
        company_name: "The Qwerty Ink",
        icon: TQI,
        iconBg: "#accbe1",
        date: "Dec 2023 - Present",
        points: [
            "Developed and maintained sitemaps, wireframes and the websites according to client specifiactions",
        ],
    }
]

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/abhinv98',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/abhinav-rai-4351b1160',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Pricewise - Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://pricewise-98.vercel.app',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Stop - car finding app',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://car-stop.vercel.app',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Sumtext - AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://sumtext.netlify.app',
    },
    {
        iconUrl: quill,
        theme: 'btn-back-pink',
        name: 'Inkfusion - a chatpdf SaaS platform',
        description: 'App that leverages AI to enable the user to upload any pdf file and the allow the user to converse with that file using GPT-3.5 model',
        link: 'https://inkfusion-rho.vercel.app',
    }
];