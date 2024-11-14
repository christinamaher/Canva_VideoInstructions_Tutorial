var comprehension_check_learning = {
    type: 'comprehension-check',
    instruction_pages: [
        `<div style="max-width:600px;"><p>You will play twelve rounds of a game called 
        <br><br><b>"Gem Hunters"</b></br><br>
        <img src="static/img/characters.png" width="400"</img>
 </p></div>`,

        `<div style="max-width:600px;"> Each round has several trials. On each trial, you will see three gems that have different shapes and colors. 
        <br><br>
        Example Trials: 
        <br>
        <video src="static/img/SampleTrial.mp4" width="400" autoplay loop type="video/mp4"</video>
        <br><br><br><br></div>`,
        
        `<div style="max-width:600px;"> You can select one of the gems using the arrow keys on the keyboard (left, down, or right).<br><br></div>`,
         
         `<div style="max-width:600px;"> Depending on the gem you choose, you might receive a point.<br><br></div>`, 
        
        `<div style="max-width:600px;"> Each round has a <b>special feature</b>. The special feature can be one of the colors  <b>OR</b> one of the shapes. 
        <br><br></div>`, 

        `<div style="max-width:600px;"> When you choose the gem that has the special feature, you are <b>most likely</b> to get a point.
        <br><br></div>`,
        
       `When you choose a gem that does <b>not</b> have the special feature, you are <b>less likely</b> to get a point. 
        <br><br></div>`,
        
        `<div style="max-width:600px;"> Your job is to find the special feature in each round.
        <br><br>
        Choosing gems that have the special feature will help you get the most points! 
        <br><br></div>`,
        
                `<div style="max-width:600px;"> Remember! You will <b>not</b> receive a point <i>every time</i> you choose a gem with the special feature, but it is still the best choice!
        <br><br>
        In the example below,choosing circular gems resulted in +1 points in 3 out of 4 trials. Circle is the special feature in this example. 
        <br><br><img src="static/img/example_75probability.png" width="400"</img></div>`,
        
                        `<div style="max-width:600px;"> Remember! You may receive a point when you choose a gem <i>without</i> the special feature. However, these gems are not the best choice. 
        <br><br>
        In the example below, choosing blue gems resulted in +1 points in only 1 out of 4 trials. Blue is not the special feature in this example. 
        <br><br><img src="static/img/example_25probability.png" width="400"</img></div>`,
    
        
        `<div style="max-width:600px;"> <b>On some rounds, you <i> will </i> get a hint about the special feature.</b> <br><br> The hint helps you find the special feature by telling you whether it is one of the colors or one of the shapes.
        <br><br></div>`,
        
		`<div style="max-width:600px;"> <b>On other rounds, you <i> will not </i> get a hint.</b> <br><br> 
        For these rounds, you will not have help finding the special feature. It can be one of the gem colors or one of the gem shapes.   
        <br><br></div>`,
         
        `<div style="max-width:600px;"> You have 20 seconds to choose a gem in each trial.    
        <br><br> 
        </div>`,

        `<div style="max-width:600px;"> Finally, the special feature changes each time a new round starts. You will get a reminder when a new round is starting. 
        <br><br>        
        </div>`
        
    ],
    questions: [
        {
           prompt: "Now you will play a practice round. Click <b>continue</b> when you are ready to begin!",
           options: [],
           correct_answer: "",
           required: false,
           horizontal: false
        }
    ],
    show_clickable_nav: true,
    show_page_number: false,
    randomize_question_order: true,
    failure_text: "Unfortunately, you didn't answer all questions correctly. Please review the instructions and then try again.",
    on_finish: function(data) {
        if (writeData){
        pass_message("Passed learning comprehension check")
        }
    }
};


