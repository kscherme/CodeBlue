import * as React from 'react';
import './Home.css';

class Home extends React.Component {
  public render() {
    return (
        <div className="gray-bg">
            <div className="Home">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#"><span className="text-primary bold">CodeBlue</span></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
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
                                <a className="nav-link mr-2 text-primary" href="signup.html">Profile</a>
                            </li>    
                        </ul>
                    </div>
                </nav>
                <div className=" vertical-center">
                    <div className="container">
                        <h1>I need help with...</h1>
                        <div className="col-md-12">
                            <button type="button" className="m-1 btn btn-labeled btn-large aws-color text-white">
                                <span className="btn-label"/>AWS
                            </button>
                            <button type="button" className="m-1 btn btn-labeled btn-large web-color text-white">
                                <span className="btn-label"/>Web
                            </button>
                            <button type="button" className="m-1 btn btn-labeled btn-large mobile-color text-white">
                                <span className="btn-label"/>Mobile
                            </button>    
                            <br />
                            <button type="button" className="m-1 btn btn-labeled btn-large db-color text-white">
                                <span className="btn-label"/>Databases
                            </button> 
                            <button type="button" className="m-1 btn btn-labeled btn-large git-color text-white">
                                <span className="btn-label"/>git
                            </button>    
                            <button type="button" className="m-1 btn btn-labeled btn-large oo-color text-white">
                                <span className="btn-label"/>Object Oriented 
                            </button>
                            <button type="button" className="m-1 btn btn-labeled btn-large mlai-color text-white">
                                <span className="btn-label"/>Machine Learning / AI
                            </button> 
                            <button type="button" className="m-1 btn btn-labeled btn-large ux-color text-white">
                                <span className="btn-label"/>UX
                            </button>  
                            <button type="button" className="m-1 btn btn-labeled btn-large algorithms-color text-white">
                                <span className="btn-label"/>Algorithms
                            </button>    
                            <button type="button" className="m-1 btn btn-labeled btn-large system-color text-white">
                                <span className="btn-label"/>System Design
                            </button>   
                            <button type="button" className="m-1 btn btn-labeled btn-large os-color text-white">
                                <span className="btn-label"/>Operating Systems
                            </button>        
                            <button type="button" className="m-1 btn btn-labeled btn-large shell-color text-white">
                                <span className="btn-label"/>Shell
                            </button> 
                            <button type="button" className="m-1 btn btn-labeled btn-large other-color">
                                <span className="btn-label"/>Other
                            </button> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Home;
