// 1. Write a program to find the number of posts written by each user. Consider below array and prepare the given output by counting the number of posts written by each user.
// Input Object: var posts =[
//     {userId:1, postName:"post 1"},
//     {userId:2, postName:"post 2"},
//     {userId:3, postName:"post 3"},
//     {userId:1, postName:"post 4"},
//     {userId:1, postName:"post 5"},
//     {userId:2, postName:"post 6"},
//     {userId:1, postName:"post 7"},
//     {userId:2, postName:"post 8"},
//     {userId:3, postName:"post 9"}
// ];
// Output  [{userId:1,postCount:4},{userId:2,postCount:3},{userId:3,postCount:2}]

function postsByUser(){

    // input 
    var posts =[
            {userId:1, postName:"post 1"},
            {userId:2, postName:"post 2"},
            {userId:3, postName:"post 3"},
            {userId:1, postName:"post 4"},
            {userId:1, postName:"post 5"},
            {userId:2, postName:"post 6"},
            {userId:1, postName:"post 7"},
            {userId:2, postName:"post 8"},
            {userId:3, postName:"post 9"}
    ];
    let objPosts = {}
    posts.forEach(element => {
        if(element['userId'] in objPosts){
            objPosts[element['userId']] = objPosts[element['userId']] + 1;
        }else{
            objPosts[element['userId']] = 1
        }
    })
    let arrPosts = []
    for(let key in objPosts){
        arrPosts.push({userId : key , postCount : objPosts[key]})
    }
    console.log(arrPosts); 
    // output
    // [
    //     { userId: '1', postCount: 4 },
    //     { userId: '2', postCount: 3 },
    //     { userId: '3', postCount: 2 }
    //   ]
}

postsByUser()

// 2. Write a program to list out the maximum and minimum temperatures recorded in a city on each day(City should not repeat on a single day). Let us consider the below array for the weather data based on different cities on different dates. Prepare an array which says on each day what is the maximum temperature recorded and in which city it is recorded. Same with the minimum temperature and the city it has been recorded.
function maxTemperaturesOfCity(){
    //input 
    var weather_data = [  {    "id": 4840240013377536,    "applicable_date": "2022-03-28",    "min_temp": 3.74,    "max_temp": 16.240000000000003,    "city": "Bangalore"  },  {    "id": 6158451006767104,    "applicable_date": "2022-03-29",    "min_temp": 2.6300000000000005,    "max_temp": 17.42,    "city": "Bangalore"  },  {    "id": 5139251006013440,    "applicable_date": "2022-03-30",    "min_temp": 3.83,    "max_temp": 16.88,    "city": "Bangalore"  },  {    "id": 5037364718075904,    "applicable_date": "2022-03-31",    "min_temp": 5.485,    "max_temp": 11.955,    "city": "Bangalore"  },  {    "id": 4961017379422208,    "applicable_date": "2022-04-01",    "min_temp": 1.22,    "max_temp": 12.325,    "city": "Bangalore"  },  {    "id": 5559481041682432,    "applicable_date": "2022-04-02",    "min_temp": 2.035,    "max_temp": 12.565,    "city": "Bangalore"  },  {    "id": 5838918358401024,    "applicable_date": "2022-03-28",    "min_temp": 0.195,    "max_temp": 5.97,    "city": "Delhi"  },  {    "id": 6158451006767104,    "applicable_date": "2022-03-29",    "min_temp": 1.6300000000000005,    "max_temp": 18.42,    "city": "Delhi"  }];

var maxTemps = {};
var minTemps = {};

for (var i = 0; i < weather_data.length; i++) {
  var data = weather_data[i];
  var city = data.city;
  var date = data.applicable_date;

  if (!(city in maxTemps) || data.max_temp > maxTemps[city].temp) {
    maxTemps[city] = {temp: data.max_temp, date: date};
  }

  if (!(city in minTemps) || data.min_temp < minTemps[city].temp) {
    minTemps[city] = {temp: data.min_temp, date: date};
  }
}

var output = [];

for (var city in maxTemps) {
  output.push({city: city, maxTemp: maxTemps[city].temp, maxTempDate: maxTemps[city].date, minTemp: minTemps[city].temp, minTempDate: minTemps[city].date});
}

console.log(output);
// output
// [
//     {
//       city: 'Bangalore',
//       maxTemp: 17.42,
//       maxTempDate: '2022-03-29',
//       minTemp: 1.22,
//       minTempDate: '2022-04-01'
//     },
//     {
//       city: 'Delhi',
//       maxTemp: 18.42,
//       maxTempDate: '2022-03-29',
//       minTemp: 0.195,
//       minTempDate: '2022-03-28'
//     }
//   ]
}

maxTemperaturesOfCity()

// 3.Write a program to find out all the numbers whose sum is 9 from 1 to 9999. if we get sum of digits more than one digit, we need to repeat the process till its sum is single digit. 

// Sample Output for a number:
//  let us consider a number 9360. Its sum is 18(9+3+6+0). As it is more then on digit we do sum again. So, the result is 9(1+8). 9360 gives us required output So we can consider it as one of numbers from 1-9999. So based on this we need to list out all the numbers which matches our criteria. 
function getDigitSum(num) {
    let sum = 0;
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    if (sum > 9) {
      return getDigitSum(sum);
    }
    return sum;
  }

function sumOfTwoDigits(){
    const results = [];
    for (let i = 1; i <= 9999; i++) {
      if (getDigitSum(i) === 9) {
        results.push(i);
      }
    }
    
    console.log(results);
    // output 
    // [
    //     9,  18,  27,  36,  45,  54,  63,  72,  81,  90,  99, 108,
    //   117, 126, 135, 144, 153, 162, 171, 180, 189, 198, 207, 216,
    //   225, 234, 243, 252, 261, 270, 279, 288, 297, 306, 315, 324,
    //   333, 342, 351, 360, 369, 378, 387, 396, 405, 414, 423, 432,
    //   441, 450, 459, 468, 477, 486, 495, 504, 513, 522, 531, 540,
    //   549, 558, 567, 576, 585, 594, 603, 612, 621, 630, 639, 648,
    //   657, 666, 675, 684, 693, 702, 711, 720, 729, 738, 747, 756,
    //   765, 774, 783, 792, 801, 810, 819, 828, 837, 846, 855, 864,
    //   873, 882, 891, 900,
    //   ... 1011 more items
    // ]
}
sumOfTwoDigits()
  
// 4. Write a program to find missing numbers from the given array and return the missing numbers in new array.
// Sample input 
// arr=[4,5,7,1,9,2,3]
// Explanation: From the array we can see the numbers from 1 to 9 as minimum number is 1 and maximum number is 9. so, the missing numbers are 6 & 8
// Sample Output: [6,8]

function findMissingNumbers() {
    // input
    let arr = [4, 5, 7, 1, 9, 2, 3]; 
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let missingNumbers = [];
    for (let i = min; i <= max; i++) {
      if (!arr.includes(i)) {
        missingNumbers.push(i);
      }
    }
    console.log(missingNumbers);
    // output
    // [ 6, 8 ]
  }
  
  findMissingNumbers()
  