var current_img = 1;
var i;

$(document).ready(function(){
    var imgs = $('#images').find('img');

    function displayimg(){
      for (i = 1; i < imgs.length+1; i++) {
        if(i == current_img){
          $(imgs[i-1]).show();
        }else{
          $(imgs[i-1]).hide()
        }
      }
    }
    
function slideImg({
    var current = $('#images .img');
    var next = current.next().length ?
    current.next() : current.siblings().first();
            
            setTimeout(slideImg, 2000);
        })
    }(jQuery));


