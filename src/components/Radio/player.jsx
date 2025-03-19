export default function Player({src, width="100%", height="166"}) {
    return (
        <iframe
        width={width}
        height={height}
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src={src}
    ></iframe>
    );
}