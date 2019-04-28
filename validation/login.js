const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateLoginInput(data) {
    let errors = {}
    functions
        data.email = !isEmpty(data.email) ? data.email : "";
        data.password = !isEmpty(data.password) ? data.password : "";

    if(Validator.isEmpty(data.email)) {
        errors.email = "Email field is required"
    } else if(!Validator.isEmail(data.email)) {
        errors.email = "Wrong email"
    }

    if(Validator.isEmpty(data.password)) {
        errors.password = "Password is required"
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}