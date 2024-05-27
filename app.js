
// assignment form:

// const form = document.querySelector('#form');
// const username = document.querySelector('#username');
// const email = document.querySelector('#email');
// const password = document.querySelector('#password');
// const age = document.querySelector('#age');
// const cnic = document.querySelector('#cnic');

//  let emailRegex = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/;
// let cnicRegex = /^42\d{11}$/;

// form.addEventListener('submit' , (event)=>{
//     event.preventDefault()
//     console.log(username.value)
//      console.log(email.value)
//      console.log(password.value)
//      console.log(age.value)
//      console.log(cnic.value) 

     

//      console.log(emailRegex.test(email.value))
//      console.log(cnicRegex.test(cnic.value))




//     if(cnicRegex.test(cnic.value)){
// console.log(cnic.value)
    
//     }else{
//         console.log("conditon not ture")
//     }

    

    
// })


// const arr =['apple','banana','pineaple']
// const div = document.querySelector('.div');
// arr.forEach(function (item, index){
//     console.log(item , index) ;
    
// });



// arr.forEach((item,index)=>{
//         console.log(item , index);

// })


// arr.map((item,index)=>{
//     console.log(item , index);

// })


// const hello = (username1 , username2) =>{
//     return `hello${username1 + username2}`
//  }
// console.log(hello('abdullah' , 'mohsin'));


// const hello = (username1) =>{
//     return `hello${username1}`
//  }
// console.log(hello('abdullah'))



// const hello = username1 =>{
//     return `hello${username1}`
//  }
// console.log(hello('abdullah'))



// const hello = username1 => `hello${username1}`
//     //      
//     //  
//     console.log(hello('abdullah'))
    



//  const hello = username1 =>{return `hello${username1}
//      `
//   }
//  console.log(hello('abdullah'))



// normal loops:
// console.log('hello word');
// const arr =['apple' ,'banana' ,' orange' , 'watermelon']
// const div = document.querySelector('div');
// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }

// for off loops:
// console.log('hello word');
// const arr =['apple' ,'banana' ,' orange' , 'watermelon']
 
// for (const anus of arr){
//       console.log(anus)

// }
// const arr =['apple' ,'banana' ,' orange' , 'watermelon']
// const div = document.querySelector('div')
// for (const iterator of arr){
//       console.log(iterator)
//       div.innerHTML += `<h1>${iterator}</h1>`

// }
// const arr =['apple' ,'banana' ,' orange' , 'watermelon']
// const div = document.querySelector('div')
// const user ={
//       username:'async',
//       email:'mkhan@gmail.com',
//       age:'21',
//       hobbies:['cricket' ,'swiming' , 'football']

// }
// for (const key in user) {
//       console.log(`$[key]===>${user[key]}`)

      //      }
        //    const arr =['apple' ,'banana' ,' orange' , 'watermelon']
           const div = document.querySelector('div')
        //    const user ={
        //          username:'async',
        //          email:'mkhan@gmail.com',
        //          age:'21',
        //          hobbies:['cricket' ,'swiming' , 'football']

        //    }
  //method of array:
      //      map:
      //      foreash:
      //      reduce:
      //      filter:

      // callback:
      // higher order function:


      // const iteratoritem= arr.forEach(function hello(item){
      //       // console.log(item)
      // })
      //    console.log( iteratoritem)

      //  const num =[1,2,3,4,5,,6]  
      // const iteratoritem = num.map((item , index)=>{
      //       // console.log(item)
      // //       console.log(index)
      // //         div.innerHTML += `<h1>${item}</h1>`
      //      return item + 300
      // })
//       // console.log(iteratoritem)
// const sumofNum = num.map(item => item + 10)
// const sumofNum = num.map(item => item > 10)

// console.log('mapped===>' ,sumofNum)      

// method of filter:
// const filtered = num.filter((item)=>{
// return item > 5

// })
// console.log('filtered===>', filtered);

// loops method:





// let filteredarr = []

// for (let i = 0; i < num.length; i++){
//       // console.log(num[i])
//       if(num[i] > 2){
//             // console.log(num[i])
//          filteredarr.push(num[i])
//       }
// }
// console.log(filteredarr);

