const generatePassword = (lenght, special) => {

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

export default generatePassword;