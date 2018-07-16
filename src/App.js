import React, { Component } from 'react';
import './App.css';
import FormField from './Form_Fields.jsx';
import {GET_REPORT_DATA} from './service/xeservice.js';
import Result from './Result.jsx'
import CountryCode from './CounryCode';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      time:'',
      temperature:'',
      overall:'',
      showresult: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}       

handleChange(event) {
    this.setState({value: event.target.value});
    event.preventDefault();
}

handleSubmit(event) {
  if(this.state.value === ''){
      alert("hi select something");
  }else{
      var report = GET_REPORT_DATA(this.state.value);
      this.state.overall=report.text;
      this.state.time=report.date;
      this.state.temperature=report.temp;
      console.log(report);
      this.state.showresult = true;
  }
  event.preventDefault();
  this.render();
}
 
  render() {
    return (
      <div className="App">
           <table>
              <tbody>
                  <tr> 
                      <td colSpan="2"> 
                          <h3> Enter the City you want to track </h3> 
                      </td>
                  </tr>
                  <tr>
                      <td id="mobileLabel">Mobile Number</td>
                      <td>
                          <CountryCode
                              required />
                              <span class="validity"></span>
                      </td>
                  </tr>
              </tbody>
          </table>
            {
              this.state.showresult ? <Result temperature = {this.state.temperature} time = {this.state.time} city = {this.state.value} overall = {this.state.overall} /> : null }
      </div>
    );
  }
}

export default App;
