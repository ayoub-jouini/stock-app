import { useParams } from 'react-router';
import useFetch from '../../services/useFetch';
import LoadingSpinner from '../loading-spinner/LoadingSpiner';

const Details = () => {
    const { id } = useParams();
    const { data, error, loading } = useFetch('http://localhost:3000/Data.json');
    const result = data.filter(d => d.id == id);

    if (error) throw error;
    if (loading) return <LoadingSpinner />

    return (
        <div className="container">
            <div>
                {
                    result.map(d => <h1>{d.name}</h1>)
                }</div>
        </div>
    );
}

export default Details;