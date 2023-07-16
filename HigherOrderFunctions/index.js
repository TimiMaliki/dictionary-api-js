//  testing

// let five = 5;

let Books = [
    {name:'way of a superior man' , Year: 2000 , soldYears:2030},
    {name:'Law of attraction' , Year: 2000  , favourites: 'favourite' , soldYears:2010} ,
    {name:'warrior within' , Year: 2000 , soldYears:2014},
    {name:'12 rules of life' , Year: 2000 , soldYears:2001},
    {name:'Atomic Habits' , Year: 2000 , favourites: 'favourite' , soldYears:2020},
    {name:'Power Of the mind' , Year: 2000 , soldYears:2022} , 
    {name:'Power Of the God' , Year: 2000 , soldYears:2023}, 
    {name:'48 Laws of Power' , Year: 2000 , soldYears:2010},

]

let scores = [10,20,30,40,50,60,70,80,90,100]


//  console.log(Books.length);

// for
// for(let i = 0 ; i < Books.length ; i++){
//    document.write(i)
  
// }





// for each

Books.forEach(function(myBook){
//   console.log(myBook.name);
})
 // for each soldYears









//filter


// const passExams = scores.filter(function(pass){
//   if(pass > 10){
//   return true
//   }
//   else{
//     return false
//   }
// })

//nice and  clean way of writing it in esx6
const passExams = scores.filter(pass => pass > 20);

// console.log(passExams);   

//the books favourite filter

// const myFavs = Books.filter(function(fav){
//   if( fav.favourites === "favourite"){
//    return true
//   }
// })

const myFavs = Books.filter(fav => fav.favourites === 'favourite')

// console.log(myFavs);

//get the years from 17ties

const seventies = Books.filter(sevens => (sevens.Year < 1800))

// get if the sold years lasted 10 years

const sold = Books.filter(sell => (sell.soldYears - sell.Year >= 10))


// console.log(sold);

// filter end




//...map


const formatBooksArrangement = Books.map(mybook => (`${mybook.name} ,  ${mybook.Year} - ${mybook.soldYears}`))

// multiple the score results

const multipyScore = scores
.map(multipy => (multipy * 2))
.map(multipy => Math.sqrt(multipy))

// console.log(multipyScore);


//...sort 

// const sortByYear = Books.sort((sortOne.soldYears , sortTwo.soldYears))
// if( sortOne.soldYears > sortTwo.soldYears){
//     return 1
//     }
//     else{
//         return -1
//   illegal return  }


const sortByYear = Books.sort((a,b) => (a.soldYears > b.soldYears ? 1 : -1))

    // scores 

    const sortScores = scores.sort((a,b)  => a-b)

// console.log(sortScores);




// ..reduce


const totalScores = scores.reduce((total , totalResult) => total + totalResult ,0)

// total Sold Years

 const totalSoldYears = Books.reduce((total , sumYears) =>  total + (sumYears.soldYears- sumYears.Year), 0)
// console.log(totalSoldYears);



// combined



const combinedMap = scores
.map(numbers => numbers * 3)
.sort((a,b) => a-b)
.filter(results => (results >= 20))
.reduce((a,b) => a + b ,0)

console.log(combinedMap);