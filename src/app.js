'use strict'

const processDateLocation = require('./services/processDateLocation');
const processOrgDateLocation = require('./services/processOrgDateLocation');
const processOrgLocation = require('./services/processOrgLocation');
const processAllergy = require('./services/processAllergy');
const Excel = require('exceljs');

(async () => {

    const DATA_FILE_NAME = "data.xlsx"
    const filePath = `./data/${DATA_FILE_NAME}`;

    const workbook = new Excel.Workbook();
    await workbook.xlsx.readFile(filePath);

    const dateLocationSheet = workbook.worksheets[0];
    const orgDateLocationSheet = workbook.worksheets[1];
    const orgLocationSheet = workbook.worksheets[2];
    const allergySheet = workbook.worksheets[3];

    const isSucessList = [false, false, false, false];

    isSucessList[0] = processDateLocation.pusher(dateLocationSheet);
    isSucessList[1] = processOrgDateLocation.pusher(orgDateLocationSheet);
    isSucessList[2] = processOrgLocation.pusher(orgLocationSheet);
    isSucessList[3] = processAllergy.pusher(allergySheet);

    for(let i=0; i<isSucessList.length;i++){
        if(!isSucessList[i])
            console.log(workbook.worksheets[i] + "Fail insert data in database");
    }

})();