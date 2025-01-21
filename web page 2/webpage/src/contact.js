import React from "react";

import ia from './ia.webp';
import iu from './iu.png';
import iv from './iv.png';
import it from './it.webp'
import il from './il.webp'

export default function contact() {
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
                    <h3>News</h3>
                    <h3>Contact</h3>
                    <h3>cart</h3>
                </div>

                <div>
                    <button className='a2'>Make as appointment</button>
                </div>
            </div>


            <div className="q">

                <div className="qq">
                    <h1 className="q1">Make an Appointment</h1>
                    <div className="q2">
                        <h3 className="q3">Book your dental visits on your terms, complete the form</h3>
                        <div className="q4"><input className="q5" type="text" placeholder="your name"></input></div>
                        <div className="q4"><input  className="q5" type="email" placeholder="your email"></input></div>
                        <div className="q4"><input  className="q5" type="tel" placeholder="phone number"></input></div>
                        <div className="q4"><input  className="q5" type="text" placeholder="your doctor"></input></div>
                        <div className="q4"><button  className="q6" >Make Appointment</button></div>
                    </div>
                </div>

                <div className="qq">
                    <img className="q7" src={il} height='600px' width='100%'/>
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