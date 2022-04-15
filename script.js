document.addEventListener("DOMContentLoaded", function(){
    var getJarJar1 = document.getElementById('jar1');
    var getJarJar2 = document.getElementById('jar2');
    var getJarJar3 = document.getElementById('jar3');
    var getJarJar4 = document.getElementById('jar4');
    var getJarJar5 = document.getElementById('jar5');
    var getJarJar6 = document.getElementById('jar6');
    var getJarJar7 = document.getElementById('jar7');

    var getJarJar1img = getJarJar1.querySelectorAll('img');
    var getJarJar2img = getJarJar2.querySelectorAll('img');
    var getJarJar3img = getJarJar3.querySelectorAll('img');
    var getJarJar4img = getJarJar4.querySelectorAll('img');
    var getJarJar5img = getJarJar5.querySelectorAll('img');
    var getJarJar6img = getJarJar6.querySelectorAll('img');
    var getJarJar7img = getJarJar7.querySelectorAll('img');


    var scoreBoard = document.getElementById('scoreBoard');
    var score = 0;

    var getBody = document.getElementById('body');
    var getBackground = Math.floor(Math.random() * 5);

    switch(getBackground) {
        case 0:
            getBody.style.backgroundImage = "url(sw-bkgd-1.jpeg)";
            break;

        case 1:
            getBody.style.backgroundImage = "url(sw-bkgd-2.jpeg)";
            break;

        case 2:
            getBody.style.backgroundImage = "url(sw-bkgd-3.jpeg)";
            break;

        case 3:
            getBody.style.backgroundImage = "url(sw-bkgd-4.jpeg)";
            break;

        default: 
            getBody.style.backgroundImage = "url(sw-bkgd-4.jpeg)";
    }


    //jar jar 1
    setInterval(function() {
        var leftPoint = Math.floor(Math.random() * window.innerWidth);
        var topPoint = Math.floor(Math.random() * window.innerHeight);
        var jarWidth = Math.floor(Math.random() * 40) + 100;
        var displayChance = Math.floor(Math.random() * 6);

        if (displayChance < 2) {
            getJarJar1.style.display = 'block';
            getJarJar1.style.pointerEvents = 'auto';
            getJarJar1img[0].setAttribute('src', 'jar-jar.png');
        }
        else {
            getJarJar1.style.display = 'none';
        }

        getJarJar1.style.left = leftPoint + 'px';
        getJarJar1.style.top = topPoint + 'px';
        getJarJar1.style.width = jarWidth + 'px';

        
    }, 1000)

    getJarJar1.addEventListener("click", function() {
        getJarJar1.style.pointerEvents = 'none';
        getJarJar1img[0].setAttribute('src', 'jar-jar-ouch.png');
        score++;
        scoreBoard.innerHTML = score;
        setTimeout(function() {
            getJarJar1.style.display = 'none';
        }, 500);
    })


    //jar jar 2
    setInterval(function() {
        var leftPoint = Math.floor(Math.random() * window.innerWidth);
        var topPoint = Math.floor(Math.random() * window.innerHeight);
        var jarWidth = Math.floor(Math.random() * 40) + 100;
        var displayChance = Math.floor(Math.random() * 6);

        if (displayChance < 2) {
            getJarJar2.style.display = 'block';
            getJarJar2.style.pointerEvents = 'auto';
            getJarJar2img[0].setAttribute('src', 'jar-jar.png');
        }
        else {
            getJarJar2.style.display = 'none';
        }

        getJarJar2.style.left = leftPoint + 'px';
        getJarJar2.style.top = topPoint + 'px';
        getJarJar2.style.width = jarWidth + 'px';

        
    }, 1500)

    getJarJar2.addEventListener("click", function() {
        getJarJar2.style.pointerEvents = 'none';
        getJarJar2img[0].setAttribute('src', 'jar-jar-ouch.png');
        score++;
        scoreBoard.innerHTML = score;
        setTimeout(function() {
            getJarJar2.style.display = 'none';
        }, 500);
    })


    //jar jar 3
    setInterval(function() {
        var leftPoint = Math.floor(Math.random() * window.innerWidth);
        var topPoint = Math.floor(Math.random() * window.innerHeight);
        var jarWidth = Math.floor(Math.random() * 40) + 100;
        var displayChance = Math.floor(Math.random() * 6);

        if (displayChance < 2) {
            getJarJar3.style.display = 'block';
            getJarJar3.style.pointerEvents = 'auto';
            getJarJar3img[0].setAttribute('src', 'jar-jar.png');
        }
        else {
            getJarJar3.style.display = 'none';
        }

        getJarJar3.style.left = leftPoint + 'px';
        getJarJar3.style.top = topPoint + 'px';
        getJarJar3.style.width = jarWidth + 'px';

        
    }, 3000)

    getJarJar3.addEventListener("click", function() {
        getJarJar3.style.pointerEvents = 'none';
        getJarJar3img[0].setAttribute('src', 'jar-jar-ouch.png');
        score++;
        scoreBoard.innerHTML = score;
        setTimeout(function() {
            getJarJar3.style.display = 'none';
        }, 500);
    })


    //jar jar 4
    setInterval(function() {
        var leftPoint = Math.floor(Math.random() * window.innerWidth);
        var topPoint = Math.floor(Math.random() * window.innerHeight);
        var jarWidth = Math.floor(Math.random() * 40) + 100;
        var displayChance = Math.floor(Math.random() * 6);

        if (displayChance < 2) {
            getJarJar4.style.display = 'block';
            getJarJar4.style.pointerEvents = 'auto';
            getJarJar4img[0].setAttribute('src', 'jar-jar.png');
        }
        else {
            getJarJar4.style.display = 'none';
        }

        getJarJar4.style.left = leftPoint + 'px';
        getJarJar4.style.top = topPoint + 'px';
        getJarJar4.style.width = jarWidth + 'px';

        
    }, 2500)

    getJarJar4.addEventListener("click", function() {
        getJarJar4.style.pointerEvents = 'none';
        getJarJar4img[0].setAttribute('src', 'jar-jar-ouch.png');
        score++;
        scoreBoard.innerHTML = score;
        setTimeout(function() {
            getJarJar4.style.display = 'none';
        }, 500);
    })


    //jar jar 5
    setInterval(function() {
        var leftPoint = Math.floor(Math.random() * window.innerWidth);
        var topPoint = Math.floor(Math.random() * window.innerHeight);
        var jarWidth = Math.floor(Math.random() * 40) + 100;
        var displayChance = Math.floor(Math.random() * 6);

        if (displayChance < 2) {
            getJarJar5.style.display = 'block';
            getJarJar5.style.pointerEvents = 'auto';
            getJarJar5img[0].setAttribute('src', 'jar-jar.png');
        }
        else {
            getJarJar5.style.display = 'none';
        }

        getJarJar5.style.left = leftPoint + 'px';
        getJarJar5.style.top = topPoint + 'px';
        getJarJar5.style.width = jarWidth + 'px';

        
    }, 1500)

    getJarJar5.addEventListener("click", function() {
        getJarJar5.style.pointerEvents = 'none';
        getJarJar5img[0].setAttribute('src', 'jar-jar-ouch.png');
        score++;
        scoreBoard.innerHTML = score;
        setTimeout(function() {
            getJarJar5.style.display = 'none';
        }, 500);
    })


    //jar jar 6
    setInterval(function() {
        var leftPoint = Math.floor(Math.random() * window.innerWidth);
        var topPoint = Math.floor(Math.random() * window.innerHeight);
        var jarWidth = Math.floor(Math.random() * 40) + 100;
        var displayChance = Math.floor(Math.random() * 6);

        if (displayChance < 2) {
            getJarJar6.style.display = 'block';
            getJarJar6.style.pointerEvents = 'auto';
            getJarJar6img[0].setAttribute('src', 'jar-jar.png');
        }
        else {
            getJarJar6.style.display = 'none';
        }

        getJarJar6.style.left = leftPoint + 'px';
        getJarJar6.style.top = topPoint + 'px';
        getJarJar6.style.width = jarWidth + 'px';

        
    }, 3000)

    getJarJar6.addEventListener("click", function() {
        getJarJar6.style.pointerEvents = 'none';
        getJarJar6img[0].setAttribute('src', 'jar-jar-ouch.png');
        score++;
        scoreBoard.innerHTML = score;
        setTimeout(function() {
            getJarJar6.style.display = 'none';
        }, 500);
    })


    //jar jar 7
    setInterval(function() {
        var leftPoint = Math.floor(Math.random() * window.innerWidth);
        var topPoint = Math.floor(Math.random() * window.innerHeight);
        var jarWidth = Math.floor(Math.random() * 40) + 100;
        var displayChance = Math.floor(Math.random() * 6);

        if (displayChance < 2) {
            getJarJar7.style.display = 'block';
            getJarJar7.style.pointerEvents = 'auto';
            getJarJar7img[0].setAttribute('src', 'jar-jar.png');
        }
        else {
            getJarJar7.style.display = 'none';
        }

        getJarJar7.style.left = leftPoint + 'px';
        getJarJar7.style.top = topPoint + 'px';
        getJarJar7.style.width = jarWidth + 'px';

        
    }, 2000)

    getJarJar7.addEventListener("click", function() {
        getJarJar7.style.pointerEvents = 'none';
        getJarJar7img[0].setAttribute('src', 'jar-jar-ouch.png');
        score++;
        scoreBoard.innerHTML = score;
        setTimeout(function() {
            getJarJar7.style.display = 'none';
        }, 500);
    })

});