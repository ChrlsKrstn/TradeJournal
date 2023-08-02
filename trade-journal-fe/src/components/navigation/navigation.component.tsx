import { useUserStore } from "../../store/trade-journal.store";

const Navigation = () => {
 
    const { isLogin, data, logoutUser } = useUserStore();  

    return (
        <>
            <h1 className="text-white" onClick={logoutUser}>
                { isLogin ? data[0].firstname + " " + data[0].lastname: null }
            </h1>
        </>
    )
};

export default Navigation;