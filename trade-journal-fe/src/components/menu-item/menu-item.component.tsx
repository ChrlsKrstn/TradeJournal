import { Link } from "react-router-dom";
const MENU_ITEM = {
    id: 0,
    text: "",
    route: ""
}

const MenuItem = ({menuItem = MENU_ITEM}) => { 

    const { id, text, route } = menuItem;

    return(
        <Link to={route}>
            <li className="p-2 text-sm font-semibold hover:cursor-pointer">{text}</li>
        </Link>
    );
};

export default MenuItem;