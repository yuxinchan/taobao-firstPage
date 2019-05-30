var oPrev = document.getElementById("prev"),
    oNext = document.getElementById("next"),
    oMain = document.getElementsByClassName("inner-main-con")[0],
    oList = document.getElementsByClassName("inner-main-list")[0],
    oLi = document.getElementsByClassName("inner-main-li"),
    oContainer = document.getElementsByClassName("container")[0];

var timer,time2,
    oLiLength = oLi.length,
    index = 0,
    flag = true;

function moveImg(dis){
    flag = false;
    var time = 400;
    var eachTime = 20;
    var eachDis = dis/(time/eachTime);
    var newLeft = oMain.offsetLeft + dis;
    function eachMove(){
        if(dis > 0 && oMain.offsetLeft < newLeft || oMain.offsetLeft > newLeft){
            oMain.style.left = oMain.offsetLeft + eachDis + "px";
        }else{
            clearInterval(timer);
            oMain.style.left = newLeft + "px";
            if(newLeft == -3120){
                oMain.style.left = -520 + "px";
            }
            if(newLeft == 0){
                oMain.style.left = -2600 + "px";
            }
            flag = true;
        }
    }
    timer = setInterval(eachMove,eachTime);
}

oPrev.onclick = function(){
    if(flag == false) return;
    moveImg(520);
    if(index == 0){
        index = 4;
    }else{
        index--;
    }
    oLiStyle();
}
oNext.onclick = function(){
    if(flag == false) return;
    moveImg(-520);
    if(index == 4){
        index = 0;
    }else{
        index++;
    }
    oLiStyle();
}

function oLiStyle(){
    oList.getElementsByClassName("inner-main-active")[0].className = "inner-main-li";
    oLi[index].className = "inner-main-active inner-main-li";
}

for(var i = 0; i < oLiLength; i++) {
    (function(j){
        oLi[j].onclick = function(){
            var offset = (j - index) * -520;
            moveImg(offset);
            index = j;
            oLiStyle();
        }
    })(i);
}
timer2 = setInterval(oNext.onclick,2000);
oContainer.onmouseover = function(){
    clearInterval(timer2);
}
oContainer.onmouseout = function(){
    timer2 = setInterval(oNext.onclick,2000);
}