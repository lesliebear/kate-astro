import { useEffect } from "preact/hooks";

export default function BackButton() {
    const handleBackBtn = () => {
        history.back();
    }

    useEffect(() => {
        document.getElementById('back-btn').addEventListener('click', handleBackBtn);

        return () => {
            document.removeEventListener('click', handleBackBtn);
        }
    }, []);

    return (
        <a href="" id="back-btn"><i class="fa-solid fa-arrow-left fa-lg"></i> <span>BACK</span></a>
        
    )
}