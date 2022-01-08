import React, {Component} from 'react';
import styles from "./Logos.module.css";
import apple from "../../images/apple.jpg"
import samsung from "../../images/samsung.jpg"
import xiaomi from "../../images/xiaomi.png"
class Logos extends Component {
    render() {
        return (
            <div className={styles.container}>
                <h3>Who support us?</h3>
                <div>
                    <img src={apple} alt="Logo"/>
                    <img src={samsung} alt="Logo"/>
                    <img src={xiaomi} alt="Logo"/>
                </div>
            </div>
        );
    }
}

export default Logos;