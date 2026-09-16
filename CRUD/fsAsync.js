const fs=require('fs');
// fs.writeFile(
//     'sample.txt','Welcome to Full Stack Development',(err)=>{
//         if(err){
//             console.log('Error creating file:',err);
//             return;
//         }
//         console.log('File created Successfully');
//     }
// )
fs.readFile('sample.txt','utf8',(err,data)=>{
    if (err){
        //console.log('Error reading file:',err);
        console.error("Error reading the file",err);
        return;
    }
    console.log('File content are:');
    console.log(data);
})
fs.appendFile('sample.txt','\nSemester : 3',(err)=>{
    if(err){
        console.log('Error updating file:',err);
    }
    else{
        console.log('\n. File updated successfully!');
    }
})
//updated read after the updation

// fs.writeFile(
//     'sample3.txt','Welcome to Full Stack Development',(err)=>{
//         if(err){
//             console.log('Error creating file:',err);
//             return;
//         }
//         console.log('File created Successfully');
//     }
// )
fs.unlink('sample3.txt',(err)=>{
    if(err){
        console.error('Error deleting file:',err);
    }
    else{
        console.log('\n.File Deleted Successfully!');
    }
})