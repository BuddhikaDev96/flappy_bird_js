class Game {
  constructor(canvas, context) {
    this.canvas = canvas;
    this.ctx = context;
    this.width = this.canvas.width;
    this.height = this.canvas.height;
   
    this.baseHeight=720;
    this.ratio=this.height/this.baseHeight;
    this.player = new Player(this);
    this.gravity;
    this.resize(this.width,this.height);
    window.addEventListener("resize", (e) => {
       
        this.resize(e.currentTarget.innerWidth,e.currentTarget.innerHeight);
    });


  }
  resize(width,height) {
    this.canvas.width = width;
    this.canvas.height = height;
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.ratio=this.height/this.baseHeight;
    this.gravity=0.15*this.ratio;
    this.player.resize();
  }
  render() {
    this.player.update();
    this.player.draw();
  }
}
window.addEventListener("load", function () {
  const canvas = this.document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  canvas.width = this.window.innerWidth;
  canvas.height = this.window.innerHeight;
  const game = new Game(canvas, ctx);

  function animate() {
   
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.render();
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
});
