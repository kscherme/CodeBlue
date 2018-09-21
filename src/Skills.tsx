import * as React from 'react';
import { Link } from 'react-router-dom' 
import './Skills.css';
import {topics} from './Topics';


class Skills extends React.Component {
    
    constructor(props:any) {
        super(props);
        this.state = {};
    }

    public handleClick(topic: any) {
        document.getElementsByClassName(topic.name)[0].classList.toggle('pressed-button');
        const topicIndex = topics.findIndex(c =>  
            c.name === topic.name
        );
        if (topics[topicIndex].selected){
            topics[topicIndex].selected = false;
        }
        else {
            topics[topicIndex].selected = true;
        }
    }

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
                </div>
                <div className="container-fluid jumbotron">
                    <div className="row">
                        <div className="col-md-6 mx-auto mt-5">
                            <div className="card">
                                <div className="card-body">
                                    <h2 className="card-title text-center">Sign Up</h2>
                                    <div>Choose your Skills:</div>
                                    <div className="row">
                                        {topics.map(topic =>
                                            <div className="col-4 my-3" key={topic.name}>
                                                {/* tslint:disable-next-line jsx-no-lambda */}
                                                <button onClick={() => this.handleClick(topic)} className={"btn full-width white-text btn-lg " + topic.color + " " + topic.name} type="button" key={topic.name}>
                                                    <span className="btn-label" />{topic.name}
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                    <div className="text-center">
                                        <Link to="/details">
                                            <button type="submit" className="btn btn-primary btn-lg">Next</button>
                                        </Link>
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

export default Skills;
