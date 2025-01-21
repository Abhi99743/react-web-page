import React from "react";

import bl from './bl.jpg'
import bm from './bm.jpg'
import bn from './bn.jpg'
import bo from './bo.jpg'
import ba from './ba.jpg'
import bb from './bb.jpg'

import bu from './teacher-5.jpg'
import bv from './teacher-6.jpg'
import bw from './teacher-7.jpg'
import bx from './teacher-8.jpg'

import bp from './bp.jpg'
import bq from './bq.jpg'

export default function Staff() {
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
                <h1>Certified Teacher</h1>
            </div>

            <div className='ggg'>

                <div className='g3'>
                    <img src={bl} height='400px' width='100%' />
                    <h2 className='g4'>Bianca Wilson</h2>
                    <p className='g5'>Teacher</p>
                    <p className='g6'>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                </div>

                <div className='g3'>
                    <img src={bm} height='400px' width='100%' />
                    <h2 className='g4'>Mitch Parker</h2>
                    <p className='g5'>English Teacher</p>
                    <p className='g6'>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                </div>

                <div className='g3'>
                    <img src={bn} height='400px' width='100%' />
                    <h2 className='g4'>Stella Smith</h2>
                    <p className='g5'>Art Teacher</p>
                    <p className='g6'>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                </div>

                <div className='g3'>
                    <img src={bo} height='400px' width='100%' />
                    <h2 className='g4'>Monshe Henderson</h2>
                    <p className='g5'>Science Teacher</p>
                    <p className='g6'>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                </div>

            </div>

            <div className='ggg'>

                <div className='g3'>
                    <img src={bu} height='400px' width='100%' />
                    <h2 className='g4'>Bianca Wilson</h2>
                    <p className='g5'>Teacher</p>
                    <p className='g6'>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                </div>

                <div className='g3'>
                    <img src={bv} height='400px' width='100%' />
                    <h2 className='g4'>Mitch Parker</h2>
                    <p className='g5'>English Teacher</p>
                    <p className='g6'>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                </div>

                <div className='g3'>
                    <img src={bw} height='400px' width='100%' />
                    <h2 className='g4'>Stella Smith</h2>
                    <p className='g5'>Art Teacher</p>
                    <p className='g6'>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                </div>

                <div className='g3'>
                    <img src={bx} height='400px' width='100%' />
                    <h2 className='g4'>Monshe Henderson</h2>
                    <p className='g5'>Science Teacher</p>
                    <p className='g6'>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
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