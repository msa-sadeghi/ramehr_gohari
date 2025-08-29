// function sum(x, y){
//     return x + y
// }

// const sum = function(x,y){
//     return x + y
// }

// const sum = (x,y) => x + y


// console.log(sum(1,2))

// let numbers = [1,2,3,4,5]

// numbers.forEach(n => console.log(n *2))

// let newNumber =  numbers.map(n => n * 2)
// console.log(newNumber)

// let numbers  = [1,2,3,4,5,6]
// let copy = numbers

// copy.push(1000)
// console.log(copy)
// console.log(numbers)
// let copy = [...numbers]
// copy.push(1000)
// console.log(copy)
// console.log(numbers)

// let user ={
//     id:1, name:"sara",age:30
// }
// let newUser = {...user}
// newUser.grade = 1
// console.log(user)
// console.log(newUser)


// function sum(a,b,...z){
//     console.log(a,b)
//     console.log(z)
   
// }

// console.log(sum(1,3,4,5,6,56,567,89))

// let user = [1, 'sara', 34]

// let [userId, username, age=25] = user
// console.log(userId, username, age)

// let user2 = {
//     id:1,
//     name:'sara',
//     age_:34
// }

// let {id,name, age_=37} = user2
// console.log(id,name, age_)

let numbers = [1,2,3,4,5]

for(let x of numbers){
    console.log(x)
}
for(let x in numbers){
    console.log(numbers[x])
}

let user2 = {
    id:1,
    name:'sara',
    age_:34
}
for(let x in user2){
    console.log(user2[x])
}