function run() {
    let htmlCode = document.getElementById("html-code").value;
    let cssCode = document.getElementById("css-code").value;
    let jsCode = document.getElementById("js-code").value;
    let output = document.getElementById("output");
    output.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + "</style>";
    output.contentWindow.eval(jsCode);
    

    localStorage.setItem("htmlCode", htmlCode);
    localStorage.setItem("cssCode", cssCode);
    localStorage.setItem("jsCode", jsCode);
    
}


function loadContent() {
    document.getElementById("html-code").value = localStorage.getItem("htmlCode") || "";
    document.getElementById("css-code").value = localStorage.getItem("cssCode") || "";
    document.getElementById("js-code").value = localStorage.getItem("jsCode") || "";

    run();
    
}
window.onbeforeunload = function() {
    return "Are you sure you want to reload? Your code will be lost.";
};


