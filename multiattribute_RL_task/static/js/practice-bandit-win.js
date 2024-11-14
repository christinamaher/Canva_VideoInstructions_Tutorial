jsPsych.plugins['practice-bandit-win'] = (function() {

  var plugin = {};

  plugin.info = {
    name: 'practice-bandit-win',
    parameters: {
    sound_paths: {
    type:jsPsych.plugins.parameterType.STRING, // BOOL, STRING, INT, FLOAT, FUNCTION, KEYCODE, SELECT, HTML_STRING, IMAGE, AUDIO, VIDEO, OBJECT, COMPLEX
    default: null,
    description: 'The array of auditory feedback'
      },
      stimulus_paths: {
        type:jsPsych.plugins.parameterType.STRING, // BOOL, STRING, INT, FLOAT, FUNCTION, KEYCODE, SELECT, HTML_STRING, IMAGE, AUDIO, VIDEO, OBJECT, COMPLEX
        default: null,
        description: 'The array of paths to stimuli'
      },
      photodiode_paths: {
          type:jsPsych.plugins.parameterType.STRING,
          default: null,
          description: 'The array of stimuli for synching photodiode'
      },
      reminder_paths:{
      type:jsPsych.plugins.parameterType.STRING,
      default:null,
      description:'The array of stimuli for restart reminder after pausing'
      },
      canvas_dimensions: {
        type:jsPsych.plugins.parameterType.INT, // BOOL, STRING, INT, FLOAT, FUNCTION, KEYCODE, SELECT, HTML_STRING, IMAGE, AUDIO, VIDEO, OBJECT, COMPLEX
        default: [1200,800],
        description: 'The dimensions [width, height] of the html canvas on which things are drawn'
      },
      condition: {
        type: jsPsych.plugins.parameterType.STRING,
        default: null,
        description: 'Task condition (hint or no_hint)'
      }, 
      background_colour: {
        type: jsPsych.plugins.parameterType.STRING,
        default: '#FFFFFF',
        description: 'The colour of the background'
      },
      stimulus_offset: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Stimulus offset',
        default: [200, 0],
        description: 'The offset [horizontal, vertical] of the centre of each stimulus from the centre of the canvas in pixels'
      },
      stimulus_dimensions: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Stimulus dimensions',
        default: [108, 108],
        description: 'Stimulus dimensions in pixels [width, height]'
      },
      photodiode_offset: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Photodiode offset',
        default: [400, 400],
        description: 'The offset [horizontal, vertical] of the centre of the photodiode stimulus (black square) from the centre of the canvas in pixels'
      },
      photodiode_dimensions: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Photodiode dimensions',
        default: [366, 346],
        description: 'Photodiode stimulus dimensions in pixels [width, height]'
      },
      reminder_offset: {
      type: jsPsych.plugins.parameterType.INT,
      pretty_name: 'Reminder offset',
      default: [0, -200],
      description: 'The offset [horizontal, vertical] of the centre of the reminder from the centre of the canvas in pixels'
      },
      reminder_dimensions: {
      type: jsPsych.plugins.parameterType.INT,
      pretty_name: 'Reminder dimensions',
      default: [108, 108],
      description: 'Reminder dimensions in pixels [width, height]'
      },
      target_feature: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Target feature',
        default: null,
        description: 'Target feature (1-6)'
      },
      left_key: {
        type: jsPsych.plugins.parameterType.KEYCODE,
        pretty_name: 'Left key',
        default: 'leftarrow',
        description: 'The key to be pressed to select the left stimulus'
      },
      center_key: {
        type: jsPsych.plugins.parameterType.KEYCODE,
        pretty_name: 'Center key',
        default: 'downarrow',
        description: 'The key to be pressed to select the center stimulus'
      },
      right_key: {
        type: jsPsych.plugins.parameterType.KEYCODE,
        pretty_name: 'Right key',
        default: 'rightarrow',
        description: 'The key to be pressed to select the right stimulus'
      },
      quit_key: {
        type: jsPsych.plugins.parameterType.KEYCODE,
        pretty_name: 'Q key',
        default: 'q',
        description: 'The key to be pressed to quit the experiment early.'
      },
      pause_key: {
        type: jsPsych.plugins.parameterType.KEYCODE,
        pretty_name: 'P key',
        default: 'p',
        description: 'The key to be pressed to pause the experiment.'
      },
      choice_listen_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Choice window duration',
        default: 20000, // this was 5s originally, lengthened to 20s to decrease difficulty
        description: 'How long to wait for a response (in milliseconds).'
      },
      choice_display_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Choice display duration',
        default: 0,
        description: 'How long to display the response (in milliseconds).'
      },
      feedback_display_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Feedback display duration',
        default: 1500,
        description: 'How long to display the feedback (in milliseconds).'
      },
      timeout_message: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Timeout message',
        default: 'Please respond faster!',
        description: 'The message displayed on a timeout non-response.'
      },
      timeout_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Duration of timeout message',
        default: 1000,
        description: 'How long to display the timeout message.'
      },
