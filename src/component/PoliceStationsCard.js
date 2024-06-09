// Import bootstrap CSS for styling
import 'bootstrap/dist/css/bootstrap.min.css';

// PoliceStationsCard component definition
function PoliceStationsCard ({ name, openingTimes, address}) {
    return (
        <div className="col">
            <div className="card h-100 rounded-3">
                <div className="card-body py-3 rounded-3 bg-dark bg-gradient bg-opacity-75">
                    <h4 className="card-title text-light fs-2 text-center">{ name }</h4>
                    <p className="card-text text-light text-center fs-4 text-primary text-opacity-75"> { openingTimes }<br />
                    { address }</p>
                </div>
            </div>
        </div>
    )
}

export default PoliceStationsCard;