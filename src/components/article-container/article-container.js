import './article-container.css';
import Article from '../article/article';
import AddBtn from '../add-btn/add-btn';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../loading-spinner/LoadingSpiner';


const ArticleContrainer = ({ artData }) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
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
        getData()
            .then((response) => setData(response))
            .catch((e) => setError(e))
            .finally(() => setLoading(false));
    }, [])
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