//      iti_duration: {
  //      type: jsPsych.plugins.parameterType.INT,
    //    pretty_name: 'Duration of inter-trial interval part 1',
      //  default: null, // this was 500 in earlier versions
        //description: 'How long to display a blank screen between trials (in milliseconds).' // first "part" of the intertrial interval - this just avoids the photodiode square flashing onscreen (separates the decision/feedback from the start of the next trial)
      //},
      iti_photodiode_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Duration of inter-trial interval part 2',
        default: 500, 
        description: 'How long to display a blank screen between trials (in milliseconds).' // intertrial interval was split into two functions so that the photodiode could be shown to mark the start of the next trial. 
      },
      selection_pen_width: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Width of selection box',
        default: 15,
        description: 'Thickness (in pixels) of the selection box'
      },
      selection_colour: {
        type: jsPsych.plugins.parameterType.STRING,
        // default: '#FFFFFF',
        default: '#878787', 
        description: 'The colour of the selection box'
      },
      feedback_offset: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Feedback offset',
        default: [0, -100],//[270, -200],
        description: 'The offset [horizontal, vertical] of the centre of the feedback from the centre of the canvas in pixels'
      },
      feedback_dimensions: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Feedback dimensions',
        default: [120, 120],
        description: 'Feedback image dimensions in pixels [width, height]'
      },
      reward_colour: {
        type: jsPsych.plugins.parameterType.STRING,
        // default: '#00CA33', // #00CA33 is green
        default: 'black',
        description: 'The colour of the selection box during reward feedback'
      },
      non_reward_colour: {
        type: jsPsych.plugins.parameterType.STRING,
        // default: '#FF0000', // #FF0000 is red
        default: 'black',
        description: 'The colour of the selection box during non-reward feedback'
      },
      reward_text: {
        type: jsPsych.plugins.parameterType.STRING,
        default: '+1', 
        description: 'The text displayed during reward feedback'
      },
      non_reward_text: {
        type: jsPsych.plugins.parameterType.STRING,
        default: '+0', 
        description: 'The text displayed during non-reward feedback'
      }
    }
  }

  plugin.trial = function(display_element, trial) {

    // add a canvas to the HTML_STRING, store its context, and draw a blank background
    var new_html = '<canvas id="trial_canvas" width="'+trial.canvas_dimensions[0]+'" height="'+trial.canvas_dimensions[1]+'"></canvas>';
    display_element.innerHTML = new_html;
    var ctx = document.getElementById('trial_canvas').getContext('2d');
    DrawBackground(); // draw the background of the canvas

    // set up a container for key responses
    var response = {
      rt: null, // this is the time from when the stimuli are presented to when the participant makes a choice 
      decision_onset: null, // this is when the participant selects a gem 
      key: null,
      key_char: null,
      choice: null,
      chosen_image_path: null,
      chosen_stimulus: null,
      chosen_features: null,
      correct: null,
      target_feature: null,
    };

    // set up a container for display configuration
    var display = {
      left_stimulus_path: null,
      center_stimulus_path: null,
      right_stimulus_path: null,
    //  photodiode_path: null,
      left_box: null,
      center_box: null,
      right_box: null,
    }

    // generate stimulus arrays 
    var loss_sound = trial.sound_paths[1];
    
	var reward_sound = trial.sound_paths[0];
	
	var photodiode_square = trial.photodiode_paths[1]; // we don't need photodiode deflections here so this is white
	
	var reminder = trial.reminder_paths[0];
	
	
    ///// TRIAL LOOP /////

    // left stimulus
    display.left_stimulus_path = [trial.stimulus_paths[trial.left_stimulus-1]];
    
    // center stimulus
    display.center_stimulus_path = [trial.stimulus_paths[trial.center_stimulus-1]];
    
    // right stimulus
    display.right_stimulus_path = [trial.stimulus_paths[trial.right_stimulus-1]];
    
    // photodiode stimulus
   // display.photodiode_path = trial.photodiode_paths[0];
    
    DrawScreen();

    // start the response listener
    var keyboardListener = jsPsych.pluginAPI.getKeyboardResponse({
      callback_function: AfterResponse,
      valid_responses: [trial.left_key, trial.center_key, trial.right_key,trial.quit_key,trial.pause_key],
      rt_method: 'performance',
      persist: false,
      allow_held_key: false
    });

    // set a timeout function to end the trial after a given time if no response is recorded
    if (trial.choice_listen_duration !== null) {

      // show timeout message if provided
      if (trial.timeout_message !== null) {

        jsPsych.pluginAPI.setTimeout(function() {

          ctx.font = "22px Helvetica";
          ctx.fillStyle = "grey";
          ctx.textAlign = "center";

          ctx.fillText(trial.timeout_message, trial.canvas_dimensions[0]/2, trial.canvas_dimensions[1]/2-100);
        }, trial.choice_listen_duration);

      }

      // end trial
      jsPsych.pluginAPI.setTimeout(function() {
        EndTrial();
      }, trial.choice_listen_duration+trial.timeout_duration);

    } //end if-loop

    ///// MAIN FUNCTIONS /////

    // function to draw background
    function DrawBackground(){
    
      // draw the background
      ctx.fillStyle = trial.background_colour;
      ctx.fillRect(0, 0, trial.canvas_dimensions[0], trial.canvas_dimensions[1]);

      // draw the progress text
      ctx.font = "16px Helvetica";
      ctx.fillStyle = "grey";
      ctx.textAlign = "center";
      var info_text_1 = "Pick the orange gems."
      var info_text_2 = ""
      
      ctx.fillText(info_text_1, trial.canvas_dimensions[0]/2, 50 + 3 * ctx.measureText('M').width/2);
      ctx.fillText(info_text_2, trial.canvas_dimensions[0]/2, 50 + 3 * ctx.measureText('M').width/2 + 30);

      var info_text_3 = ""
      var info_text_4 = ""

      ctx.fillText(info_text_3, trial.canvas_dimensions[0]/2, 650 + 3 * ctx.measureText('M').width/2);
      ctx.fillText(info_text_4, trial.canvas_dimensions[0]/2, 650 + 3 * ctx.measureText('M').width/2 + 30);

    }; // end DrawBackground function

    // function to draw the stimuli to screen flexibly
    function DrawScreen() {
    
    response.trial_onset_PN = performance.now();

        window.requestAnimationFrame(function(){
        window.requestAnimationFrame(function(timestamp) {
        
    
      // if the left stimulus is selected, show the appropriate selection box
      if (display.left_box == "selected"){
        _DrawSelectionBox(-trial.stimulus_offset[0], trial.stimulus_offset[1], trial.selection_colour);
        _DrawPhotodiodeStimulus(photodiode_square, [trial.photodiode_offset[0], trial.photodiode_offset[1]]);
      } else if (display.left_box == "reward"){
        _DrawSelectionBox(-trial.stimulus_offset[0], trial.stimulus_offset[1], trial.reward_colour);
        _DrawTextFeedback(-trial.stimulus_offset[0], trial.stimulus_offset[1], trial.reward_text);
         _PlaySoundFeedback(reward_sound);_DrawPhotodiodeStimulus(photodiode_square, [trial.photodiode_offset[0], trial.photodiode_offset[1]]);
      } else if (display.left_box == "non-reward"){
        _DrawSelectionBox(-trial.stimulus_offset[0], trial.stimulus_offset[1], trial.non_reward_colour);
        _DrawTextFeedback(-trial.stimulus_offset[0], trial.stimulus_offset[1], trial.non_reward_text);
         _PlaySoundFeedback(loss_sound); _DrawPhotodiodeStimulus(photodiode_square, [trial.photodiode_offset[0], trial.photodiode_offset[1]]);
      }

      // draw the left stimulus
      _DrawStimulus(display.left_stimulus_path, [-trial.stimulus_offset[0], trial.stimulus_offset[1]]);
      
      
      // if the center stimulus is selected, show the appropriate selection box
      if (display.center_box == "selected"){
        _DrawSelectionBox(0, trial.stimulus_offset[1], trial.selection_colour);_DrawPhotodiodeStimulus();
      } else if (display.center_box == "reward"){
        _DrawSelectionBox(0, trial.stimulus_offset[1], trial.reward_colour);
        _DrawTextFeedback(0, trial.stimulus_offset[1], trial.reward_text);
         _PlaySoundFeedback(reward_sound);_DrawPhotodiodeStimulus();
      } else if (display.center_box == "non-reward"){
        _DrawSelectionBox(0, trial.stimulus_offset[1], trial.non_reward_colour);
        _DrawTextFeedback(0, trial.stimulus_offset[1], trial.non_reward_text);
         _PlaySoundFeedback(loss_sound); _DrawPhotodiodeStimulus();
      }

      // draw the center stimulus
      _DrawStimulus(display.center_stimulus_path, [0, trial.stimulus_offset[1]]);
      
      
      // if the right stimulus is selected, show the appropriate selection box
      if (display.right_box == "selected"){
        _DrawSelectionBox(trial.stimulus_offset[0], trial.stimulus_offset[1], trial.selection_colour);
       _DrawPhotodiodeStimulus();
      } else if (display.right_box == "reward"){
        _DrawSelectionBox(trial.stimulus_offset[0], trial.stimulus_offset[1], trial.reward_colour);
        _DrawTextFeedback(trial.stimulus_offset[0], trial.stimulus_offset[1], trial.reward_text);
         _PlaySoundFeedback(reward_sound); _DrawPhotodiodeStimulus();
      } else if (display.right_box == "non-reward"){
        _DrawSelectionBox(trial.stimulus_offset[0], trial.stimulus_offset[1], trial.non_reward_colour);
        _DrawTextFeedback(trial.stimulus_offset[0], trial.stimulus_offset[1], trial.non_reward_text);
         _PlaySoundFeedback(loss_sound); _DrawPhotodiodeStimulus();
      }

      // draw the right stimulus
      _DrawStimulus(display.right_stimulus_path, [trial.stimulus_offset[0], trial.stimulus_offset[1]]);
     
      
      // draw the photodiode square 
      
      
      // record start time 
      response.trial_onset = timestamp;
      
         });
  });
   
    }; // end DrawScreen function

    // function to handle responses by the subject
    function AfterResponse(info) {
    
      // clear keyboard listener
      jsPsych.pluginAPI.cancelAllKeyboardResponses();

      // kill any remaining setTimeout handlers
      jsPsych.pluginAPI.clearAllTimeouts();

      // only record the first response
      if (response.key == null) {
        response = info;
      }

      // specify which key was pressed
      response.key_char = jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(info.key);

      // assign response variables

     if (response.key_char == trial.left_key){

        response.choice = 'left';
        response.chosen_image_path = display.left_image_path;
        response.chosen_stimulus = trial.left_stimulus
        response.chosen_features = stim_features[trial.left_stimulus-1]
        
        display.left_box = "selected";
      } else if (response.key_char == trial.center_key){

        response.choice = 'center';
        response.chosen_image_path = display.center_image_path;
        response.chosen_stimulus = trial.center_stimulus
        response.chosen_features = stim_features[trial.center_stimulus-1]
       display.center_box = "selected";
      } else if (response.key_char == trial.right_key){

        response.choice = 'right';
        response.chosen_image_path = display.right_image_path;
        response.chosen_stimulus = trial.right_stimulus
        response.chosen_features = stim_features[trial.right_stimulus-1]
    
        display.right_box = "selected";
      } else if (response.key_char == trial.quit_key) {
      
      jsPsych.data.get().localSave('csv','Gem_Hunters_IncompleteData.csv');
      jsPsych.endExperiment('The experiment has ended because the "q" button was pressed.');
      
      } else if (response.key_char == trial.pause_key){
      
      jsPsych.pauseExperiment();
      setTimeout(jsPsych.resumeExperiment, 300000); // if p is pressed the task will be paused for 5 minutes before resuming.
      setTimeout(_DrawRestartReminder(reminder, [trial.reminder_offset[0], trial.reminder_offset[1]]),1000);
      jsPsych.finishTrial();
      
      } 

      // determine whether the choice was correct  
      var chosen_features_exp = [response.chosen_features[0], response.chosen_features[1]+3]
      var chosen_correctly = chosen_features_exp.includes(trial.target_feature)
      if (chosen_correctly == true) {
        response.feedback = queues.rfq[1][counter.correct-1];
        response.correct = 1;
        counter.correct += 1;
      }
      else {
        response.feedback = queues.rfq[0][counter.incorrect-1];
        response.correct = 0;
        counter.incorrect += 1;
      }

      counter.training_win_rewards = counter.training_win_rewards + response.feedback;
      response.target_feature = trial.target_feature

      // update the screen with the pressed key
      DrawScreen(ctx);
      
      // set a timeout to display the feedback after a given delay
      jsPsych.pluginAPI.setTimeout(function() {
        DisplayFeedback();
      }, trial.choice_display_duration);
      
    }; // end AfterResponse

    function DisplayFeedback(){
    
    response.decision_onset_PN = performance.now(); 
    
      // check recorded choice and display corresponding colour
      if (response.choice == "left"){

        // set selection box colour
        if (response.feedback == 0){
          display.left_box = "non-reward";
        } else if (response.feedback == 1){
          display.left_box = "reward";
        }

      } else if (response.choice == "center"){

        // set selection box colour
        if (response.feedback == 0){
          display.center_box = "non-reward";
        } else if (response.feedback == 1){
          display.center_box = "reward";
        }

      } else if (response.choice == "right"){
        
        // set selection box colour
        if (response.feedback == 0){
          display.right_box = "non-reward";
        } else if (response.feedback == 1){
          display.right_box = "reward";
        }
        
    }
     
      // draw the updated stimuli to the screen
      DrawScreen(ctx);
      
                    
      // set a timeout to end the trial after a given delay
      jsPsych.pluginAPI.setTimeout(function() {
        ITI();
      }, trial.feedback_display_duration);

    } // end DisplayFeedback

    // function to show an empty screen for the duration of the inter-trial interval
    function ITI() {
    
        window.requestAnimationFrame(function(){
        window.requestAnimationFrame(function(iti_timestamp) {
        
    
      // draw the background of the canvas
      DrawBackground();
      
      // clear keyboard listener
      jsPsych.pluginAPI.cancelAllKeyboardResponses();

      // kill any remaining setTimeout handlers
      jsPsych.pluginAPI.clearAllTimeouts();
      
      var iti = [84.422280,485.435739,132.297793,677.066542,986.530431,898.404034,237.769319,
88.111513,766.086925,899.816108,657.689925,409.483880,337.226950,709.430713,
695.599991,867.957518,811.581109,571.098501,560.144077,703.473534,743.914213,
197.727732,943.300697,765.937654,693.313859,708.161237,449.297128,412.510591,
804.970489,930.062846,406.658826,815.871630,124.248019,514.540214,484.748222,
240.447637,719.623988,886.679867,255.284858,205.157215,,4.496718,344.463295,
152.002669,694.021947,515.580224,450.417869,,6.517736,205.124391,183.077340,
764.490099,102.579530,692.901486,357.347280,882.821656,603.875397,543.398450,
872.098963,409.690646,965.770526,281.727411,877.394756,810.275707,693.008212,
255.674851,363.458015,944.452451,528.091107,39.787412,466.254380,763.382658,
526.809080,638.467764,615.018293,315.073710,525.914859,69.671472,567.699183,
987.323044,299.326349,907.656004,36.357815,866.620504,576.750009,853.332038,
488.290889,110.602841,613.880418,705.994585,895.120931,882.849396,63.875406,
718.744258,131.182752,987.190146,696.888897,718.889994,84.533982,51.411550,
393.907866,433.179985,74.357810,582.419230,506.900737,315.102503,257.581954,
682.873276,62.153076,350.618873,683.465229,269.937370,672.719765,104.055081,
383.124219,559.027629,713.859211,354.504431,290.223894,315.056593,305.214667,
567.358815,221.124416,336.010296,432.755023,472.730836,661.813242,847.612158,
232.818878,560.694189,126.791355,995.820316,154.006511,901.940156,674.080060,
459.374961,41.528794,717.321121,44.384335,629.319103,422.670131,783.983306,
834.431229,22.908653,376.478081,290.756876,554.917104,300.058819,749.898831,
405.862287,471.918420,587.746303,855.368830,469.826722,271.608025,859.068847,
851.864585,873.010696,280.094758,910.986586,964.314061,198.214194,955.637364,
976.097410,643.798561,135.568351,209.199661,269.720223,644.317676,123.081352,
490.096099,883.521555,881.676819,461.881239,546.397697,184.042376,525.606176,
142.025317,210.926505,797.411652,510.474853,617.018691,895.453993,,1.949274,
120.098377,679.094655,872.929768,92.291676,243.051758,590.731011,487.855867,
676.196289,412.556080,304.411430,687.748053,226.979626,562.224482,785.713213,
603.038948,13.891701,43.811960,135.323375,37.397069,752.885935,699.195728,
735.041717,606.438937,197.541633,485.161282,312.677860,11.016677,411.901706,
138.211162,502.128134,788.745215,85.951654,64.907153,543.125117];  // uniform distribution runif(216, min = 0, max = 1000) (min ITI is 501.9493, max is 1495.82)
 
 var iti_duration = jsPsych.randomization.sampleWithReplacement(iti, 1);
      
      // set a timeout to end the ITI after a given delay
      jsPsych.pluginAPI.setTimeout(function() {
        ITI_photodiode();
      }, iti_duration);
      
    // record start time 
      response.iti_onset = iti_timestamp;
    // record length of ITI
      response.iti_length = iti_duration;
      
         });
  });
    
    }; // end ITI function
    
    // function to mark start of next trial with photodiode
    function ITI_photodiode(){
    
    // draw the background of the canvas
      DrawBackground();
      
    // draw photodiode stimulus 
      _DrawPhotodiodeStimulus(photodiode_square, [trial.photodiode_offset[0], trial.photodiode_offset[1]]);
      
   // clear keyboard listener
      jsPsych.pluginAPI.cancelAllKeyboardResponses();

  // kill any remaining setTimeout handlers
      jsPsych.pluginAPI.clearAllTimeouts();
      
 // set a timeout to end the ITI after a given delay
      jsPsych.pluginAPI.setTimeout(function() {
        EndTrial();
      }, trial.iti_photodiode_duration); 
      
    }; // end ITI photodiode function


    // function to end trial when it is time
    function EndTrial() {
    
    // draw the background of the canvas
      DrawBackground();
    
      // clear keyboard listener
      jsPsych.pluginAPI.cancelAllKeyboardResponses();

      // kill any remaining setTimeout handlers
      jsPsych.pluginAPI.clearAllTimeouts();
      
      // compute some time stamps based on RAF trial onset timestamp collected above
      response.decision_onset = response.trial_onset + response.rt;
      response.feedback_onset = response.decision_onset;
      //response.iti_onset = response.feedback_onset + 1500;

      // gather the data to store for the trial
      var trial_data = {
        'version': version,
        'block': counter.block,
        'condition': trial.condition,
        'left_image_path': display.left_stimulus_path,
        'center_image_path': display.center_stimulus_path,
        'right_image_path': display.right_stimulus_path,
        'chosen_image_path': response.chosen_image_path,
        'rt': response.rt,
        'key_char': response.key_char,
        'choice': response.choice,
        'stimulus_array': [trial.left_stimulus, trial.center_stimulus, trial.right_stimulus],
        'chosen_stimulus': response.chosen_stimulus,
        'chosen_features': response.chosen_features,
        'feedback': response.feedback,
        'correct': response.correct,
        'target_feature': response.target_feature,
      };

      // increment the trial counter
      counter.trial += 1;

      // move on to the next trial
      jsPsych.finishTrial(trial_data);
      
    }; // end EndTrial function

    function _DrawSelectionBox(stimulus_horiz_offset, stimulus_vert_offset, colour) {

      var selection_horiz_loc = (trial.canvas_dimensions[0]/2) + stimulus_horiz_offset  - (trial.stimulus_dimensions[0] / 2) - trial.selection_pen_width;
      var stim_vert_loc = (trial.canvas_dimensions[1]/2) + stimulus_vert_offset  - (trial.stimulus_dimensions[1] / 2) - trial.selection_pen_width; // specifies the y coordinate of the top left corner of the stimulus

      ctx.strokeStyle = colour;
      ctx.lineWidth = 6;
      ctx.strokeRect(selection_horiz_loc, stim_vert_loc, trial.stimulus_dimensions[0] + (2 * trial.selection_pen_width), trial.stimulus_dimensions[1] + (2 * trial.selection_pen_width));
  
    } // end _DrawSelectionBox function
    

    function _DrawStimulus(stimulus_array, stimulus_offset) {
    
      // array sanity check: only draw a stimulus array if (a) the array exists, and (b) the array has a length greater than 0
      if (Array.isArray(stimulus_array) && stimulus_array.length > 0) {

        // create new image element
        var img = new Image();

        // specify that the image should be drawn once it is loaded
        img.onload = function(){_ImageOnload(img, trial.stimulus_dimensions, stimulus_offset)};

        // set the source path of the image; in JavaScript, this command also triggers the loading of the image
        img.src = stimulus_array[0];

      } // end array sanity check if-loop
      
    } // end _DrawStimulus function

    function _DrawFeedback(feedback_image) {
    // not used in this experiment

      // create new image element
      var img = new Image();

      // specify that the image should be drawn once it is loaded
      img.onload = function(){_ImageOnload(img, trial.feedback_dimensions, trial.feedback_offset)};

      // set the source path of the image; in JavaScript, this command also triggers the loading of the image
      img.src = feedback_image;

    } // end _DrawFeedback function

    function _DrawTextFeedback(stimulus_horiz_offset, stimulus_vert_offset, feedback_text) {

      var stim_horiz_loc = (trial.canvas_dimensions[0]/2) + stimulus_horiz_offset; // specifies the x coordinate of the top left corner of the stimulus
      var stim_vert_loc = (trial.canvas_dimensions[1]/2) + stimulus_vert_offset; // specifies the y coordinate of the top left corner of the stimulus

      ctx.font = "48px Arial";
      ctx.fillStyle = "black";

      var text_horiz_loc = stim_horiz_loc + trial.feedback_offset[0]; 
      var text_vert_loc = stim_vert_loc + trial.feedback_offset[1]; 

      ctx.fillText(feedback_text, text_horiz_loc, text_vert_loc);
      
    }
    
    function _PlaySoundFeedback(feedback_sound){
    audio = new Audio();
    audio.src = feedback_sound;
    audio.loop = false; 
    audio.play();
    } // end PlaySoundFeedback function 
    
    function _DrawRestartReminder(reminder_stimulus,reminder_stimulus_offset){
    // create new image element
        var reminder_img = new Image();

        // specify that the image should be drawn once it is loaded
        reminder_img.onload = function(){_ImageOnload(reminder_img, trial.reminder_dimensions, trial.reminder_offset)};

        // set the source path of the image; in JavaScript, this command also triggers the loading of the image
        reminder_img.src = reminder;
    }
    
    function _DrawPhotodiodeStimulus(photodiode_stimulus, photodiode_stimulus_offset){
      
        // create new image element
        var photodiode_img = new Image();

        // specify that the image should be drawn once it is loaded
        photodiode_img.onload = function(){_PhotodiodeOnload(photodiode_img)};

        // set the source path of the image; in JavaScript, this command also triggers the loading of the image
        photodiode_img.src = photodiode_square;

      
    } // end DrawPhotodiodeStimulus function 
    
    function _ImageOnload(im, image_dimensions, image_offset){

      var stim_horiz_loc = (trial.canvas_dimensions[0]/2) + image_offset[0]  - (image_dimensions[0] / 2); // specifies the x coordinate of the top left corner of the stimulus
      var stim_vert_loc = (trial.canvas_dimensions[1]/2) + image_offset[1] - (image_dimensions[1] / 2); // specifies the y coordinate of the top left corner of the stimulus
      ctx.drawImage(im, stim_horiz_loc, stim_vert_loc, image_dimensions[0], image_dimensions[1]);

    } // end _StimulusOnload function
    
        function _PhotodiodeOnload(p_im){

      var p_stim_horiz_loc = 0; // specifies the x coordinate of the top left corner of the stimulus
      var p_stim_vert_loc = 0; // specifies the y coordinate of the top left corner of the stimulus
      ctx.drawImage(p_im,  90, 250, 250, 100, 0, 790, 250, 250); // sets a bunch of size parameters 

    } // end _Photodiode Onload function

  } // end plugin.trial

  return plugin;

})(); // end plugin function
