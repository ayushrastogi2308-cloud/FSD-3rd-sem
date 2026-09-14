const fs =require('fs');
// fs.writeFileSync('example.txt','This is experiment 1 ','utf8');
// console.log('Create file run successfully');
// // const data =fs.readFileSync('exapmle.txt','utf8');
// // console.log('file content is: ',data);
// fs.appendFileSync('example.txt','\n This is new line');
// console.log('Exapmle File is append');
// fs.unlinkSync('student1.txt');
// console.log('student file is deleted');
// fs.mkdirSync('Sample Folder');
// console.log("a new folder is created");
// fs.rmdirSync('Sample Folder');
// console.log('new folder is deleted');
if(fs.existsSync('example.txt')){
    console.log('file exist');
}
else{
    console.log('file not exist');
}