'use strict'
const {DateLocation} = require('../models');

const city = ["서울", "부산", "대구", "인천", "광주", "대전", "울산", "세종", 
"경기", "강원", "충북", "충남", "전북", "전남", "경북", "경남", "제주"];


exports.pusher = async function(sheet) {
    let rows = sheet.getSheetValues();
    let records = new Array();

    //excel -> array
    for(let i=3; i<rows.length-2; i++) {
        for(let j=3; j<rows[i].length; j++){
            let array = new Array();
            array[0] = city[j-3];
            array[1] = rows[i][j];
            array[2] = rows[i][1];

            records.push(array);
        }
    }
    
    //array -> insert db
    return insertDatabase(records);

};

async function insertDatabase(records) {
    for(let data of records){
        try{
            await DateLocation.create({
                city: data[0],
                inoculationNum: data[1],
                date: data[2]
            });
        }catch(err){
            console.error(err);
            return false;
        }
    }

    return true;
}