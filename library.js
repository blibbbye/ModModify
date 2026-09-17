/*
  MODMODIFY — GOOGLE DRIVE EDITION
  ============================================================
  Store your music and images in Google Drive and paste the
  share URL (or file ID) into library.js.

  IMPORTANT:
  1. Upload the file to Google Drive.
  2. Right-click → Share.
  3. General access → Anyone with the link.
  4. Viewer permission.
  5. Copy the sharing URL and paste it below.

  ModModify automatically turns a normal Google Drive sharing
  link into a browser media URL.

  Example:
    audio: "https://drive.google.com/file/d/FILE_ID/view?usp=sharing"

  You can also use:
    audio: "FILE_ID"

  Public direct URLs still work too:
    audio: "https://example.com/song.mp3"
*/

window.MODMODIFY_LIBRARY = {
  platform: {
    name: "ModModify",
    description: "Modmod's spotify made by blib",
    cover: "assets/covers/modmodify-logo.png"
  },

  /*
    ARTISTS → ALBUMS → SONGS

    Put your Google Drive sharing links directly into:
      image
      cover
      audio

    The page converts Drive share URLs automatically.
  */
  artists: [
    {
      id: "demo-artist",
      name: "Demo Artist",
      image: "assets/artists/demo-artist.png",

      albums: [
        {
          id: "demo-album",
          name: "Demo Album",
          year: 2026,
          cover: "assets/covers/demo-album.png",

          songs: [
            {
              id: "demo-song",
              name: "Demo Song",

              // GOOGLE DRIVE EXAMPLE:
              // audio: "https://drive.google.com/file/d/YOUR_MP3_FILE_ID/view?usp=sharing",

              // Local file example:
              audio: "assets/audio/demo-song.mp3",

              // Optional song-specific cover:
              // cover: "https://drive.google.com/file/d/YOUR_PNG_FILE_ID/view?usp=sharing",

              duration: 0,

              lyrics: "Add your lyrics here."
            }
          ]
        }
      ]
    }
  ],

  playlists: [
    {
      id: "starter",
      name: "ModModify Starter",
      color: "#1ed760",
      songIds: ["demo-song"]
    }
  ]
};
