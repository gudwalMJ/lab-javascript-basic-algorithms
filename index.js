// Iteration 1: Names and Input

let hacker1 = "Josip";

console.log("The driver's name is " + hacker1);

let hacker2 = "Noelia";

console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

let hacker1 = "Josip";
let hacker2 = "Noelia";

if (hacker1.length > hacker2.length) {
  console.log(
    "The driver has the longest name, it has " + hacker1.length + " characters."
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    "It seems that the navigator has the longest name, it has " +
      hacker2.length +
      " characters."
  );
} else {
  console.log(
    "Wow, you both have equally long names, " + hacker1.length + "characters!"
  );
}

// Iteration 3: Loops

/* 3.1 */

let hacker1= "Josip";
let hacker2= "Noelia";
let driverNameSeparated = "";

for (let i = 0; i < hacker1.length; i++) {
 driverNameSeparated += hacker1[i].toUpperCase() + " ";
}

console.log(driverNameSeparated.trim());

/* 3.2 */

let hacker1= "Josip";
let hacker2= "Noelia";
let reversedNavigatorName = "";

for (let i =hacker2.length -1; i >= 0; i--) {
  reversedNavigatorName += hacker2[i];
}

console.log(reversedNavigatorName);

/* 3.3 */

let hacker1= "Josip"
let hacker2= "Noelia"

if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker2 < hacker1) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}

/* bonus 1 */

let longText = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sem diam, auctor vel tempor ac, tempus quis ipsum. Duis sit amet varius neque, eu sagittis risus. Sed hendrerit orci id auctor pulvinar. Fusce nisi eros, consequat eu vulputate sed, bibendum ac metus. Proin turpis velit, rutrum vel dolor ac, consequat rutrum massa. Nullam porta lacus vel enim semper imperdiet. Aenean ac sollicitudin nisi.

Cras gravida enim id vestibulum fermentum. Vivamus eu magna felis. Pellentesque non elit blandit, lacinia justo ut, sagittis elit. Donec imperdiet orci porta massa dignissim condimentum. Sed ut fringilla odio. Sed sit amet erat ultrices leo vestibulum cursus. Phasellus volutpat mattis nunc non consequat. Cras eros tellus, tincidunt et porta et, rhoncus quis nibh. Duis dapibus dui sed tincidunt eleifend. Vestibulum eu arcu enim. Etiam ut dolor finibus, dignissim nunc ut, feugiat justo. In eleifend lectus lacus.

Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam imperdiet sem lacus, eget vestibulum sapien iaculis id. Morbi eget egestas risus. Donec consequat ipsum suscipit augue elementum finibus quis in ex. Quisque elementum at ex sed lobortis. Suspendisse luctus tempus dapibus. Donec lacinia odio ac leo euismod aliquet. Nam auctor lobortis odio, non scelerisque magna volutpat id. Cras eros ipsum, dictum vitae ex at, sodales pharetra magna. Mauris mollis, purus vel varius tempor, dui felis tincidunt ligula, a eleifend diam dolor sit amet turpis. Quisque dignissim egestas nibh at vestibulum. Pellentesque facilisis purus non sem blandit, a tempor diam egestas. Curabitur maximus tortor vitae tellus placerat, id tincidunt leo viverra. Quisque pharetra, lectus non laoreet suscipit, nisi mi porttitor purus, quis fermentum sapien enim vel tellus. Nulla cursus nisl in tellus finibus, eu commodo tellus ornare. Donec ultrices, turpis a sodales luctus, tellus dui rhoncus eros, quis congue elit erat eu odio. `;

let words = longText.split(/\s+/);
let wordCount = words.length;

let etCount = 0 ;
for (let i = 0; i < words.length; i++) {
  let cleanedWord = words[i].replace(/[^\w\s]/g, "").toLowerCase();

    if (cleanedWord === "et") {
        etCount++;
  }
}

console.log("Number of words:", wordCount);
console.log("Number of occurrences of 'et':", etCount);

