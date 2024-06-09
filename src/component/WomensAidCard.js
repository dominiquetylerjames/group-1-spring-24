// Import bootstrap CSS for styling
import 'bootstrap/dist/css/bootstrap.min.css';

// WomensAidCard component definition
function WomensAidCard ({ image, info, helpline, websiteSource }) {
    return (
        <div className="col">
            <div className="card h-100 rounded-3">
                <div className="card-body py-3 rounded-3 bg-dark bg-gradient">
                    <a href={ websiteSource } target="_blank">
                        <img src={ image } className="img-fluid fixed-height-img" alt="organisation logo" />
                    </a>
                    <p className="card-text text-light text-center fs-4 text-primary text-opacity-75 pt-3">
                        { info }<br />
                        { helpline }<br />
                    </p>
                </div>
            </div>
        </div>
    );
}

export default WomensAidCard;