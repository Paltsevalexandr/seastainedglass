import React from 'react';
import {SocialItemObj} from "../Main/Main";

type Props = {
    socialItem: SocialItemObj
}

export default function SocialItem({socialItem}: Props) {
  return (
    <li className='social__item'>
        <a href={socialItem.link}>
            <img src={socialItem.imgSrc} alt={socialItem.name} />
        </a> 
    </li>
  )
}
