"use strict";
const skills = ['dev', 'devops', 'testing'];
for (const skill of skills) {
    console.log(skill.toLowerCase());
}
const res = skills
    .filter(s => s !== 'devops')
    .map(s => s + '! ')
    .reduce((a, b) => a + b);
console.log(res);
