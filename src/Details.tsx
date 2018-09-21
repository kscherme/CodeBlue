import * as React from 'react';
import './Details.css';
import { Link } from 'react-router-dom'; 
import { topics } from './Topics';



class Details extends React.Component {

    public render() {
        return (
            <div className="gray-bg">
                <div className="Home">
                    {/* NavBar */}
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link className="navbar-brand" to="/"><span className="text-primary bold"/>CodeBlue</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button> 
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item mr-auto">
                                    <Link className="nav-link mr-2 text-primary" to="/profile">Sign Up</Link>
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
                                                    </div>
                                                    <div className="col-md-9">
                                                        <textarea className="form-control" id="awsTextArea"/>
                                                    </div>  
                                                </div>
                                            )}
                                            <div className="text-center">
                                                <Link to="/home">
                                                    <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                                                </Link>
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
