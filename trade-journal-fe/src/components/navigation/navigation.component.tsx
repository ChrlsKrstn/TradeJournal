import { useEffect } from "react";
import { useUserStore } from "../../store/trade-journal.store";
import { useNavigate } from "react-router-dom";
const Navigation = () => {

    const navigate = useNavigate();
    const { isLogin, data, logoutUser } = useUserStore(); 

    useEffect(() => {
        if (!isLogin) 
            navigate("/login");
    }, []);

    const logout = () => {
        logoutUser();
    }

    return (
        <>
            <h1 className="text-white" onClick={logout}>
                { isLogin ? data[0].firstname + " " + data[0].lastname : "" }
            </h1>
        </>
    )
};

export default Navigation;