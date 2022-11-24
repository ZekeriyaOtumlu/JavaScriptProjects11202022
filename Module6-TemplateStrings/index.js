//Template  strings / literals

const recipient = "Zack"
const sender = "Team"

//Refactor the email string to use template strings
const email = "Hey " + recipient + " ! How is it going? Cheers " + sender

console.log(email)

//refactoring:
const email2 = `Hey ${recipient} ! How is it going? Cheers ${sender}`
console.log(email2)

//break the template strings to multiple lines
const multipleLines = `
Hey ${recipient} ! 
How is it going? Cheers ${sender}`
console.log(multipleLines)