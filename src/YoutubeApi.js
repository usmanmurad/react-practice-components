import React, { useState } from "react";
import axios from "axios";


function YoutubeApi() {
    const [search, setSearch] = useState('')
    const [items, setItems] = useState([])
    const [iframeSrc, setIframeSrc] = useState(null)

    function updateSearch(event) {
        setSearch(event.target.value)
    }
    function searchApi(event) {
        axios.get('https://www.googleapis.com/youtube/v3/search?key=AIzaSyD_EQDVebcO973xA69venePFUlimx-dpOI&part=snippet&maxResults=20&q='+search)
        .then((response) => {
            console.log(response)
            setItems(response['data']['items'])
        }, (error) => {
            console.log(error)
        });
        console.log(items)
    }
    function playVideo(event) {
        setIframeSrc('https://www.youtube.com/embed/'+event.target.id)
    }

    const videoItems = items
    const videoThumbnails = videoItems.map((item) =>
        <li>
            <img id={item['id']['videoId']} src={item['snippet']['thumbnails']['high']['url']} onClick={playVideo}/>
            <h3>{item['snippet']['title']}</h3>
            <br/>
        </li>
    )
    return(
        <>
            <input value={search} onChange={updateSearch}/>
            <button onClick={searchApi}>Search</button>
            {iframeSrc ? <iframe src={iframeSrc}></iframe>:null}
            <ol type='1'>{videoThumbnails}</ol>
        </>
    )
}

export default YoutubeApi
