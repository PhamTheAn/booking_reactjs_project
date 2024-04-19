import React, {  useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProtectRouter = () => {
    const [user, setUser] = useState('')
    const [isAdmin, setIsAdmin] = useState(false)


    const checkUserIsAdmin = () => {
        const token = localStorage.getItem('token');
        if (!token) {
            toast.error("Please log in before going to this address");
            setIsAdmin(false);
        }
        
        const infoUser = jwtDecode(token);
        setUser(infoUser);

        if(user) {

            if (user.user.roles.roleName == 'admin') {
                setIsAdmin(true);
            } else {
                setIsAdmin(false);
            }
        }
    };
    useEffect(() => {
        checkUserIsAdmin();
    }, []);
    console.log(isAdmin);
    return(
        isAdmin ? <Outlet/> : <>
        {toast.error("Please log in before going to this address")};
        <Navigate to="/login" /> 
        </>
    )
}

export default ProtectRouter