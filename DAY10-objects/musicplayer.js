//properties
//  -songCollection ['','',,'','']
//- current playing

//methods
// - start() playing currently plaing
// - pause() paused song name
// - stop() stopped songname
// - shuffle() //randomly pick up a song from song collection and assign to currently playing


const walkMan = {
    songCollection : ['mar jawan','tum bin','jai ho','desi boys'],
    currentlyPlaying : 'mar jawan',
    start : function(){
        return this.currentlyPlaying;
    },
    pause : function(){
        return this.currentlyPlaying;
    },
    stop : function(){
        return this.currentlyPlaying;
    },
    shuffle : function(){
        return this.songCollection[0];
    }


}