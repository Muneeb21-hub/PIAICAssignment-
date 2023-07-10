function makeAlbum(artist_name: string, album_title: string, number_of_track?: number){
    let album = {
        artist: artist_name,
        title: album_title,
    };
    if(number_of_track){
        album["tracks"] = number_of_track;
    }
    return album;
}
let album1 = makeAlbum('The Beatles', 'Abbey Road')
let album2 = makeAlbum('Pink Floyd', 'The Wall', 26)
let album3 = makeAlbum('Led Zeppelin', 'IV', 8)

console.log(album1)
console.log(album2)
console.log(album3)