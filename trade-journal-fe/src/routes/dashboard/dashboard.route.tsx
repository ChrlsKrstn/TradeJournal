import { Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <>
            <div>Welcome to dashboard!</div>
            <Outlet />
        </>
    );
};

export default Dashboard;