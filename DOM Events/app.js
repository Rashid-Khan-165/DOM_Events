// // // let btn = document.querySelector("button");
// // // btn.addEventListener("click",function(){
// // //     let h3 = document.querySelector("h3");
// // //     let randomColor = getRandomColor();
// // //     h3.innerText=randomColor;

// // //     let div = document.querySelector("div");
// // //     div.style.backgroundColor = randomColor;

// // //     console.log("color updated")
// // // });

// // // function getRandomColor(){
// // //     let red = Math.floor(Math.random()*255);
// // //     let blue = Math.floor(Math.random()*255);
// // //     let green = Math.floor(Math.random()*255);

// // //     let color = `rbg(${red},${blue},${green})`
// // //     return color;
// // //

// // // let p = document.querySelector("p");
// // // p.addEventListener("click",function(){
// // //     console.log("paragraph was clicked")
// // // });

// // // let div = document.querySelector(".box");
// // // div.addEventListener("mouseenter",function(){
// // //     console.log("Mouse inside the box");
// // // });

// // // let inp = document.querySelector("input");

// // // inp.addEventListener("keydown",function(event){
// // //     console.log("code = ",event.code);//Arrow up, Arrow down, Arrow left,Arrow right
// // //     if(event.code == "KeyU"){
// // //         console.log("Move forward");
// // //     }else if (event.code == "KeyD"){
// // //         console.log("Move backward");
// // //     }else if(event.code == "KeyL"){
// // //         console.log("Move left");
// // //     }else if (event.code == "KeyR"){
// // //         console.log("Move right");
// // //     }
// // // });

// // // let form = document.querySelector("form");

// // // form.addEventListener("submit",function(event){
// // //     event.preventDefault();
// // // //     console.dir(form);
// // //    let user = this.elements[0];
// // //    let pass  = this.elements[1];

// // //    console.log(user.value);
// // //    console.log(pass.value);
// // //    alert(`Hi ${user.value} your password is ${pass.value}`);
// // //  })

// // // let user = document.querySelector("#user");



// // // user.addEventListener("change",function(event){
    
// // //     console.log("change event ")
// // //     console.log("final value =",this.value);
// // // })

// // // user.addEventListener("input",function(event){
   
// // //     console.log("input event ")
// // //     console.log("final value =",this.value);
// // // })

// // // let btn = document.querySelector("button");

// // // btn.addEventListener("click",function(){
// // //     btn.style.backgroundColor = "red";
// // // });

// // // function color (){
// // //     btn.style.backgroundColor = "green";
// // // }

// // l/*et inp = document.querySelector("input");
// // let h2 = document.querySelector("h2");

// // inp.addEventListener("input",function(){
// //     h2.innerText=this.value
// //     console.log(this.value);
// // }); */

// // let div = document.querySelector("div");
// // let ul = document.querySelector("ul");
// // let lis = document.querySelectorAll("li");

// // div.addEventListener("mouseenter",function(){
// //     console.log("Div was clicked")
// // });

// // ul.addEventListener("mouseenter",function(){
// //     console.log("ul was clicked")
// // });

// // for(li of lis){
// //     li.addEventListener("mouseenter",function(){
// //         console.log("li was clicked")
// //     });
// // }


// let inp = document.querySelector("input");
// let ul =document.querySelector("ul");
// let btn = document.querySelector("button");

// btn.addEventListener("click",function(){
// let item = document.createElement("li");
// item.innerText = inp.value;
// let delBtn = document.createElement("button");
// delBtn.innerText = "delete";
// delBtn.classList.add("delete");
// item.appendChild(delBtn); 

// ul.appendChild(item);

//     inp.value = "";
// })

// let delBtns = document.querySelectorAll("button");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click",function(){
//         let par = this.parentElement;
//         par.remove();
//     })
// }


// function one(){
//     return 1;
// }
// function two(){
//     return one() + one();
// }
// function three(){
//     let ans = two() + one();
//     return ans;
// }
// three();

let h1 = document.querySelector("h1");

// setTimeout(()=>{
//     h1.style.color = "Red";
// },1000);

// setTimeout(()=>{
//     h1.style.color = "Orange";
// },2000);

// setTimeout(()=>{
//     h1.style.color = "Green"
// },3000);

// function colorChange (color,delay,nextColorChange){
//     setTimeout(()=>{
//         h1.style.color = color ;
//         nextColorChange();
//     },delay);
// }

// colorChange("red",1000);
// colorChange("green",2000);
// colorChange("blue",3000);

