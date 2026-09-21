const fs=require('fs').promises;

async function writeFile() {
    try{
        await fs.writeFile("promises.txt","Hello Students!");
        console.log("File created and data written successfully.");
    } catch(error){
        console.log("error",error);
    }
}
writeFile();

async function readFile() {
    try{
        const data= await fs.readFile("promises.txt","utf8");
        console.log("File Content:");
        console.log(data);
    } catch(error){
        console.log("error",error);
    }
}
readFile();

async function appendFile() {
    try{
        await fs.appendFile("promises.txt",`\nhi`);
        console.log("File appended successfully.");
    } catch(error){
        console.log("error",error);
    }
}
appendFile();
async function readFile() {
    try{
        const data= await fs.readFile("promises.txt","utf8");
        console.log("File Content:");
        console.log(data);
    } catch(error){
        console.log("error",error);
    }
}
readFile();
async function renameFile() {
    try {
        await fs.rename("promises.txt", "renamed_promises.txt");
        console.log("File renamed successfully.");
    } catch(error) {
        console.log("error", error);
    }
}
renameFile();

async function deleteFile() {
    try {
        await fs.delete("renamed_promises.txt","utf8");
        console.log("File deleted successfully.");
    } catch(error) {
        console.log("error", error);
    }
}
deleteFile();