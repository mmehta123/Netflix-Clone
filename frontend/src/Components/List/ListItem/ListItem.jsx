import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import "./listItem.scss";
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';

const ListItem = ({ index, item }) => {
    const [isHoverd, setIsHovered] = useState(false);
    const [movies, setMovies] = useState({});
    const trailer =
        "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
    useEffect(() => {
        const getMovie = async () => {
            try {
                const res = await axios.get('movies/find/' + item,
                    {
                        headers: {
                            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMWIwOGJkMGFjNzVlOWRhNTM0OGYwMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MjgxMDkxNCwiZXhwIjoxNjYzMjQyOTE0fQ.mGWaQdlqSBzqDYKvGqUDMkl_mw1pfy7Aj_-5Nbmw6qk"
                        }
                    });
                setMovies(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        getMovie();
    }, [item])
    return (
        <Link to="/watch" state={{ movie: movies }}>
            <div className='listItem' style={{ left: isHoverd && index * 150 - 50 }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <img
                    src={movies.img}
                />
                {isHoverd && (
                    <>
                        <video src={movies.trailer} loop autoPlay={true} />
                        <div className="itemInfo">
                            <div className="icons">
                                <PlayArrowOutlinedIcon className="icon" />
                                <AddIcon className="icon" />
                                <ThumbUpOffAltOutlinedIcon className="icon" />
                                <ThumbDownOutlinedIcon className="icon" />
                            </div>
                            <div className="itemInfoTop">
                                <span>{movies.duration ? movies.duration : "1hr. 13 min"}</span>
                                <span className="limit">{movies.limit}</span>
                                <span>{movies.year}</span>
                            </div>
                            <div className="desc">{movies.desc}</div>
                            <div className="genre">{movies.genre}</div>
                        </div>
                    </>
                )}
            </div>
        </Link>
    )
}

export default ListItem