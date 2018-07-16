import $ from 'jquery';

const searchPrefix = "http://free.currencyconverterapi.com/api/v5/convert?q=";
const searchSuffix = "&compact=y";


const GET_REPORT_DATA = function (Currencies){
    Currencies = "GBP_INR";
    const url = searchPrefix + Currencies + searchSuffix;
    var result = null;
    $.ajax({
        url: url,
        success: function (data) {
            var keys = Object.keys(data);
            result = data[keys].val;
        },
        async: false
    });
    return result;
};

export {GET_REPORT_DATA};

