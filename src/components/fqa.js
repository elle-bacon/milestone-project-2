import React from "react"
import logo from "/Users/cerinamalaluan/Projects/milestone-project-2-1/Assests/logo.png";
console.log(logo); // /logo.png

function Header() {
  // hopefully our cat logo
  return <img src={logo} alt="Logo" />;
}

function FQA () {

    return(
        <>
        <h3>this is fqa</h3>
        <h4>Why chattkat</h4>
        <p>
            who doesnt love cats? Meet our chatty cats! <div id="myImg"></div>
            <script>
                var img = document.createElement('img');
                img.src = "/Users/cerinamalaluan/Projects/milestone-project-2-1/Assests/The-chattty-cats.png";
                var src = document.getElementById("myImg);
                src.appendChild(img);
                 </script>
        </p>
        <h4>Who made this?</h4>
        <p>
            Emily, Daniel and Cerina as a milestone project for a software development bootcamp!
        </p>
        <h4>What does this website do?</h4>
        <p>
            This website lets you send out a comment
        </p>
        </>
    )
}
export default FQA