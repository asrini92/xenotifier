import React, { Component } from 'react';

class Result extends Component{

    render(){
        if(this.props.exchangeValue === ''){
            return null;
        }
        else{
            return(
                <div>
                    {/* <table>
                        <tbody>
                            <tr> 
                                <td colSpan="2">  */}
                                    <h3> Your Exchange Rate from {this.props.from}  to  {this.props.to} is : <h4>{this.props.exchangeValue}</h4> </h3> 
                               {/* </td>
                            </tr>
                             <tr>
                                <td>Date</td>
                                <td>Temperature</td>
                                <td>Overall</td>
                            </tr>
                            <tr>
                                <td>{this.props.time}</td>
                                <td>{this.props.temperature}</td>
                                <td>{this.props.overall}</td>
                            </tr> 
                        </tbody>
                    </table>*/}
                </div>
            );
        } 
    }
}

export default Result;

