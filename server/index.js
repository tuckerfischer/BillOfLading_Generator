import express from 'express';
import cors from 'cors';
// Initialize the express app
const app = express();
app.use(cors());
app.use(express.json());

// Make some animals
import Chance from 'chance';
const chance = new Chance();

var lastNames = ['Carriers', 'Trucking', 'Transport'];

const BOL = [...Array(250).keys()].map(id => {
    var randomWord = lastNames[Math.floor(Math.random() * lastNames.length)];

    return {
        id,
        "Carrier Name": chance.last() + ' ' + randomWord,
        "Carrier Address": chance.address(),
        "Date": chance.date(),
        "Phone": chance.phone(),
        "Shipment Identification No": chance.integer({ min: 1000, max: 9999 }),
        "State and ZIP": chance.state() + ' ' + chance.zip(),
        "SAC": chance.word(),
        "FREIGHT BILL PRO NO": chance.integer({ min: 1000, max: 9999 }),
        "Consignee": chance.name(),
        "City": chance.city(),
        "ROUTE": chance.word(),
        "FROM": chance.name(),
        "Address": chance.address(),
        "State and Zip": chance.state() + ' ' + chance.zip(),
        "Special Instruction": chance.sentence(),
        "For Payment Send Bill To:": chance.name(),
        "Name": chance.name(),
        "State & ZIP": chance.state() + ' ' + chance.zip(),
        "Shippers Internal Data": chance.sentence(),
        "SID NO": chance.integer({ min: 1000, max: 9999 }),
        "Charges1": chance.floating({ min: 0, max: 1000, fixed: 2 }),
        "Rate1": chance.floating({ min: 1, max: 10, fixed: 2 }),
        "Weight Subject to Correction1": chance.floating({ min: 0, max: 1000, fixed: 2 }),
        "Code1": chance.word(),
        "Kind of packaging1": chance.word(),
        "HQ1": chance.integer({ min: 1, max: 100 }),
        "Number Shipping Units1": chance.integer({ min: 1, max: 100 }),
        "Charges2": chance.floating({ min: 0, max: 1000, fixed: 2 }),
        "Number Shipping Units2": chance.integer({ min: 1, max: 100 }),
        "HQ2": chance.integer({ min: 1, max: 100 }),
        "Kind of packaging2": chance.word(),
        "Code2": chance.word(),
        "Weight Subject to Correction2": chance.floating({ min: 0, max: 1000, fixed: 2 }),
        "Rate2": chance.floating({ min: 1, max: 10, fixed: 2 }),
        "Charges3": chance.floating({ min: 0, max: 1000, fixed: 2 }),
        "Number Shipping Units3": chance.integer({ min: 1, max: 100 }),
        "HQ3": chance.integer({ min: 1, max: 100 }),
        "Kind of packaging3": chance.word(),
        "Code3": chance.word(),
        "Weight Subject to Correction3": chance.floating({ min: 0, max: 1000, fixed: 2 }),
        "Rate3": chance.floating({ min: 1, max: 10, fixed: 2 }),
        "Charges4": chance.floating({ min: 0, max: 1000, fixed: 2 }),
        "Number Shipping Units4": chance.integer({ min: 1, max: 100 }),
        "HQ4": chance.integer({ min: 1, max: 100 }),
        "Kind of packaging4": chance.word(),
        "Code4": chance.word(),
        "Weight Subject to Correction4": chance.floating({ min: 0, max: 1000, fixed: 2 }),
        "Rate4": chance.floating({ min: 1, max: 10, fixed: 2 }),
        "Charges5": chance.floating({ min: 0, max: 1000, fixed: 2 }),
        "Number Shipping Units5": chance.integer({ min: 1, max: 100 }),
        "Kind of packaging5": chance.word(),
        "HQ5": chance.integer({ min: 1, max: 100 }),
        "Code5": chance.word(),
        "Weight Subject to Correction5": chance.floating({ min: 0, max: 1000, fixed: 2 }),
        "Rate5": chance.floating({ min: 1, max: 10, fixed: 2 }),
        "Charges6": chance.floating({ min: 0, max: 1000, fixed: 2 }),
        "Number Shipping Units6": chance.integer({ min: 1, max: 100 }),
        "Kind of packaging6": chance.word(),
        "Weight Subject to Correction6": chance.floating({ min: 0, max: 1000, fixed: 2 }),
        "HQ6": chance.integer({ min: 1, max: 100 }),
        "Code6": chance.word(),
        "Rate6": chance.floating({ min: 1, max: 10, fixed: 2 }),
        "Charges7": chance.floating({ min: 0, max: 1000, fixed: 2 }),
        "Number Shipping Units7": chance.integer({ min: 1, max: 100 }),
        "Code7": chance.word(),
        "HQ7": chance.integer({ min: 1, max: 100 }),
        "Kind of packaging7": chance.word(),
        "Weight Subject to Correction7": chance.floating({ min: 0, max: 1000, fixed: 2 }),
        "Rate7": chance.floating({ min: 1, max: 10, fixed: 2 }),
        "Number Shipping Units8": chance.integer({ min: 1, max: 100 }),
        "HQ8": chance.integer({ min: 1, max: 100 }),
        "Kind of packaging8": chance.word(),
        "Code8": chance.word(),
        "Weight Subject to Correction8": chance.floating({ min: 0, max: 1000, fixed: 2 }),
        "Rate8": chance.floating({ min: 1, max: 10, fixed: 2 }),
        "Charges8": chance.floating({ min: 0, max: 1000, fixed: 2 }),
        "REMIT C.O": chance.bool(),
        "REMIT C": chance.bool(),
        "TO": chance.name(),
        "TO2": chance.name(),
        "Address2": chance.address(),
        "City2": chance.city(),
        "State & Zip 2": chance.state() + ' ' + chance.zip(),
        "ATM": chance.bool(),
        "Prepaid": chance.bool(),
        "Collect": chance.bool(),
        "PREPAID $": chance.floating({ min: 0, max: 1000, fixed: 2 }),
        "Collect $": chance.floating({ min: 0, max: 1000, fixed: 2 }),
        "Dependant Shippers $": chance.floating({ min: 0, max: 1000, fixed: 2 }),
        "Per": chance.word(),
        "Total Charges": chance.floating({ min: 0, max: 10000, fixed: 2 }),
        "Signature Of Consignore": chance.name(),
        "Check Box if Collect": chance.bool(),
        "Shipper": chance.name(),
        "Per Shipper": chance.word(),
        "Carrier": chance.name(),
        "Per Carrier": chance.word(),
        "DUNS": chance.integer({ min: 100000000, max: 999999999 }),
        "Trailer/Car Number": chance.integer({ min: 100000, max: 999999 })
    }
});

// Endpoint to get generated values
app.get('/generated-bol', (req, res) => {
    res.send(BOL);
  });

app.listen(8080, () => console.log('Listening on port http://localhost:8080'));