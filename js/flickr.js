$(document).ready(function () {
    var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var flickrOptions = {
      tags:"space",
      format: "json"
    };
    function displayPhotos(data) {
      var photoHTML = '<ul>';
      $.each( data.items, function (i, photo){
           photoHTML += '<li class="photoItem">';
           photoHTML += '<img class="SpaceImage" src="' + photo.media.m  +'">';
           photoHTML += '<div class="info"><h1 class="flexHeading">'+ photo.title +' </h1>';
           photoHTML += '<p class="flexPara">Published ' + photo.published + ' </p>';
           photoHTML += '<a  href = "http://flickr.com/' + photo.author_id +'" class="onAuthor links">Author of Photo</a>';
           photoHTML += '<a  href = "' + photo.link +'" class="onFlickr links">View on Flickr</a></div></li>';
      });
      photoHTML += '</ul>';
      $('#photos').html(photoHTML);
    }
    $.getJSON(flickrAPI, flickrOptions, displayPhotos);
});