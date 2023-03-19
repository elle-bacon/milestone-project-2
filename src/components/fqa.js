import React from "react"

function FQA () {

    return(
        <>
        <h3>Welcome to FQA (Frequent Questions Asked.)</h3>
        <h4>Why ChattyKat?</h4>
        <p>
            Who doesnt love cats?
        </p>
        <h4>Who made this?</h4>
        <p>
            Emily, Daniel and Cerina created this as a milestone project for a software development bootcamp!
        </p>
        <h4>What does this website do?</h4>
        <p>
            This website lets you comment ideas anonymously to your community.
    </p>

        <div>
<h3>Questions, Comments, Concerns, Suggestions?  Let us know!</h3>
        <form id="contact_form" action="#" method="POST" enctype="multipart/form-data">
  
  <div class="row">
    <label class="required" for="message">Your message:</label><br />
    <textarea id="message" class="input" name="message" rows="7" cols="30"></textarea><br />
    <span id="message_validation" class="error_message"></span>
  </div>
    
    <input id="submit_button" type="submit" value="Submit" />
</form>
</div>
        </>
    )
}
export default FQA
