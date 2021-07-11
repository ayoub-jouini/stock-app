import './article-container.css';
import Article from '../article/article';
import AddBtn from '../add-btn/add-btn';
import LoadingSpinner from '../loading-spinner/LoadingSpiner';
import useFetch from '../../services/useFetch';
import { Link } from 'react-router-dom';


const ArticleContrainer = ({ artData }) => {
    const { data, error, loading } = useFetch('Data.json');

    if (error) throw error;
    if (loading) return <LoadingSpinner />
    return (
        <div className="art-cont">
            {data && data.length > 0 && data.filter((d) => {
                if (artData === '') {
                    return d
                } else if ((d.name.toLowerCase().includes(artData.toLowerCase())) || (d.code.includes(artData))) {
                    return d
                }
            }).map(d =>
                <Link to={`/${d.category}/${d.id}`}>
                    <Article
                        key={d.id}
                        name={d.name}
                        code={d.code}
                        qte={d.qte}
                        zone={d.zone} />
                </Link>

            )}

            <AddBtn />
        </div>
    );
}

export default ArticleContrainer;