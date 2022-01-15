import React, {Component} from 'react';
import styles from "./Card.module.css";
import down from "../../images/down.svg"
import up from "../../images/up.svg"
class Card extends Component {
    constructor (props) {
        super (props);
        this.state = {
            counter : 0,
        }
    }
    downHandler = () => {
        if (this.state.counter >= 1) {
            this.setState ( ( prevState ) => ( {
                counter : prevState.counter - 1 ,
            } ) )
        }
    }
    upHandler = () => {
        this.setState((prevState)=>({
            counter : prevState.counter + 1,
        }))
    }
    render() {
        const {image,name,cost} = this.props;
        return (
            <div className={styles.container}>
                {/*chon khode 0 be sorat defult false shart ro barax dadim ta ejra she*/}
                <img  src={image} alt="phone photo "/>
                <h3>{name}</h3>
                <p>{cost}</p>
                <div className={styles.counter}>
                    <img className={this.state.counter ? " " : styles.deactive } src={down} alt="axe" onClick={this.downHandler}/>
                    <span>{this.state.counter}</span>
                    <img src={up} alt="axe" onClick={this.upHandler}/>
                </div>
            </div>
        );
    }
}

export default Card;