import React, { useState } from 'react';
import './article-body.css';
import ArticleData from '../article-data/article-data';

const ArticleBody = (props) => {

    const [name, setName] = useState(["Code", "Quantiter", "Zone"]);
    return (
        <div className="art-body">
            <ArticleData
                name={name[0]}
                data={props.code} />
            <ArticleData
                name={name[1]}
                data={props.qte} />
            <ArticleData
                name={name[2]}
                data={props.zone} />
            <div className="edit-icon">
                <img alt="edit-btn" src="./asset/edit.svg" />
            </div>
        </div>
    );
}

export default ArticleBody;