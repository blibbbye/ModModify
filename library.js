/*
  MODMODIFY — GOOGLE DRIVE EDITION

  Music and artwork live in Google Drive.
  The website converts Drive sharing links automatically.

  For Drive files:
  1. Upload the file to Google Drive.
  2. Share → General access → Anyone with the link → Viewer.
  3. Paste the copied link into image/cover/audio below.

  You may also paste a raw Google Drive file ID.
*/

window.MODMODIFY_LIBRARY = {
  platform: {
    name: "ModModify",
    description: "Modmod's spotify made by blib",
    cover: "assets/covers/modmodify-logo.png"
  },

  artists: [
    {
      id: "ye",
      name: "Ye",
      image: "https://drive.google.com/file/d/1Z80tCgxQNn-C5fDMpdstixkgDkFUeTYH/view?usp=drive_link",

      albums: [
        {
          id: "yandhiv1",
          name: "Yandhi V1",
          year: 2026,
          cover: "https://drive.google.com/file/d/1Q6G4TmxC1TEatpbgqfb_e_itnQZABDCx/view?usp=drive_link",

          songs: [
            {
              id: "byebyebaby",
              name: "BYE BYE BABY",
              audio: "https://drive.google.com/file/d/1CfMCS0cpJuxwur-zWZQ5UHTLGnIt6llx/view?usp=drive_link",
              duration: 152,
              lyrics: "Big booty bitch"
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
      songIds: ["byebyebaby"]
    }
  ]
};
