import React from "react";
import data from "../data/PagesData";



export default function Pages(){
    const pages = data.map(page => {
        const images = page.images.map(image=> {
            return (
                <img className="pageimage" key={image} src={image} alt=""/>
            )
        })
        return (
            <div key={page.id} className="page">
                <a target="_blank" rel="noreferrer" href={page.appurl} className="unlink"><h1 className="pagetitle">{page.appname}</h1></a>
                <div className="pageimages">
                    {images}
                </div>
            </div>
        )
    })

    return (
        <div className="pages">
            {pages}
        </div>
    )
}