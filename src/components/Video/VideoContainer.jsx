import Thumbnail from "./Thumbnail";
import "../../styles/video.css";

export default function VideoContainer({videoList, showTitle=true}) {
    return (
        <div class="video-container">
            {videoList.map((video) => {
                return (
                    <Thumbnail
                        imgSrc={video.imgSrc}
                        title={video.title}
                        showTitle={showTitle}
                    />
                );
            })}
        </div>
    )
}
