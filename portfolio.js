//generates random quotes
let quotes = ['The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela',
    `If you look at what you have in life, you'll always have more. -Oprah Winfrey`,
    `Life is what happens when you're busy making other plans. -John Lennon`, `When you reach the end of your rope, tie a knot in it and hang on. -Franklin D. Roosevelt`,
    `Whoever is happy will make others happy too. -Anne Frank`, `A good day starts with a cup of coffee. -Myself`];
let randomQuotes = quotes[Math.floor(Math.random() * quotes.length)];

//responsive nav button toggler
$(document).ready(function () {
    $("#navtoggler").click(function () {
        $(".navlinks").toggle(500)
    })
    $("#quotes").fadeIn(1000).html(`<em>"${randomQuotes}"</em>`)
})

//scroll top button
const topBtn = document.getElementById('returnTop')
window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 700) {
        topBtn.style.display = "unset";
    } else {
        topBtn.style.display = "none";
    }
})
topBtn.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
})
