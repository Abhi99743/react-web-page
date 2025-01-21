import logo from './logo.svg';
import './App.css';

import ia from './ia.webp';
import ib from './ib.webp'
import ic from './ic.webp'
import id from './id.webp'
import ie from './ie.png'
import ig from './ig.webp'
import ih from './ih.png'
import ii from './ii.webp'
import ik from './ik.webp'
import im from './im.webp'
import io from './io.webp'
import ip from './ip.webp'
import iq from './iq.webp'
import ir from './ir.webp'
import is from './is.webp'
import it from './it.webp'
import iu from './iu.png'
import iv from './iv.png'
import iw from './iw.webp'
import ix from './ix.webp'
import iy from './iy.png'
import iia from './iia.webp'
import iib from './iib.webp'

import './about'
import './news'
import './contact'




import { useNavigate } from 'react-router-dom';






function App() {
  const about = useNavigate()
  const news = useNavigate()
  const contact = useNavigate()



  return (
    <>
      <div className='a'>
        <div>
          <img src={ia} height='20px' />
        </div>

        <div className='a1'>
          <h3 className='a3'>Home</h3>
          <h3><a onClick={() => about('/about')}>About</a></h3>
          <h3>Pages</h3>
          <h3><a onClick={() => news('/news')}>News</a></h3>
          <h3><a onClick={() => contact('/contact')}>contact</a></h3>
          <h3>Cart</h3>

        </div>

        <div>
          <button className='a2'>Make as appointment</button>
        </div>
      </div>






      <div className='b'>

        <div className='bb'>
          <h1 className='b1'>We are ready to make your smile sparkle</h1>
          <p className='b2'><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit</strong>.</p>
          <div className='b3'>
            <div><button className='b4' >Learn More</button></div>
            <div><button className='b5'>1800 - 1236 789</button></div>
          </div>
        </div>

        <div className='bb'>
          <div>
            <img className='b6' src={ib} height='600px' width='100%' />
          </div>
          <div>
            <img className='b7' src={ic} height='200px' />
          </div>
        </div>

      </div>






      <div className='c'>

        <div className='c4'><h3>Book your dental visits on your terms, complete the form</h3></div>
        <div className='c1'>
          <div><input className='c2' type='text' placeholder='your name' /></div>
          <div><input className='c2' type='text' placeholder='your email' /></div>
          <div><input className='c2' type='text' placeholder='phone number' /></div>
          <div><input className='c2' type='text' placeholder='your doctor' /></div>
          <div><button className='c3'>Make appointment</button></div>
        </div>

      </div>






      <div className='d'>
        <div className='dd'>
          <img className='d6' src={id} height='600px' width='100%' />
        </div>
        <div className='dd'>
          <h1 className='d4'>Developing our reputation since 2017</h1>

          <div className='d1'>
            <div className='d2'>
              <img className='d7' src={ii} height='70px' />
              <h3 className='d5'>Affordable Price</h3>
              <p className='d3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className='d2'>
              <img className='d7' src={ie} height='70px' />
              <h3 className='d5'>Professional Dentist</h3>
              <p className='d3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>

          <div className='d1'>
            <div className='d2'>
              <img className='d7' src={ig} height='70px' />
              <h3 className='d5'>Satisfactory Service</h3>
              <p className='d3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className='d2'>
              <img className='d7' src={ih} height='70px' />
              <h3 className='d5'>Health Insurance</h3>
              <p className='d3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>

        </div>
      </div>




      <div className='e'>
        <h1 className='e1'>Expertise in our field</h1>
        <p className='e2'><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit</strong></p>
      </div>

      <div className='ee'>
        <div className='e4'>
          <div className='e3'>
            <h2 className='e5'>Dental implants</h2>
            <p className='e6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
        </div>
        <div className='e7'>
          <div className='e3'>
            <h2 className='e5'>Dental implants</h2>
            <p className='e6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
        </div>
        <div className='e8'>
          <div className='e3'>
            <h2 className='e5'>Dental implants</h2>
            <p className='e6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
        </div>
      </div>


      <div className='e10'>
        <div className='e9'></div>
      </div>


      <div className='f'>
        <div>
          <img className='f1' src={im} height='60px' />
          <h3>Smile Enhancement</h3>
          <p className='f2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <a className='f3'>Learn more</a>
        </div>
        <div>
          <img className='f1' src={io} height='60px' />
          <h3>Whitening Boost</h3>
          <p className='f2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <a className='f3'>Learn more</a>
        </div>
        <div>
          <img className='f1' src={ip} height='60px' />
          <h3>Affordable Price</h3>
          <p className='f2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <a className='f3'>Learn more</a>
        </div>
        <div>
          <img className='f1' src={ik} height='60px' />
          <h3>Dental Implants</h3>
          <p className='f2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <a className='f3'>Learn more</a>
        </div>
      </div>





      <div className='g'>
        <h1 className='g1'>Meet our doctors </h1>
        <p className='g2'><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit</strong></p>
        <button className='a2'>Make as appointment</button>
      </div>
      <div className='gg'>

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






      <div className='j'>

        <div className='jj'>
          <div className='j1'>
            <img className='j2' src={ix} height='300px' width='100%' />
          </div>

          <div className='j3'>
            <img className='j4' src={iw} height='300px' width='100%' />
          </div>
        </div>

        <div className='j5'>
          <h1 className='j6'>What you’ll enjoy</h1>
          <p className='j7'><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit</strong></p>

          <div className='j8'>
            <img src={iy} height='30px' />
            <p className='j9'>Cursus mattis molest iaculis 24/7</p>
          </div>

          <div className='j8'>
            <img src={iy} height='30px' />
            <p className='j9'>Ipsum dolor sit ame</p>
          </div>

          <div className='j8'>
            <img src={iy} height='30px' />
            <p className='j9'>In ornare quam viverra orci</p>
          </div>

          <div className='j8'>
            <img src={iy} height='30px' />
            <p className='j9'>Consectetur adipisci</p>
          </div>

          <div className='j8'>
            <img src={iy} height='30px' />
            <p className='j9'>Iaculis urna id volutpat lacus lao</p>
          </div>

          <div className='j10'>
            <div><button className='j11' >Learn More</button></div>
            <div><button className='j12'>1800 - 1236 789</button></div>
          </div>

        </div>

      </div>




      <div className='ll'>
        <h1 className='l6'>Recent News</h1>
        <p className='l7'><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit</strong></p>
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
  );
}

export default App;
