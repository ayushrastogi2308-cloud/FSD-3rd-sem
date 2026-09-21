const fs = require('fs').promises;
/*async function writeFile(){
    try{
        await fs.writeFile("promise.txt","Hello Students!");
        console.log("File Created and data written successfully.");
    }
    catch(error){
        console.log("Error:",error);
    }
}
writeFile();*/
async function readFile(){
    try{
        const data=await fs.readFile("promise.txt","utf8");
        console.log("File Content: ");
        console.log(data);
    }
    catch(error){
        console.error("Error: ",error);
    }
}
readFile();
/*async function rename(){
    try{
        await fs.rename("promise.txt","newpromise.txt");
        console.log("File name changed");
    }
    catch(error){
        console.error("Error",error);
    }
}
rename();*/
async function append(){
    try{
        await fs.append("newpromise.txt","\n Welcome to the new line");
        console.log("Line added successfully");
    }
    catch(error){
        console.log("Error: ",error);

    }
}
