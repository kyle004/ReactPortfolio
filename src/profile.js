// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if true, animation plays only once when element comes on screen
  once: false,
};
// Change your display name on tha landing display
const header = {
  name: "Kyle Berman",
};
const background = {
  // Options: Snow or Particle
  type: "Snow",
};
// To update your image, go to './styles/images.css'
const section2title = "About Me";
const about = {
  paragraph:
    "",
};
const skillsBar = [
  {
    name: "HTML5",
    faClass: "icon-html5-alt",
  },
  {
    name: "CSS3",
    faClass: "icon-css3-alt",
  },
  {
    name: "Javascript",
    faClass: "icon-javascript-alt",
  },
  {
    name: "React",
    faClass: "icon-reactjs",
  },
  {
    name: "Node",
    faClass: "icon-nodejs",
  },
  {
    name: "MongoDB",
    faClass: "icon-mongodb",
  },
  // {
  //   name: "Java",
  //   faClass: "fab fa-java",
  // },
  // {
  //   name: "PHP",
  //   faClass: "fab fa-php",
  // },
  // {
  //   name: "Database",
  //   faClass: "icon-database",
  // },
  {
    name: "MySql",
    faClass: "icon-mysql-alt",
  },
];

const section3Title = "Past Projects";
const Links = "(Live links provided on Github)";
const projects = [
  {
    // Add image in './styles/images.css' in #project1
    id: "project1",
    name: "Workout Tracker",
    skills: ["HTML, CSS, JS, MongoDB"],
    // url: "https://gains-tracker.herokuapp.com/", 
    url: "https://github.com/kyle004/Workout-Tracker",
    url2: "https://dry-island-15959.herokuapp.com/",
    // faClass: "fa fa-github",
    // href: "social.github",
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project2",
    name: "Betting App",
    url: "https://github.com/kyle004/Betting-Application",
    skills: ["HTML, CSS, JS, Express, Node.js, MySQL, Axios "],
    GitHub: "https://dry-island-15959.herokuapp.com/",
  },
  {
    // Add image in './styles/images.css' in #project3
    id: "project3",
    name: "Marketplace",
    skills: ["HTML, CSS, JS, React, Node.js, MongoDB, Express, Firebase"],
    url: "https://github.com/kyle004/SoCal-Marketplace",
  },
  {
    // Add image in './styles/images.css' in #project4
    id: "project4",
    name: "CLI Backend Employee Tracker",
    skills: ["JS, MySQL"],
    url: "https://github.com/kyle004/MySQL-Employee-Tracker",
  },
  {
    // Add image in './styles/images.css' in #project5
    id: "project5",
    name: "Game Search & Price Comparison",
    skills: ["HTML, CSS, JS"],
    url: "https://github.com/kyle004/G-Yeezy-project",
  },
  {
    // Add image in './styles/images.css' in #project6
    id: "project6",
    name: "Google Books API",
    skills: ["HTML, CSS, JS, GraphQL"],
    url: "https://github.com/kaustubhai",
  },
];
//Miscellaneous Activities.
// const section4Title = "Miscellaneous";
// const miscellaneous = [
//   {
//     // Add image in './styles/images.css' in #misc1
//     id: "misc1",
//     name: "Google Books API",
//     url: "https://github.com/kyle004/Google-Books",
//   },
//   {
//     // Add image in './styles/images.css' in #misc2
//     id: "misc2",
//     name: "Miscellaneous 2",
//     url: "https://github.com/kaustubhai",
//   },
//   {
//     // Add image in './styles/images.css' in #misc3
//     id: "misc3",
//     name: "Miscellaneous 3",
//     url: "https://github.com/kaustubhai",
//   },
// ];
// Contact form text, and Formspree link(to send a submit contact through their API as in contact.js)
// jotform link on https://formspree.io/
const section5Title = "Get in Touch";
const contact = {
  pitch:
    "If you have any questions, feel free to reach out to me!",
  copyright: "Kyle Berman",
  contactUrl: "",
};

// Upload your resume in your drive, get the shareable link and paste it in the resume section
const social = {
  github: "https://github.com/kyle004",
  // facebook: "https://www.facebook.com/kyleberman",
  linkedin: "https://www.linkedin.com/in/kylejberman/",
  // instagram: "https://instagram.com/kyle_berman",
  resume: "https://novoresume.com/",
  // heroku: "https://heroku.com",
};

// Dont change anything here
export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  Links,
  contact,
  social,
  section2title,
  section3Title,
  section5Title,
};