// let filtered = num.filter(item => item > 2)
// console.log(filtered);




 const products = [
  // Electronics
  { name: "iPhone 13 Pro", price: 999, category: "Electronics", brand: "Apple" },
  { name: "Samsung Galaxy S21 Ultra", price: 1199, category: "Electronics", brand: "Samsung" },
  { name: "Sony WH-1000XM4 Headphones", price: 349, category: "Electronics", brand: "Sony" },
  { name: "Dell XPS 15 Laptop", price: 1499, category: "Electronics", brand: "Dell" },
  { name: "Canon EOS R5 Camera", price: 3899, category: "Electronics", brand: "Canon" },

  // Clothing
  { name: "Nike Air Force 1", price: 90, category: "Clothing", brand: "Nike" },
  { name: "Adidas Ultraboost", price: 180, category: "Clothing", brand: "Adidas" },
  { name: "Levi's 501 Original Fit Jeans", price: 59, category: "Clothing", brand: "Levi's" },
  { name: "The North Face 1996 Retro Nuptse Jacket", price: 279, category: "Clothing", brand: "The North Face" },
  { name: "Lululemon Align Leggings", price: 98, category: "Clothing", brand: "Lululemon" },

  // Home & Kitchen
  { name: "Instant Pot Duo 7-in-1 Electric Pressure Cooker", price: 79, category: "Home & Kitchen", brand: "Instant Pot" },
  { name: "iRobot Roomba 960 Robot Vacuum", price: 499, category: "Home & Kitchen", brand: "iRobot" },
  { name: "Nespresso VertuoPlus Coffee and Espresso Maker", price: 149, category: "Home & Kitchen", brand: "Nespresso" },
  { name: "Dyson V11 Torque Drive Cordless Vacuum Cleaner", price: 699, category: "Home & Kitchen", brand: "Dyson" },
  { name: "Cuisinart 14-Cup Food Processor", price: 199, category: "Home & Kitchen", brand: "Cuisinart" },

  // Books
  { name: "The Great Gatsby by F. Scott Fitzgerald", price: 10, category: "Books", brand: "N/A" },
  { name: "To Kill a Mockingbird by Harper Lee", price: 9, category: "Books", brand: "N/A" },
  { name: "1984 by George Orwell", price: 12, category: "Books", brand: "N/A" },
  { name: "The Catcher in the Rye by J.D. Salinger", price: 8, category: "Books", brand: "N/A" },
  { name: "Harry Potter and the Sorcerer's Stone by J.K. Rowling", price: 15, category: "Books", brand: "N/A" }
 ];

// console.log(products);

// products.map((item)=>{
//       console.log(item.category)
// })

// const electrics = products.filter(item =>{
// console.log(item.category)
// return item.category === 'electrics' && item.price > 100
// }).filter((item)=>{
//       return item.price < 200
// })

// const electrics = products.filter(item => item.category === 'electrics')
// .filter(item => item.price > 100).filter(item => item.price < 100)
// console.log(electrics);


products.map((item)=>{
console.log(item.category);

div.innerHTML +=`
<h1>product name:${item.brand}${item.name}</h1>
<h1>category:${item.category}</h1>
<h1>price:${item.price}</h1>
<hr/>`

})
const filtereditem = (btn) => {
      div.innerHTML = ''
      console.log(btn.innerHTML);
      const filtered = products.filter(item => item.category === btn.
            innerHTML).map (item =>{
                  div.innerHTML +=`
                  <h1>product name:${item.brand}${item.name}</h1>
                  <h1>category:${item.category}</h1>
                  <h1>price:${item.price}</h1>
                  <hr/>


                  
                  `
            })
           
      
      console.log(filtered);
}
allitems =() =>{
      products.map((item)=>{
            console.log(item.category);
            
            div.innerHTML +=`
            <h1>product name:${item.brand}${item.name}</h1>
            <h1>category:${item.category}</h1>
            <h1>price:${item.price}</h1>
            <hr/>`
            
            })
      }