import MenuItem from "../menu-item/menu-item.component";

const menuItem = [
    {
        id: 1,
        text: "Dashboard",
        route: "/"
    },
    {
        id: 2,
        text: "Journal",
        route: "/journal"
    },
    {
        id: 3,
        text: "Entries",
        route: "/entries"
    },
    {
        id: 4,
        text: "Withdrawal / Deposits",
        route: "/withdrawal-deposits"
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