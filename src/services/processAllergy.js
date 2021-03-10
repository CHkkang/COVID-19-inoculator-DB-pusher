'use strict'
const sequelizeService = require('./sequelizeService');

exports.pusher = async function(sheet) {
    let rows = sheet.getSheetValues();
    let records = new Array();

    for(let i=2; i<rows.length-3; i++) {
        let array = new Array();
        for(let j=0; j<rows[i].length-1; j++){
            array[j] = rows[i][j+1];
        }
        records.push(array);
    }
    console.log(records);
    sequelizeService.insertAllergy(records);
};