import React, { useRef, useState } from 'react'
import "./list.scss"
import ListItem from './ListItem/ListItem';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const List = () => {
    const [slideNum,setSlideNum]=useState(0);
    const listRef=useRef();
    const handleClick = (direction) => {
        let distance=listRef.current.getBoundingClientRect().x-40;
        if(direction==="left" && slideNum>0){
            setSlideNum(slideNum-1);
            listRef.current.style.transform=`translateX(${150+distance}px)`;
        }
        if(direction==="right" && slideNum<5){
            listRef.current.style.transform=`translateX(${-150+distance}px)`;
            setSlideNum(slideNum+1);
        }
    }
    return (
        <div className="list">
            <span className="listTitle">Continue To Watch</span>
            <div className="wrapper">
                <ArrowBackIosNewOutlinedIcon className="sliderArrow left" onClick={() =>handleClick("left")} />
                <div className="container" ref={listRef}>
                    <ListItem index={0} />
                    <ListItem index={1} />
                    <ListItem index={2} />
                    <ListItem  index={3}/>
                    <ListItem  index={4}/>
                    <ListItem index={5} />
                    <ListItem index={6} />
                    <ListItem  index={7}/>
                    <ListItem index={8} />
                    <ListItem index={9} />
                    <ListItem index={10} />
                </div>
                <ArrowForwardIosIcon className="sliderArrow right" onClick={() => handleClick("right")} />
            </div>
        </div>
    )
}

export default List