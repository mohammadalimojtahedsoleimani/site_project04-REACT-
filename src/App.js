import React, {Component} from 'react';
import Navbar from "./components/navbar_components/Navbar";
import Banner from "./components/banner_components/Banner";
import Cards from "./components/cards_components/Cards";
class App extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Banner/>
                <Cards/>
            </div>
        );
    }
}

export default App;