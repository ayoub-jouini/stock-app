import React from 'react';
import './article.css'
import ArticleBody from '../article-body/article-body';

const Article = (props) => {
    return (
        <div className="art">
            <div className="art-header">
                <div className="left-icon">
                    -
                </div>
                <div className="art-name">
                    {props.name}
                </div>
                <div className="right-icon">
                    +
                </div>
            </div>
            <ArticleBody
                code={props.code}
                qte={props.qte}
                zone={props.zone} />
        </div>
    );
}

export default Article;