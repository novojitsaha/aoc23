import * as fs from 'fs';

const inputDir : string = './day1/input.txt';

function calculate(input: string) : number{

    
    
    const lines : string[] = input.split('\n');

    let counter : number = 0;

    for (const line of lines){

        let numArray : number[] = [];

        for(const char of line){
            if(!isNaN(parseInt(char))){

                numArray.push(parseInt(char));
                
            }
        }

        let len : number = numArray.length; 

        
        let result : string = `${numArray[0]}${numArray[len - 1]}`

        counter += parseInt(result);
        
    }

    return counter;
}



// read input file
fs.readFile(inputDir, 'utf8', (err, data) => {

    if(err){
       console.error('Error reading the file: ', err);
        return;
    } 
    
    console.log(calculate(data));
    
})


