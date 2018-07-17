import React, { Component } from 'react';
import {GET_REPORT_DATA} from './service/xeservice';
import Result from './Result';


class SubmitButton extends Component{
    constructor(props) {
        super(props);   
        this.state = {
            showresult:false,
            exchangeValue:''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }  

    handleSubmit(event) {
        if(this.props.fromValue === '' || this.props.toValue === ''){
            alert("hi select something");
        } else{
            if(this.props.fromValue === this.props.toValue){
                alert("select diffent currencies");
            }else{
                var searchValue = this.props.fromValue+"_"+this.props.toValue;
                var resultValue = GET_REPORT_DATA(searchValue);
                this.setState({
                    showresult:true,
                    exchangeValue: resultValue
                });
            }
        }
        event.preventDefault();
    }

    render(){        
        return(
            <div>
                <input type="button" class="btn" value="Click Me" onClick={this.handleSubmit}/>
                <p>
                    {
                        this.state.showresult ? <Result from={this.props.fromValue} to={this.props.toValue} exchangeValue = {this.state.exchangeValue} /> : null 
                    }
                </p>
            </div>
        );
    }
}

export default SubmitButton;

