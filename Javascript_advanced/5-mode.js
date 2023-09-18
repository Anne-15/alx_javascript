function changeMode(size, weight, transform, background, color){
    document.body.style.fontSize = size;
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
}

function main(){
    const spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    const darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    const screamMode = changeMode(12, "normal", "lowercase", "white", "black");

    document.getElementById('spookyButton').addEventListener('click', spooky);
    document.getElementById('darkButton').addEventListener('click', darkMode);
    document.getElementById('screamButton').addEventListener('click', screamMode);

    const body = document.body;

    const div = document.createElement('div');
    const paragraph = document.createElement('p');
    paragraph.innerText = "Welcome Holberton!";
    div.appendChild(paragraph);


    const buttonSpooky = document.createElement("button");
    const buttonText = document.createTextNode("Spooky");
    buttonSpooky.setAttribute('id', 'spookyButton');
    buttonSpooky.appendChild(buttonText);

    const buttonDark = document.createElement("button");
    const buttonTextDark = document.createTextNode("Dark mode");
    buttonDark.setAttribute('id', 'darkButton');
    buttonDark.appendChild(buttonTextDark);

    const buttonScream = document.createElement("button");
    const buttonTextScream = document.createTextNode("Scream mode");
    buttonScream.setAttribute('id', 'screamButton');
    buttonScream.appendChild(buttonTextScream);

    body.appendChild(div);
    body.appendChild(buttonSpooky);
    body.appendChild(buttonDark);
    body.appendChild(buttonScream);
}

main();