export default function Thumbnail({ imgSrc, title, showTitle }) {
    return (
        <div class="thumbnail">
            <a href={`/videos/${title}`}>
                <img src={imgSrc} />
                {showTitle && (
                    <p class="caption">{title}</p>
                )}
            </a>
        </div>
    )
}
