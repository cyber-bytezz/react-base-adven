import PropTypes from 'prop-types';

function Student (){
    return(
        <div className="student">
            <p>Name:{props.name}</p>
            <p>Age:{props.age}</p>
            <p>Student: {props.isStudent? "Yes" : "NO"}</p>
        </div>
    )
}

Student.propTypes = {
    name:PropTypes.string,
    age:PropTypes.number,
    isStudent:PropTypes.bool,
}



export default Student;