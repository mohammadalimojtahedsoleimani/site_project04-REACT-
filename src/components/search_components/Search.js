import React , { Component } from 'react';
import styles from "./Search.module.css";

class Search extends Component {
    constructor ( props ) {
        super ( props );
        this.state = {
            text : "" ,
        }
    }

    changeHandler = ( event ) => {
        console.log ( event.target.value )
        this.setState ( {
            text : event.target.value ,
        } )
    }

    render () {
        return (
            <div className={ styles.container }>
                <p>search what you want ? </p>
                <div>
                    <input value={ this.state.text } onChange={ this.changeHandler } type="text"
                           placeholder="search ... "/>
                    <br/>
                    <br/>
                    <span>{ this.state.text }</span>
                </div>
            </div>
        );
    }
}

export default Search;