import React from "react";

import bb from './bb.jpg'
import ba from './ba.jpg'
import bz from './download.png'

import bp from './bp.jpg'
import bq from './bq.jpg'


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
                <h1>Contact Us</h1>
            </div>


            <div className="q">
                <div className="q1">
                    <h3>Address</h3>
                    <p className="q2">198 West 21th Street, Suite 721 New York NY 10016</p>
                </div>
                <div className="q1">
                    <h3>Contact Number</h3>
                    <p>+ 1235 2355 98</p>
                </div>
                <div className="q1">
                    <h3>Email Address</h3>
                    <p>info@yoursite.com</p>
                </div>
                <div className="q1">
                    <h3>Website</h3>
                    <p>yoursite.com</p>
                </div>
            </div>



            <div className="r">
                <div className="r1">
                    <img src={bz} height='50px' />
                    <h2 className="r7">Oops! Something went wrong.</h2>
                    <p>This page didn't load Google Maps correctly. See the JavaScript console for technical details.</p>
                </div>
                <div className="r2">
                   <div className="r5"><input className="r3" type="text" placeholder="Your Name"/></div> 
                  <div className="r5"><input className="r3"  type="email" placeholder="Your email"/></div>  
                   <div className="r5"><input className="r3"  type="text" placeholder="Your Subject"/></div> 
                   <div className="r5"><textarea className="r4" type='text' placeholder="Message"></textarea></div> 
                   <div><button className="r6">Send Message</button></div>
                </div>

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