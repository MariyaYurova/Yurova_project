import React, {useContext} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {AppContext} from "../../App";

const Navigation = () => {
    const {isAuth, setIsAuth} = useContext(AppContext)
    let navigate = useNavigate();
    return (
        <header className="header">
            <nav >
                {!isAuth && <button onClick={() => navigate(`/private`)}>Login</button>}
                {isAuth && <button onClick={() => setIsAuth(false)}>Logout</button>}
                <Link className='header__link' to="/">Main</Link>
                <Link className='header__link' to="/torts">torts</Link>
                <Link className='header__link' to="/private">private</Link>
            </nav>
        </header>
    );
};

export default Navigation;
