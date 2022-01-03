import React, {Component} from 'react';
import Navbar from "./components/navbar_components/Navbar";
import Banner from "./components/banner_components/Banner";
class App extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Banner/>
            </div>
        );
    }
}

export default App;