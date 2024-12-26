import { useContext } from 'react';
import { AuthContext } from '../auth/AuthProvider';

const UseAuth = () => {
    const useAuth = useContext(AuthContext)
    return useAuth
};

export default UseAuth;