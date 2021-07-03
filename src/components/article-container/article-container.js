import React from 'react';
import './article-container.css';
import Article from '../article/article';
import AddBtn from '../add-btn/add-btn';
import Data from '../../Data.json';


const ArticleContrainer = () => {
    return (
        <div className="art-cont">
            {Data.map(data =>
                <Article
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