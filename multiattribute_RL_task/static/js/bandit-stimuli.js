// images corresponding to unique stimuli.
var stim_images = [
  'static/img/h11.png',
  'static/img/h12.png',
  'static/img/h13.png',
  'static/img/h21.png',
  'static/img/h22.png',
  'static/img/h23.png',
  'static/img/h31.png',
  'static/img/h32.png',
  'static/img/h33.png'
]

var color_images = [
  'static/img/h-color-1.png',
  'static/img/h-color-2.png',
  'static/img/h-color-3.png',
]

var color_similarity = [
  'static/img/h-color-similarity-1.png',
  'static/img/h-color-similarity-2.png',
  'static/img/h-color-similarity-3.png',

]

var shape_images = [
  'static/img/h-shape-1.png',
  'static/img/h-shape-2.png',
  'static/img/h-shape-3.png',
]

var shape_similarity = [
  'static/img/h-shape-similarity-1.png',
  'static/img/h-shape-similarity-2.png',
  'static/img/h-shape-similarity-3.png',
]

var black_square = [
    'static/img/photodiode.png',
    'static/img/photodiode_blank.png',
    ]

var stim_sound = [
  'static/audio/reward_sound.mp3',
  'static/audio/loss_sound.mp3',
]

var reminder = [ // this is a Go sign (it marks the end of a pause period (5 minutes) in the event that the participant has to stop during recording)
'static/img/reminder.png',
]


// fixed coding for each features of a stimulus features. 
// corresponds to image files in each condition.
var stim_features = [
	[1,1],
	[1,2],
	[1,3],
	[2,1],
	[2,2],
	[2,3],
	[3,1],
	[3,2],
	[3,3]
]

// all 18 possible stimulus combinations. 
var all_stim_combinations = [
 	[1, 5, 9],
 	[1, 6, 8],
 	[2, 4, 9],
 	[2, 6, 7],
 	[3, 4, 8],
 	[3, 5, 7],
 	[1, 5, 9],
 	[1, 6, 8],
 	[2, 4, 9],
 	[2, 6, 7],
 	[3, 4, 8],
 	[3, 5, 7],
 	[1, 5, 9],
 	[1, 6, 8],
 	[2, 4, 9],
 	[2, 6, 7],
 	[3, 4, 8],
 	[3, 5, 7],
]

// all 18 possible stimulus combinations - TRAINING
var training_all_stim_combinations = [
 	[1, 5, 9],
 	[1, 6, 8],
 	[2, 4, 9],
 	[2, 6, 7],
 	[3, 4, 8],
 	[3, 5, 7],
 	[1, 5, 9],
 	[1, 6, 8],
 	[2, 4, 9],
 	[2, 6, 7],
 	[3, 4, 8],
 	[3, 5, 7],
 	[1, 5, 9],
 	[1, 6, 8],
 	[2, 4, 9],
 	[2, 6, 7],
 	[3, 4, 8],
 	[3, 5, 7],
]

