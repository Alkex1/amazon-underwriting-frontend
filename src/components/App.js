import React, {Component} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
// import Childcare from "./pages/Childcare";
// import HomeBasedBusiness from "./pages/HomeBasedBusiness";
// import PersonalAccident from "./pages/PersonalAccident";
// import AboutUs from "./pages/AboutUs"
import FormPage from "./pages/FormPage";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/form" component={FormPage} />
                </Switch>
            </div>
            </BrowserRouter>
        )
    }
}

export default App;