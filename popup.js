document.addEventListener('DOMContentLoaded', function() {

  var url = ''; 
      
      $('#checkPage').on('click',function(){
      chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
        var url = tabs[0].url;
      var request = $.ajax( {
        url:'https://api.aylien.com/api/v1/summarize',
      
        headers:{'X-AYLIEN-TextAPI-Application-Key':'8968137332783762d4117e8532aff787','X-AYLIEN-TextAPI-Application-ID':'ac9f0736'},
        dataType: 'json',
        type: 'POST',
        data: {url: url, sentences_number:2,sentences_percentage:100}
      
      });

      request.done(function(res) {
        $('#summary').html(res.sentences[0] + res.sentences[1]); 

      
      }); 
    });
  
  });
}, true);