# ModModify — Google Drive Edition

This version is made for the simple setup:

**Google Sites → ModModify → Google Drive**

You don't need Backblaze, R2, a database, or a dedicated file server for the basic setup.

## 1. Upload your media to Google Drive

You can organize Drive however you want:

```text
ModModify/
├── Music/
│   ├── Kanye West/
│   │   ├── Yandhi/
│   │   │   ├── Hurricane.mp3
│   │   │   └── Alien.mp3
│   │   └── Donda/
│   │       └── Moon.mp3
│   ├── Travis Scott/
│   └── ...
├── Covers/
└── Artists/
```

## 2. Make every media file public

For each MP3/image:

1. Right-click the file in Google Drive.
2. Choose **Share**.
3. Under **General access**, choose **Anyone with the link**.
4. Keep it as **Viewer**.
5. Copy the sharing link.

## 3. Paste the Drive link into library.js

Example:

```js
{
  id: "hurricane",
  name: "Hurricane",
  audio: "https://drive.google.com/file/d/1AbCdEfGhIjKlMnOpQrStUvWxYz/view?usp=sharing",
  cover: "https://drive.google.com/file/d/9ZyXwVuTsRqPoNmLkJiHgFeDcBa/view?usp=sharing",
  lyrics: "Your lyrics here..."
}
```

ModModify automatically extracts the Google Drive file ID and converts it into a browser media URL.

You can also paste only the file ID:

```js
audio: "1AbCdEfGhIjKlMnOpQrStUvWxYz"
```

## 4. Public website

Your ModModify HTML still needs to be hosted somewhere.

Google Sites can then embed the finished ModModify page using:

**Google Sites → Insert → Embed → URL**

Google Drive stores the files; the ModModify page reads the public URLs.

## 5. Adding artists and albums

The structure stays:

```text
Artist
  → Album
    → Song
      → Audio URL
      → Cover URL
      → Lyrics
```

## 6. Important Drive limitation

Google Drive is a consumer file-storage/sharing service, not a dedicated music-streaming CDN.

For a small/moderate personal public library this setup is simple and cheap, but a very large number of visitors streaming the same files can run into Drive bandwidth/traffic restrictions.

Also, only publicly share files that you have the right to distribute.

## Credits

@blibbbye
@modmodroots
