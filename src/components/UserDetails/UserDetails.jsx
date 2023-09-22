import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();

    const navigate = useNavigate();

    const{name, website} = user;

    const handleGoBack = () => {
        navigate(-1);
    }

    return (
        <div>
            <h2>details about user:{name} </h2>
            <h2>Web: {website} </h2>
            <button onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default UserDetails;