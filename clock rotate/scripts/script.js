$(function() { 
       setInterval( function() {
       var seconds = new Date().getSeconds();
       var sdegree = seconds * 6;
       var srotate = "rotate(" + sdegree + "deg)";

              $("#sec").css({
                     "-webkit-transform" : srotate,
                     "-moz-transform" : srotate,
                     "-ms-transform" : srotate,
                     "-o-transform" : srotate
              });
           
       }, 1000 );

       setInterval( function() {
       var hours = new Date().getHours();
       var mins = new Date().getMinutes();
       var hdegree = hours * 30 + (mins / 2);
       var hrotate = "rotate(" + hdegree + "deg)";

              $("#hour").css({
                     "-webkit-transform" : hrotate,
                     "-moz-transform" : hrotate,
                     "-ms-transform" : hrotate,
                     "-o-transform" : hrotate
              });
                  
       }, 1000 );


       setInterval( function() {
       var mins = new Date().getMinutes();
       var mdegree = mins * 6;
       var mrotate = "rotate(" + mdegree + "deg)";

              $("#min").css({
                     "-webkit-transform" : mrotate,
                     "-moz-transform" : mrotate, 
                     "-ms-transform" : mrotate,
                     "-o-transform" : mrotate
              });
                  
       }, 1000 );
}); 