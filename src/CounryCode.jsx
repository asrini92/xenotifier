import React, { Component } from 'react';
import $ from 'jquery';
import SubmitButton from './SubmitButton.jsx';

class CountryCode extends Component{
    constructor(props) {
        super(props);
        this.state = {
            fromCurrency: '',
            toCurrency: '',
            value:'',
            submitValue:'',
            renderFlag:true
        };

        this.handleToCurrencyChange = this.handleChange.bind(this);
        this.handleFromCurrencyChange = this.handleChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);  
    }       

    handleFromCurrencyChange(event) {
        this.setState({fromCurrency: event.target.value});
        event.preventDefault();
    }

    handleToCurrencyChange(event) {
        this.setState({toCurrency: event.target.value});
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        event.preventDefault();
    }

    handleSubmit(event) {
        if(this.state.fromCurrency === '' || this.state.toCurrency === ''){
            alert("hi select something");
        } else{
            this.state.submitValue = this.state.fromCurrency+"_"+this.state.toCurrency;
        }
        event.preventDefault();
    }

    getJsonData(source){
        var result = null;
        $.ajax({
            url: source,
            success: function (data) {
                result = data;
            },
            async: false
        });
        return result;
    }
    

    render(){
        
        var currencyOptions = [<option value=''><h6>Select One</h6></option>];
        var countryOptions = [<option value=''><h6>Select One</h6></option>];

        if(this.state.renderFlag){
            const countryNames = this.getJsonData("http://country.io/names.json");
            const Currencies = this.getJsonData("http://country.io/currency.json");
            
            Object.keys(Currencies).forEach(function(key) {
                currencyOptions.push(<option value={Currencies[key]}>{Currencies[key]}</option>);
            })
            Object.keys(countryNames).forEach(function(key) {
                countryOptions.push(<option value={Currencies[key]}>{countryNames[key]}</option>);
            })
            this.state.renderFlag = false;
        }

        return(
            <div>
                <table>
                    <tbody>
                        <tr> 
                            <td>
                                <select name="countryCode" id="countryCode" onChange={this.handleChange} onBlur={this.handleSubmit}>
                                    {countryOptions}
                                </select>
                            </td>
                            <td>
                                {this.state.value}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h3>From:</h3>
                                <select name="fromCurrency" id="fromCurrency" onChange={this.handleFromCurrencyChange} onBlur={this.handleSubmit}>
                                    {currencyOptions}
                                </select>
                            </td>
                            <td>
                                <h3>To:</h3>
                                <select name="toCurrency" id="toCurrency" onChange={this.handleToCurrencyChange} onBlur={this.handleSubmit}>
                                    {currencyOptions}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button type="button" onSubmit = {this.handlesubmit} >Submit</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        
        );
    }
}

export default CountryCode;

