import styled from "styled-components";
import "../App.css";
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import MovieModal from "./MovieModal";
import querystring from "querystring";

const CLIENT_ID = "db87833a83be4c3dbab97884352b8903";
const CLIENT_SECRET = "111711749635465baa68d13747a76f71";
const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const TRACKS_ENDPOINT =
  "https://api.spotify.com/v1/playlists/37i9dQZF1DXcBWIGoYBM5M/tracks";

const Main = () => {
  // const [albums, setAlbums] = useState([]);
  const [modal, setModal] = useState(false);
  const [clickTrack, setClickTrack] = useState(null);
  // const KEY = "d3378a9085e3e0f5aeb2793235bf0a3b";
  // const URL = "http://ws.audioscrobbler.com/2.0/";

  const [accessToken, setAccessToken] = useState("");
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const fetchAccessToken = async () => {
      const params = {
        grant_type: "client_credentials",
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
      };
      const response = await axios.post(
        TOKEN_ENDPOINT,
        querystring.stringify(params),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      setAccessToken(response.data.access_token);
    };

    fetchAccessToken();
  }, []);

  useEffect(() => {
    const fetchTracks = async () => {
      const response = await axios.get(TRACKS_ENDPOINT, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setTracks(response.data.items);
    };

    if (accessToken) {
      fetchTracks();
    }
  }, [accessToken]);

  const popUP = (track) => {
    // setModal(!modal);
    setClickTrack(track);
  };
  console.log(tracks);

  return (
    <div>
      <MainArea>
        <h2>최신 앨범</h2>
        {modal && <MovieModal></MovieModal>}
        <MusicContainer>
          {tracks.map((track) => (
            <div
              className="albumBox"
              key={track.track.album.uri}
              onClick={(track) => popUP(track.track)}
            >
              {/* {modal ? "a" : "b"} */}
              <img
                src={track.track.album.images[0].url}
                alt={`album image ${track.track.album.name}`}
              ></img>
              <div className="name">{track.track.album.name}</div>
              <div className="artist">{track.track.artists[0].name}</div>
            </div>
          ))}
        </MusicContainer>
      </MainArea>
    </div>
  );
};

export default Main;

const MainArea = styled.div`
  width: 85vw;
  height: 95vh;
  position: absolute;
  top: 0;
  right: 0;
  background-color: black;
  padding: 5%;
  padding-bottom: none;
  overflow: scroll;

  > h2 {
    color: white;
    font-size: 50px;

    > div {
      font-size: 20px;
      color: gray;
    }

    @media screen and (max-width: 1279px) {
      font-size: 30px;
    }
  }
`;

const MusicContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;

  > .albumBox {
    box-sizing: border-box;
    width: 20%;
    padding: 0 25px 40px 0;
    cursor: pointer;

    @media screen and (max-width: 1599px) {
      width: 25%;
    }

    @media screen and (max-width: 769px) {
      width: 33%;
    }
    > img {
      width: 100%;
    }

    > .name {
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      color: white;
      font-weight: 700;
    }

    > .artist {
      color: gray;
    }
  }
`;

// useEffect(() => {
//   axios
//     .get(URL, {
//       params: {
//         method: "chart.getTopTracks",
//         api_key: KEY,
//         format: "json",
//       },
//     })
//     .then((response) => {
//       setAlbums(response.data.tracks.track);
//       console.log(response.data.tracks.track);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }, []);
