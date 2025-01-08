 const Mission = ({ icon, title, text }) => {
  return (   
          <article className="mission">
          <span className="mission-icon">
            <i className={icon}></i>
            </span>
          <div className="mission-info">
            <h4 className="mission-title">{title}</h4>
            <p className="mission-text">{text}</p>
          </div>
        </article>
  );
}
export default Mission;