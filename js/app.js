$(function() {
  var search = $('#query').val();
  console.log(search);
  $('#search-button').submit(function(event) {
    event.preventDefault();
    var searchTerm = $('#query').val();
    getRequest(searchTerm);
  });
  function getRequest(searchTerm) {
    var params = {
      part: 'snippet',
      key: 'AIzaSyCVBgwDgfS0x8_-bULh_gLd1i0uBC2nOw0',
      q: $('#query').val()
    };
    url = 'https://www.googleapis.com/youtube/v3/search';
    $.getJSON(url, params, function(data){
      showResults(data.items);
      console.log(items.snippet.thumbnails.medium.url);
    });
  }
  
  function showResults(results){
    var html = "";
    $.each(results,function(index,value){
      html += '<img src="' + items.snippet.thumbnails.medium.url + '">'; 
    });
    $('#search-results').html(html);
  }
});