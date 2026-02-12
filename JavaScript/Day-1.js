/** Languages - Javascript (node.js)
/** Task
A greeting function is provided for you in the editor below. It has one parameter, parameterVariable . Perform the following tasks to complete this challenge:
Use console.log() to print Hello, World! on a new line in the console, which is also known as stdout or standard output. The code for this portion of the task is already provided in the editor.
Use console.log() to print the contents of  (i.e., the argument passed to main). 

 Input Format
Data Type	- string 
Parameter - parameterVariable
Description - A single line of text containing one or more space-separated words.

 Output Format
Print the following two lines of output:
On the first line, print Hello, World! (this is provided for you in the editor).
On the second line, print the contents of parameterVariable .

Sample Input -
Welcome to 10 Days of JavaScript!
Sample Output -
Hello, World!
Welcome to 10 Days of JavaScript! 

 Explanation 
We printed two lines of output:
We printed the literal string Hello, World! using the code provided in the editor.
The value of  parameterVariable passed to our main function in this Sample Case was Welcome to 10 Days of JavaScript!. We then passed our variable to console.log, which printed the contents of parameterVariable .**/

// Code begins here 
function greeting(parameterVariable) {
  console.log("Hello ! , World!")
  console.log(parameterVariable);
}
// stdout
  

