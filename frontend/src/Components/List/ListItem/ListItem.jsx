import React, { useState } from 'react'
import "./listItem.scss";
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';

const ListItem = ({ index }) => {
    const [isHoverd, setIsHovered] = useState(false);
    const trailer =
        "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

    return (
        <div className='listItem' style={{ left: isHoverd && index * 150 - 50 }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <img
                src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee"
                alt=""
            />
            {isHoverd && (
                <>
                    <video src={trailer} loop autoplay={true} />
                    <div className="itemInfo">
                        <div className="icons">
                            <PlayArrowOutlinedIcon className="icon" />
                            <AddIcon className="icon" />
                            <ThumbUpOffAltOutlinedIcon className="icon" />
                            <ThumbDownOutlinedIcon className="icon" />
                        </div>
                        <div className="itemInfoTop">
                            <span>1 hr. 14 min</span>
                            <span className="limit">+16</span>
                            <span>1999</span>
                        </div>
                        <div className="desc">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas nemo! Cumque, ad!
                        </div>
                        <div className="genre">Action</div>
                    </div>
                </>
            )}

        </div>
    )
}

export default ListItem