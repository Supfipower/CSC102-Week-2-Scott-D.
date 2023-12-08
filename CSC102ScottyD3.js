function func1()
{
    alert("your fist function");
}

function playAGame()
{
    var random1 = Math.ceil(Math.random() *100);
    

    document.getElementById("rand1").innerHTML = "1st random num = " + random1;

    
    var sum = random1;
    if (sum == 100)
{
    document.getElementById("result").innerHTML = "You Win!";
}
    
else if (sum < 33)
    {
     document.getElementById("result").innerHTML = "LOW #s this time";
    }
    
        else
    {
     document.getElementById("result").innerHTML = "Average - booo";
    }
}
