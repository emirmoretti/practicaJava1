let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes = 
    [
        'You learn more from failure than from succes. Dont Let It Stop you',
        'Knowing is not enough; we must apply. Wishing is not enough; we must do. - Johann wolfang von goethe',
        "Don't quit",
    ];

    btn.addEventListener('click', function(){
        var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
        output.innerHTML = randomQuote;
    })
