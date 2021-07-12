import React from 'react';
import { useParams } from 'react-router';
import useFetch from '../../services/useFetch';
import LoadingSpinner from '../loading-spinner/LoadingSpiner';
import './details.css';
import DetailsBody from '../details-body/detailsBody';

const Details = () => {
    const { id } = useParams();
    const { data, error, loading } = useFetch('http://localhost:3000/Data.json');
    const result = data.filter(d => d.id == id);

    if (error) throw error;
    if (loading) return <LoadingSpinner />

    return (
        <div className="container-d">
            {result.map((d, key) => {
                return (
                    <DetailsBody
                        key={key}
                        name={d.name}
                        code={d.code}
                        qte={d.qte}
                        zone={d.zone} />
                )
            })}
        </div>
    );
}

export default Details;