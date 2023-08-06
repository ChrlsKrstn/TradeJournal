import { useUserStore } from "../../store/trade-journal.store";

const Navigation = () => {
 
    const { isLogin, firstname, lastname, logoutUser } = useUserStore();  

    return (
        <>
            <h1 className="text-white" onClick={logoutUser}>
                <a href="#">{ isLogin ? firstname + " " + lastname: null }</a>
            </h1>
        </>
    )
};

export default Navigation;