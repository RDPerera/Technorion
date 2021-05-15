/*
    MOUSE OVER AND MOUSE ENTER
*/

let mouseOver = 0;
let mouseEnter = 0;

let mouseOverCount = document.getElementById("mouse-over-count");
mouseOverCount.innerHTML = mouseOver;

let mouseEnterCount = document.getElementById("mouse-enter-count");
mouseEnterCount.innerHTML = mouseEnter;

document.getElementById("mouse-over-card").addEventListener('mouseover', function () {
    mouseOver++;
    mouseOverCount.innerHTML = mouseOver;
});

document.getElementById("mouse-enter-card").addEventListener('mouseenter', function () {
    mouseEnter++;
    mouseEnterCount.innerHTML = mouseEnter;
});

/*
    MOUSE OUT AND MOUSE LEAVE
*/

let mouseOut = 0;
let mouseLeave = 0;

let mouseOutCount = document.getElementById("mouse-out-count");
mouseOutCount.innerHTML = mouseOut;

let mouseLeaveCount = document.getElementById("mouse-leave-count");
mouseLeaveCount.innerHTML = mouseLeave;

document.getElementById("mouse-out-card").addEventListener('mouseout', function () {
    mouseOut++;
    mouseOutCount.innerHTML = mouseOut;
});

document.getElementById("mouse-leave-card").addEventListener('mouseleave', function () {
    mouseLeave++;
    mouseLeaveCount.innerHTML = mouseLeave;
});


var year = document.getElementById("studentYear");

year.addEventListener("change",function(){
    let degree = document.getElementById("se-radio");
    if(year.value > 2){
        degree.classList.remove("hidden");
    }else{
        degree.classList.add("hidden");   
    }
})

let formFields = document.querySelectorAll(".form-control");

formFields.forEach((field) => {
    field.addEventListener("focus",function(){
        field.style.backgroundColor = '#ffeeba'
    })
});

formFields.forEach((field) => {
    field.addEventListener("blur",function(){
        field.style.backgroundColor = 'white'
    })
});

var form = document.getElementById("contact-form");

form.addEventListener("submit",function(event){
    let value = confirm("Are you sure?");
    if(value){
        return true;
    }else{
        event.preventDefault();
        return false;
    }
    
})