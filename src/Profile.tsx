import * as React from 'react';
import './Profile.css';


class Profile extends React.Component {
    constructor(props:any) {
        super(props);
        this.state = {
            availability: 'Available',
            email: '',
            firstname: '',
            lastname: '',
            office: 'Choose',
            password: '',
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
      
    public handleChange(event:any) {
        // tslint:disable-next-line:no-console
        console.log("event.target.id: " + event.target.id);
        // tslint:disable-next-line:no-console
        console.log("event.target.value: " + event.target.value);
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    public handleSubmit(event:any) {
        // tslint:disable-next-line:no-console
        console.log("Handling Submit for event: " + event.target.value);
    }

    public render() {
        return (
            <div className="gray-bg">
                <div className="Home">
                    {/* NavBar */}
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="/"><span className="text-primary bold"/>CodeBlue</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button> 
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item mr-auto">
                                    <a className="nav-link mr-2 text-primary" href="/">Log In</a>
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
                                        <h2 className="card-title text-center">Sign Up</h2>
                                        <form>
                                            <div className="form-row">
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="inputEmail4">Email</label>
                                                    <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="inputPassword4">Password</label>
                                                    <input type="password" className="form-control" id="inputPassword4" placeholder="Password"/>
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="inputFirstName">First Name</label>
                                                    <input type="text" className="form-control" id="inputFirstName" placeholder="First Name"/>
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="inputLastName">Last Name</label>
                                                    <input type="text" className="form-control" id="inputLastName" placeholder="Last Name"/>
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-group col-md-12">
                                                    <label htmlFor="inputOffice">Office</label>
                                                    <select onChange={this.handleChange} id="inputOffice" className="form-control">
                                                        <option value="Choose">Choose</option>
                                                        <option value="Atlanta">Atlanta</option>
                                                        <option value="Chicago">Chicago</option>
                                                        <option value="Dallas">Dallas</option>
                                                        <option value="DC">Washington D.C.</option>
                                                        <option value="Houston">Houston</option>
                                                        <option value="LA">Los Angeles</option>
                                                        <option value="Philadelphia">Philadelphia</option>
                                                        <option value="NYC">New York</option>
                                                        <option value="SF">San Francisco</option>
                                                        <option value="Seattle">Seattle</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-group col-md-12">
                                                    <label htmlFor="inputAvail">Set Availability</label>
                                                    <select onChange={this.handleChange} id="inputAvail" className="form-control">
                                                        <option value="Available">Available</option>
                                                        <option value="NotAvailable">Not Available</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <a href="/skills">
                                                    <button type="submit" className="btn btn-primary btn-lg">Next</button>
                                                </a>
                                            </div>
                                        </form>
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

export default Profile;
