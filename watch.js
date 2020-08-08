var millisec=0,sec=0,min=0,hour=0;
var timer;
var stoptime=document.querySelector(".stopwatch");
function start()
{
    if(!timer){
        timer=setInterval(run,10);
    }
 
}
function run()
{
    stoptime.textContent=gettimer();
    millisec++;
    if(millisec==100)
    {
        millisec=0;
        sec++;

    }
    if(sec==60)
    {
        sec=0;
        min++;

    }
    if(min==60)
    {
        min=0;
        hour++;

    }
    
    
}
function pause()
{
    stoptimer();
}
function stop()
{
    stoptimer();
    millisec=0;
    sec=0;
    min=0;
    stoptime.textContent=gettimer();
    
}
function reset()
{
    stop();
    start();
    
}
function stoptimer()
{
    clearInterval(timer);
    timer=false;
}
function gettimer()
{
    return (hour<10 ? "0"+hour:hour)+":"+(min<10 ? "0"+min:min)+":"+(sec<10 ? "0"+sec:sec)+":"+(millisec<10 ? "0"+millisec:millisec);
   
}
