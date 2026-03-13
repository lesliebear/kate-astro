export default function Thumbnail({ imgSrc, title, showTitle }) {
  return (
    <div class={`thumbnail ${!showTitle ? "no-caption" : ""}`}>
      <a href={`/videos/${title}`} class="thumbnail-link">
        <div class="thumb-inner">
          <img src={imgSrc} width={382} height={215} alt="" />
          <div class="overlay" aria-hidden="true"></div>
        </div>
        {showTitle && <p class="caption">{title}</p>}
      </a>
    </div>
  );
}
