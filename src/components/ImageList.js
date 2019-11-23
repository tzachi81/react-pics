import React from 'react';

const ImageList = props => {
    return (
        <div>
        {
            props.images.map( ({id, alt_description, urls}) => { 
               return <img key={id} alt={alt_description} src={urls.small}></img>
            })
        }
        </div>
    )
    
}

export default ImageList;