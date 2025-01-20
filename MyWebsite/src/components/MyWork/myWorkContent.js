import techsyncLogo from "../../assets/TechSync-Logo.png";
import myPic from "../../assets/me.jpg"

const contentList = {

  techsync: {
    title: "Tech-Sync",
    descriptionTitle: "Description",
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
      `Tech-Sync is a MERN Stack application co-developed by me and another programmer. 
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
    descriptionTitle: "Personal",
    description: {
      title: "Description",
      content: 
      `I am a curious and growth-oriented individual who loves to challenge myself and explore new opportunities. 
      Growing up, I was an athlete with a passion for soccer, and since then that competitive spirit has stayed with me. 
      These days, I enjoy practicing Brazilian Jiu-Jitsu, which allows me to combine discipline, strategy, and physical fitness. 
      I also have a deep appreciation for music, I love both listening to it and playing it. As a guitarist, I find creative expression and relaxation in playing. 
      Beyond that, I enjoy reading to expand my perspective and traveling to experience new cultures, meet interesting people, and broaden my horizons.`
    },
    overview: {
      title: "Profesional",
      content: 
      `I am a driven and adaptable individual with a unique blend of expertise in both finance and software development. 
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
      primary: {color: "var(--color-secondary)"},
      secondary: {color: "var(--color-secondary)"}
    }
  }
};

export default contentList;