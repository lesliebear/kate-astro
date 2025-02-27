import '../../styles/video.css';
import PressLink from './PressLink';
// import BackButton from '../BackButton';
import { useEffect } from "preact/hooks";

export default function Video({ vidIDs, vidID, title, role = "Director", isList = false, hasRental, press }) {
    const initPlayer = () => {
        //_____GET YOUTUBE PLAYER_______
        var tag = document.createElement('script');
        tag.id = 'iframe-demo';
        tag.src = 'https://www.youtube.com/iframe_api';
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    // const setVideoPlayerHeight = () => {
    //     const players = document.getElementsByClassName('player');
    //     const video = document.getElementsByClassName('video')[0];
    //     for (let i = 0; i < players.length; i++) {
    //         players[i].style.height = ((video.offsetWidth * 9) / 16) + 'px';
    //     }
    // }

    // const handleResize = () => {
    //     setVideoPlayerHeight();
    // }

    const getLinks = (pressList) => {
        return pressList.map((press) => {
            return (
                <PressLink pub={press.pub} link={press.link} />
            )
        });
    }

    const renderVideos = () => {
        if (isList) {
            return vidIDs.map((vid) => {
                return (
                    <div class="video">
                        <div class="video-wrapper" width={1168} height={657}>
                            <iframe id="player" class="player" width={1168} height={657} src={`https://www.youtube.com/embed/${vid.vidID}?enablejsapi=1&showinfo=0&origin=http://katesweeney.town`} frameborder="0" allowfullscreen></iframe>
                        </div>
                        <p class="role">{vid.role ? vid.role : "Director"}</p>
                    </div>
                )
            });
        } else {
            return (
                <div class="video">
                    <p class="title">{title}</p>
                    <div class="video-wrapper" width={1168} height={657}>
                        <iframe id="player" class="player" width={1168} height={657} src={`https://www.youtube.com/embed/${vidID}?enablejsapi=1&showinfo=0&origin=http://katesweeney.town`} frameborder="0" allowfullscreen></iframe>
                    </div>
                    <p class="role">{role}</p>
                </div>
            )
        }
    }

    useEffect(() => {
        initPlayer();
        // setVideoPlayerHeight();
    }, []);

    // useEffect(() => {
    //     handleResize();
    //     window.addEventListener('resize', handleResize);

    //     return () => {
    //         window.removeEventListener('resize', handleResize);
    //     };
    // }, []);

    return (
        <div class="video-container">
            {/* <BackButton /> */}
            {isList && (
                <>
                    <p class="title">{title}</p>
                </>
            )}
            {renderVideos()}
            {press && (
                <div class="press-container">
                    {hasRental && (
                        <p class="rent-label">
                            <a href={hasRental} target="_blank">RENT HERE</a>
                        </p>
                    )}
                    <p class="press-label">Press:</p>
                    {getLinks(press)}
                </div>
            )}
        </div>
    );
}