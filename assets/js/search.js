(function() {
  function displaySearchResults(results, store) {
    var searchResults = document.getElementById('search-results');

    if (results.length) { // Are there any results?
      var appendString = '';

      for (var i = 0; i < results.length; i++) {  // Iterate over the results
        
        var item = store[results[i].ref];
        appendString += '<div class="box">';
        appendString += '<div class="box-header with-border">';
        if (item.date.length > 0){
            appendString += '<h3 class="box-title"><a href="' + item.url + '"><i class="fa fa-newspaper-o"></i>&nbsp;&nbsp;' + item.title + ' - ' + item.date + '</a><br/><small class="text-success">' + item.url + '</small></h3></div>';
        }
        else {
            appendString += '<h3 class="box-title"><a href="' + item.url + '"><i class="fa fa-file-o"></i>&nbsp;&nbsp;' + item.title + '</a><br/><small class="text-success">' + item.url + '</small></h3></div>';
        }
        
        appendString += '<div class="box-body">';
        appendString += item.content.substring(0, 500) + '...</div>';
        appendString += '</div>';
      }
      appendString += "";
      searchResults.innerHTML = appendString;
    } else {
      searchResults.innerHTML = '<div>No results found</div>';
    }
  }

  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');

    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');

      if (pair[0] === variable) {
        return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
      }
    }
  }

  var searchTerm = getQueryVariable('q');

  if (searchTerm) {
    document.getElementById('search-box').setAttribute("value", searchTerm);

    // Initalize lunr with the fields it will be searching on. I've given title
    // a boost of 10 to indicate matches on this field are more important.
    var idx = lunr(function () {
      this.field('id');
      this.field('title', { boost: 10 });
      this.field('author');
      this.field('category');
      this.field('content');
      this.field('date');
    });

    for (var key in window.store) { // Add the data to lunr
      idx.add({
        'id': key,
        'title': window.store[key].title,
        'author': window.store[key].author,
        'category': window.store[key].category,
        'content': window.store[key].content,
        'date': window.store[key].date
      });

      var results = idx.search(searchTerm); // Get lunr to perform a search
      displaySearchResults(results, window.store); // We'll write this in the next section
    }
  }
})();
