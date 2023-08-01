import { FC, HTMLAttributes } from "react";
import { useUserStore } from "../../store/trade-journal.store";

const Navigation = () => {

    const { isLogin, data, logoutUser } = useUserStore(); 

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