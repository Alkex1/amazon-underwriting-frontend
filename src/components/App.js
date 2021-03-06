import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import "normalize.css";
import "./../styles/App.scss";
import NavBar from "./NavBar";
import Footer from "./Footer"
import Childcare from "./pages/Childcare";
import HomeBasedBusinesses from "./pages/HomeBasedBusinesses";
import PersonalAccident from "./pages/PersonalAccident";
import FileUpload from "./pages/FileUpload";
import BusinessInfo from "./pages/BusinessInfo"
import PrivateRoute from "./PrivateRoute";
import Newsletter from "./pages/Newsletter";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="content">
                    <div className="banner-div">
                        <img src="./img/logo.png" alt="logo"/>
                    </div>
                    <NavBar />
                    <Route 
                        exact 
                        path="/" 
                        render={(props) => {
                            return <LoginPage {...props} />
                        }}  
                    />
                    <PrivateRoute exact path="/childcare" component={Childcare} />
                    <PrivateRoute exact path="/homebasedbusinesses" component={HomeBasedBusinesses} />
                    <PrivateRoute exact path="/personalaccident" component={PersonalAccident} />

                    <PrivateRoute exact path="/fileupload" component={FileUpload} />
                    <PrivateRoute exact path="/businessinfo" component={BusinessInfo} />
                    <PrivateRoute exact path="/newsletter" component={Newsletter} />

                </div>
                <Footer />
            </BrowserRouter>
        )
    }
}

export default App;
