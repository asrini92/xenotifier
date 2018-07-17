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
            countryOptions:[],
            currencyOptions:[],
            renderFlag:true
        };

        this.handleChange = this.handleChange.bind(this);  
    }       

    handleChange(event) {
        if(event.target.name === "fromCurrency"){
            this.setState({fromCurrency: event.target.value});
        } else if(event.target.name === "toCurrency"){
            this.setState({toCurrency: event.target.value});
        } else{
            this.setState({value: event.target.value});
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
        
        if(this.state.renderFlag){ 
            var currencyOptions = [<option value=''><h6>Select One</h6></option>];
            var countryOptions = [<option value=''><h6>Select One</h6></option>];
            const countryNames = this.getJsonData("http://country.io/names.json");
            const Currencies = this.getJsonData("http://country.io/currency.json");
            
            Object.keys(Currencies).forEach(function(key) {
                currencyOptions.push(<option value={Currencies[key]}>{Currencies[key]}</option>);
            })
            Object.keys(countryNames).forEach(function(key) {
                countryOptions.push(<option value={Currencies[key]}>{countryNames[key]}</option>);
            })
            this.setState({currencyOptions : currencyOptions});
            this.setState({countryOptions : countryOptions});
            this.setState({renderFlag : false});
        }

        return(
            <div>
                <table>
                    <tbody>
                        <tr> 
                            <td>  <h3>Select a country to know it's currency:</h3> </td>
                            <td>
                                <select name="countryCode" id="countryCode" onChange={this.handleChange} >
                                    {this.state.countryOptions}
                                </select>
                            </td>
                            <td>
                                {this.state.value}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h3>From:</h3>
                                <select name="fromCurrency" id="fromCurrency" onChange={this.handleChange} >
                                    {this.state.currencyOptions}
                                </select>
                            </td>
                            <td>
                                <h3>To:</h3>
                                <select name="toCurrency" id="toCurrency" onChange={this.handleChange} >
                                    {this.state.currencyOptions}
                                </select>
                            </td>
                        </tr>
                        <tr/><tr/><tr/><tr/><tr/><tr/><tr/><tr/><tr/><tr/>
                        <tr>
                            <td>
                                <SubmitButton 
                                    fromValue={this.state.fromCurrency}
                                    toValue={this.state.toCurrency}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        
        );
    }
}

export default CountryCode;

