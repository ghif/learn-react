
import { useState, useEffect } from 'react';


function RandomColor() {
    const [colorType, setColorType] = useState('hex');
    const [color, setColor] = useState('#000000');

    const randomize = (length) => {
        return Math.floor(Math.random() * length);
    }

    const handleCreateRandomHexColor = () => {
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexColor = "#";

        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomize(hex.length)];
        }
        console.log(hexColor)
        setColor(hexColor)
    }

    const handleCreateRandomRgbColor = () => {
        const rgbColor = `rgb(${randomize(256)}, ${randomize(256)}, ${randomize(256)})`;
        console.log(rgbColor)
        setColor(rgbColor)
    }

    console.log("colorType: ", colorType)
    console.log("colorType: ", colorType)

    useEffect(
        () => {
            if (colorType === 'hex') {
                handleCreateRandomHexColor()
            } else {
                handleCreateRandomRgbColor()
            }
        },
        [colorType]
    )

    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                background: color,
            }}
            className="container">
            <button onClick={() => setColorType('hex')}>Create HEX Color</button>
            <button onClick={() => setColorType('rgb')}>Create RGB Color</button>
            <button onClick={colorType === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor}>Generate Random Color</button>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#fff',
                fontSize: '60px',
                marginTop: '50px',
                flexDirection: 'column',
                gap: '20px',
            }}>
                <h3>{colorType === "rgb" ? 'RBG Color' : 'HEX Color'}</h3>
                <h1>{color} </h1>

            </div>
        </div>

    );
}

export default RandomColor;