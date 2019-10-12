

const oldSetTimeout = setTimeout;
setTimeout = function(callback, timer) {
   console.log('REGISTERED'); 
   return oldSetTimeout(() => {
    console.log('START'); 
    callback();
    console.log('FINISH'); 
   }, timer);
}




///----------------


setTimeout(_ => {
   console.log('DONE!');
}, 2000);