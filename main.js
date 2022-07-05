require('dotenv').config();
const express = require('express')
const {google} = require('googleapis')
const app = express()

app.get('/', async (req, res) => {
    const playlistId = "PL3h2ZcDTBoxd6q9o2_ERGCrDKfawFokea"
    const youtubeToken = process.env.GOOGLE_TOKEN;
    let service = google.youtube("v3")
    let playlist = (await service.playlistItems.list({
        key: youtubeToken,
        part: "snippet",
        playlistId: playlistId,
        maxResults: 50
    })).data
    res.send(playlist);
})

app.listen(process.env.PORT, () => {
    console.log(`app listening on port ${process.env.PORT}`)
})