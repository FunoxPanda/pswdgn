exports.generate = (lenght, special) => {

    var retVal = "";
    var length = parseInt(lenght, 10);
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    if (special === true) {
        charset += "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
    }

    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }

    return retVal;
}

exports.strenght = (password) => {
    let strength = 0;
    if (password.length >= 8 && password.length <= 12) {
        strength += 10;
    } else if (password.length > 12) {
        strength += 25;
    }
    let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
    if (regex.test(password)) {
        strength += 25;
    }

    if (!/(\w)\1{2,}/.test(password)) {
        strength += 25;
    }
    if (!/(012|123|234|345|456|567|678|789)/.test(password)) {
        strength += 25;
    }

    return (strength/75*100).toFixed(2);
}