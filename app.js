
function calculate() {
    let getWord = document.getElementById("word").value;
    let spaces = getWord.split(" ").length-1;




    document.getElementById("char").innerHTML = "Characters: " +getWord.length; 
    document.getElementById("count").innerHTML = "Words: " +getWord.split(" ").length;
    document.getElementById("spaces").innerHTML = "Spaces: " +spaces;

}