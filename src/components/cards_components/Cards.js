import React , { Component } from 'react';
import styles from "./Cards.module.css";
import Card from "./Card";
import iphone10 from "../../images/iphone10.jpg";
import iphone11 from "../../images/iphone11.jpg";
import iphone12 from "../../images/iphone12.jpg";
import s21 from "../../images/s21.jpg";

class Cards extends Component {
    constructor ( props ) {
        super ( props );
        this.state = {
            phoneData : [
                { id : 1 , image : iphone10 , name : "Iphone X" , cost : "500 $" } ,
                { id : 2 , image : iphone11 , name : "Iphone 11" , cost : "600 $" } ,
                { id : 3 , image : iphone12 , name : "Iphone 12" , cost : "800 $" } ,
                { id : 4 , image : s21 , name : "S21 Ultra" , cost : "790 $" }

            ]
        }
    }

    render () {
        return (
            <div className={ styles.container }>
                {/*<Card image ={iphone10} name="Iphone X" cost="500 $"/>*/ }
                {/*<Card image={iphone11} name="Iphone 11" cost="600 $" />*/ }
                {/*<Card image={iphone12} name="Iphone 12" cost="800 $" />*/ }
                {/*<Card image={s21} name="S21 Ultra" cost="790 $" />*/ }
                { this.state.phoneData.map ( phone => <Card key={phone.id} image={ phone.image } name={ phone.name }
                                                            cost={ phone.cost }/> ) }
            </div>
        );
    }
}

export default Cards;