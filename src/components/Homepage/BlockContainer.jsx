import Block from "./Block";
import '../../styles/block.css';
import { useState, useEffect } from 'preact/hooks';

export default function BlockContainer() {
    const [isMobile, setIsMobile] = useState(true);
    const [screenWidth, setScreenWidth] = useState(525);
    const [blockSize, setBlockSize] = useState('200px');

    const handleResize = () => {
        setScreenWidth(document.getElementsByTagName('body')[0].offsetWidth);
        window.innerWidth > 769 ? setIsMobile(false) : setIsMobile(true);
    };

    useEffect(() => {
        isMobile ? setBlockSize(screenWidth * .5 + 'px') : setBlockSize(screenWidth * .2 + 'px');
    }, [screenWidth]);

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div class="block-container">
            <Block title="Film & TV" rotate="none" bgcolor="#DCFF4E" link="/film-tv/" translate={isMobile ? '-3rem' : '0 -10rem'} blockSize={blockSize}  />
            <Block title="Music Videos" rotate="10deg" bgcolor="#6BFFF6" link="/music-videos/" translate={isMobile ? '-1rem' : '0 -2rem'} blockSize={blockSize} />
            <Block title="Radio" rotate="20deg" bgcolor="#DCFF4E" link="/radio/" translate={isMobile ? 'none' : '0 8rem'} blockSize={blockSize} />
            <Block title="Photos" rotate="-5deg" bgcolor="#B1FF4E" link="https://substack.com/@katetown" translate={isMobile ? '2rem' : '0 4rem'} blockSize={blockSize} />
        </div>
    )
}