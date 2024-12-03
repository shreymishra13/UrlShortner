
import * as React from 'react';
import { useState } from 'react';
// import Box from '@mui/material/Box';
// index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import './Form.css'
// import TextField from '@mui/material/TextField';

// import FilledInput from '@mui/material/FilledInput';

// import InputLabel from '@mui/material/InputLabel';
// import InputAdornment from '@mui/material/InputAdornment';

// import FormControl from '@mui/material/FormControl';
// import { Co2Sharp } from '@mui/icons-material';
// import { connection } from 'mongoose';
// import TextField from '@mui/material/TextField';

function Form() {
    // const [url, setURL] = useState("");

    // let onChangeInput=(event )=>{
    //     // event.preventDefault();

    //    console.log(event.target.value);
    // setURL(event.target.value);



    // }
    // let btnClicked= ()=>{
    //     console.log("btn is clicked");
    //     console.log(url);
    //     setURL("");
    // }
    //_________________________________________________________________________________________________________
    // here we are staring connection from backend to frontend 
    const [url, setUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');
    const [responseMessage, setResponseMessage] = useState('');
    const [isCopied , setIsCopied]= useState(false);
    const [shortUrlDisplay, setShortUrlDisplay] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent page reload

        try {
            const response = await fetch('http://localhost:5000/api/save-url', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ originalUrl: url }), // Send URL as JSON payload
            });

            const data = await response.json();

            if (response.ok) {
                // console.log(data.url.shortUrl);
                setShortUrl(data.url.shortUrl);
                setShortUrlDisplay(true)
                setResponseMessage(data.message);
            } else {
                setResponseMessage(data.error || 'Something went wrong.');
            }
        } catch (error) {
            console.error('Error:', error);
            setResponseMessage('Failed to send the URL.');
        }
    };

    const handleCopy = ()=>{
        navigator.clipboard.writeText(shortUrl)
        .then(() => {
            // alert('Text copied to clipboard!');
            setIsCopied(true);
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
        });
    }

    const handleInputChange=(e)=>{
        setUrl(e.target.value);
        setIsCopied(false);
        setShortUrlDisplay(false); 
    }











    return (

        <>

            <form className='text-center' id="main-form" onSubmit={handleSubmit}>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="mb-3">Your URL here</label>
                    <input type="url" className="form-control" onChange={handleInputChange} aria-describedby="emailHelp" placeholder="Paste your URL here" value={url} required />

                </div>

                {!shortUrlDisplay ? null :
                    <p className='mt-5 alert alert-success'>{shortUrl} <button type='button' style={{marginLeft:"50px"}}className={` ml-5 btn ${isCopied? 'btn-success' : 'btn-light'}`} onClick={handleCopy}>
                        <i className={`bi ${isCopied ? 'bi-check-circle' : 'bi-clipboard'} ml-5`}></i>
                        </button>
                    </p>}   
                <button type='submit' className='btn btn-outline-info d-flex m-auto mt-5' >Shorten</button>

            </form>
        </>
    )


}
export default Form
