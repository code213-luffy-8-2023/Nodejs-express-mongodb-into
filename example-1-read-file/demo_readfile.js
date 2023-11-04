const fs = require("fs");
/**
 * fs.readFile() is used to read files on your computer.
 * If the file does not exist, an error will be thrown.
 * If no encoding is specified, then the raw buffer is returned.
 * The first argument is the file path, the second argument is the encoding type.
 */
fs.readFile("demo_file.txt", (err, data) => {
  if (err) throw err;

  console.log(data.toString());
  console.log("This will print (after reading the file)");
});

console.log("This will print (before reading the file)");
