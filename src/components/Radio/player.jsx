import "../../styles/player.css";

export default function Player({ src, width = "100%", height = "166" }) {
  return (
    <div class="radio-player-wrapper">
      <iframe
        width={width}
        height={height}
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src={src}
      ></iframe>
    </div>
  );
}
