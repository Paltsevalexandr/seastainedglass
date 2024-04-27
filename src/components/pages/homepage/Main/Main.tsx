import React from 'react'
import facebook from "../../../../assets/images/icon-facebook.png";
import instagram from "../../../../assets/images/icon-instagram.png";
import etsy from "../../../../assets/images/icon-etsy.png";
import youtube from "../../../../assets/images/icon-youtube.png";
import SocialItem from '../SocialItem/SocialItem';

type Props = {}
export interface SocialItemObj {
    link: string;
    imgSrc: string;
    name: string
}

export default function Main({}: Props) {
  const social = [
    {
        link: "#",
        imgSrc: facebook.src,
        name: "facebook"
    },
    {
        link: "#",
        imgSrc: etsy.src,
        name: "etsy"
    },
    {
        link: "#",
        imgSrc: instagram.src,
        name: "instagram"
    },
    {
        link: "#",
        imgSrc: youtube.src,
        name: "youtube"
    },
];
  return (
    <section>
        <div className="section-content">
            <p className="paragraph">
                Please note that all the items are <strong>handmade</strong>, most of them would be 
                made for you <strong>to order</strong> (that takes time). 
                <strong>International delivery</strong> also can be long-ish. 
                But I hope it’s ok to wait a little for really unique 
                piece. 🙂 Thank you for your patience in advance!
            </p>
            <p className="paragraph">
                Feel free to message me about anything – I will get back to you as fast as I only can.
            </p>
            <ul className='social__list'>
            {
                social.map((item, index) => {
                    return (
                        <SocialItem 
                            socialItem={item} 
                            key={`social-${index}`} />
                    )
                })
            }
            </ul>
            <p className="paragraph">
                <a href="https://www.youtube.com/watch?v=mjyDRwMX0Nk&feature=youtu.be">
                    OR LEARN HOW TO MAKE IT YOURSELF
                </a>
            </p>
            <p className="paragraph">
                Everything is made by me, self-taught artist from Odessa, Ukraine. 
                Also you can find here tutorials for making sea stained glass yourself.
            </p>
            <p className="paragraph">
                Here you can buy or get made to order handmade sea stained glass art. 
                Unique Tiffany style lamps, lanterns and chandeliers, jewelry and 
                jewelry dishes and boxes, night lights, Christmas decorations, suncatchers 
                and wreaths, figurines and outdoor sculptures, sea glass flowers, cacti and succulents…
            </p>
            <div className="video-wrap">
                <iframe width="560" height="315" 
                    src="https://www.youtube.com/embed/PB1jjmd8dyc?si=jirRVqoTHySRIqgS" 
                    title="YouTube video player" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                />
            </div>
            <p className="paragraph">
                <a href="https://youtu.be/PB1jjmd8dyc">
                    Watch this video on YouTube.
                </a>
            </p>
            <ul style={{justifyContent: "flex-end"}} className='social__list'>
            {
                social.map((item, index) => {
                    return (
                        <SocialItem 
                            socialItem={item} 
                            key={`social-${index}`} />
                    )
                })
            }
            </ul>
        </div>
    </section>
  )
}