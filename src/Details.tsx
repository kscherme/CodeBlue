import * as React from 'react';
import './Details.css';
import {topics} from './Topics'

class Details extends React.Component {

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
                            <div className="col-md-6 mx-auto mt-5">
                                <div className="card">
                                    <div className="card-body">
                                        <h2 className="card-title text-center">Sign Up</h2>
                                        <div>Please elaborate on your skills:</div>
                                            {topics.map(topic =>
                                                <div className="my-2 row" key={topic.name}>
                                                    <div className="col-md-3" key={topic.name}>
                                                        <p key={topic.name}>{topic.name}</p>
                                                        <div className="col-md-9">
                                                            <textarea className="form-control" id="awsTextArea"/>
                                                        </div>                                                            
                                                    </div>
                                                </div>
                                            )}
                                            <div className="text-center">
                                                <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        );
    }
}

export default Details;
