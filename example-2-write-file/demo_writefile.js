const fs = require("fs");

const content = "This is the content of the file";

fs.writeFile("demo_file.txt", content, (err) => {
  if (err) throw err;

  console.log("File has been written");
});

console.log("This will print (before writing the file)");
