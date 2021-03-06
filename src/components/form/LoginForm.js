import React, {Component} from "react";
import axios from "axios";
import { connect } from "react-redux";
import { setAuthToken } from "./../../actions";

class LoginForm extends Component {
    state = { 
        email: "", 
        password: "",
        error: null
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.setState({error: null})

        const { history, setAuthToken } = this.props;
        const { email, password } = this.state;

        axios.post(`${process.env.REACT_APP_BASEURL}/login`, { email, password })
            .then(response => {
                setAuthToken(response.data.token);
                history.push("/childcare");
            })
            .catch(error => {
                console.log(error.response.data);
                this.setState({error: error.response.data.error})
            });
    }

    onInputChange = (name, event) => {
        this.setState({ [name]: event.target.value });
    }

    render() {
        const { email, password, error } = this.state;

        return (
            <>
                <p>{ error }</p>
                <form onSubmit={this.onFormSubmit} className="generic-form">

                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={email} onChange={(event) => this.onInputChange("email", event)} />

                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={password} onChange={(event) => this.onInputChange("password", event)} />

                    <input type="submit" value="Login" />
                    
                </form>
            </>
        );
    }
}

export default connect(null, { setAuthToken })(LoginForm);