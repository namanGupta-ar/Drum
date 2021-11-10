// document.querySelector("button").addEventListener("click",handleclick);
// function handleclick()
// {
//     alert("i got clicked");
    
// }
// document.querySelector("button").addEventListener("click",
// function()
// {
//     alert("i got clicked");
    
// });

// document.querySelectorAll("button")[0].addEventListener("click",buttonclick);
// document.querySelectorAll("button")[1].addEventListener("click",buttonclick);
// document.querySelectorAll("button")[2].addEventListener("click",buttonclick);
// document.querySelectorAll("button")[3].addEventListener("click",buttonclick);
// document.querySelectorAll("button")[4].addEventListener("click",buttonclick);
// document.querySelectorAll("button")[5].addEventListener("click",buttonclick);
// document.querySelectorAll("button")[6].addEventListener("click",buttonclick);

// var numofdrumbuttons = document.querySelectorAll(".drum").length;
// for(var i=0;i<numofdrumbuttons;i++)
// {
//     document.querySelectorAll("button")[i].addEventListener("click",function()
//     {
//         this.style.color = "white";
//     });
// }
// for(var i=0;i<numofdrumbuttons;i++)
// {
//     document.querySelectorAll("button")[i].addEventListener("click",function()
//     {
//         var buttonInnerHTML = this.innerHTML;
//         switch(buttonInnerHTML)
//         {
//             case "w" : var tom1 = new Audio('sounds/tom-1.mp3');
//                     tom1.play();
//                     break;
//             case "a" : var tom2 = new Audio('sounds/tom-2.mp3');
//                     tom2.play();
//                     break;
//             case "s" : var tom3 = new Audio('sounds/tom-3.mp3');
//                     tom3.play();
//                     break;
//             case "d" : var tom4 = new Audio('sounds/tom-4.mp3');
//                     tom4.play();
//                     break;
//             case "j" : var snare = new Audio('sounds/snare.mp3');
//                     snare.play();
//                     break;
//             case "k" : var crash = new Audio('sounds/crash.mp3');
//                     crash.play();
//                     break;
//             case "l" : var kickbass = new Audio('sounds/kick-bass.mp3');
//                     kickbass.play();
//                     break;
//             default: console.log(this.innerHTML);
//         }
//     });
// }


// now i need to detect key and which key is pressed ,then according to that songs is played

var numofdrumbuttons = document.querySelectorAll(".drum").length;
for(var i=0;i<numofdrumbuttons;i++)
{
        document.querySelectorAll(".drum")[i].addEventListener("click",function(){
                var buttonInnerHTML = this.innerHTML;
                makesound(buttonInnerHTML);
                buttonanimation(buttonInnerHTML);
        });
}

// here instead of event we can use anything in function like , m ,n anything we want
document.addEventListener("keypress",function(event){makesound(event.key); buttonanimation(event.key);});

function makesound(key){
    switch(key)
    {
        case "w" : var tom1 = new Audio('sounds/tom-1.mp3');
                tom1.play();
                break;
        case "a" : var tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();
                break;
        case "s" : var tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();
                break;
        case "d" : var tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();
                break;
        case "j" : var snare = new Audio('sounds/snare.mp3');
                snare.play();
                break;
        case "k" : var crash = new Audio('sounds/crash.mp3');
                crash.play();
                break;
        case "l" : var kickbass = new Audio('sounds/kick-bass.mp3');
                kickbass.play();
                break;
        default: break;
    }
}


function buttonanimation(currentkey)
{
        var activebutton = document.querySelector("." + currentkey);
        activebutton.classList.add("pressed");
        
        setTimeout(function(){activebutton.classList.remove("pressed");} , 100)
}











// var audio = new Audio('sounds/tom-1.mp3');
// audio.play();

// var employee1 = {
//     name : "naman",
//     age : 19,
//     salary: 10,00,00,000;
//     company : "startup";
// }

// console.log(employee1.name);