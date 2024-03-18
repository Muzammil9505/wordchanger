// --------------------dark mode--------------
let body = document.querySelector("body");
let btn = document.querySelector("#mode");
let currentMode = "light";


btn.addEventListener("click", () => {
    if (currentMode === "light") {
        currentMode = "dark";
        body.style.backgroundColor = "black";
        body.style.color = "white";
        btn.style.backgroundColor = "white"; btn.style.color = "black";
    }
    else {
        currentMode = "light";
        body.style.backgroundColor = "white";
        body.style.color = "black";
        btn.style.backgroundColor = "black"; btn.style.color = "white";
    }
})

// --------------------word count--------------
let wordcount = document.getElementById("exampleTextarea");

wordcount.addEventListener("input", () => {
    var text = wordcount.value;
    var count = text.trim().split(/\s+/).length;
    document.getElementById("wordCount").textContent = "Words Count: " + count;
})
// --------------------capitalize--------------

function capital() {
    var upper = wordcount.value.toUpperCase();
    wordcount.value = upper;
    if (upper.length>1){
    var contentContainer = document.createElement("div");
    contentContainer.innerHTML = `
        <div class="alert alert-info" role="alert">
            <h6 class="alert-heading">Text converted to Upper Case Successfully !!</h6>
            
        </div>
    `;

    // Insert the container div above the navbar
    document.body.insertBefore(contentContainer, document.body.firstChild);

    setTimeout(() => {
        contentContainer.style.display = "none";
    }, 3000);
}
else{
    alert("Nothing to convert")
}}

// --------------------Small Case--------------

function lower() {
    
    var lower = wordcount.value.toLowerCase();
    if (lower.length>1){
        wordcount.value = lower;
    var contentContainer = document.createElement("div");
    contentContainer.innerHTML = `
        <div class="alert alert-info" role="alert">
            <h6 class="alert-heading">Text converted to Lower Case Successfully !!</h6>
            
        </div>
    `;

    // Insert the container div above the navbar
    document.body.insertBefore(contentContainer, document.body.firstChild);

    setTimeout(() => {
        contentContainer.style.display = "none";
    }, 3000);
}
else{
    alert("Nothing to convert")
}
}

// --------------------title Case--------------
function titled() {
    var text = wordcount.value.toLowerCase(); // Convert text to lowercase
    if (text.length>1){
    text = text.replace(/\b\w/g, function (char) {
        return char.toUpperCase(); // Convert first letter of each word to uppercase
    });
    wordcount.value = text;

    var contentContainer = document.createElement("div");
    contentContainer.innerHTML = `
        <div class="alert alert-info" role="alert">
            <h6 class="alert-heading">Text converted to Titled Case Successfully !!</h6>
            
        </div>
    `;

    // Insert the container div above the navbar
    document.body.insertBefore(contentContainer, document.body.firstChild);

    setTimeout(() => {
        contentContainer.style.display = "none";
    }, 3000);
}
else{
    alert("Nothing to convert")
}
}

function copy() {
    if(wordcount.value.length>=1){
    wordcount.select();
    document.execCommand("copy")
   
    var contentContainer = document.createElement("div");
    contentContainer.innerHTML = `
        <div class="alert alert-info" role="alert">
            <h6 class="alert-heading"> Text Copied Successfully !!</h6>
            
        </div>
    `;

    // Insert the container div above the navbar
    document.body.insertBefore(contentContainer, document.body.firstChild);

    setTimeout(() => {
        contentContainer.style.display = "none";
    }, 3000);
}
else{
    alert("Nothing to Select")
}
}