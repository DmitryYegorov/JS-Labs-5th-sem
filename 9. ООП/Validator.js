class Validator{

    isEmail(email){
        return /[-.\w]+@([\w-]+\.)+[\w-]+/g.test(email);
    }

    isDomain(domain){
        return /(\w+\.)+\w+/g.test(domain);
    }

    isDate(date){
        return /(\d{2}\:)+\d{2}\:+\d{4}/g.test(date);
    }

    isPhone(phone){
        return /(\+\d{12})/g.test(phone);
    }
}

module.exports = Validator;