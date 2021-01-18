exports.name = "John";
exports.data = "This is some data";

var privateVariable = 5;
exports.getPrivate = function () {
    return privateVariable;
};