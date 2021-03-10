const {DateLocation} = require('../models');
const {OrgDateLocation} = require('../models');
const {Allergy} = require('../models');
const {OrgLocation} = require('../models');

exports.insertDateLocation = async function(array) {
    for(let data of array){
        try{
            await DateLocation.create({
                city: data[0],
                inoculationNum: data[1],
                date: data[2]
            });
        }catch(err){
            return false;
        }
    }

    return true;
};

exports.insertOrgDateLocation = async function(array) {
    for(let data of array){
        try{
            await OrgDateLocation.create({
                city: data[0],
                inoculationNum: data[1],
                date: data[2],
                institution: data[3]

            });
        }catch(err){
            return false;
        }
    }

    return true;
};

exports.insertOrgLocation = async function(array) {
    for(let data of array){
        try{
            await OrgLocation.create({
                city: data[0],
                inoculationNum: data[1],
                institution: data[2]
            });
        }catch(err){
            return false;
        }
    }

    return true;
};

exports.insertAllergy = async function(array) {
    for(let data of array){
        try{
            await Allergy.create({
                date: data[0],
                company: data[1],
                slightIllness: data[2],
                seriousIllines: data[3],
                deathNum: data[4],
                anapylaxisNum: data[5]
            });
        }catch(err){
            console.error(err);
            return false;
        }
    }

    return true;
};


