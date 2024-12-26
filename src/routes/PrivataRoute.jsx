import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";
import { useNavigate } from "react-router-dom";

const PrivataRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext);
    const navigate = useNavigate()
    if (loader) {
        return
    }

    if (user) {
        return children
    } else {
        navigate('/')
    }


    return (
        <div>
            {/* <Navbar></Navbar>
            {
                user ? <Outlet></Outlet>
                    :
                    <h1>User is not Found</h1>
            } */}
        </div>
    );
};

export default PrivataRoute;