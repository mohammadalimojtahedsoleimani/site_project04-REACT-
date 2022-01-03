import React from 'react';
import styles from "./Nabar.module.css"

const Navbar = () => {
    return (
        <header className={styles.header}>
            <div className={styles.Container}>
                <ul className={styles.list}>
                    <li>home page</li>
                    <li>products</li>
                    <li>About us</li>
                </ul>
            </div>
            <div className={styles.logo}>
                <img src="" alt="phone image"/>
            </div>

        </header>
    );
};

export default Navbar;