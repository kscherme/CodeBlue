import * as React from 'react';
import './Home.css';

import { Link } from 'react-router-dom'; 

class Home extends React.Component {
    public topics = [{ name: 'AWS', color: 'aws-color' }, { name: 'Web', color: 'web-color' },
    { name: 'Mobile', color: 'mobile-color' }, { name: 'Databases', color: 'db-color' },
    { name: 'Git', color: 'git-color' }, { name: 'Object-Oriented', color: 'oo-color' },
    { name: 'Machine Learning/AI', color: 'mlai-color' }, { name: "UX", color: "ux-color" },
    { name: "Algorithms", color: "algorithms-color" }, { name: "System Design", color: "system-color" },
    { name: "Operating Systems", color: "os-color" }, { name: "Shell", color: "shell-color" },
    { name: "Other", color: "other-color" }];

    public handleClick(name: any, e: any) {
        // tslint:disable-next-line:no-console
        console.log("I was clicked!!" + name);
    }
    public render() {
        return (
            <div className="gray-bg">
                <div className="Home">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link className="navbar-brand" to="/"><span className="text-primary bold">CodeBlue</span></Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="mr-3">
                                    <form className="form-inline my-2 my-lg-0">
                                        <div className="form-group">
                                            <label className="mr-2" htmlFor="availabilityFormControlSelect">I am </label>
                                            <select className="form-control" id="availabilityFormControlSelect">
                                                <option>Available</option>
                                                <option>Unavailable</option>
                                            </select>
                                        </div>
                                    </form>
                                </li>
                                <li className="nav-item mr-auto">
                                    <Link className="nav-link mr-2 text-primary" to="/">Logout</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className=" vertical-center">
                        <div className="container">
                            <h1>I need help with...</h1>
                            <div className="col-md-12">
                                {this.topics.map(topic =>
                                    <a href="/results" key={topic.color}>
                                        <button onClick={this.handleClick.bind(topic, topic.name)} type="button" className={"m-1 btn btn-labeled btn-large text-white " + topic.color} key={topic.color}>
                                            <span className="btn-label" />{topic.name}
                                        </button>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
