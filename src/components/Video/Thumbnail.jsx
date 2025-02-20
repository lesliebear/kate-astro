export default function Thumbnail({ imgSrc, title, showTitle }) {
    return (
        <div class="thumbnail">
            <a href={`/videos/${title}`}>
                <img src={imgSrc} width={382} height={215} />
                {showTitle && (
                    <p class="caption">{title}</p>
                )}
            </a>
        </div>
    )
}
