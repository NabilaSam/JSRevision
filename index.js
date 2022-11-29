// Displaying an array
let data = [9, 3, 1, "peter", 5, 10];
// if you add -1 after the data.length, it will decrease the size of the array
// let size = data.length - 1;

// This is the correct size of the array. Because the positions are identified as [0,1,2...]
let size = data.length;

// This will display as "Array size: 6"
console.log("Array size: ", size);

// Square brackets indicate the position
console.log("Element", data[3]);

// this changes the length of the array to 5, and then retrieves the exact middle
let middleIndex = Math.trunc((data.length -1)/2)
console.log("middleIndex: ", middleIndex);

console.log("middle element: ", data.slice(middleIndex, middleIndex + 2) );
// prints the second last element in the array
console.log(data[data.length-2]);

// Display the highest number in the array
data.splice(3, 1);
console.log("Max: ", Math.max(...data));

let onlyNumbers = data.filter( item => {
    if (typeof item != 'string')
    return item;
})

let sentence ="I love programing";
// display the first word only
console.log(sentence[0]);

// the output will split by the letter p
// but it displays as ['I love', 'rograming']
console.log(sentence.split('p'));

// Another example.
// Splits by the full stop
// but also removes the full stop uses a ',' to split
let sentence2 = "I love programing. I love cycling. I love swimming. I love gaming";
console.log(sentence2.split('. '))

// let myDate = new Date();
//     console.log("My date: ", myDate.toLocaleDateString());

// adding 5 days to the current date
let myDate = new Date();
let todayDate = myDate.getDate();
console.log("setDate()", new Date(myDate.setDate(todayDate +5)))

// If statement
// note: do not use an if inside an if statement('nested')
let age = 18;
let salary = 5000;
if(age>= 18) {
    console.log("You're legal");
    // if(salary >= 5000){
    //     console.log("You're still broke");
    // }
    // else{
    //     console.log("Get another job");
    // }
}
else{
    console.log("You are not legal");
};

// both conditions need to be met in order to display the if(The true) statement
if(age > 17 && salary >= 5000) {
    console.log("Well done");
}else{
    console.log("Thank you for coming");
};

let monthInt = 1;
switch(monthInt) {
    case 1:
        console.log("January");
        break;
        case 2:
            console.log("February");
            break;
}

// Switch cases and ranges
let grade = 68;

switch(true) {
    case grade == 100:
        console.log("Grade: A");
        console.log("Pass");
        break;
    case grade >= 90:
        console.log("Grade: B");
        console.log("Pass");
        break;    
    case grade >=75:
        console.log("Grade: C");
        console.log("Pass");
        break;    
    case grade >=50:
        console.log("Grade: D");
        console.log("Pass");
        break;    
    case grade <=49:
        console.log("Grade: F");
        console.log("Fail");
        break;  
        default:
            console.log("Absent");
}

// Another example on ranges
let mark = -2;

switch(true) {
    case mark == 100:
        console.log("mark: A");
        console.log("Pass");
        break;
    case (mark >= 90) && (grade <= 99):
        console.log("mark: B");
        console.log("Pass");
        break;    
    case (mark >=75) && (grade <= 89):
        console.log("mark: C");
        console.log("Pass");
        break;    
    case (mark >=50) && (grade <= 74):
        console.log("mark: D");
        console.log("Pass");
        break;    
    case (mark <=49)&& (grade <= 0):
        console.log("mark: F");
        console.log("Fail");
        break;   
        default:
            console.log("Did not write") 
}