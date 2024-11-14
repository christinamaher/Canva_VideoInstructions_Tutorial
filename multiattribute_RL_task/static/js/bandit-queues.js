
// create unrandomized block sequence. 0 = no hint; 1 = hint.
var block_queue = [0,0,1,1];

var training_block_queue = [1,0];

var practice_target_feature_queue = [1];

var button_mapping_queue = [1];

// create unrandomised payout queues for target and non-target features.
// do this by constructing a queue of length 20 such that the local probability 
// is equal to the desired average payout probability. 
//var feedback_queues = [
  //[0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0], // 25%
  //[1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0]  // 75%
//];

//var training_feedback_queues = [
  //[0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1], // 25%
  //[1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0]  // 75%
//];

// PROBABILITY RULES
// for 25%, 27% (3 out of every 4 correct responses are rewarded, and 1 out of every 4 incorrect responses are rewarded)
// for 20%, 80% (4 out of every 5 correct responses are rewarded, and 1 out of every 5 incorrect responses are rewarded)

var feedback_queues = [
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], // 20%
  [1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0]  // 80%
];

var training_feedback_queues = [
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], // 20%
  [1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0]  // 80%
];

