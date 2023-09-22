import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

const User = ({ user }) => {

    const { id, name, email, phone } = user;

    const navigate = useNavigate();

    const userStyle = {
        border: '2px solid yellow',
        padding: '10px',
        borderRadius: '20px'
    }

    const handleShowUser = () => {
        navigate(`/user/${id}`);
    }

    return (
        <div style={userStyle}>
            <h3>{id}</h3>
            <h3>{name}</h3>
            <h3>{email}</h3>
            <h3>{phone}</h3>
            <Link to={`/user/${id}`}>Show Details</Link>
            <Link to={`/user/${id}`}><button>Show Details</button></Link>
            <button onClick={handleShowUser}>Click to see details</button>
        </div>
    );
};

User.propTypes = {
    user: PropTypes.object
}

export default User;