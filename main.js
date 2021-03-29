canvas = new fabric.Canvas("myCanvas"); 
ctx = canvas.getContext("2d");

hero_img_height = 30; 
hero_img_width = 30; 

hero_x = 10; 
hero_y = 10;

hero_object = ""; 
block_img_object = ""; 

function hero_update(){
   fabric.Image.fromURL("hero.webp", function(Img){
    hero_object = Img; 
    hero_object.scaleToWidth(150);
    hero_object.scaleToWidth(140);
    hero_object.set({
           top:hero_y,
           left:hero_x 

       });
       canvas.add(hero_object);
   });

}

function new_image(get_Image){
    fabric.Image.fromURL(get_Image, function(Img){
        hero_img_object = Img; 
        hero_img_object.scaleToWidth(hero_img_width);
        hero_img_object.scaleToWidth(hero_img_height);
        hero_img_object.set({
            top:hero_y,
            left:hero_x 
 
        });
        canvas.add(hero_img_object);
    });
}





window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode; 
    console.log(keyPressed); 

    if(e.shiftKey == true && keyPressed == "80"){
        console.log("P and Shift were pressed together")
        hero_img_width = hero_img_width + 10; 
        hero_img_height = hero_img_height + 10;
        document.getElementById("current_width").innerHTML = hero_img_width;
        document.getElementById("current_height").innerHTML = hero_img_height;

    }

    if(e.shiftKey == true && keyPressed == "77"){
        console.log("M and Shift were pressed together")
        hero_img_width = hero_img_width - 10; 
        hero_img_height = hero_img_height - 10;
        document.getElementById("current_width").innerHTML = hero_img_width;
        document.getElementById("current_height").innerHTML = hero_img_height;
        
    }
 
    if(keyPressed == "38"){
        Up(); 
        console.log("up");
    }

    if(keyPressed == "40"){
        Down(); 
        console.log("down");
    }
 
    if(keyPressed == "37"){
        Left(); 
        console.log("left");
    }

    if(keyPressed == "39"){
        Right(); 
        console.log("right");
    }

    if (keyPressed == "70"){
        new_image("ironman_face.png");
        console.log("f");
    }  

    if (keyPressed == "66"){
        new_image("spiderman_body.png");
        console.log("b");
    }

    if (keyPressed == "76"){
        new_image("hulk_legs.png");
        console.log("l");
    }

    if (keyPressed == "72"){
        new_image("thor_right_hand.png");
        console.log("h");
    }

    if (keyPressed == "82"){
        new_image("ironman_left_hand.png");
        console.log("r");
    }

}