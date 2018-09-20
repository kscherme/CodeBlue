import * as React from 'react';
import './Skills.css';

class Skills extends React.Component {
    public topics = [{ name: 'AWS', color: 'aws-color', selected: false }, { name: 'Web', color: 'web-color', selected: false },
    { name: 'Mobile', color: 'mobile-color', selected: false }, { name: 'Databases', color: 'db-color', selected: false },
    { name: 'Git', color: 'git-color', selected: false }, { name: 'Object-Oriented', color: 'oo-color', selected: false },
    { name: 'Machine Learning/AI', color: 'mlai-color', selected: false }, { name: "UX", color: "ux-color", selected: false },
    { name: "Algorithms", color: "algorithms-color", selected: false }, { name: "System Design", color: "system-color", selected: false },
    { name: "Operating Systems", color: "os-color", selected: false }, { name: "Shell", color: "shell-color", selected: false },
    { name: "Other", color: "other-color", selected: false }];

    constructor(props:any) {
        super(props);
        this.state = {};
    }

    public handleClick(topic: any) {
        document.getElementsByClassName(topic.name)[0].classList.toggle('pressed-button');
        const topicIndex = this.topics.findIndex(c =>  
            c.name === topic.name
        );
        if (this.topics[topicIndex].selected){
            this.topics[topicIndex].selected = false;
        }
        else {
            this.topics[topicIndex].selected = true;
        }
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
                </div>
                <div className="container-fluid jumbotron">
                    <div className="row">
                        <div className="col-md-6 mx-auto mt-5">
                            <div className="card">
                                <div className="card-body">
                                    <h2 className="card-title text-center">Sign Up</h2>
                                    <div>Choose your Skills:</div>
                                    <div className="row">
                                        {this.topics.map(topic =>
                                            <div className="col-4 my-3" key={topic.name}>
                                                {/* tslint:disable-next-line jsx-no-lambda */}
                                                <button onClick={() => this.handleClick(topic)} className={"btn full-width white-text btn-lg " + topic.color + " " + topic.name} type="button" key={topic.name}>
                                                    <span className="btn-label" />{topic.name}
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-primary btn-lg">Next</button>
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
