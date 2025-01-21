import React from "react";

import iia from './iia.webp'
import iib from './iib.webp'
import ic from './ic.webp'

import ia from './ia.webp';
import iu from './iu.png';
import iv from './iv.png';
import it from './it.webp'
    

export default function News() {
    return (
        <>

            <div className='a'>
                <div>
                    <img src={ia} height='20px' />
                </div>

                <div className='a1'>
                    <h3 className='a3'>Home</h3>
                    <h3>About</h3>
                    <h3>Pages</h3>
                    <h3><a onClick={() => News('/news')}>News</a></h3>
                    <h3>Contact</h3>
                    <h3>cart</h3>
                </div>

                <div>
                    <button className='a2'>Make as appointment</button>
                </div>
            </div>

            <div className="a4">
                <h1 className="a5">From Blog</h1>
                <p className="a6"><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</strong></p>
            </div>



            <div className='l'>

                <div>
                    <img className='l1' src={iia} height='500px' width='100%' />
                    <div className='l2'>
                        <p className='l3'>April 27, 2023</p>
                        <p>Plumbing</p>
                    </div>
                    <div>
                        <h1>Achieving your best smile today</h1>
                    </div>
                    <div className='l4'>
                        <button className='l5'>Read more</button>
                    </div>
                </div>

                <div>
                    <img className='l1' src={iib} height='500px' width='100%' />
                    <div className='l2'>
                        <p className='l3'>April 27, 2023</p>
                        <p>Plumbing</p>
                    </div>
                    <div>
                        <h1>Achieving your best smile today</h1>
                    </div>
                    <div className='l4'>
                        <button className='l5'>Read more</button>
                    </div>
                </div>

            </div>


            <div className="lll">
                <img className='l1' src={ic} height='500px' width='100%' />
                <div className='l2'>
                    <p className='l3'>April 27, 2023</p>
                    <p>Plumbing</p>
                </div>
                <div>
                    <h1>Achieving your best smile today</h1>
                </div>
                <div className='l4'>
                    <button className='l5'>Read more</button>
                </div>
            </div>




            <div className='m'>
                <h1 className='m1'>Get your perfect smile</h1>
                <div className='m2'>
                    <div><button className='m3'>Make an appointment</button></div>
                    <div><button className='m4'>1800-1236 789</button></div>
                </div>
            </div>
            <div className='n'>

                <div className='n1'>
                    <img src={ia} height='20px' />
                    <p className='n4'><strong>Achieve online excellence for your dental practice with DentistPro, a first-rate Webflow template.</strong></p>
                </div>

                <div className=''>
                    <p className='n2'><strong>Navigation</strong></p>
                    <p className='n5'><strong>Home</strong></p>
                    <p className='n5'><strong>About</strong></p>
                    <p className='n5'><strong>Packages</strong></p>
                    <p className='n5'><strong>Style Guide</strong></p>
                    <p className='n5'><strong>Licensing</strong></p>
                </div>

                <div className=''>
                    <p className='n2'><strong>Contact us</strong></p>
                    <p className='n5'><strong>1 800 - 1236 789</strong></p>
                    <p className='n5'><strong>info@website.com</strong></p>
                </div>

                <div className=''>
                    <p className='n2'><strong>Find us</strong></p>
                    <div className='n2'>
                        <img src={it} height='20px' />
                        <img src={iu} height='20px' />
                        <img src={iv} height='20px' />
                    </div>
                </div>

            </div>

            <div className='n6'>
                <p className='n7'>© This is a Flowmance template powered by Webflow</p>
            </div>

        </>
    )
}