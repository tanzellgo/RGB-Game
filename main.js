var head = document.querySelector(".head");

var num1 = document.querySelector("#num1");
var num2 = document.querySelector("#num2");
var num3 = document.querySelector("#num3");

var newbtn = document.querySelector("#new");
var easybtn = document.querySelector("#easy");
var hardbtn = document.querySelector("#hard");
var msg = document.querySelector(".msg");

var square1 = document.querySelector(".square1");
var square2 = document.querySelector(".square2");
var square3 = document.querySelector(".square3");
var square4 = document.querySelector(".square4");
var square5 = document.querySelector(".square5");
var square6 = document.querySelector(".square6");

var square_grp = document.querySelector(".square_grp");

var list_square = [square1, square2, square3, square4, square5, square6];

var list_square_2 = list_square.slice();

var rem_square = [];

var rgb_question = list_square_2[Math.floor(Math.random() * list_square_2.length)];

for(var i = 0; i <= 5; i++){
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    list_square_2[i].style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";

    if(list_square_2[i] === rgb_question){
        num1.textContent = red;
        num2.textContent = green;
        num3.textContent = blue;
    }

}

newbtn.addEventListener("click", function(){
    list_square_2 = list_square.slice();
    var difficulty = true;

    if(rem_square !== []){
        difficulty = false;
    }


    if(difficulty === false){
        for(var i = 0; i <= 5; i++){
            for(var y = 0; y < rem_square.length; y++){
                if(list_square_2[i] === rem_square[y]){
                    list_square_2.splice(i, 1);
                }
            }
        }
    }


    rgb_question = list_square_2[Math.floor(Math.random() * list_square_2.length)];
    
    for(var i = 0; i <= list_square_2.length - 1; i++){
        var red = Math.floor(Math.random() * 256);
        var green = Math.floor(Math.random() * 256);
        var blue = Math.floor(Math.random() * 256);
    
        list_square_2[i].style.background = "rgb(" + red + ", " + green + ", " + blue + ")";
    
        if(list_square_2[i] === rgb_question){
            num1.textContent = red;
            num2.textContent = green;
            num3.textContent = blue;
        }
    }
    
    msg.textContent = "";
    rem_square = [];
    head.style.backgroundColor = "rgb(68, 82, 124)";
    newbtn.textContent = "NEW COLORS";
});

easybtn.addEventListener("click", function(){
    var removed = 0;
    for(var i = 0; i < list_square_2.length; i++){
        if(list_square_2[i] !== rgb_question && removed < 3){
            list_square_2[i].style.display = "none";
            rem_square.push(list_square_2[i]);
            removed++;
        }
    }
    this.classList.add("select");
    hardbtn.classList.remove("select");
});

hardbtn.addEventListener("click", function(){
    square1.style.display = "block";
    square2.style.display = "block";
    square3.style.display = "block";
    square4.style.display = "block";
    square5.style.display = "block";
    square6.style.display = "block";
    rem_square = [];
    list_square_2 = list_square.slice();
    this.classList.add("select");
    easybtn.classList.remove("select");
});

square1.addEventListener("click", function(){
    if(this === rgb_question){
        msg.textContent = "CORRECT!";
        head.style.backgroundColor = this.style.backgroundColor;
        square2.style.backgroundColor = this.style.backgroundColor;
        square3.style.backgroundColor = this.style.backgroundColor;
        square4.style.backgroundColor = this.style.backgroundColor;
        square5.style.backgroundColor = this.style.backgroundColor;
        square6.style.backgroundColor = this.style.backgroundColor;
        newbtn.textContent = "PLAY AGAIN?";
    } else {
        msg.textContent = "Nice Try";
        this.style.backgroundColor = "black";
    }
})

square2.addEventListener("click", function(){
    if(this === rgb_question){
        msg.textContent = "CORRECT!";
        head.style.backgroundColor = this.style.backgroundColor;
        square1.style.backgroundColor = this.style.backgroundColor;
        square3.style.backgroundColor = this.style.backgroundColor;
        square4.style.backgroundColor = this.style.backgroundColor;
        square5.style.backgroundColor = this.style.backgroundColor;
        square6.style.backgroundColor = this.style.backgroundColor;
        newbtn.textContent = "PLAY AGAIN?";
    } else {
        msg.textContent = "Nice Try";
        this.style.backgroundColor = "black";
    }
})

square3.addEventListener("click", function(){
    if(this === rgb_question){
        msg.textContent = "CORRECT!";
        head.style.backgroundColor = this.style.backgroundColor;
        square2.style.backgroundColor = this.style.backgroundColor;
        square1.style.backgroundColor = this.style.backgroundColor;
        square4.style.backgroundColor = this.style.backgroundColor;
        square5.style.backgroundColor = this.style.backgroundColor;
        square6.style.backgroundColor = this.style.backgroundColor;
        newbtn.textContent = "PLAY AGAIN?";
    } else {
        msg.textContent = "Nice Try";
        this.style.backgroundColor = "black";
    }
})

square4.addEventListener("click", function(){
    if(this === rgb_question){
        msg.textContent = "CORRECT!";
        head.style.backgroundColor = this.style.backgroundColor;
        square2.style.backgroundColor = this.style.backgroundColor;
        square3.style.backgroundColor = this.style.backgroundColor;
        square1.style.backgroundColor = this.style.backgroundColor;
        square5.style.backgroundColor = this.style.backgroundColor;
        square6.style.backgroundColor = this.style.backgroundColor;
        newbtn.textContent = "PLAY AGAIN?";
    } else {
        msg.textContent = "Nice Try";
        this.style.backgroundColor = "black";
    }
})

square5.addEventListener("click", function(){
    if(this === rgb_question){
        msg.textContent = "CORRECT!";
        head.style.backgroundColor = this.style.backgroundColor;
        square2.style.backgroundColor = this.style.backgroundColor;
        square3.style.backgroundColor = this.style.backgroundColor;
        square4.style.backgroundColor = this.style.backgroundColor;
        square1.style.backgroundColor = this.style.backgroundColor;
        square6.style.backgroundColor = this.style.backgroundColor;
        newbtn.textContent = "PLAY AGAIN?";
    } else {
        msg.textContent = "Nice Try";
        this.style.backgroundColor = "black";
    }
})

square6.addEventListener("click", function(){
    if(this === rgb_question){
        msg.textContent = "CORRECT!";
        head.style.backgroundColor = this.style.backgroundColor;
        square2.style.backgroundColor = this.style.backgroundColor;
        square3.style.backgroundColor = this.style.backgroundColor;
        square4.style.backgroundColor = this.style.backgroundColor;
        square5.style.backgroundColor = this.style.backgroundColor;
        square1.style.backgroundColor = this.style.backgroundColor;
        newbtn.textContent = "PLAY AGAIN?";
    } else {
        msg.textContent = "Nice Try";
        this.style.backgroundColor = "black";
    }
})

