const fs = require("fs");

const content = "This is the content of the file";

fs.writeFileSync("demo_file_sync.txt", content);

console.log("File has been written");
