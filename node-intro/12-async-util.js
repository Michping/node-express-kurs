const { readFile, writeFile, write } = require('fs');
const util = require('util');
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);


const start = async() => {
    try {
        const first = await readFilePromise("./content/first.txt", "utf8");
        const second = await readFilePromise("./content/second.txt", "utf8");
        await writeFilePromise(
            "./content/result123.txt",
            `Dette står i de andre filene: ${first} ${second}`,
            {flag: "a"}
        );
        console.log(first, second);
    } catch (error) {
        console.log(error);
    }
}


start();

// Vi slipper å gjøre koden under fordi vi folk allerede har gjort det for oss.

// const getText = (path) =>{
//     return new Promise((resolve,reject)=>{
//         readFile(path,'utf8',(err,data)=>{
//             if(err) {
//                 reject(err);
//             } else {
//                 resolve(data);
//             }
//         })
//     })
// }

//getText("./content/first.txt")
//    .then((result) => console.log(result))
//    .catch((err) => console.log(err));