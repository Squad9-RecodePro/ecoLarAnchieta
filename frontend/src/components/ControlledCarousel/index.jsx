import React,  { useState } from 'react'

import { Carousel } from 'react-bootstrap'

const ControlledCarousel = ({ images }) => {


    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };


    return (
        <div style={{maxWidth: 600}}>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                { images.map((image,key) => 
                        <Carousel.Item key={key}>
                            <img
                            className="d-block w-100"
                            style={{maxHeight: 600}}
                            src={image.src}
                            alt={image.alt}
                            />
                        </Carousel.Item>
                )}
            </Carousel>
        </div>
    )
}

export default ControlledCarousel;
