"use strict";
// მოცემულია მასივი:
// ფილტრის საშულებით გაფილტრეთ და გამოიტანეთ მარტო ის სიტყვები
// რომლების სიმბოლოების რაოდენობა იქნება 3-ზე მეტი;

// let languages = ["html", "css", "javascript", "python", "php"];
// let result = languages.filter((item) => item.length > 3);
// console.log(result);

// შეამოწმეთ მოცელუმ მასივში  არის თუ არა ერთი მაინც დადებითი რიცხვი some მეთიდით.
// let arr = [-1, -2, -3, 4];
// let item = (element) => element > 0;
// console.log(arr.some(item));

// Მოცემულია მასივი:
// Filter მეთოდის საშუალებით დააბრუნეთ მასივი, რომელიც შედგება ისეთი სიტყვებისგან რომელიც შეიცავს ასო m-ს ან M-ს;
// let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];
// let array1 = words.filter(
//     item => item.includes('m')||item.includes('M')
// );
// console.log(array1);

// შექმენით htmlში დივი, მიანიჭეთ id და ჯსდან ამ დივში დაამატეთ შემდეგი html სტრუქტურა:
// <div class=“wraper”>
//  <img src=“რაღაცა სურათის მისამართი დაამატეთ” alt=“image”>
// <h2 class=“title”> image title </h2>
// </div>

// let divID = document.getElementById("div-id");
// let newElement = document.createElement("img");
// let newHeader = document.createElement("h2");
// divID.classList.add("wraper");
// newElement.setAttribute(
//   "src",
//   "https://cdn.pixabay.com/photo/2016/11/25/23/15/moon-1859616_1280.jpg"
// );
// newElement.setAttribute("alt", "image");
// newHeader.textContent = "image title";
// newHeader.classList.add("title");
// divID.appendChild(newElement);
// divID.appendChild(newHeader);

// მოცემულია სტრინგი - ‘12345’, გაიგეთ ამ რიცხვებსის ჯამი.
// ( უნდა გადაიყავნოთ მასივში, გათვალოთ ჯამი,
//  და შემდგ ეს სტრინგი გადაიყავნოთ რიცხვში);

// let arra1 = "12345".split("").join("");
// let sum = 0;
// for (let num = 0; num < arra1.length + 1; num++) {
//   sum += num;
// }
// console.log(sum);

// მოცემულია მასივი, შემდეგი მნიშვნელობებით -
// გამოიტანეთ მარტო ციფრები;

// let array = ["html", 100, "css", "javascript", 25, 10, "python", 11].filter(
//   Number
// );

// console.log(array);

// მოცემულია მასიცი:

// შექმენით ახალი მასივი map ფუნქციის საშუალებით შემდეგი ლოგიკით:
// თუ ელემენტი არის რიცხვი ამ მასივში უნდა იყოს ამ რიცხვის კვადრატი.
//  თუ ელემენტი არის სტირნგი, მაშინ ახალ მასივში უნდა იყოს ეს ტექსტი დიდი ასოებით.
//  სხვა შემთხვევაში ელემენტი უნდა დაემატოს უცვლელად.

// let array2 = [14, 150, "css", null, "javascript", 25];
// let newArray = array2.map((i) => {
//   if (typeof i === "number") {
//     return i * i;
//   } else if (typeof i === "string") {
//     return i.toUpperCase();
//   } else {
//     return i;
//   }
// });
// console.log(newArray);

// მოცემულია სტრინგი - ‘javascript’,
//  მიიღეთ შემოტრიალებული ვარიანტი მეთოდების გარეშე ( for loop ით)
// let element = "javascript";
// let araay = "";

// for (let e = element.length - 1; e >= 0; e--) {
//   araay += element[e];
// }
// console.log('"' + araay + '"');

// მოცემულია სტრინგი: let info= ‘Good day”, ამოიღეთ სიტყვა day და ჩასვით ახალ ცვლადში slice მეთოდის საშუელებით.

// let info = "Good day";

// let a = info.slice(5);

// console.log(a);

// დაწერეთ ფუნქცია, რომელიც პარამეტრსდ იღებს სტრინგს, და დააბრუნებს ჩაწერილი სტრინგის სიგრძეს.

// function func1(item) {
//      return item.length;
// }
// let newfunc1 = func1(prompt('enter your name'));
// console.log(newfunc1.toString());

// Prompt ფუნქციის საშუალებით კითხეთ მომხმარებელს შემდეგი კითხვა: საქართველოს დედაქალაქი?
//  სწორი პასუხი ჩაწერეთ პატარა ასობიეთ და
//    შეინახეთ ცვლადში.
//     როდესაც მიიღებთ პასუხს მომხმარებლისგან,
//      გადაიყვანეთ ეს პასუხი პატარა ასოებად და შეადარეთ სწორ პასუხს.
//      თუ მომხმარებლის პასუხი სწორია, დაბეჭდეთ სწორია, თუ არა მაშინ დაბეჭდეთ არასწორია.

// let corectAnwser = "tbilisi";
// userAnswer = prompt(" საქართველოს დედაქალაქი?");
// if (userAnswer.toLowerCase() == corectAnwser) {
//   console.log("სწორია");
// } else console.log("არასწორია");





// მოცემულია: let link = “https://google.com”. დაწერეთ ფუნქცია,
// რომელიც პარამეტრად იღებს ამ ცვლადს, და შეამოწმეთ indexof მეთოდის საშუალებით
// არის თუ არა ამ ცვლადში “https://“. თუ კი გამოიტანეთ - კი მოიცავს, თუ არა - არა, .


// /* es ver gavakete
// // let link = "https://google.com";
// // function newfunc1(index) {
// //   if (index.indexOf("https://") == true) {
// //     return console.log("მოიცავს");
// //   } else {
// //     return console.log("არ მოიცავს");
// //   }
// //   index=link;
// // }
// // newfunc1(link);
// */




// let link = "https://google.com";

// let newfunc = function(){
//     if (link.indexOf("shttpss://") !== -1) {
//         return console.log("მოიცავს");
//     }else {
//         return console.log("ar მოიცავს ");
//     }
   
// }
// newfunc(link);

// მოცემულია მასივი, რომელშიც არის ერთზე მეტი მნიშვნელობა,
//  მაგრამ კონკრეტულად რამდენი არ ვიცით, შეიძლება 100 ან 200 ან 10. 
//  let fruits = ['apple', 'mango', 'avocado','kiwi'] 
//  fruits.splice(fruits.length-2, 1, 'strawberry');
//  console.log(fruits);
//   splice მეთოდის საშუალებით წაშალეთ ბოლოს წინა მნიშვნელობა და მავის მავივრად ჩასვით “strawberry”.
