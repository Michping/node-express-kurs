const { writeFileSync, writeFile } = require("fs");

for (let i = 0; i < 1000; i++) {
    writeFileSync("./content/storFil.txt", `Hello world${i}`, {flag: "a"});
}