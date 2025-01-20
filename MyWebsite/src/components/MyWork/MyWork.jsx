import techsyncLogo from "../../assets/TechSync-Logo.png";
import PropTypes from 'prop-types'; // Import PropTypes

export default function MyWork({ scrollLocation }) {
  return (
    <>
      <div className='techsync-buffer'></div>
      <section 
        className='techsync columns-2'
        ref={scrollLocation}
      >
        <div className='section-column sm:w-1/2 w-full'>
          <div className='flex justify-center'>
            <a className='project-title' target="_blank" href='https://tech-sync.io/talent'>Tech-Sync</a>
          </div>
          <div className='project-text'>
            <h3 className='project-subtitle' style={{color: "var(--techsync-color-purple)"}}>Description</h3>
            <p>
              Unlock the next level of your tech career with Tech-Sync, where we simplify your job search into a streamlined experience based on probability. 
              Our advanced matchmaking system will connect you with startups that align with your unique skills and career goals. 
              Say goodbye to traditional job sourcing and hello to a tailored path toward your dream role.
            </p>
          </div>
          <div className='project-text'>
            <h3 className='project-subtitle' style={{color: "var(--techsync-color-blue)"}}>App Overview</h3>
            <p>Tech-Sync is a MERN Stack application co-developed by me and another programmer. 
              As graduates of web development bootcamps, we experienced firsthand how challenging it can be to break into the tech industry, 
              especially for those with non-traditional backgrounds. We built this app to enhance our skills, improve our job prospects, 
              and address a market need by connecting tech professionals with potential employers in a unique way.
            </p>           
          </div>
        </div>
        <div className='section-column sm:w-1/2 w-full flex items-center justify-center' style={{flexDirection: "column"}}>
          <img className="project-image max-h-full" src={techsyncLogo} alt='Logo for TechSync'></img>
          {/* <a className='website-link' target="_blank" href='https://tech-sync.io/talent'>Visit Website</a> */}
        </div>
      </section>
    </>
  )
}


// Add PropTypes validation
MyWork.propTypes = {
  scrollLocation: PropTypes.object.isRequired, // Validate scrollLocation as an object
};