// function changeColor (color,delay,){
//     return new Promise ((resolve , reject)=>{
//         setTimeout(()=>{
//             let num = Math.floor(Math.random()*10)+1;
//             if(num > 3){
//                 reject("promise rejected");
//             }
//             h1.style.color = color;
//             console.log(`color changed to ${color}!`);
//             resolve("color changed!")
//         },delay);
//     });   
// }

// async function demo (){
//     try{await changeColor("red",1000);
//     await changeColor("blue",1000);
//     await changeColor("green",1000);
//     await changeColor("pink",1000);
//     await changeColor("yellow",1000);
//     await changeColor("violet",1000);
// }catch(err){
//     console.log("error caught")
//     console.log(err)
// }

//     let a = 3;
//     console.log(a);
//     console.log("new number : ",a+5)
// }

// changeColor("red",1000)
// .then(()=>{
//     console.log("red color was completed");
//     return changeColor("orange",1000);
// })
// .then(()=>{
//     console.log("orange color was completed");
//     return changeColor("yellow",1000);
// })
// .then(()=>{
//     console.log("yellow color was completed");
//     return changeColor("blue",1000);
// })
// .then(()=>{
//     console.log("blue color was completed")
//     return changeColor("green",1000)
// })
// .then(()=>{
//     console.log("green color was completed")
// });

// changeColor("red",1000,()=>{
//     changeColor("green",1000,()=>{
//         changeColor("blue",1000,()=>{
//             changeColor("yellow",1000,()=>{
//                 changeColor("orange",1000);
//             })
//         })
//     })
// })

// function savetoDb (data,success,failure){
//     let internetSpeed = Math.floor(Math.random()*10)+1;
//     if(internetSpeed>4){
//         success();
//     }else{
//         failure()
//     }
// }


// savetoDb (
//     "Rashid khan",
//     ()=>{
//         console.log("success : your data is saved");
//         savetoDb(
//             "Nawed Khan",
//             ()=>{
//                 console.log("success2 : your data is saved");
//                 savetoDb(
//                     "Ubaid Khan",
//                     ()=>{
//                         console.log("success3: your data is saved")
//                     },
//                     ()=>{
//                         console.log("failure3 : weak connection");
//                     }
//                 )
//             }
//         )
//     },
//     ()=>{
//         console.log("failure : weak connection")
//     }
// )

// function savetoDb(data){
//     return new Promise((resolve , reject)=>{
//         let internetSpeed = Math.floor(Math.random()*10)+1;
//         if(internetSpeed>4){
//             resolve("success : data was solved");
//         }else{
//             reject("failure weak connection");
//         }
//     });
// }

// savetoDb("apna college")//request=promise object
// .then(()=>{
//     console.log("promise was resolved");
// })
// .catch(()=>{
//     console.log("promise was rejected")
// });


// function savetoDb(data){
//     return new Promise((resolve,reject)=>{
//         let internetSpeed = Math.floor(Math.random()*10)+1;
//         if(internetSpeed > 4){
//             resolve("success : data is saved");
//         }else{
//             reject("failure : weak connection")
//         }
//     });
// }

// savetoDb("Rashid Khan")
// .then((result)=>{
//     console.log("result of promise",result);
//     console.log("data1 saved");
//     return savetoDb ("Nawed Khan");
// })
// .then((result)=>{
//     console.log("result of promise",result);
//     console.log("data2 saved");
//     return savetoDb ("Ubaid Khan");
// })
// .then((result)=>{
//     console.log("result of promise",result);
//     console.log("data3 saved");
//     return savetoDb ("AAdil Khan");
// })
// .then((result)=>{
//     console.log("result of promise",result);
//     console.log("data4 saved");
// })
// .catch((error)=>{
//     console.log("error of promise",error)
//     console.log("Promises was rejected")
// })


// async function greet (){
//     return "hello world !"
// }

// let hello = async ()=>{}

// greet()
// .then(()=>{
//     console.log("promise was resolved")
// })
// .catch((err)=>{
//     console.log("promise was rejected with error : ",err);
// });

// function getNum (){
//     return new Promise ((resolve,reject)=> {
//         setTimeout(()=>{
//             let num = Math.floor(Math.random()*10)+1;
//             console.log(num);
//             resolve();
//         },1000)
//     });
// }

// async function demo (){
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
// }

// let jsonReq = `{"fact":"The first official cat show in the UK was organised at Crystal Palace in 1871.","length":78}`

// let validJson = JSON.parse(jsonReq);
// console.log(validJson.fact);

let student = {
    name : "Rashid khan",
    rollno : 32
}