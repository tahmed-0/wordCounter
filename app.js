/*


    <script>
        let words = "Hello World .";
        let count = words.split(" ").length;
        let characters = words.length;
        let spaces = words.split(" ").length-1;




        //how many of a specific letter or word

       
       


console.log(spaces + " " + count + " " + characters);

</script>

*/

function calculate() {
    let getWord = document.getElementById("word").value;
    let spaces = getWord.split(" ").length-1;




    document.getElementById("char").innerHTML = "Characters: " +getWord.length; 
    document.getElementById("count").innerHTML = "Words: " +getWord.split(" ").length;
    document.getElementById("spaces").innerHTML = "Spaces: " +spaces;

}