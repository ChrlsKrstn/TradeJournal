import { Outlet } from "react-router-dom";
import { UserStore } from "../../store/trade-journal.store";

const Dashboard = () => {
    const [getUsername, setUsername, getPassword, setPassword] = UserStore(
        (state) => [state.username, state.setUsername, state.password, state.setPassword]
    )
    return (
        <>
            <div>Welcome to dashboard! {getUsername}</div>
            <Outlet />
        </>
    );
};

export default Dashboard;