#Metrix

Run this tool against your submissions to measure some cool metrics such as character count and performance

This is a work in progress, for now only the JS solution is being implemented. Eventually a python
solution will be included as well, and a shell-script command will be available to run the tool
against any type of code (JS / PY)

##Instructions

usage: metrix.js <solution> <function-name> <data>

 @path-to-solution:  The filename for your js solution
 @function-name:     The name of the action function in solution
 @path-to-data:      The filename containing large sample
                     input data to be tested against your
                     provided solution

Example: node metrix isPalindrome.js  isPalindrome  data.txt

NOTE: In this example, data.txt may contain several palindromes
      separated by a new line as follows:

      abba
      racecar
      notapalindrome
      superlongsuperlongsuperlongsuperlongsuperlong
      ... etc

      In other cases where there are multiple input arguments
      each line will contain an argument followed by a
      comma as follows:

      arg1,arg2,arg3
      arg1,arg2,arg3
      ...etc
