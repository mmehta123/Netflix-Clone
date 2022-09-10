import React, { useRef, useState } from 'react'
import "./list.scss"
import ListItem from './ListItem/ListItem';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const List = ({ list }) => {
    const [slideNum, setSlideNum] = useState(0);
    const listRef = useRef();
    const handleClick = (direction) => {
        let distance = listRef.current.getBoundingClientRect().x - 40;
        if (direction === "left" && slideNum > 0) {
            setSlideNum(slideNum - 1);
            listRef.current.style.transform = `translateX(${150 + distance}px)`;
        }
        if (direction === "right" && slideNum < 5) {
            listRef.current.style.transform = `translateX(${-150 + distance}px)`;
            setSlideNum(slideNum + 1);
        }
    }
    return (
        <div className="list">
            <span className="listTitle">{list.title}</span>
            <div className="wrapper">
                <ArrowBackIosNewOutlinedIcon className="sliderArrow left" onClick={() => handleClick("left")} />
                <div className="container" ref={listRef}>
                    {
                        list.content.map((item, i) => {
                            return <ListItem key={i} index={i} item={item} />
                        })
                    }

                </div>
                <ArrowForwardIosIcon className="sliderArrow right" onClick={() => handleClick("right")} />
            </div>
        </div>
    )
}

export default List