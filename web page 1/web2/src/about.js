import React from "react";

import ba from './ba.jpg'
import bb from './bb.jpg'
import be from './be.jpg'
import bg from './bg.jpg'

import bp from './bp.jpg'
import bq from './bq.jpg' 
import br from './br.jpg'
import bt from './image_4.jpg'



export default function About() {
    return (
        <>
            <div className='a'>

                <div className='a1'>
                    <h1 className='a5'>Fox.</h1>
                    <h4>University</h4>
                </div>

                <div className='a2'>
                    <div><img src={bb} height='20px' /></div>
                    <div>
                        <h4>Email</h4>
                        <p>youremail@email.com</p>
                    </div>
                </div>

                <div className='a3'>
                    <div><img src={ba} height='20px' /></div>
                    <div>
                        <h4>Call</h4>
                        <p>Call Us: + 1235 2355 98</p>
                    </div>
                </div>

                <div className='a4'>
                    <button className='a6'>Apply now</button>
                </div>

            </div>
            <div className='a7'>
                <div className='a8'>
                    <div><a className='a10'>Home</a></div>
                    <div><a>About</a></div>
                    <div><a>Courses</a></div>
                    <div><a>Staff</a></div>
                    <div><a>Blog</a></div>
                    <div><a>Contact</a></div>
                </div>
                <div>
                    <input className='a11' type='text' placeholder='Search' />
                </div>
            </div>

            <div className="o">
                <h1>About Us</h1>
            </div>


            <div className="oo">
                <div className="o1">
                    <h1>Fox University Stablished Since 1960</h1>
                    <p className="o3">On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word.</p>
                    <p className="o3">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    <p className="o3">On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their</p>
                </div>
                <div className="o2">
                    <img src={be} height='600px' width='100%' />
                </div>
            </div>



            <div className='e'>

                <div className='e1'>
                    <div className='e2'>
                        <img src={bg} height='400px' width='100%' />
                    </div>
                    <div className='e3'>
                        <h1 className='e4'>Fox University</h1>
                        <p className='e5'>Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                        <p className='e6'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    </div>
                </div>

                <div className='ee'>
                    <div>
                        <h1 className='e7'>18</h1>
                        <p>Certified Teachers</p>
                    </div>
                    <div>
                        <h1 className='e7'>401</h1>
                        <p>Certified Teachers</p>
                    </div> <div>
                        <h1 className='e7'>30</h1>
                        <p>Certified Teachers</p>
                    </div>
                    <div>
                        <h1 className='e7'>50</h1>
                        <p>Certified Teachers</p>
                    </div>
                </div>

            </div>

            <div className='l'>
                <div className='ll'><img src={bp} height='350px' width='100%' /></div>
                <div className='ll'><img src={bq} height='350px' width='100%' /></div>
                <div className='ll'><img src={br} height='350px' width='100%' /></div>
                <div className='ll'><img src={bt} height='350px' width='100%' /></div>
            </div>







            <div className='m'>

                <div className='m1'>
                    <h2 className='m6'>Have a Questions?</h2>
                    <p className='m7'>	203 Fake St. Mountain View, San Francisco, California, USA</p>
                    <p className='m7'>	+2 392 3929 210</p>
                    <p className='m7'>	info@yourdomain.com</p>
                </div>

                <div className='m2'>
                    <h2 className='m6'>Recent Blog</h2>
                    <div className='m5'>
                        <div><img src={bp} height='70p' /></div>
                        <div><p className='m11'>Even the all-powerful Pointing has no control about</p></div>
                    </div>
                    <div className='m5'>
                        <div><img src={bq} height='70p' /></div>
                        <div><p className='m11'>Even the all-powerful Pointing has no control about</p></div>
                    </div>
                </div>

                <div className='m3'>
                    <h2 className='m6'>Links</h2>
                    <p className='m7'>Home</p>
                    <p className='m7'>About</p>
                    <p className='m7'>Services</p>
                    <p className='m7'>Deparments</p>
                    <p className='m7'>Contact</p>
                </div>

                <div className='m4'>
                    <h2 className='m6'>Subscribe Us!</h2>
                    <div className='m10'> <input className='m8' type='email' placeholder='Enter email addresh' width='100%' /></div>
                    <div><button className='m9'>Subscribe</button></div>
                </div>
            </div>

            <div className='n'>
                <p>Copyright ©2024 All rights reserved | This template is made with  by Colorlib</p>
            </div>
        </> 
    )

}