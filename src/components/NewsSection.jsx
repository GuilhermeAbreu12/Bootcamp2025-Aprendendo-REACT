import NewsCard from "./NewsCard";
import unimar_tech_summit from "../assets/images/noticias/unimar_tech_summit.jpg";
import tecUnimar from '../assets/images/noticias/tec_unimar.jpg';

const news = [
    {
        image: unimar_tech_summit,
        altText: "Unimar Tech Summit", 
        title: "Unimar Tech Summit", 
        description: "Participe do maior encontro de tecnologia e inovação do interior paulista.", 
        link: "https://lets.4.events/unimar-tech-summit-2025-C11575E131"
    },
    {
        image: tecUnimar,
        altText: "Parque Tecnológico TecUnimar", 
        title: "TecUnimar: Parque Tecnológico", 
        description: "A Unimar inaugura o primeiro Parque Tecnológico da região.", 
        link: "https://tec.unimar.br/"
    }
]

function NewsSection(){
    return (
        <section id="noticias">
            <h2>Últimas Notícias</h2>
            <div className="cards">
                {news.map((news) => (
                    <NewsCard
                        key={news.title}
                        image={news.image}
                        altText={news.altText}
                        title={news.title}
                        description={news.description}
                        link={news.link}
                    />
                ))}
            </div>
        </section>
    )
}
export default NewsSection;