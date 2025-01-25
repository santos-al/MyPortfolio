import PropTypes from 'prop-types'; // Import PropTypes

import downArrowLight from "../../assets/down-arrow-light.svg";
import downArrowDark from "../../assets/down-arrow-dark.svg";
import downArrowWhite from "../../assets/down-arrow-white.svg";

export default function MyWork({ contentList, scrollReference, isDark, scrollLocation, isWhite }) {

     // Function to scroll to a particular section
     const scrollToTechSync = () => {
      scrollLocation.current.scrollIntoView({ behavior: "smooth" });
    };

    // Set the arrow color
    let arrowColor = isDark ? downArrowLight : downArrowDark
    if (isWhite) {
      arrowColor = downArrowWhite
    }


  return (
    <>
      <div className={`${contentList.className}-buffer`}></div>
      <section 
        className={`${contentList.className} columns-2`}
        ref={scrollReference}
      >
        <div className='section-column sm:w-1/2 w-full'>
          <div className='flex justify-center'>
            <a className={`${contentList.className}-project-title`} target="_blank" href={contentList.link}>{contentList.title}</a>
          </div>
          <div className={`${contentList.className}-project-text`}>
            <h3 className={`${contentList.className}-project-subtitle`} style={contentList.specialStyle.primary ? contentList.specialStyle.primary : undefined}>{contentList.description.title}</h3>
            <p>
              {contentList.description.content}
            </p>
          </div>
          <div className={`${contentList.className}-project-text`}>
            <h3 className={`${contentList.className}-project-subtitle`} style={contentList.specialStyle.secondary ? contentList.specialStyle.secondary : undefined}>{contentList.overview.title}</h3>
            <p>
              {contentList.overview.content}
            </p>           
          </div>
        </div>
        <div className='section-column sm:w-1/2 w-full flex items-center justify-center' style={{flexDirection: "column"}}>
          <img className={`${contentList.className}-project-image max-h-full`} src={contentList.logo} alt='Logo for my project'></img>
        </div>
        <div className='scroll'>
        <button className='down-arrow-button' onClick={scrollToTechSync}><img src={arrowColor} className='down-arrow' alt='arrow pointing downwards' /></button>
      </div>
      </section>
    </>
  )
}


MyWork.propTypes = {
  scrollReference: PropTypes.object.isRequired,
  contentList: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired,
    overview: PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired,
    logo: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    specialStyle: PropTypes.shape({
      primary: PropTypes.object,
      secondary: PropTypes.object,
    }),
  }).isRequired,
  isDark: PropTypes.bool.isRequired,
  scrollLocation: PropTypes.object.isRequired,
  isWhite: PropTypes.bool
};