# _{Application Name}_
Mr. Roboger's Neighborhood

#### _{Brief description of application}_
 Web application that takes a number from a user and returns a range of numbers from 0 to the user inputted number 
#### By _**{List of contributors}**_
Anthony McRae
## Technologies Used

HTML
HTML Markup
CSS
JSfiddle
JavaScript
Bootstrap
VSCode
JQuery
Git Hub

## Description
Create a web application that takes a number from a user and returns a range of numbers from 0 to the user inputted number with the following exceptions:

Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"
These exceptions are written from least to most important. The first exception should apply unless the second exception does, and the same with the second and third. So, for example, in your finished program,

The number 13 should be replaced with "Won't you be my neighbor?"
The number 21 should be replaced with "Boop".
The number 32 should be replaced with "Won't you be my neighbor?"
A user should be able to enter a new number and see new results over and over again.

Example: If a user inputs a 5, the program should display a list of values: "0", "Beep!", "Boop", "Won't you be my neighbor?", 4, 5

## Specs
Break the program down into simple, individual behaviors using the test syntax you've learned. Begin with the simplest possible behavior. List these behaviors (also known as "specs" or "specifications") in the project's README.md file. Here's an example first spec. (Note that you can choose to name your function differently - also, your function doesn't necessarily need to output an array - it could output a string instead.)
## Test
Describe: beepBoop()


**1 Test:** It should return a range of numbers from user input.


**Code:** numberRoboNumber (10);


**Expected Output:** [0,1,2,3,4,5,6,7,8,9,10]


**2 Test:** Any inputs with the number 1 should be replaced with "Beep!"


**Code:** numberRoboNumber(1)


**Expected Output:** [0,Beep!]


**3 Test:** Any inputs with the number 2 should return "Boop!"


**Code:** numberRoboNumber(2)


**Expected Output:** [0,Beep!,Boop!]


**4 Test:** Any inputs with the number 3 should return "Won't you be my neighbor?!"


**Code:** numberRoboNumber(3)


**Expected Output:** [0,Beep!,Boop!,Won't you be my neighbor?]


**5 Test:** Any inputs with the number 13 should return "Won't you be my number"


**Code:** numberRoboNumber(13)


**Expected Output:** [0,Beep!,Boop!,Won't you be my neighbor?,4,5,6,7,8,9,Beep!,Beep!,Boop!,Won't you be my neighbor?]


**6 Test:** Any inputs with the number 13 should return "Won't you be my number"


**Code:** numberRoboNumber(13)


**Expected Output:** [0,Beep!,Boop!,Won't you be my neighbor?,4,5,6,7,8,9,Beep!,Beep!,Boop!,Won't you be my neighbor?]


**7 Test:** Any inputs with the number 21 should return "Won't you be my number"


**Code:** numberRoboNumber(21)


**Expected Output:** [0,Beep!,Boop!,Won't you be my neighbor?,4,5,6,7,8,9,Beep!,Beep!,Boop!,Won't you be my neighbor?,Beep!,Beep!,Beep!,Beep!,Beep!,Beep!,Boop!,Boop!]


**8 Test:** Any inputs with the number 32 should return "Won't you be my number"


**Code:** numberRoboNumber(32)


**Expected Output:** [0,Beep!,Boop!,Won't you be my neighbor?,4,5,6,7,8,9,Beep!,Beep!,Boop!,Won't you be my neighbor?,Beep!,Beep!,Beep!,Beep!,Beep!,Beep!,Boop!,Boop!,Boop!,Won't you be my neighbor?,Boop!,Boop!,Boop!,Boop!,Boop!,Boop!,Won't you be my neighbor?,Won't you be my neighbor?,Won't you be my neighbor?]


**9 Test:** Any inputs with the number 13 should return "Won't you be my number"


**Code:** numberRoboNumber()


**Expected Output:** []



Describe: beepBoop()
Test: "It should return an array with a 0 if the number 0 is inputted"
Expect(beepBoop(0).toEqual([0]);

## Setup/Installation Requirements

To clone and run from GitHub Repo:

In bash at a folder of your choice, type the following:
$ git clone https://github.com
$ code .
Use a program such as VSCode to view and run the program.
Alternatively, see links below to open in your browser using the Reach this webpage through the browser of your choice using the Active gh-pages link

Recommend using the most up to date version of your browser.

Links to GitHub repositories can be run in VSCode or a similar application.

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_

## Known Bugs

No known issues.

## License
Copyright (c) 2021 Anthony McRae

This software is licensed under the MIT license.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Contact Information

anthonytoddmcrae@gmail.com