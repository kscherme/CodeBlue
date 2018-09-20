import * as React from 'react';
import './Login.css';

class Login extends React.Component {

    public handleClick(name: any, e: any) {
        // tslint:disable-next-line:no-console
        console.log("I was clicked!!" + name);
    }
    public render() {
        return (
            <div className="gray-bg">
                <div className="Home">
                    {/* NavBar */}
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="#"><span className="text-primary bold"/>CodeBlue</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button> 
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item mr-auto">
                                    <a className="nav-link mr-2 text-primary" href="signup.html">Sign Up</a>
                                </li>    
                            </ul>
                        </div>
                    </nav>
                    {/* Content */}
                    <div className="container-fluid jumbotron">
                        <div className="row">
                            <div className="col-md-4 mx-auto mt-5">
                                <div className="card">
                                    <div className="card-body">
                                        <h2 className="card-title text-center">Log In</h2>
                                        <form>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">Email</label>
                                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputPassword1">Password</label>
                                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                                            </div>
                                            <div className="text-center">
                                                <button type="submit" className="btn btn-primary btn-lg btn-block">Submit</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <p className="card-text text-center my-3">New to CodeBlue? <a href="signup.html">Make an account here.</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
