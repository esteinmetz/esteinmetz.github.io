const imgHeaders = [ '', 
'Inspect the door', 
 'Is it a door?  Does it have a frame?',
'Inspect Inventory.',
'Return to crater.',
'Inspect crater.',
'Toss acorn into crater.',
'???',
'Invite the door to catch a ride on the no longer growing tree.',
'Use the knife to cut off a limb.', 
'Inspect removed branch.',
'???',
'Uh oh',
'Reject responsibility.',
'',
'Turn around.',
'Hide!',
'Rest easy knowing you are completely safe.',
'',
'',
'',
'Fuck that Smiley Bastard up.',
'The  monster makes a constitution saving throw to see if his eyes are destroyed.',
'Fine, do an investigation check on the Smiley Bastard',
'Can Handsome Man pocket some teeth to stab others later?',
'Can HM investigate the hole that the tree came from?',
'Use the monster teeth as climbing pitons',
'LOOT.  THAT. BAG.',
'',
'Equip an empty bottle',
'Bottle up some of the blue liquid',
'Examine newly aquired Blue Liquid Bottle',
'Take the backpack.',
'',
'',
'',
'Give the Purple Worm a kiss.',
'',
'Cast animal friendship on the worm and turn it into personal mount',
'Rip out a tooth?',
'Are there any other characters in this story?',
'',
'Go fishing.  The maeg needs protein to go with their vegitables.',
'',
'',
'Help the man out.',
'Use Thunderwave!',
'',
'',
'MAGIC MISSLE!',
'',
'Fine, then Druidcraft a pretty flower on his head.',
'',
'',
'',
'',
'',
'',
'Kick off the Smiley Bastard to propel Handsom out of the water',
'',
'',
'',
'Use dimension door back up to the surface.',
'',
'',
'Dude, fix your hair',
'',
'Handsome, take a sample of the water.',
'Nice.',
'',
'Maeg, cast cure wounds.',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'Retrieve item from the chest.',
'Examine bottle.',
'',
'Maeg, tell your story',
'Begin reminiscing.',
'',
'',
'',
'Return to Eden',
'',
'Celebrate good times.',
'',
'Take in the view.',
'Have the cape billow dramatically.',
'Could the force field serve as an artificial atmosphere?',
'That is not billowing so much as a gentle ruffling.',
'Epilepsy warning',
];

//This is the line # from imgHeaders - 1
// So arc 1 ends at "Inspect removed branch."
const storyPanels = [{lastPage: 0}, 
    {lastPage: 10, title: 'test'},
    {lastPage: 30, title: 'test2'},
    {lastPage: 60, title: 'test3'},
];

//This is used for coloring font based on text
// txt format NAME: Sentence
// ie Erik: My name is Erik.
const nameFormats = {  };