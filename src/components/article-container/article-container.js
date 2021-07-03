import './article-container.css';
import Article from '../article/article';
import AddBtn from '../add-btn/add-btn';
import Data from '../../Data.json';


const ArticleContrainer = ({ artData }) => {
    return (
        <div className="art-cont">
            {Data.filter((data) => {
                if (artData === '') {
                    return data
                } else if (data.name.toLowerCase().includes(artData.toLowerCase())) {
                    return data
                }
            }).map(data =>
                <Article
                    key={data.id}
                    name={data.name}
                    code={data.code}
                    qte={data.qte}
                    zone={data.zone} />
            )}

            <AddBtn />
        </div>
    );
}

export default ArticleContrainer;