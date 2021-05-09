// Importing large data set json file
const fs = require('fs');

let rawdata = fs.readFileSync('large-file.json');
let largeData = JSON.parse(rawdata);


/**
 * @desc: Function is defined to yield data lazily (Generator function)
 * @param {*} largeData : Array<Object>
 */
function* largeDataSetProcessingGenerator(largeData) {
    const arrLength = largeData.length;
    for(let i = 0; i<arrLength; i++) {
       yield largeData[i];
    }
}

//Function defination to calculate execution without generators
function itterateValueWithoutGenerator() {
    const start = new Date().getTime();
    const newFormatedArray = [];
    const arrLength = largeData.length
    for(let i = 0; i<arrLength; i++) {
        newFormatedArray.push(largeData[i])
    }
  
    const end = new Date().getTime();
    const time = end - start; //calculating the execution time
    console.log('New Manipulated Data set length', newFormatedArray.length); //logging the array lenth
    console.log('Execution time without generator: ' + time + 'ms'); //execution time
}


//Function defination to calculate execution with generators
function itterateValueUsingGenerator() {
    const start = new Date().getTime();

    //calling generator function by passing the large data set
    const returnvalue = largeDataSetProcessingGenerator(largeData);
    const newFormatedArray = []
    //Iterating iterable object returned by generator
    for(let obj of returnvalue) {
       newFormatedArray.push(obj)
    }
    const end = new Date().getTime();
    const time = end - start;//calculating the execution time
    
    console.log('New Manipulated Data set length', newFormatedArray.length); //logging the array lenth
    console.log('Execution time with generator: ' + time + 'ms');//execution time
}

itterateValueWithoutGenerator();
itterateValueUsingGenerator();