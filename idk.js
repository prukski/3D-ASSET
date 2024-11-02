// variable that will be used inside the init function to store the car object
let car;

AFRAME.registerComponent("keyframes", {
    init: function () {
        
        // store the car object in a variable
        car = this.el;
        // handle the animation complete event
        car.addEventListener("animationcomplete__key1", key2);
    }
});

// function named key2
// this function is called after the key1 animation is complete 
function key2() {
    
    //second keyframe
    car.setAttribute("animation__key2", {
        property: "position",
        to: "-5 0 -4.6",
        dur: 2000,
        easing: "easeInQuad"
    });
    
    //third keyframe
    // turn right when the car stops at the parking spot
    car.setAttribute("animation__key3", {
        property: "rotation",
        to: "0 -30 0",
        dur: 1000
    });
    
    car.addEventListener("animationcomplete__key2", key4);
}

// function named key4
// this function is called after the key2 animation is complete 
function key4() {
    car.setAttribute("animation__key4", {
        property: "position",
        to: "-6 0 -4",
        dur: 2000
    });
    
    car.setAttribute("animation__key5", {
        property: "rotation",   
        to: "0 0 0",   
        dur: 500   
    });
}
