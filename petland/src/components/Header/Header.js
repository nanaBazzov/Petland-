import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import {motion} from "framer-motion";
import {Container,Row} from "reactstrap";
import logo from '../../assets/images/logo.png';
import user from '../../assets/images/user .jpeg'



const Header = () =>{

    const nav_links = [
        {
            path:'home',
            display: 'Home',
        },

        {
            path:'catshop',
            display: 'Cat',
        },

        {
            path:'dogshop',
            display: 'Dog',
        },

        {
            path:'cart',
            display: 'Cart',
        },

    ];

    return(
        <header className="header">
        <Container>
            <Row>
                <div className="nav_wrapper">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                        <div>
                            <h1>PetLand</h1>

                        </div>
                    </div>

                    <div className="navigation">
                        <ul className="menu">
                            {
                                nav_links.map((item,index)=>(
                                    <li className="nav_item" key={index}>
                                        <NavLink to={item.path} className={(navClass) =>
                                        navClass.isActive ? 'nav_active' : ''}>{item.
                                            display}</NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="nav_icons">

                        <span className="cart_icon">
                            <i className="ri-shopping-bag-line"></i>
                            <span className="badge">1</span>

                        </span>

                        <span>
                            {/*<motion.i whileTap={{scale: 1.2}} className="ri-user-line">*/}
                            <motion.img whileTap={{scale:1.2}} src={user} alt={user}/>
                            {/*</motion.i>*/}
                        </span>
                    </div>

                    <div className="mobile_menu">
                        <span>
                            <i className="ri-menu-line"></i>
                        </span>
                    </div>
                </div>
            </Row>
        </Container>
        </header>
    )
}


export default Header;