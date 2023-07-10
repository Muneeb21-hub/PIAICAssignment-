function makeAlbum(artist_name, album_title, number_of_track) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (number_of_track) {
        album["tracks"] = number_of_track;
    }
    return album;
}
var album1 = makeAlbum('The Beatles', 'Abbey Road');
var album2 = makeAlbum('Pink Floyd', 'The Wall', 26);
var album3 = makeAlbum('Led Zeppelin', 'IV', 8);
console.log(album1);
console.log(album2);
console.log(album3);
