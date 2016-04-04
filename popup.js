document.addEventListener('DOMContentLoaded', function() {

  var checkPageButton = document.getElementById('checkPage');
  var url = ''; 
      
      checkPageButton.addEventListener('click', function() {
  
      chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
        var url = tabs[0].url;
      var request = $.ajax( {
        url:'https://api.aylien.com/api/v1/summarize',
        //headers: { 'X-TextRazor-Key': '1e858ee751d3f99127f9ab1429176f82c7a944ff5f9c5d34ff906ceb'},
        headers:{'X-AYLIEN-TextAPI-Application-Key':'8968137332783762d4117e8532aff787','X-AYLIEN-TextAPI-Application-ID':'ac9f0736'},
        dataType: 'json',
        type: 'POST',
        data: {url: url, sentences_number:1,sentences_percentage:100}
      
      });

      request.done(function(res) {
         console.log(res); 
        document.getElementById("summary").innerHTML = res.sentences[0] + res.sentences[1]; 

      
      }); 
    });
  
  }, true);
}, true);