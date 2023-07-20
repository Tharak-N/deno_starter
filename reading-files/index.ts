
/**Reading a file */
const fileReader = await Deno.readFile('../files/text-file.txt')
console.log("the file reader output is", fileReader)


/**Writing a file */
const fileWriter = await Deno.writeTextFile('../files/write-file', 'hello world')
console.log(fileWriter)

/**Environmental Access */
const environment = await Deno.env.get('TEST')