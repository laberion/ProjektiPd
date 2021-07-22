import React from 'react';
import axios from 'axios';
import Patient from '../patients/patient';
import 'bootstrap/dist/css/bootstrap.min.css';

class Patients extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data : [],
            id:"",
            name: "",
            surname: "",
            diagnose:"",
            changed : false
        };
    }

    componentDidMount() {
        axios.get("http://localhost:8080/patients").then((res)=>{
            const data = res.data;
            this.setState({data});
            console.log(this.state.data);
        })
      }

    handleClick(){
        const payload = {
            id : this.state.id,
            name : this.state.name,
            surname : this.state.surname,
            diagnose : this.state.diagnose
        }
        axios.post("http://localhost:8080/patients",payload).then((res)=>{
            if(res.status===200) {
                this.setState = {
                    id:"",
                    name: "",
                    surname: "",
                    diagnose:""
                };
                window.location.reload();
            } 
        }).catch((res)=>{
            window.alert("Gabim ne te dhena");
        });
    }

    handleChange = (e) => {
        switch(e.target.name){
            case 'name' : {
                const name = e.target.value;
                this.setState({name});
            } break;

            case 'surname' : {
                const surname = e.target.value;
                this.setState({surname});
            } break;
            case 'id': {
                const id = e.target.value;
                this.setState({id});
            } break;
            case 'specialty': {
                const diagnose = e.target.value;
                this.setState({diagnose});
            } break;
            default: break;
        }
    }
      
    render() {
        const className = "row d-flex justify-content-center";
        const btn = "justify-content-center d-flex"
      return (
          
          <>
          <div className={className}>
            <div className="col-4">
                <input type="text" name="name" className="form-control" placeholder="First name" aria-label="First name" value={this.state.name} onKeyUp={this.handleChange} onChange={this.handleChange}></input>
            </div>
            <div className="col-4">
                <input type="text" name="surname" className="form-control" placeholder="Last name" aria-label="Last name" value={this.state.surname} onKeyUp={this.handleChange} onChange={this.handleChange}></input>
            </div>
            </div>
            <div className={className}>
            <div className="col-4">
                <input type="text" name="id" className="form-control" placeholder="Id" aria-label="Id" value={this.state.id} onKeyUp={this.handleChange} onChange={this.handleChange}></input>
            </div>
            <div className="col-4">
                <input type="text" name="specialty" className="form-control" placeholder="Diagnose" aria-label="Diagnose" value={this.state.diagnose} onKeyUp={this.handleChange} onChange={this.handleChange}></input>
            </div>
          </div>
          <div className={btn}>
            <button style={{marginTop:"8px",borderRadius:"7px"}} className="btn-primary" onClick={()=>this.handleClick()}>Add Patient</button>
          </div>
          <div className="row">
              {this.state.data.map((patient)=>{
                 return  <Patient patient={patient} key={patient.id}/>
              })}
          </div>
          </>
      );
      }
}
export default Patients;
