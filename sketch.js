const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var hexagon, slingShot;

function preload() {}

function setup(){
    var canvas = createCanvas(1500,700);
    engine = Engine.create();
    world = engine.world;


    ground1 = new Ground(600, 600, 280, 10);
    ground2 = new Ground(1000, 500, 280, 10);

    //Part-1, Level-1
    squariad1 = new Pinkrect(480, 580, 30, 50, 0);
    squariad2 = new Pinkrect(510, 580, 30, 50, 0);
    squariad3 = new Pinkrect(540, 580, 30, 50, 0);
    squariad4 = new Pinkrect(570, 580, 30, 50, 0);
    squariad5 = new Pinkrect(600, 580, 30, 50, 0);
    squariad6 = new Pinkrect(630, 580, 30, 50, 0);
    squariad7 = new Pinkrect(660, 580, 30, 50, 0);
    squariad8 = new Pinkrect(690, 580, 30, 50, 0);
    squariad9 = new Pinkrect(720, 580, 30, 50, 0);
    //Part - 1, Level - 2
    squariad10 = new Redrect(495, 520, 30, 50, 0);
    squariad11 = new Redrect(525, 520, 30, 50, 0);
    squariad12 = new Redrect(555, 520, 30, 50, 0);
    squariad13 = new Redrect(585, 520, 30, 50, 0);
    squariad14 = new Redrect(615, 520, 30, 50, 0);
    squariad15 = new Redrect(645, 520, 30, 50, 0);
    squariad16 = new Redrect(675, 520, 30, 50, 0);
    squariad17 = new Redrect(705, 520, 30, 50, 0);
    //Part - 1, Level - 3 
    squariad18 = new Yellowrect(510, 480, 30, 50, 0);
    squariad19 = new Yellowrect(540, 480, 30, 50, 0);
    squariad20 = new Yellowrect(570, 480, 30, 50, 0);
    squariad21 = new Yellowrect(600, 480, 30, 50, 0);
    squariad22 = new Yellowrect(630, 480, 30, 50, 0);
    squariad23 = new Yellowrect(660, 480, 30, 50, 0);
    squariad24 = new Yellowrect(690, 480, 30, 50, 0);
    //Part - 1, Level - 4
    squariad25 = new Purplerect(525, 430, 30, 50, 0);
    squariad26 = new Purplerect(555, 430, 30, 50, 0);
    squariad27 = new Purplerect(585, 430, 30, 50, 0);
    squariad28 = new Purplerect(615, 430, 30, 50, 0);
    squariad29 = new Purplerect(645, 430, 30, 50, 0);
    squariad30 = new Purplerect(675, 430, 30, 50, 0);
    //Part - 1, Level - 5
    squariad31 = new Greenrect(540, 380, 30, 50, 0);
    squariad32 = new Greenrect(570, 380, 30, 50, 0);
    squariad33 = new Greenrect(600, 380, 30, 50, 0);
    squariad34 = new Greenrect(630, 380, 30, 50, 0);
    squariad35 = new Greenrect(660, 380, 30, 50, 0);
    //Part - 1, Level - 6
    squariad36 = new Orangerect(555, 330, 30, 50, 0);
    squariad37 = new Orangerect(585, 330, 30, 50, 0);
    squariad38 = new Orangerect(615, 330, 30, 50, 0);
    squariad39 = new Orangerect(645, 330, 30, 50, 0);
    //Part - 1, Level - 7
    squariad40 = new Bluerect(570, 280, 30, 50, 0);
    squariad41 = new Bluerect(600, 280, 30, 50, 0);
    squariad42 = new Bluerect(630, 280, 30, 50, 0);
    //Part - 1, Level - 8
    squariad43 = new Whiterect(585, 230, 30, 50, 0);
    squariad44 = new Whiterect(615, 230, 30, 50, 0);
    //Part - 1, Level - 9 
    squariad45 = new Cherry(600, 180, 30, 50, 0);

    //Part - 2, Level - 1
    box1 = new Pinkrect(880, 480, 20, 30, 0);
    box2 = new Pinkrect(900, 480, 20, 30, 0);
    box3 = new Pinkrect(920, 480, 20, 30, 0);
    box4 = new Pinkrect(940, 480, 20, 30, 0);
    box5 = new Pinkrect(960, 480, 20, 30, 0);
    box6 = new Pinkrect(980, 480, 20, 30, 0);
    box7 = new Pinkrect(1000, 480, 20, 30, 0);
    box8 = new Pinkrect(1020, 480, 20, 30, 0);
    box9 = new Pinkrect(1040, 480, 20, 30, 0);
    box10 = new Pinkrect(1060, 480, 20, 30, 0);
    box11 = new Pinkrect(1080, 480, 20, 30, 0);
    box12 = new Pinkrect(1100, 480, 20, 30, 0);
    //Part - 2, Level - 2
    box13 = new Redrect(890, 450, 20, 30, 0);
    box14 = new Redrect(910, 450, 20, 30, 0);
    box15 = new Redrect(930, 450, 20, 30, 0);
    box16 = new Redrect(950, 450, 20, 30, 0);
    box17 = new Redrect(970, 450, 20, 30, 0);
    box18 = new Redrect(990, 450, 20, 30, 0);
    box19 = new Redrect(1010, 450, 20, 30, 0);
    box20 = new Redrect(1030, 450, 20, 30, 0);
    box21 = new Redrect(1050, 450, 20, 30, 0);
    box22 = new Redrect(1070, 450, 20, 30, 0);
    box23 = new Redrect(1090, 450, 20, 30, 0);
    //Part - 2, Level - 3
    box24 = new Yellowrect(900, 420, 20, 30, 0);
    box25 = new Yellowrect(920, 420, 20, 30, 0);
    box26 = new Yellowrect(940, 420, 20, 30, 0);
    box27 = new Yellowrect(960, 420, 20, 30, 0);
    box28 = new Yellowrect(980, 420, 20, 30, 0);
    box29 = new Yellowrect(1000, 420, 20, 30, 0);
    box30 = new Yellowrect(1020, 420, 20, 30, 0);
    box31 = new Yellowrect(1040, 420, 20, 30, 0);
    box32 = new Yellowrect(1060, 420, 20, 30, 0);
    box33 = new Yellowrect(1080, 420, 20, 30, 0);
    //Part - 2, Level - 4
    box34 = new Purplerect(910, 390, 20, 30, 0);
    box35 = new Purplerect(930, 390, 20, 30, 0);
    box36 = new Purplerect(950, 390, 20, 30, 0);
    box37 = new Purplerect(970, 390, 20, 30, 0);
    box38 = new Purplerect(990, 390, 20, 30, 0);
    box39 = new Purplerect(1010, 390, 20, 30, 0);
    box40 = new Purplerect(1030, 390, 20, 30, 0);
    box41 = new Purplerect(1050, 390, 20, 30, 0);
    box42 = new Purplerect(1070, 390, 20, 30, 0);
    //Part - 2, Level - 5
    box43 = new Greenrect(920, 360, 20, 30, 0);
    box44 = new Greenrect(940, 360, 20, 30, 0);
    box45 = new Greenrect(960, 360, 20, 30, 0);
    box46 = new Greenrect(980, 360, 20, 30, 0);
    box47 = new Greenrect(1000, 360, 20, 30, 0);
    box48 = new Greenrect(1020, 360, 20, 30, 0);
    box49 = new Greenrect(1040, 360, 20, 30, 0);
    box50 = new Greenrect(1060, 360, 20, 30, 0);
    //Part - 2, Level - 6
    box51 = new Orangerect(930, 330, 20, 30, 0);
    box52 = new Orangerect(950, 330, 20, 30, 0);
    box53 = new Orangerect(970, 330, 20, 30, 0);
    box54 = new Orangerect(990, 330, 20, 30, 0);
    box55 = new Orangerect(1010, 330, 20, 30, 0);
    box56 = new Orangerect(1030, 330, 20, 30, 0);
    box57 = new Orangerect(1050, 330, 20, 30, 0);
    //Part - 2, Level - 7
    box58 = new Bluerect(940, 300, 20, 30, 0);
    box59 = new Bluerect(960, 300, 20, 30, 0);
    box60 = new Bluerect(980, 300, 20, 30, 0);
    box61 = new Bluerect(1000, 300, 20, 30, 0);
    box62 = new Bluerect(1020, 300, 20, 30, 0);
    box63 = new Bluerect(1040, 300, 20, 30, 0);
    //Part - 2, Level - 8
    box64 = new Whiterect(950, 270, 20, 30, 0);
    box65 = new Whiterect(970, 270, 20, 30, 0);
    box66 = new Whiterect(990, 270, 20, 30, 0);
    box67 = new Whiterect(1010, 270, 20, 30, 0);
    box68 = new Whiterect(1030, 270, 20, 30, 0);
    //Part - 2, Level - 9
    box69 = new Pinkrect(960, 240, 20, 30, 0);
    box70 = new Pinkrect(980, 240, 20, 30, 0);
    box71 = new Pinkrect(1000, 240, 20, 30, 0);
    box72 = new Pinkrect(1020, 240, 20, 30, 0);
    //Part - 2, Level - 10
    box73 = new Redrect(965, 210, 20, 30, 0);
    box74 = new Redrect(990, 210, 20, 30, 0);
    box75 = new Redrect(1010, 210, 20, 30, 0);
    //Part - 2, Level - 11
    box76 = new Yellowrect(980, 180, 20, 30, 0);
    box77 = new Yellowrect(1000, 180, 20, 30, 0);
    //Part - 2, Level - 12
    box78 = new Cherry(990, 150, 20, 30, 0);

    hexagon = new Hexagon(200,200);
    slingShot  = new Slingshot(hexagon.body,{x:300, y:200});
}

