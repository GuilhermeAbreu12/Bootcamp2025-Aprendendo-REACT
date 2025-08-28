function CourseCard({image, altText, title, description, link}){
    return (
        <div className="card">
            <img src={image} alt={altText}/>
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={link} className="btn">Ver Mais</a>
        </div>
    )
}

export default CourseCard;