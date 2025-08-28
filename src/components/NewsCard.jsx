function NewsCard({image, altText, title, description, link}){
    return (
        <div className="noticia">
            <img src={image} alt={altText}/>
            <div className="overlay">
                <h3>{title}</h3>
                <p>{description}</p>
                <a href={link}>Ver Mais</a>
            </div>
        </div>
    )
}
export default NewsCard;