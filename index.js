
var a = document.querySelectorAll(".drum").length;
for (let i = 0; i<a ; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function play() {
        this.style.color = "white"
        var buttonHTML = this.innerHTML;
        makeSound(buttonHTML)
        buttonAnimation(buttonHTML)
       
    })
}

document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(madarchod) {
    switch (madarchod) {
        case "w":
            var w = new Audio("sounds/tom-1.mp3")
            w.play();
            break;
        case "a":
            var a = new Audio("sounds/tom-2.mp3")
            a.play();
            break;
        case "s":
            var s = new Audio("sounds/tom-3.mp3")
            s.play();
            break;
        case "d":
            var d = new Audio("sounds/kick-bass.mp3")
            d.play();
            break;
        case "j":
            var j = new Audio("sounds/tom-4.mp3")
            j.play();
            break;
        case "k":
            var  k= new Audio("sounds/snare.mp3")
            k.play();
            break;
        case "l":
            var l = new Audio("sounds/crash.mp3")
            l.play();
            break;
    
        default:
            break;
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("."+currentKey)

    activeButton.classList.add("pressed")
    setTimeout(() => {
        activeButton.classList.remove("pressed")
    }, 100);

}