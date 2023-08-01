import { Outlet } from "react-router-dom";
import { useUserStore } from "../../store/trade-journal.store"; 
import { useNavigate } from "react-router-dom"; 
import { useEffect } from "react";

const Dashboard = () => {
    
    const navigate = useNavigate();
    const { isLogin } = useUserStore(); 

    useEffect(() => {
        if (!isLogin) 
            navigate("/login");
    }, []);

    return (
        <>
            <div>Welcome to dashboard!</div>
            <Outlet />
        </>
    );
};

export default Dashboard;