import React from "react";

import ia from './ia.webp';
import ix from './ix.webp'
import ij from './ij.webp'
import it from './it.webp'
import iu from './iu.png'
import iv from './iv.png'
import iq from './iq.webp'
import ir from './ir.webp'
import is from './is.webp'


export default function About() {
  return (
    <>
      <div className='a'>
        <div>
          <img src={ia} height='20px' />
        </div>

        <div className='a1'>
          <h3 className='a3'>Home</h3>
          <h3><a onClick={() => About('/about')}>About</a></h3>
          <h3>Pages</h3>
          <h3>News</h3>
          <h3>Contact</h3>
          <h3>cart</h3>
        </div>

        <div>
          <button className='a2'>Make as appointment</button>
        </div>
      </div>


      <div className="a4">
        <h1 className="a5">About DentistPro</h1>
        <p className="a6"><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</strong></p>
      </div>


      <div className="o">
        <div className="o1">
          <img className="o3" src={ix} height='550px' width='100%' />
          <h1 className="o2">It’s all about the team, people.</h1>
        </div>
        <div className="o1">
          <img className="o4" src={ij} height='650px' width='100%' />
        </div>
      </div>

      <div className="o5">
        <p className="o6"><strong>Template focus on helping you to make useful content more accessible with an utlimate goal for a good sharing profit as a content creator.</strong></p>
      </div>
      <div className="o5">
        <p className="o7"><strong>We see more and more ads in search results and not enough care for the people who are actually creating content.</strong></p>
      </div>



      <div className='g'>
        <h1 className='g1'>Meet our doctors </h1>
        <p className='g2'><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit</strong></p>
        <button className='a2'>Make as appointment</button>
      </div>
      <div className='ggg'>

        <div>
          <img className='g6' src={ir} height='400px' width='100%' />
          <h2 className='g3'>john doe</h2>
          <h4 className='g4'>General Dentist</h4>
          <div className='g5' >
            <img src={it} height='20px' />
            <img src={iu} height='20px' />
            <img src={iv} height='20px' />
          </div>
        </div>

        <div>
          <img className='g6' src={is} height='400px' width='100%' />
          <h2 className='g3'>john doe</h2>
          <h4 className='g4'>Assistant</h4>
          <div className='g5' >
            <img src={it} height='20px' />
            <img src={iu} height='20px' />
            <img src={iv} height='20px' />
          </div>
        </div>

        <div>
          <img className='g6' src={iq} height='400px' width='100%' />
          <h2 className='g3'>john doe</h2>
          <h4 className='g4'>Hygienist</h4>
          <div className='g5' >
            <img src={it} height='20px' />
            <img src={iu} height='20px' />
            <img src={iv} height='20px' />
          </div>
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