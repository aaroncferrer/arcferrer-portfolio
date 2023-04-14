import { useEffect, useState } from "react";

function HeaderCircle(){

    const [circleText, setCircleText] = useState('');

    useEffect(() => {
        const originalText = 'software engineer • gamer • nutritionist •';
        const circleText = originalText.split('').map((char, i) => (
            <span key={i} style={{transform: `rotate(${i * 8.2}deg)`}}>
                {char}
            </span>
        ));
        setCircleText(circleText);
    }, [])

    return(
        <h4 className="circle__text">{circleText}</h4>
    )
}

export default HeaderCircle;