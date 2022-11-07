"use strict";
function getFullName(userEntity) {
    return `${userEntity.firstname} ${userEntity.surname}`;
}
const user = {
    firstname: 'Nikita',
    surname: 'Demidov',
    city: 'Minsk',
    age: 33
};
console.log(getFullName(user));
