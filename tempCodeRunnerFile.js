let library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];
let need = function() {
    if(readingStatus == true) {
        console.log('Already read ',title, 'by', author )
    }
    else {
        console.log('You still need to read', title, 'by', author)
    }
}
console.log(need)
