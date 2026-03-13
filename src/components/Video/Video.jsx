import "../../styles/video.css";
import PressLink from "./PressLink";
import { useEffect } from "preact/hooks";

export default function Video({ vidIDs, title, role, rentalUrl, press }) {
  const isList = vidIDs.length > 1;
  const roles = Array.isArray(role) ? role : null;
  const initPlayer = () => {
    //_____GET YOUTUBE PLAYER_______
    var tag = document.createElement("script");
    tag.id = "iframe-demo";
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  };

  const renderVideos = () => {
    if (!vidIDs || vidIDs.length === 0) {
      return (
        <div class="video">
          <a href="https://www.nytv.live/" target="_blank">
            <img src="/thumbnails/NYTV-large.jpg" alt="New York Television" />
          </a>
          <p class="role">{roles ? roles[vidIDs.indexOf(vidId)] : role}</p>
        </div>
      );
    }

    return vidIDs.map((vidId) => {
      return (
        <div class="video">
          {!isList && <p class="title">{title}</p>}
          <div class="video-wrapper" width={1168} height={657}>
            <iframe
              id="player"
              class="player"
              width={1168}
              height={657}
              src={`https://www.youtube.com/embed/${vidId}?enablejsapi=1&showinfo=0&origin=http://katesweeney.town`}
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
          <p class="role">{roles ? roles[vidIDs.indexOf(vidId)] : role}</p>
        </div>
      );
    });
  };

  useEffect(() => {
    initPlayer();
  }, []);

  return (
    <div class="video-container">
      {isList && (
        <>
          <p class="title">{title}</p>
        </>
      )}
      {renderVideos()}
      {press && (
        <div class="press-container">
          {rentalUrl && (
            <p class="rent-label">
              <a href={rentalUrl} target="_blank">
                RENT HERE
              </a>
            </p>
          )}
          <p class="press-label">Press:</p>
          {press && press.map((p) => <PressLink pub={p.pub} link={p.link} />)}
        </div>
      )}
    </div>
  );
}
