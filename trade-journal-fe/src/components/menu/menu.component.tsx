import MenuItem from "../menu-item/menu-item.component";

const menuItem = [
    {
        id: 1,
        text: "Dashboard",
        route: "/"
    },
    {
        id: 2,
        text: "Leaves",
        route: "/leaves"
    },
    {
        id: 3,
        text: "Certificate of Attendance",
        route: "/certificate-of-attendance"
    },
    {
        id: 4,
        text: "Schedule Adjustments",
        route: "/schedule-adjustments"
    },
    {
        id: 5,
        text: "Overtimes",
        route: "/overtimes"
    },
    {
        id: 6,
        text: "Undertimes",
        route: "/undertimes"
    },
    {
        id: 7,
        text: "Official Business",
        route: "/official-business"
    },
];

const Menu = () => {
    return (
        <>
            <div className="p-4 bg-gray-600 text-center">
                <h1 className="text-white">HRIS</h1>
            </div>
            <div className="p-4">
                <ul className="divide-y">
                    {
                        menuItem.map((item) => (
                            <MenuItem key={item.id} menuItem={item}/>
                        ))
                    }
                </ul>
            </div>
        </>
    );
};

export default Menu;