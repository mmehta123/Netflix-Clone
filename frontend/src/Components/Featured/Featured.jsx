import React from 'react';
import "./featured.scss"

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const Featured = ({type}) => {
    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type==="movie"?"Movies":"Series"}</span>
                    <select name="genre" id="genre" >
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/908077b4-cf0a-43c3-b2c9-435fb990299b/7d5fd507-5575-42f8-912d-14afd6cedc28/IN-en-20220829-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt=" " width="100%" />
            <div className="info">
                <img
                    src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
                    alt=""
                />
                <span className="desc">
                    fuga adipisci iure, quaerat asperiores id vel eaque similique. Deserunt, aut nemo! Accusantium tenetur deserunt vitae labore perferendis, consequatur recusandae, fugit porro alias culpa odit ut in voluptates. Minus doloremque error quaerat blanditiis laborum nam sint voluptatem soluta. Perferendis, iste dolorum. Consectetur aliquid natus error minima. Aspernatur quos vitae sapiente tempora hic, maxime quibusdam numquam eos necessitatibus, repellat quaerat ab consequatur aliquam voluptas deserunt officia facere dignissimos dolores omnis in consectetur laboriosam soluta pariatur minima. Accusamus, expedita?
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrowIcon />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlinedIcon />
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Featured