import techsyncLogo from "../../assets/TechSync-Logo.png";
import myPic from "../../assets/me.jpg";
import noteTaker from "../../assets/note-taker.png";
import employeeTracker from "../../assets/employee-tracker.png";
import taskManager from "../../assets/task-manager.png";

const contentList = {

  techsync: {
    title: "Tech-Sync",
    description: {
      title: "Description",
      content: 
      `Unlock the next level of your tech career with Tech-Sync, where we simplify your job search into a streamlined experience based on probability. 
      Our advanced matchmaking system will connect you with startups that align with your unique skills and career goals. 
      Say goodbye to traditional job sourcing and hello to a tailored path toward your dream role.`
    },
    overview: {
      title: "Overview",
      content: 
      `Tech-Sync is a MERN Stack application co-developed by myself and another programmer. 
      As graduates of web development bootcamps, we experienced firsthand how challenging it can be to break into the tech industry, 
      especially for those with non-traditional backgrounds. We built this app to enhance our skills, improve our job prospects, 
      and address a market need by connecting tech professionals with potential employers in a unique way.`
    },
    logo: techsyncLogo,
    className: "techsync",
    link: "https://tech-sync.io/talent",
    specialStyle: {
      primary: {color: "var(--techsync-color-purple)"},
      secondary: {color: "var(--techsync-color-blue)"}
    }
  },

  aboutMe: {
    title: "About Me",
    description: {
      title: "Personal",
      content: 
      `I am a curious and growth-oriented individual who loves to challenge myself and explore new opportunities. 
      Growing up, I was an athlete with a passion for soccer, and since then that competitive spirit has stayed with me. 
      These days, I enjoy practicing Brazilian Jiu-Jitsu, which allows me to combine discipline, strategy, and physical fitness. 
      I also have a deep appreciation for music, I love both listening to it and playing it. As a guitarist, I find creative expression and relaxation in playing. 
      Beyond that, I enjoy reading to expand my perspective and traveling to experience new cultures, meet interesting people, and broaden my horizons.`
    },
    overview: {
      title: "Professional",
      content: 
      `I am a driven and adaptable individual with a unique blend of expertise in finance and software development. 
      I began my career in the finance industry, where I developed a strong foundation in business operations, data analysis, and problem-solving. 
      My passion for technology and innovation inspired me to transition into software development, where I now specialize in full-stack development with a focus on the MERN stack. 
      I thrive in environments where I can combine my technical skills with my business acumen to create impactful solutions. 
      I continuously strive to expand my knowledge by studying new technologies and experimenting with side projects to sharpen my skills and explore innovative ideas. In addition, 
      I am furthering my education by delving into new programming languages, computer science fundamentals, and the underlying principles of computer hardware.`
    },
    logo: myPic,
    className: "about-me",
    link: "https://www.linkedin.com/in/santos-alexandre1",
    specialStyle: {
      primary: {color: "var(--color-primary)"},
      secondary: {color: "var(--color-primary)"}
    }
  },

  noteTaker: {
    title: "Note Taker",
    description: {
      title: "Project Description",
      content: 
      `This Note-Taking Application is a web-based tool that enables users to create, save, and manage their notes directly in
      their web browser. It utilizes a local database to ensure that notes are securely stored and easily accessible whenever
      needed. Users can create new notes by entering a title and content, view all saved notes in a list format, and delete notes
      they no longer require. Built with Express.js and Node.js, the application leverages the file system for persistent storage,
      ensuring that data is retained even after closing the browser.`
    },
    overview: {
      title: "",
      content: 
      ``
    },
    logo: noteTaker,
    className: "note-taker",
    link: "https://github.com/santos-al/ExpressJS-AS-M11",
    specialStyle: {
      primary: {color: "hsl(190, 88%, 50%)"},
      secondary: {color: "hsl(190, 88%, 50%)"}
    }
  },

  employeeTracker: {
    title: "Employee Tracker",
    description: {
      title: "Project Description",
      content: 
      `The MySQL Employee Tracker is a command-line application designed to help manage and track employee information within a company. 
      Built using Node.js and MySQL, this application allows users to perform CRUD (Create, Read, Update, Delete) operations on employee 
      data directly from the terminal. Utilizing the Inquirer package, it prompts users for input, making it easy to add, view, update, 
      or remove employees, departments, and roles. This tool serves as a solution for managing a company's workforce efficiently.`
    },
    overview: {
      title: "",
      content: 
      ``
    },
    logo: employeeTracker,
    className: "employee-tracker",
    link: "https://github.com/santos-al/SQL-AS-M12",
    specialStyle: {
      primary: {color: "hsl(120, 100%, 37%)"},
      secondary: {color: "hsl(120, 100%, 37%)"}
    }
  },

  taskManager: {
    title: "Task Manager",
    description: {
      title: "Project Description",
      content: 
      `This Task Manager Application is built using React and Tailwind CSS, providing users with a sleek and responsive 
      interface for managing their projects and tasks. Users can create new projects with specific due dates and, within 
      each project, add tasks that can be marked as completed. The application stores all data in local storage, ensuring 
      that users' information is retained even after refreshing the page. Utilizing React hooks such as useState, useRef, 
      and useEffect, the app efficiently updates the user interface in response to user interactions, creating a dynamic and 
      engaging experience for task management.`
    },
    overview: {
      title: "",
      content: 
      ``
    },
    logo: taskManager,
    className: "task-manager",
    link: "https://github.com/santos-al/React-Udemy",
    specialStyle: {
      primary: {color: "hsl(1 8% 12%)"},
      secondary: {color: "hsl(1 8% 12%)"}
    }
  }

};

export default contentList;