//IIFE -- Immediately Invoked Function Expression
// Anonymous Self-Executing Function
(function()
{

    function Start()
    {
        console.log("Hello, World!");
    }

    window.addEventListener('load', Start);

})();