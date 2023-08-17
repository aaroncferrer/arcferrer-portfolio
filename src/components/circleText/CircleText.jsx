import './circleText.css'
import { useEffect, useState } from "react";

function CircleText({text}){

    const [circleText, setCircleText] = useState('');

    useEffect(() => {
        const originalText = text;
        const circleText = originalText.split('').map((char, i) => (
            <span key={i} style={{transform: `rotate(${i * 8.2}deg)`}}>
                {char}
            </span>
        ));
        setCircleText(circleText);
    }, [text])

    return(
        <h4 className="circle__text">{circleText}</h4>
    )
}

export default CircleText;