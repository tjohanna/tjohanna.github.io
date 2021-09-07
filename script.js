const $quote = $('#quote');

// connecting API
window.onload = function runQuote() {
  $.ajax({
    url: 'https://api.kanye.rest'
  }).then(
    function(data){
      console.log(data);
      $quote.text(data.quote);
    },
    function(error){
      console.log("somethings not right", error)
    }
  )
}

// reload page when text is clicked
$('.quoteBox').click(function() {
  location.reload();
});


// display a random image
// var image = new Array ();
// image[0] = "https://i.ibb.co/tc8t7yt/k1.png";
// image[1] = "https://i.ibb.co/tL3XBFc/k4.png";
// image[2] = "https://i.ibb.co/2dhzJgq/k2.png";
// image[3] = "https://i.ibb.co/3RdhV6M/k3.png";
// image[4] = "https://i.ibb.co/5v1xc82/k5.png";
// var size = image.length
// var x = Math.floor(size*Math.random())

// $('#randomimg').attr('src',image[x]);


// display a random image
var myPix = new Array("https://i.ibb.co/tc8t7yt/k1.png","https://i.ibb.co/tL3XBFc/k4.png","https://i.ibb.co/2dhzJgq/k2.png","https://i.ibb.co/3RdhV6M/k3.png","https://i.ibb.co/5v1xc82/k5.png");

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("randomimg").src = myPix[randomNum];
}
choosePic();
