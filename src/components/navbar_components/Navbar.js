import React from 'react';
import styles from "./Navbar.module.css"
import Logo from "../../images/media.png"
const Navbar = () => {
    return (
        <header className={styles.header}>
            <div className={styles.listContainer}>
                <ul className={styles.list}>
                    <li>home page</li>
                    <li>products</li>
                    <li>About us</li>
                </ul>
            </div>
            <div className={styles.logo}>
                <img src={Logo} alt="phone image" className={styles.logo}/>
            </div>

        </header>
    );
};

export default Navbar;