import PropTypes from "prop-types";

export default function DisplayContent({ contentList }) {
  return (
    <section 
    className={`content-frame columns-2 ${contentList.className}`}
  >
    <div className='section-column sm:w-1/2 w-full text-column'>
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
    <div className='section-column sm:w-1/2 w-full image-column'>
      <img className={`project-image max-h-full`} src={contentList.logo} alt='Logo for my project'></img>
    </div>
  </section>
  )
}

DisplayContent.propTypes = {
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
};