
export default function PressLink({ pub, link }) {
    return (
        <div class="press-link">
            <a href={link} target="_blank"><span>{pub}</span></a>
        </div>
    )
}