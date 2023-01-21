function checkUrl(url) {
    if(url.substring(url.length - 4) != ".com") {
        console.log("Invalid url: no .com");
        return false;
    }

    //http:// https://
    if(url.substring(0, 7) != 'http://' || url.substring(0, 8) != "https://") {
        url = "http://" + url;
    }

    return url;
}

function postLink() {
    let linkUrlElement = document.getElementById("main-input");
    let linkUrl = linkUrlElement.value;
    let correctUrl = checkUrl(linkUrl);

    if(!correctUrl) {
        return;
    }

    console.log(correctUrl);
}