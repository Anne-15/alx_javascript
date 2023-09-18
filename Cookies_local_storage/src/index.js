function setCookies () {
    const firstname = document.getElementById("firstname").value;
    const email = document.getElementById("email").value;

    document.cookie = `firstname=${firstname}`;
    document.cookie = `email=${email}`;
}

function showCookies () {
    const cookies = document.cookie.split(';');
    const cookieDisplay = document.getElementById('cookieDisplay');
    cookieDisplay.innerHTML = 'Cookies:<br>';

    for (const cookie of cookies) {
        const [name, value] = cookie.trim().split('=');
        cookieDisplay.innerHTML += `${name}: ${value}<br>`;
    }
}