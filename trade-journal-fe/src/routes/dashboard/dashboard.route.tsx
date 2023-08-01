import { Outlet } from "react-router-dom";
import { useUserStore } from "../../store/trade-journal.store"; 
import { useNavigate } from "react-router-dom"; 
import { Fragment, useEffect } from "react";

import Navigation from "../../components/navigation/navigation.component";
import Menu from "../../components/menu/menu.component";
import MenuItem from "../../components/menu-item/menu-item.component";

const Dashboard = () => {
    
    const navigate = useNavigate();
    const { isLogin } = useUserStore(); 

    useEffect(() => {
        if (!isLogin) 
            navigate("/login");
    }, []);

    return (
        <Fragment>
            <div className="flex min-h-screen">
                <div className="grid grid-cols-9 flex-grow">
                    <div className="col-span-1 bg-gray-100">
                        <Menu />
                    </div>
                    <div className="flex flex-col col-span-8">
                        <div className="flex sticky z-50 bg-gray-700 top-0 p-4 justify-end">
                            <Navigation />
                        </div>
                        <div className="flex-grow p-8">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Dashboard;