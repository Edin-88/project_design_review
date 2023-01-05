// click = switch between dark and bright design 

let darkDesign = document.getElementById("darkDesign")

darkDesign.addEventListener("click", function () {

    const changeColourBckg = document.body.style.backgroundColor;

    if (changeColourBckg === 'black') {
        document.body.style.backgroundColor = "white";
    }
    else {
        document.body.style.backgroundColor = "black";
    }

    if (changeColourBckg === 'black') {
        document.body.style.color = "black";
    }
    else {
        document.body.style.color = "white";
    }
});