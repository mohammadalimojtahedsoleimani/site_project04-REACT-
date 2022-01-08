import React, {Component} from 'react';
import styles from "./Search.module.css";
class Search extends Component {
    render() {
        return (
            <div className={styles.container}>
                <p>search what you want ? </p>
                <input type="text" placeholder="search ... "/>
            </div>
        );
    }
}

export default Search;