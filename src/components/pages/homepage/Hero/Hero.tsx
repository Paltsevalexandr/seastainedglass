import React from 'react';
import banner from "@/assets/images/banner.jpg";

type Props = {}

export default function Hero({}: Props) {
  return (
    <section className="hero">
        <div className="section-content">
            <div className="columns hero__columns">
                <div className="col-one-second hero__column">
                    <img src={banner.src} alt="banner" className="banner" />
                </div>
                <div className="col-one-second hero__column">
                    <h1 className="page-title">
                        SeaStainedGlass
                    </h1>
                    <h2 className="page-subhead">
                        Laborious. Unique. Author’s.
                    </h2>
                    <p className='paragraph'>
                        Hi! I’m Kate and I make stained glass things using sea glass pieces found on 
                        local beach (Odessa, Ukraine). You can watch a little TV show about my craft 
                        <a className="hero__text-link" href="https://www.youtube.com/watch?v=PB1jjmd8dyc">
                            here
                        </a>.
                    </p>
                    <p className='paragraph'>
                        <a className="hero__text-link" href="#">Shop now</a> 
                        or go to my 
                        <a className="hero__text-link" href='https://www.etsy.com/shop/SeaStainedGlass'>
                            Etsy shop
                        </a>.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}