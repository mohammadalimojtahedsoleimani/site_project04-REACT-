import React, {Component} from 'react';
import Navbar from "./components/navbar_components/Navbar";
import Banner from "./components/banner_components/Banner";
import Cards from "./components/cards_components/Cards";
import Search from "./components/search_components/Search";
import Logos from "./components/footer_components/Logos";
class App extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Banner/>
                <Cards/>
                <Search/>
                <Logos/>
            </div>
        );
    }
}

export default App;