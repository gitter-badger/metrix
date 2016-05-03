/**
 * metrix.js
 * provides some metrics for js submission
 * usage: metrix.js <solution> <function-name> <data>
 *
 * @path-to-solution:  The filename for your js solution
 * @function-name:     The name of the action function in solution
 * @path-to-data:      The filename containing large sample
 *                     input data to be tested against your 
 *                     provided solution
 *
 * Example: node metrix isPalindrome.js  isPalindrome  data.txt
 * 
 * NOTE: In this example, data.txt may contain several palindromes
 *       separated by a new line as follows:
 *
 *       abba
 *       racecar
 *       notapalindrome
 *       superlongsuperlongsuperlongsuperlongsuperlong
 *       ... etc
 *
 *       In other cases where there are multiple input arguments
 *       each line will contain an argument followed by a 
 *       comma as follows:
 *
 *       arg1,arg2,arg3
 *       arg1,arg2,arg3
 *       ...etc 
 */

(function () {

  var fs = require('fs'),
      solution = process.argv[0],
      functionName = process.argv[1],
      data = process.argv[2];

  if (!solution || !data) {
    console.log("Error: missing arguments");
  } else {
    fs.readFile(solution, {encoding: 'utf-8', flag: 'rs'}, function (err,data) {
      if (err) {
        return console.log(err);
      }
      //TODO Add code to do the following, in that order:
      // 1 - store char count of the solution
      // 2 - read data file
      // 3 - take timestamp
      // 4 - EVAL solution
      // 5 - for each new-line in data file EVAL solution
      //     with the provided arguments
      // 6 - take timestamp
      // 7 - get value of last timestamp - first timestamp
    });
  }

}());
