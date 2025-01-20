import PropTypes from 'prop-types'; // Import PropTypes

export default function MyWork({ contentList, scrollLocation }) {
  return (
    <>
      <div className={`${contentList.className}-buffer`}></div>
      <section 
        className={`${contentList.className} columns-2`}
        ref={scrollLocation}
      >
        <div className='section-column sm:w-1/2 w-full'>
          <div className='flex justify-center'>
            <a className='project-title' target="_blank" href={contentList.link}>{contentList.title}</a>
          </div>
          <div className='project-text'>
            <h3 className='project-subtitle' style={contentList.specialStyle.purple ? contentList.specialStyle.purple : undefined}>{contentList.description.title}</h3>
            <p>
              {contentList.description.content}
            </p>
          </div>
          <div className='project-text'>
            <h3 className='project-subtitle' style={contentList.specialStyle.blue ? contentList.specialStyle.blue : undefined}>{contentList.overview.title}</h3>
            <p>
              {contentList.overview.content}
            </p>           
          </div>
        </div>
        <div className='section-column sm:w-1/2 w-full flex items-center justify-center' style={{flexDirection: "column"}}>
          <img className="project-image max-h-full" src={contentList.logo} alt='Logo for my project'></img>
        </div>
      </section>
    </>
  )
}


// PropTypes validation
MyWork.propTypes = {
  scrollLocation: PropTypes.object.isRequired,
  contentList: PropTypes.object.isRequired,
  techsyncLogo: PropTypes.string
};