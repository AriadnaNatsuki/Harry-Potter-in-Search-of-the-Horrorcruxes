const frame = new Frame({
    scaling: "fit",
    width: 622,
    height: 603,
    color: "#EEE",
    outerColor: "#555",
    assets: "maze.jpg",
    path: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1604712/"
});
frame.on("ready", () => { // ES6 Arrow Function - similar to function(){}
    zog("ready from ZIM Frame"); // logs in console (F12 - choose console)

    // often need below - so consider it part of the template
    let stage = frame.stage;
    let stageW = frame.width;
    let stageH = frame.height;

    // REFERENCES for ZIM at http://zimjs.com
    // see https://zimjs.com/physics for ZIM TEN physics examples
    // see https://zimjs.com/learn.html for video and code tutorials
    // see https://zimjs.com/docs.html for documentation
    // see https://www.youtube.com/watch?v=pUjHFptXspM for INTRO to ZIM
    // see https://www.youtube.com/watch?v=v7OT0YrDWiY for INTRO to CODE

    // CODE HERE

    // MAZE
    // we can load in ANY picture of a maze
    // as long as the walls are different than the backing
    // we could even load two pictures... 
    // a hidden one to represent the walls and a visual more complex one
    // we then use physics to apply a force to the ball to follow the mouse
    // and we make physic walls dynamically around the ball's position
    // the walls are placed only on the non-background color
    // the walls are removed as the ball leaves the area and new ones are made

    const maze = frame.asset("maze.jpg")
        .center(stage)
        .cache();
    // cache the image so we have a second canvas to use later
    // this allows us to get the color of the pixel under the ball
    // without getting the color of the ball ;-)

    // create a Physics instance to handle making the ball bounce off walls
    // we will make walls dynamically only in the area of the ball
    // that way we don't make thousands of walls that we don't need
    const physics = new Physics(0); // gravity 0

    const ball = new Circle(4, purple)
        .loc(50, 50)
        .addPhysics(true, 2); // dynamic and contract physics body by 2 pixels

    // capture the stagemousemove and set mouse position
    let mouseX = ball.x;
    let mouseY = ball.y;
    stage.on("stagemousemove", e => {
        mouseX = e.stageX;
        mouseY = e.stageY;
    });

    // create a Ticker to constantly apply a force to the ball
    // and make the walls near the ball
    // the factor is for the force
    // balance the speed with a tendency to go through walls if too fast

    const factor = .00015; // force is incremental in time (make small)
    const max = .02; // limit the mouse distance (which limits force)
    physics.Ticker.add(() => {
        // make the walls
        makeWalls();

        // apply a force towards the mouse
        // do not use stage.mouseX and stage.mouseY
        // as they do not catch touch location
        // use any mouse event's mouseX and mouseY instead
        // we did that and stored the values in mouseX and mouseY
        let dX = constrain((mouseX - ball.x) * factor, -max, max);
        let dY = constrain((mouseY - ball.y) * factor, -max, max);
        ball.force(dX, dY);
    });

    // uncomment this to see the walls being made
    // physics.debug();
    // frame.on("resize", ()=>{
    // 	physics.updateDebug();
    // });

    // we want to find the color of the maze picture around where the ball is
    // we will put a wall at anywhere that is not the background color
    // so we access the context 2D of the cached picture
    const ctx = maze.cacheCanvas.getContext('2d');

    const num = 10; // test a 10x10 grid around the ball
    const space = 1; // the spacing of the points on the grid
    const radius = 1; // the radius of a wall placed at a point
    let walls = []; // an array to keep track of the active walls

    function makeWalls() {

        // remove any walls from the last time
        loop(walls, wall => {
            physics.remove(wall);
        });
        walls = [];

        // loop through our grid
        loop(num, i => {
            loop(num, j => {

                // locate the x and y point on the grid for this i,j index
                let x = ball.x - num / 2 * space + i * space;
                let y = ball.y - num / 2 * space + j * space;

                // get the color data of the pixel at this grid location
                let data = ctx.getImageData(x, y, 1, 1).data;

                // Physics lets you automatically map physics bodies to ZIM objects
                // but in this case, we do not need visual objects
                // and we are creating many objects - so do not make the ZIM objects
                // Physics has methods to add only physics objects
                // so this is what we do in this case

                // make the wall if the color is darker than the background color
                if (data[0] < 150) {
                    let wall = physics.makeCircle(radius, false);
                    wall.x = x;
                    wall.y = y;
                    // add the wall to our array of walls
                    walls.push(wall);
                }
            });
        });
    }

    // DOCS FOR ITEMS USED
    // https://zimjs.com/docs.html?item=Frame
    // https://zimjs.com/docs.html?item=Physics
    // https://zimjs.com/docs.html?item=Circle
    // https://zimjs.com/docs.html?item=addPhysics
    // https://zimjs.com/docs.html?item=loop
    // https://zimjs.com/docs.html?item=center
    // https://zimjs.com/docs.html?item=constrain
    // https://zimjs.com/docs.html?item=zog
    // https://zimjs.com/docs.html?item=Ticker 

}); // end of ready