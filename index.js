const users = [
    {
      firstName: "Niky",
      lastName: "Morgan",
      favoriteColor: "Blue",
      favoriteAnimal: "Jaguar",
    },
    {
      firstName: "Tracy",
      lastName: "Lum",
      favoriteColor: "Yellow",
      favoriteAnimal: "Penguin",
    },
    {
      firstName: "Josh",
      lastName: "Rowley",
      favoriteColor: "Blue",
      favoriteAnimal: "Penguin",
    },
    {
      firstName: "Kate",
      lastName: "Travers",
      favoriteColor: "Red",
      favoriteAnimal: "Jaguar",
    },
    {
      firstName: "Avidor",
      lastName: "Turkewitz",
      favoriteColor: "Blue",
      favoriteAnimal: "Penguin",
    },
    {
      firstName: "Drew",
      lastName: "Price",
      favoriteColor: "Yellow",
      favoriteAnimal: "Elephant",
    },
  ];
//   function firstNamePrinter(collection){
//     for(item of collection){
//         console.log(item.firstName)

//     }
//   }
// //   console.log(firstNamePrinter(users))

//   function bluePrinter(collection){
//     for (const user of collection){
//         if(user.favoriteAnimal==='Blue'){
//             console.log(user.firstName)
//         }
//     }
//   }
//   console.log(bluePrinter(users))
function colorFilter(collection , color){
    for (const user of collection){
        if(user.favoriteColor=== color){
            console.log(user.firstName);
        }
    }
}
// console.log(colorFilter(users, "Yellow"));


function animalMpendwa(element, animal){
    for (const user of element){
        if ( user.favoriteAnimal===animal){
            console.log(user.firstName)
        }
    }
}
// 


// function filter(collection, attribute, value){
//     for(const user of collection){
//         if(user[attribute]===value){
//             return user.firstName
//         }
//     }
// }
// console.log(filter(users, "favoriteColor", "Yellow"))

// function twoAttributes(collection,attribute1,value1,attribute2, value2){
//     for(const user of collection){
//         if (user[attribute1]===value1 && user[attribute2]===value2){
//             console.log(user.lastName)
//         }
//     }
// }
// console.log(twoAttributes(users, "favoriteColor","Yellow", 'favoriteAnimal',"Jaguar"))


// function filter(collection){
//     for(const user of collection){
//         if(likeElephants(user)){
//             console.log(user.lastName)
//         }
//     }
// }
// function likeElephants(user){
//     return user['favoriteAnimal']=== 'Elephan';
// }
// console.log(filter(users))



// function filterEl(collection, cb){
//     for(const user of collection){
//         if(cb(user)){
//             console.log(user.firstName)
//         }
//     }
// }
// filterEl(users, function(user){
//     return user.favoriteColor==="Yellow" && user.favoriteAnimal==="Penguin"
// })
// filterEl(users, function (user){
//     return user.favoriteColor==="Blue" && user.favoriteAnimal==="Penguin"
// })



            //  writing an filter function as a pure function

function filter(collection, cb){
    const newCollection =[]
    for (const user of collection){
        if (cb(user)){
            newCollection.push(user)
        }
    }
    return newCollection
}
const bluePenguiners=filter(users, function(user){
    return user.favoriteAnimal==="Penguin" && user.favoriteColor==="Blue"

})
// console.log(bluePenguiners)

const yellowUsers= filter(users, function(user){
    return user.favoriteColor==="Yellow"
})
console.log(yellowUsers)







    