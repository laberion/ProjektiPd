import React from "react";
import foto from '../../foto.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends React.Component {

    render() {
      return (
        <img src={foto} alt="hospital" style={{width:"100%",height:"100%",marginTop:"-20px"}}></img>
      );
      }
}
export default Home;





