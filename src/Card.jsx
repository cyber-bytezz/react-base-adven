import ProfilePic from './assets/m.jpeg'


function Card () {
    return (
        <div className="card">
            <img className="card-image" src="https://via.placeholder.com/150" alt="Profile Card"></img>
            <h2 className="card-title">Mello</h2>
            <p className="card-para">Why Its So Easy</p>
        </div>
    );
}

export default Card;