let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"]

/* Use a for loop to log the following to the console:
The 5 largest countries in the world:
- China
- India
- United States
- Indinesia
- Pakistan
*/

for (let i = 0; i < largeCountries.length; i++) {
    console.log("- " + largeCountries[i])
}

let largeCountries2 = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]

// You need to help me fixup the largeCountries array so that 
// China and Pakistan are added back into their respective places

// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()

largeCountries2.pop() // deleting the last element Monaco
largeCountries2.push("Pakistan")
console.log(largeCountries2)

largeCountries2.shift() // Removing first element from the list Tuvalu
largeCountries2.unshift("China") // Adding China to the beginning of the list
console.log(largeCountries2)