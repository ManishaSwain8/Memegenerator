import React from "react";
import memedata from "../memedata.js"
export default function Input(){
    //const [memeIamge,setMemeImage]=React.useState("")
    const [meme,setMeme]=React.useState({
        topText:"",
        bottomText:"",
        randomImages:"https://cdn.wionews.com/sites/default/files/styles/story_page/public/2021/05/02/193478-disaster-girl-meme.jpg"
    }

    )
    const [allMemeImages,setAllMemeImages]=React.useState(memedata)
        function getMemeImage(){
        
        //const memesArray =memedata.data.meme
        const memesArray=allMemeImages.data.meme
        const randomNumber=Math.floor(Math.random()*memesArray.length)
        const url=memesArray[randomNumber].url
        //setMemeImage(memesArray[randomNumber].url)
            setMeme(prevMeme=>({
                ...prevMeme,
                randomImages:url
            }))
    }
    function handleChange(event){
        const{name,value}=event.target
        setMeme(prevMeme=>({
            ...prevMeme,
            [name]:value
        }))
    }
    return(
        <main>
            <div className="form">
                <input type="text" placeholder="Top Text" className="forminput" name="toptext" value={meme.topText} onChange={handleChange}></input>
                <input type="text"  placeholder="Bottom Text" className="forminput"name="toptext" value={meme.bottomText} onChange={handleChange}></input>
                <button  className="formbutton" onClick={getMemeImage}>Get a new image!</button>
            </div>
            <div className="meme">
            <img src={meme.randomImages} className="imgs"></img>
            <h2 className="memetop-text">{meme.topText}</h2>
            <h2 className="memebuttom-text">{meme.bottomText}</h2>
            </div>
        </main>
        )
}