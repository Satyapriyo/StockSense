let mystring=["8b8d6","96b70","08ba3","0440a","7088f737f"];
let secretOne="00";
let secretTwo="8499f";
let secret=secretTwo.split("").reverse().join("");
let stepOne;
stepOne=mystring.join("").split("").reverse().join("");
let stepTwo;
stepTwo=stepOne.split(secretOne);
let stepThree;
stepThree=stepTwo[0]+stepTwo[1];
let key;
key=stepThree+secret;
export{key};
