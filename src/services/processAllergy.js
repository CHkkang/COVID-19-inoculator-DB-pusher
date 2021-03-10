'use strict'
const {Allergy} = require('../models');

exports.pusher = async function(sheet) {
    let rows = sheet.getSheetValues();
    let records = new Array();

    //excel -> array 
    for(let i=2; i<rows.length-3; i++) {
        let array = new Array();
        for(let j=0; j<rows[i].length-1; j++){
            array[j] = rows[i][j+1];
        }
        records.push(array);
    }
    
    return insertDatabase(records);
};

async function insertDatabase(records) {
        //array -> insert db
        for(let data of records){
            try{
                await Allergy.create({
                    date: data[0],
                    company: data[1],
                    slightIllness: data[2],
                    seriousIllness: data[3],
                    deathNum: data[4],
                    anaphylaxisNum: data[5]
                });
            }catch(err){
                console.error(err);
                return false;
            }
        }
    
        return true;
}