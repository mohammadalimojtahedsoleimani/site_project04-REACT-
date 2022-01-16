import React, {Component} from 'react';
import styles from "./Card.module.css";
import down from "../../images/down.svg"
import up from "../../images/up.svg"
class Card extends Component {
    constructor (props) {
        super (props);
        this.state = {
            counter : 1,
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
        const {counter} = this.state;
        const test = counter * cost.split(" ")[0];
        return (
            <div className={styles.container}>

                <img  src={image} alt="phone photo "/>
                <h3>{name}</h3>
                {/*<p>{cost} {counter ? `* ${counter} = ${counter *  Number(cost.split(" ")[0])} $ `:""}</p>*/}
                <p>{test} $</p>
                <div className={styles.counter}>
                    {/*chon khode 0 be sorat defult false shart ro barax dadim ta ejra she*/}
                    <img className={!counter && styles.deactive } src={down} alt="axe" onClick={this.downHandler}/>
                    <span>{counter}</span>
                    <img src={up} alt="axe" onClick={this.upHandler}/>
                </div>
            </div>
        );
    }
}

export default Card;