import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import { AuthContext } from '../contexts/UserContext';
import './Header.css';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/login')
            })

    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <span className='user-email'>{user?.email}</span>

                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {
                    user?.uid ?
                        <button className='btn-logOut' onClick={handleLogOut}>Log Out</button>
                        :
                        <>
                            <Link to="/login">LogIn</Link>
                            <Link to="/signup">Sign Up</Link>
                        </>
                }


            </div>
        </nav>
    );
};

export default Header;