let origin = window.location.origin;

function copyText(element) {
    let value = element.getAttribute("value");
    navigator.clipboard.writeText(value);

    element.innerText = "Copied."

    setTimeout(function () {
        element.innerText = value;
    }, 3000);
}

function postLink() {
    let linkUrlElement = document.getElementById("main-input");
    let linkUrl = linkUrlElement.value;

    console.log(linkUrl);

    fetch(origin + '/execute/newLink', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ "link": linkUrl })
    })
    .then(response => response.json())
    .then(response => {
        console.log(JSON.stringify(response))

        let mainInput = document.getElementById("initial-input");
        let mainOutput = document.getElementById("main-view-url");

        let keyText = document.getElementById("key-text");
        let linkValue = origin + "/l/" + response.key;
        keyText.innerText = linkValue;
        keyText.setAttribute("value", linkValue);

        mainInput.style.display = "none";
        mainOutput.style.display = "flex";
    });
}