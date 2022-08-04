sco=-1;
cross=true;
document.onkeydown = function(e){
    console.log("Key code is: ",e.keyCode)
    if(e.keyCode==38){
        hum = document.querySelector('.hum');
        hum.classList.add('animate');
        setTimeout(()=> {
            hum.classList.remove('animate')
        }, 700);
    }
    if(e.keyCode==37)
    {
        hum = document.querySelector('.hum');
        humx =  parseInt(window.getComputedStyle(hum,null).getPropertyValue('left'));
        hum.style.left = (humx - 112) + "px";
    }
    if(e.keyCode==39)
    {
        hum = document.querySelector('.hum');
        humx =  parseInt(window.getComputedStyle(hum,null).getPropertyValue('left'));
        hum.style.left = (humx + 112) + "px";
    }
}

setInterval(()=>{
    hum = document.querySelector('.hum');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    dx = parseInt(window.getComputedStyle(hum,null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(hum,null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));

    setx = Math.abs(dx-ox);
    sety = Math.abs(dy-oy);

    if(setx<100 && sety<100)
    {
        gameOver.style.visibility = 'visible';
        obstacle.classList.remove('obs')
    }
    else if(setx<145 && cross)
    {
        sco+=1;
        newScore(sco);
        cross=false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur + 's';
 	},500);
    }
},10);

function newScore(sco){
    
    score.innerHTML = "Your Score is: " + sco;
}