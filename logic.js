let canvas=document.getElementById('drawing_board');
//canvas.style.backgroundColor='red';
color="black";
let ctx=canvas.getContext("2d")
let item4=document.getElementById('item4')
let text=item4.innerHTML;
let btn1=document.getElementById('this')

function canvasBorder(){
    ctx.lineWidth=8;
    ctx.strokeStyle="rgba(114, 114, 114, 0.9)"
    ctx.beginPath()
    ctx.moveTo(0,0)
    ctx.rect(0,0,600,800)
    ctx.stroke()
    function cornersquare(a,b,c,d){
        ctx.fillStyle='white'
        ctx.strokeStyle=color;
        ctx.lineWidth=1
        ctx.beginPath()
        square(a,b,c,d)
        ctx.stroke()
        ctx.fill()
    }
    cornersquare(1,1,3,3)
    cornersquare(596,1,3,3)
    cornersquare(596,596,3,3)
    cornersquare(1,596,3,3)

}
function square(x_cor,y_cor,width,height){
    ctx.rect(x_cor,y_cor,width,height)
}

function findOrigin(){
    ctx.arc(canvas.offsetWidth/2,client.offsetHeight/2,2,0,Math.PI*2,false)
    ctx.fill()
}
function Line(){
    ctx.moveTo(a,b)
    ctx.lineTo(x,y)
    ctx.stroke();
}
function drawCircle(x,y,r){
    ctx.moveTo(0,0)
    ctx.beginPath()
    ctx.fillStyle='black'
    ctx.arc(x,y,r,Math.PI*2,false)
    ctx.fill()
}

canvasBorder()

canvas.addEventListener('mousemove',function coor(e){
    item4.innerHTML=`x:${e.offsetX} y:${e.offsetY}`;
})



btn1.addEventListener('click',function btnfunc(){
    console.log('button pressed');
    drawCircle(Math.random()*600,Math.random()*800,10);
})