function draw(){
    background(0);
    Engine.update(engine);
    strokeWeight(4);

    ground1.display();
    ground2.display();

    squariad1.display();
    squariad2.display();
    squariad3.display();
    squariad4.display();
    squariad5.display();
    squariad6.display();
    squariad7.display();
    squariad8.display();
    squariad9.display();
    squariad10.display();
    squariad11.display();
    squariad12.display();
    squariad13.display();
    squariad14.display();
    squariad15.display();
    squariad16.display();
    squariad17.display();
    squariad18.display();
    squariad19.display();
    squariad20.display();
    squariad21.display();
    squariad22.display();
    squariad23.display();
    squariad24.display();
    squariad25.display();
    squariad26.display();
    squariad27.display();
    squariad28.display();
    squariad29.display();
    squariad30.display();
    squariad31.display();
    squariad32.display();
    squariad33.display();
    squariad34.display();
    squariad35.display();
    squariad36.display();
    squariad37.display();
    squariad38.display();
    squariad39.display();
    squariad40.display();
    squariad41.display();
    squariad42.display();
    squariad43.display();
    squariad44.display();
    squariad45.display();
    

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    box29.display();
    box30.display();
    box31.display();
    box32.display();
    box33.display();
    box34.display();
    box35.display();
    box36.display();
    box37.display();
    box38.display();
    box39.display();
    box40.display();
    box41.display();
    box42.display();
    box43.display();
    box44.display();
    box45.display();
    box46.display();
    box47.display();
    box48.display();
    box49.display();
    box50.display();
    box51.display();
    box52.display();
    box53.display();
    box54.display();
    box55.display();
    box56.display();
    box57.display();
    box58.display();
    box18.display();
    box59.display();
    box60.display();
    box61.display();
    box62.display();
    box63.display();
    box64.display();
    box65.display();
    box66.display();
    box67.display()
    box68.display();
    box69.display();
    box70.display();
    box71.display();
    box72.display();
    box73.display();
    box74.display();
    box75.display();
    box76.display();
    box77.display();
    box78.display();






    hexagon.display();
    slingShot.display();

}
 function mouseDragged() {
     var options={
        x: mouseX,
        y: mouseY

     }
    Matter.Body.setPosition(hexagon.body, options)
 }


 function mouseReleased() {
    slingShot.fly();



 }