$('form button').click(function(event){
    var movieInput = $('#search').val();
    event.preventDefault();
    // to know what type of searches you can make, 
    // use the documentation/dictionary provided by the api 
    // (ex. &t = movie title; &s = relevant; t-search and s-search in omdbapi)
    $.ajax("http://www.omdbapi.com?apikey=2f6435d9&s=" + movieInput).done(function(data){
        $('#movies').empty();
        console.log(data)
        // this puts the data into the console
        // note: name of the variable "data" does not affect how the function works
            // .ajax and .done are jQuery methods to get and use data
        data.Search.forEach(function(movie){
            // you want to access Search array in the data
            // you want to cycle through each item in the array 
            // using the forEach function, naming each cycle/item "movie"
            console.log(movie.Title);
            console.log(movie.Poster);
            console.log(movie.imdbID);
            // next, you want to access only the Title and Poster image url
            // of a specific movie item/cycle
            // how to put the search result into the homepage?
            var $div = $("<div class='movie-results'>");
            var $h2 = $("<h2>").text(movie.Title);
            var $img = $("<img>").attr('src', movie.Poster);
            var $a = $("<a>").attr('href', 'https://www.imdb.com/title/' + movie.imdbID,).attr('target','_blank');
            var $button = $("<button>").text('View IMDb Rating');
            // $('li') searches for the li tag in html file
            // $('<l1>') makes a new li tag in html file
            $div.append($img).append($h2).append($a.append($button));
            $('#movies').append($div);
            // step 4: put the movie.Title inside the h1 tag
            // step 5: put the movie.Poster inside the img tag
            // step 6: append the <l1> tag to the "movies" ul tag.
        })
    })
    $('#results-container').slideDown();
})

