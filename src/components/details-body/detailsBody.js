import './detailsBody.css';

const DetailsBody = ({ name, code, qte, zone }) => {
    return (
        <>
            <div className="header-div">
                <div className="left-icons">
                    <div>
                        <img alt="plus-btn" src="/asset/plus.svg" />
                    </div>
                    <div>
                        <img alt="moins-btn" src="/asset/moins.svg" />
                    </div>
                </div>
                <div className="name">
                    {name}
                </div>
                <div className="edit-icon-d">
                    <img alt="edit-btn" src="/asset/edit.svg" />
                </div>
            </div>
            <div className="body-div">
                <ul>
                    <li><div>Code:</div><div>{code}</div></li>
                    <li><div>Quantités:</div><div>{qte}</div></li>
                    <li><div>Zone:</div><div>{zone}</div></li>
                    <li><div>Description:</div><div>...</div></li>
                </ul>
            </div>
        </>
    );
}

export default DetailsBody;