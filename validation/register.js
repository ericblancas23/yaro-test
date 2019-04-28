const Validator = require("validator");
const isEmpty = require('is-empty');

module.exports = function validateRegisterInput(data) {
    let errors = {}
    functions
        data.name = !isEmpty(data.name) ? data.name:""
        data.email = !isEmpty(data.email) ? data.email:""
        data.password = !isEmpty(data.password) ? data.password:""
        data.password2 = !isEmpty(data.password2) ? data.password2:""

    if(Validator.isEmpty(data.name)) {
        errors.name = "Name is required"
    }
    if(Validator.isEmpty(data.email)) {
        errors.email = "Email is required"
    }
    if(Validator.isEmpty(data.password)) {
        errors.password = "password is required"
    }
    if(Validator.isEmpty(data.password2)) {
        errors.password2 = "password is required"
    }
    if(!Validator.isLength(data.password, {min: 6, max: 30})) {
        errors.password = "Password must be 6 characters long"
    }
    if(!Validator.equals(data.password, data.password2)) {
        errors.password2 = "Password must match"
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}