import { useLoaderData } from "react-router-dom";

const Users = () => {

    const users = useLoaderData();

    return (
        <div>
            <h2>our users: {users.length}</h2>
            <h2>This is User Page</h2>
        </div>
    );
};

export default Users;