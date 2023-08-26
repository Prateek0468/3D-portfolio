import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  next,
  nodejs,
  graph,
  git,
  figma,
  sql,
  netflix,
  amazon,
  customiser,
  portfolio,
  covinfo,
  foodfiesta,
  angular,
  WF,
  suprdaily,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "Creative Design",
    icon: mobile,
  },
  {
    title: "Business growth",
    icon: backend,
  },
  {
    title: "Responsive Design",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: next,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "sql",
    icon: sql,
  },
  {
    name: "Graphql",
    icon: graph,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Frontend Web Developer",
    company_name: "Wadhwani Foundation",
    icon: WF,
    iconBg: "#383E56",
    date: "August 2022 - January 2023",
    points: [
      "Worked across 3 dierent edtech products with a user base of 1 million.",
      "Built highly scalable, responsive and reusable custom components from scratch.",
      "Brought down first contentful page render from 4.2 secs to 2.9 secs.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Handled sign-in/sign-up flow across the applications.",
    ],
  },
  {
    title: "SDE-Frontend Intern",
    company_name: "SuprDaily By Swiggy",
    icon: suprdaily,
    iconBg: "#E6DEDD",
    date: "March 2022 - June 2022",
    points: [
      "Revamp, debug, refactor and fix issues on the application.",
      "Implemented research experiments like minimizing hops to trigger a search on the app whilst being on the search page",
      "Enriched user experience, made it interactive, quick and smooth till Checkout.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Having worked closely with him on multiple projects, I can attest to his rapid learning ability and knack for problem-solving within constraints. What truly sets Prateek apart is his remarkable talent for fostering connections and collaborations. He's not just a skilled developer, but also a team player who values input and keeps everyone engaged.",
    name: "Sunal Sood",
    designation: "Product Designer",
    company: "SmallCase",
    linkedin: "https://www.linkedin.com/in/sunalsood/",
    image: "https://media.licdn.com/dms/image/C4E03AQEIWxNgAXJ5pw/profile-displayphoto-shrink_200_200/0/1608448232281?e=1698278400&v=beta&t=8Cieqd5CAhRN4Z_KOBhr1rMxP63Whfd6Aq2sH-vLZXE",
  },
  {
    testimonial:
      "Prateek and I embarked on our web journey together. His frontend skills are extraordinary, infusing our projects with creativity and flawless design. His collaborative nature and coding finesse make him an invaluable asset to any web venture.",
    name: "Salmaan Khan",
    designation: "FullStack Developer",
    company: "ChicMic",
    linkedin: "https://www.linkedin.com/in/salmaan-khan-7694ab1a0/",
    image: "https://media.licdn.com/dms/image/C5603AQFGjP3aL9AJ1A/profile-displayphoto-shrink_200_200/0/1642222343591?e=1698278400&v=beta&t=yHQkgoUi78LuW60sijFNkO7IcCrFjWNOFG7VRcYseUc",
  },
  {
    testimonial:
      "He is a frontend wizard! His knack for turning design concepts into captivating websites is truly impressive. His advice on optimizing UI/UX improved my fullstack projects. With his creativity and collaborative approach, he's an asset to any development team.",
    name: "Ayus Das",
    designation: "Software Developer",
    company: "CimpressIndia",
    linkedin: "https://www.linkedin.com/in/ayusdas2000",
    image: "https://media.licdn.com/dms/image/D4D03AQGqKt3zC26g7A/profile-displayphoto-shrink_200_200/0/1678869426420?e=1698278400&v=beta&t=Co6tmpY_HT2uzsM0KUfT1nyuox_iSpUHMGYrSAkSFDM",
  },
];

const projects = [
  {
    name: "T-Shirt Customiser",
    description:
      "A web app that lets you customise a 3D t-shirt model the way you want, you can update or remove the logo and much more. You can even download the final design.",
    tags: [
      {
        name: "Threejs",
        color: "blue-text-gradient",
      },
      {
        name: "framer-motion",
        color: "pink-text-gradient",
      },
      {
        name: "react-color",
        color: "green-text-gradient",
      },
      {
        name: "tailwindCss",
        color: "text-orange-300",
      },
    ],
    image: customiser,
    project_link: "https://t-shirt-customiser-iota.vercel.app/",
    source_code_link: "https://github.com/Prateek0468/t-shirt-customiser",
  },
  {
    name: "FoodFiesta",
    description:
      "A frontend application that acts as your go-to app to statisfy your cravings. It uses spoonacular API to fetch the data. You can search recipes, and a random recipe, nd food facts and jokes.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "text-yellow-300",
      },
      {
        name: "material-ui",
        color: "text-orange-300",
      },
    ],
    image: foodfiesta,
    project_link: "https://thisisfoodfiesta.web.app/",
    source_code_link: "https://github.com/Prateek0468/Food-Fiesta",
  },
  {
    name: "Covid-19 Tracker",
    description:
      "A comprehensive web app that tracks worldwide and country-wise covid cases. It also shows recovered folks and deaths and has a line graph to better visualize the data. Covid cases are sorted by country",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "maps",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "text-orange-300",
      },
    ],
    image: covinfo,
    project_link: "https://covid-tracker-c523c.web.app/",
    source_code_link: "https://github.com/Prateek0468/covid19",
  },
  {
    name: "Netflix",
    description:
      "Web-application which is a netflix clone that displays latest trending movies and different sections just like netflix. It also uses youtube-api from google which lets you play trialers on youtube.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "pink-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "text-orange-300",
      },
    ],
    image: netflix,
    project_link: "https://netflix-clone-e2130.web.app/",
    source_code_link: "https://github.com/",
  },
  {
    name: "Amazon",
    description:
      "Web-application which is an Amazon clone that displays various products. It has user authentication provided by rebase with complete payment processing and features like cart and ratings of the product.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "pink-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "text-orange-300",
      },
    ],
    image: amazon,
    project_link: "https://fullstack-clone-388b8.web.app/",
    source_code_link: "https://github.com/Prateek0468/amazon-replica",
  },
  {
    name: "Portfolio-1",
    description:
      "This comprehensive web app is the first portfolio that I created. It has really cool parallax effects and animations which makes it a perfect project to showcase my design and development skills. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "lazy-loading",
        color: "pink-text-gradient",
      },
      {
        name: "parallax-effect",
        color: "text-orange-300",
      },
    ],
    image: portfolio,
    project_link: "https://prateek-bhatt.web.app/",
    source_code_link: "https://github.com/Prateek0468/Portfolio",
  },
];

export { services, technologies, experiences, testimonials, projects };
