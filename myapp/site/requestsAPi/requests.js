let axios = require('axios');
let defaults = require('./default');

const url = "api/";

let juegosRequest = {
    getListJuegos: function(){
        return axios({
            ...defaults,
            method:"GET",
            url: url + "games",
        })
    }
}

module.exports = juegosRequest;