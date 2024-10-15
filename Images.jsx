import React, { useState } from 'react'
import axios from 'axios'

const Images = () => {


    const [img, setImg] = useState([]);


    const data = async () => {
        const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=10');
        setImg(response.data);
        console.log(response);
    }

  return (
    <>
        <button onClick={data}>click me to see images!</button>
        {img.map((image) => {
            return (
                <img src = {image.download_url} />
            )
        })}
    </>    

)
}

export default Images