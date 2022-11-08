"use strict";
var statusCode;
(function (statusCode) {
    statusCode[statusCode["SUCCESS"] = 1] = "SUCCESS";
    statusCode["IN_PROCESS"] = "p";
    statusCode["FAILED"] = "f";
})(statusCode || (statusCode = {}));
const res = {
    message: 'Платеж успешен',
    statusCode: statusCode.SUCCESS
};
// const SUCCESS = 'success'
// 1 - успех
// 'p - в процессе
// 'f - отклонен
if (res.statusCode === statusCode.SUCCESS) {
}
function action(status) {
}
action(statusCode.SUCCESS);
action(1);
function compute() {
    return 3;
}
var Roles;
(function (Roles) {
    Roles[Roles["ADMIN"] = 1] = "ADMIN";
    Roles[Roles["USER"] = compute()] = "USER";
})(Roles || (Roles = {}));
