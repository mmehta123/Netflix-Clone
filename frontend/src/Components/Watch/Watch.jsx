import React from 'react'
import "./watch.scss"
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import { useLocation, Link } from 'react-router-dom';
const Watch = () => {
    const location = useLocation();
    const movie = location.state.movie;
    return (
        <div className="watch">
            <Link to="/" className="link">
                <div className="back">
                    <KeyboardBackspaceOutlinedIcon />
                    <span>Home</span>
                </div>
            </Link>
            <video controls src={movie.video} autoPlay={true} loop />
        </div>
    )
}

export default Watch