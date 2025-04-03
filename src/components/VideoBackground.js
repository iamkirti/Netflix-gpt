import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
 
 useMovieTrailer(movieId);

  return (
    <div className="w-screen">
      <iframe className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key+"?&autoplay=1&mute=1"}
        title="YouTube video player" 
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;

// {
//   "id": 950396,
//   "results": [
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Levi and Drasa Enter the Gorge Scene",
//       "key": "dpw1LDw9ABU",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Clip",
//       "official": true,
//       "published_at": "2025-03-03T23:59:53.000Z",
//       "id": "67c646bc0228ae313204ccb7"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Everyone has a personal gorge to cross.",
//       "key": "kxx3LTKcxpk",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Clip",
//       "official": true,
//       "published_at": "2025-02-28T17:59:46.000Z",
//       "id": "67c21c55379c2d078a53a865"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Falling slowly, then all at once.",
//       "key": "wxenzjDiik4",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Clip",
//       "official": true,
//       "published_at": "2025-02-27T18:59:50.000Z",
//       "id": "67c21c4dd01e30b528dbd11d"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Whiteboard Q&A with Miles Teller and Anya Taylor-Joy",
//       "key": "cHQllOsCq2A",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "published_at": "2025-02-27T17:59:47.000Z",
//       "id": "67c0ac48c029139b0e35b7c6"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Music to guard a gorge to.",
//       "key": "RxQvkeuU7kg",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2025-02-26T18:59:47.000Z",
//       "id": "67bfd264740c95a371a242b5"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Sigourney.",
//       "key": "TaFK_ULWBTc",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2025-02-25T17:59:49.000Z",
//       "id": "67be5133d727e5fa90efa790"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Tree's company.",
//       "key": "8da2ZbhKums",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Clip",
//       "official": true,
//       "published_at": "2025-02-22T19:59:52.000Z",
//       "id": "67bbf4daeffeb96e9e0ac29b"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Friendship Quiz with Miles Teller & Anya Taylor-Joy",
//       "key": "3HCq9OZcETs",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "published_at": "2025-02-22T18:59:54.000Z",
//       "id": "67ba35c955dd812fad46678c"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "They're spitting off the edge of the gorge.",
//       "key": "wFusMXcTfcc",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Clip",
//       "official": true,
//       "published_at": "2025-02-19T01:00:49.000Z",
//       "id": "67b5534a3751180bfcdfa92e"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Emoji Recap with Miles Teller and Anya Taylor-Joy",
//       "key": "Vhfefq4yslc",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "published_at": "2025-02-18T18:59:55.000Z",
//       "id": "67b52b82d28e87e0e5e391a1"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "It's important to stay honest with each other.",
//       "key": "c3E794y5fWE",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Clip",
//       "official": true,
//       "published_at": "2025-02-18T17:59:54.000Z",
//       "id": "67b553623751180bfcdfa94a"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "When Anya Taylor-Joy points, you pay attention.",
//       "key": "IX_eCDmMqbw",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Clip",
//       "official": true,
//       "published_at": "2025-02-17T23:59:56.000Z",
//       "id": "67b5536fd28e87e0e5e39f46"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "What was that?",
//       "key": "xfIBIp4Qrz8",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Clip",
//       "official": true,
//       "published_at": "2025-02-17T22:59:58.000Z",
//       "id": "67b55377d28e87e0e5e39f4d"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Hung out to dry.",
//       "key": "TUkmiffJXsY",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Clip",
//       "official": true,
//       "published_at": "2025-02-17T21:59:47.000Z",
//       "id": "67b5538360b18a5698dfab19"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Levi and Drasa's First Dance Scene",
//       "key": "_epl4M8A0nU",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Clip",
//       "official": true,
//       "published_at": "2025-02-17T20:59:49.000Z",
//       "id": "67b3bfadd187fac09b9fb271"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Showing up on your feed right on time.",
//       "key": "-_q0p9g6hJ4",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Clip",
//       "official": true,
//       "published_at": "2025-02-15T17:59:47.000Z",
//       "id": "67b39d5de5e1a7ed7ce10e3e"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "ASMR with Miles Teller & Anya Taylor-Joy",
//       "key": "1-JIOWwU0Ws",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "published_at": "2025-02-14T23:29:49.000Z",
//       "id": "67afd89be5a6eebadf36182f"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "You deserve someone who will go the extra mile.",
//       "key": "MNW_f5CpbXc",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Clip",
//       "official": true,
//       "published_at": "2025-02-14T22:59:54.000Z",
//       "id": "67b39d82d187fac09b9faf89"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Levi and Drasa's First Contact Scene",
//       "key": "gaLyIhSMSNk",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Clip",
//       "official": true,
//       "published_at": "2025-02-14T21:59:59.000Z",
//       "id": "67afcc2be5a6eebadf361650"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Send this to your valentine.",
//       "key": "E5R27Tf5_hI",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Clip",
//       "official": true,
//       "published_at": "2025-02-14T20:59:57.000Z",
//       "id": "67b39da8e0d9f833bc6da844"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "The Film's Plot in 30 Seconds with Scott Derrickson",
//       "key": "89I7Wu61oi0",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "published_at": "2025-02-14T03:30:04.000Z",
//       "id": "67af624bf12cec6e301cc595"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "You know what to do.",
//       "key": "DbPMj_q6xYU",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Clip",
//       "official": true,
//       "published_at": "2025-02-14T02:00:07.000Z",
//       "id": "67af626aa6f774127c1cc34e"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Find someone who will write you terrible poetry.",
//       "key": "hjICrU3cfI0",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Clip",
//       "official": true,
//       "published_at": "2025-02-13T23:00:00.000Z",
//       "id": "67af628a80f76d61eb8e7ab3"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "All eyes on The Gorge.",
//       "key": "sfLv3xXZH5Q",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "published_at": "2025-02-13T21:59:48.000Z",
//       "id": "67af6294e7908d6cc48e78a6"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Long-distance relationships are hard.",
//       "key": "5v7v4bGUYN0",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Clip",
//       "official": true,
//       "published_at": "2025-02-10T23:59:49.000Z",
//       "id": "67abeb4109b8551a04b0bc9d"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Did you hear something??",
//       "key": "H2oY-xyVDRk",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Clip",
//       "official": true,
//       "published_at": "2025-02-07T02:01:31.000Z",
//       "id": "67a5e9ee8dbb4c099066f87c"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Asking for a friend...",
//       "key": "BtCcph4CoQg",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Clip",
//       "official": true,
//       "published_at": "2025-02-07T01:59:11.000Z",
//       "id": "67a5e9e01fcbfee54d300199"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Contact blocked.",
//       "key": "HnU-Y0lI51E",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Clip",
//       "official": true,
//       "published_at": "2025-02-06T17:59:54.000Z",
//       "id": "67a5e9c94d536cb93266e185"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Killer morning routine.",
//       "key": "S5gSXQfd5Vo",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Clip",
//       "official": true,
//       "published_at": "2025-02-03T18:59:50.000Z",
//       "id": "67a17fb37ebb0614ff26ad2c"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Love at first sight.",
//       "key": "gQybJ_uQvT8",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2025-01-31T18:59:50.000Z",
//       "id": "67a311c8a8b6fce55d8a7391"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Official Trailer",
//       "key": "rUSdnuOLebE",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Trailer",
//       "official": true,
//       "published_at": "2024-12-07T18:14:59.000Z",
//       "id": "67549ecd728a1e2d15e76aa4"
//     }
//   ]
// }
