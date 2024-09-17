export default function Block({ title, rotate, bgcolor, link, translate, blockSize }) {
    return (
        <a
            href={link}
            class="block"
            style={`width: ${blockSize}; height: ${blockSize}; translate: ${translate}; rotate: ${rotate}; background-color: ${bgcolor}`}
        >
            <h3 class="title">{title}</h3>
        </a>
    );
}