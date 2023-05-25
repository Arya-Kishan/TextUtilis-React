import React, { useState } from 'react'


export default function Textform(props) {
    const [text, setText] = useState("");
    // setText("Enter the value you wanna");
    const handleUpClick = () => {
        console.log("CLICKED ON BUTTON");
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("success", ": CONVERTED TO UPPERCASE !")
    }
    const handleLowClick = () => {
        console.log("CLICKED ON BUTTON");
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("success", ": CONVERTED TO LOWERCASE !")
    }
    const handleClear = () => {
        console.log("CLICKED ON BUTTON");
        let newtext = "";
        setText(newtext);
        props.showAlert("success", ": TEXT CLEARED !")
    }
    const handleOnChange = (event) => {
        console.log("ON CHANGE");
        setText(event.target.value);
    }
    return (
        <>
            <div className='Container my-3'>
                <h1> {props.heading}</h1>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="6" style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
                </div>
                <button className='btn btn-primary mx-2' onClick={handleUpClick}>UPPERCASE</button>
                <button className='btn btn-primary mx-2' onClick={handleLowClick}>LOWERCASE</button>
                <button className='btn btn-primary mx-2' onClick={handleClear}>CLEAR TEXT</button>
            </div>
            <div className="container my-3" style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>YOUR SUMMARY OF TEXT</h1>
                <p> {text.split(" ").length} Words & {text.length} charaxcters</p>
                <p>{0.008 * text.split(" ").length} min to read it whole</p>
                <h1>PREVIEW</h1>
                <p>{text}</p>
            </div>
        </>
    )
}
