import {Link} from 'react-router-dom';

const Route = ({routeName, title, onRouteClick}) => {
    return (
        <li>
            <Link to={routeName} onClick={onRouteClick}>
                {title}
            </Link>
        </li>
    );
};

export default Route;