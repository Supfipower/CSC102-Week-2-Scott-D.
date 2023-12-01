function fun1()
{
    var random1 = Math.ceil(Math.random() *10);
    var random2 = Math.ceil(Math.random() *10);
    var sum = random1+random2;
    if (sum == 1) // (random2 !=101))
    {
        document.getElementById(result).innerHTML = "YOU'VE WON - you got 100%!";
    }
}