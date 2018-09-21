import * as React from 'react';
import emma from './emma.jpg';
import katie from './katie.jpg';
import puppy from './puppy.jpg';
import './Results.css';
import { Link } from 'react-router-dom'; 


interface IResultStates{
    activePersonColors: string[],
    activePersonImg: string ,
    activePersonName: string,
    activePersonOffice: string,
    activePersonSkills: string[],
    activePersonSkillsDesc: string[],
    activePersonUid: string
} 


class Results extends React.Component<any,IResultStates> {

    public persons = [{name: 'Joe Smith', level: 'C1', office: 'Washington D.C.', img: puppy, uid: 'jsmith', skills: ['AWS', 'Web'], desc: ['S3', 'Angular'], colors: ['aws-color', 'web-color']},
                      {name: 'Katie Schermerhorn', level: 'A1', office: 'Chicago', img: katie, uid: 'UCJULMUP6', skills: ['Mobile', 'Web'], desc: ['Android, iOS', 'React'], colors: ['mobile-color', 'web-color']},
                      {name: 'Emma Fass', level: 'P3', office: 'Dallas', img: emma, uid: 'UCLN8GQ84', skills: ['Web', 'UX'], desc: ['Javascript, HTML, Css', 'User-centered design'], colors: ['web-color','ux-color']}];
    

    constructor(props:any) {
        super(props);
        this.state = {
            activePersonColors: [],
            activePersonImg: '',
            activePersonName: '',
            activePersonOffice: '',
            activePersonSkills: [],
            activePersonSkillsDesc: [],
            activePersonUid: ''
        }
    }
    
    
    public openModal(person:any){
        this.setState({
            activePersonColors: person.colors,
            activePersonImg: person.img,
            activePersonName: person.name,
            activePersonOffice: person.office,
            activePersonSkills: person.skills,
            activePersonSkillsDesc: person.desc,
            activePersonUid: person.uid

         })
    }


  public render() {
    return (
        <div className="gray-bg">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/"><span className="text-primary bold">CodeBlue</span></Link>
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
                            <Link className="nav-link mr-2 text-primary" to="/">Log Out</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="container">
                <div className="row my-5 text-center">
                    <div className="col">
                        <div className="m-1 btn btn-labeled btn-large web-color text-white" style={{ cursor: 'default' }}>
                            <span className="btn-label"/>Web
                        </div>
                    </div>
                </div>
                <div className="mt-3 row justify-content-center">
                    {this.persons.map(person=>
                        <div className="col-auto mb-3" key={person.name}>
                          {/* tslint:disable-next-line jsx-no-lambda */}
                            <div className="btn card" style={{ width: '18rem' }} data-toggle="modal" data-target="#profileModal" onClick={() => this.openModal(person)}>
                                <div className="card-body text-center">
                                    <div>
                                        <div id="status-badge" className="m-1 badge green"/>
                                        <img src={person.img} alt="aboutme" width="140" height="140" className="rounded-circle"/>
                                    </div>
                                    <h5 className="card-title text-center my-3">{person.name}</h5>
                                    <p className="card-text">{person.level}</p>
                                    <p className="card-text"><small className="text-muted">{person.office}</small></p>
                                </div>
                            </div>
                        </div>
                        )}
                </div>

                {/* Modal */}
                <div className="modal fade" id="profileModal" tabIndex={-1} role="dialog" aria-labelledby="profileModalTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalCenterTitle">{this.state.activePersonName}, <span className="text-secondary">{this.state.activePersonOffice}</span></h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="text-center large-font">
                                    <img src={this.state.activePersonImg} alt="aboutme" width="140" height="140" className="rounded-circle"/><br />
                                    <div className="skills my-2">
                                    {this.state.activePersonSkills.map((skill, index) =>
                                        <span key={index} className={"m-1 badge text-white " + this.state.activePersonColors[index]}>{skill}</span>                                    
                                        )}
                                    </div>
                                    <div>
                                    <a href={"https://slack.com/app_redirect?channel="+this.state.activePersonUid}><button type="button" className="btn git-color text-white btn-lg raised-btn"><i className="fab fa-slack" /> Slack me!</button></a>                                    </div>
                                </div>
                                <hr />
                                {this.state.activePersonSkills.map((skill, index) =>
                                    <p key={index}><span>{skill}: </span>{this.state.activePersonSkillsDesc[index]}</p>
                                    )}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }

}

export default Results;
