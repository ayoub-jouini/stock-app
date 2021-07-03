import './article-data.css';

const ArticleData = (props) => {
    return (
        <div className="art-data">
            <div>
                {props.name}
            </div>
            <div>
                {props.data}
            </div>
        </div>
    );
}

export default ArticleData;