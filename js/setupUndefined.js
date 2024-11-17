var archiveImageSize = 100;

const imgHeaders = [ '', 
'Inspect the door', 
 'Is it a door?  Does it have a frame?',
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
const nameFormats = { Erik:'red', Tim:'#34eb46',
    John: 'lightgray',
};
