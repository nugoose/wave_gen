$(document).ready(function(){
  var modifyMe = [], newStr="", someNum = 70, nextNum, directionStr = 1;
  
  //big to small
  //direction, 0 for down, 1 for up
  function muchWavy(){
    modifyMe = document.getElementById('textToWave').value;
    $('#showLength').html('current length is: ' + modifyMe.length);
    modifyMe = modifyMe.split('');
    //nextNum = someNum - 1;
    for(var i = 0; i < modifyMe.length; i++){
      if(modifyMe[i] !== " "){
        modifyMe[i] = '<span style="font-size:' + someNum + 'px;">' + modifyMe[i] + '</span>';
        nextNum = someNum;
        //bigger or smaller?
        if(directionStr === 1){
          someNum+=4;
        }
        else {
          someNum-=4;
        }
        
        //direction toggle
        //if we reached bottom, go up
        if(someNum < 20){
          directionStr = 1;
        }
        
        //if we reached top, go down
        if(someNum > 80){
          directionStr = 0;
        }
        
      }
    }
    someNum = nextNum;
    newStr = modifyMe.join('');
    $('#soWavy').html(newStr);
  }
  
  $('#bestButton').click(function(){
    setInterval(muchWavy, 120);
  });
  
});