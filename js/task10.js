"use strict"

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ["ru", "en"],
        programmingLanguages: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(obj) {
        const {age} = obj;
        const {languages} = obj.skills;
        let str = `Мне ${age} и я владею языками: `;

        languages.forEach(function(lang) {
            str += `${lang.toUpperCase()} `;
        });

        return str;
    }
};

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

function showExperience(obj) {
    const {exp} = obj.skills;
    return exp;
}

console.log(showExperience(personalPlanPeter));

function showProgrammingLangs(obj) {
    let str = '';
    const {programmingLanguages} = obj.skills;
    for (let key in programmingLanguages) {
        str += `Язык ${key} изучен на ${programmingLanguages[key]}`;
    }

    return str;
}

console.log(showProgrammingLangs(personalPlanPeter));