import './article-container.css';
import Article from '../article/article';
import AddBtn from '../add-btn/add-btn';
import React, { useEffect, useState } from 'react';


const ArticleContrainer = ({ artData }) => {
    const [data, setData] = useState([]);
    async function getData() {
        const response = await fetch('Data.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
        if (response.ok) return response.json();
        throw response;

    }
    useEffect(() => {
        getData().then((response) => setData(response));
    }, [])
    return (
        <div className="art-cont">
            {data && data.length > 0 && data.filter((d) => {
                if (artData === '') {
                    return d
                } else if ((d.name.toLowerCase().includes(artData.toLowerCase())) || (d.code.includes(artData))) {
                    return d
                }
            }).map(d =>
                <Article
                    key={d.id}
                    name={d.name}
                    code={d.code}
                    qte={d.qte}
                    zone={d.zone} />
            )}

            <AddBtn />
        </div>
    );
}

export default ArticleContrainer;