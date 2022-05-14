function preload(){

}

function setup(){
    canvas=createCanvas(1000,550);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(1000,550);
    video.hide();

}

function draw(){
    //upper line
    circle(160,60,100);
    circle(260,60,100);
    circle(360,60,100);
    circle(460,60,100);
    circle(560,60,100);
    circle(660,60,100);
    circle(760,60,100);
    circle(860,60,100);

    //right line
    circle(159,159,100);
    circle(159,259,100);
    circle(159,359,100);
    circle(159,459,100);

    //bottom line
    circle(259,459,100);
    circle(359,459,100);
    circle(459,459,100);
    circle(559,459,100);
    circle(659,459,100);
    circle(759,459,100);
    circle(859,459,100);

    //left line
    circle(859,159,100);
    circle(859,259,100);
    circle(859,359,100);

    //camera
    image(video,205,100,600,350);
}

function take_snapshot(){
    save("Birthday Pic.png");
}