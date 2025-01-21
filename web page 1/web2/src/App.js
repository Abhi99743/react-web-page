import logo from './logo.svg';
import './App.css';
import ba from './ba.jpg'
import bb from './bb.jpg'
import bd from './bd.png'
import be from './be.jpg'
import bf from './bf.png'
import bg from './bg.jpg' 
import bh from './bh.jpg' 
import bi from './bi.jpg'
import bj from './bj.jpg'
import bl from './bl.jpg'
import bm from './bm.jpg'
import bn from './bn.jpg'
import bo from './bo.jpg'
import bp from './bp.jpg'
import bq from './bq.jpg'
import br from './br.jpg'
import bt from './image_4.jpg'

import './about'
import './Courses'
import './staff'
import './contact'
import './blog'



import { useNavigate } from 'react-router-dom';






function App() {
  const about = useNavigate()
  const courses = useNavigate()
  const staff = useNavigate()
  const Contact = useNavigate()
  const blog = useNavigate()

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
          <div><a onClick={() => about('/about')}>About</a></div>
          <div><a onClick={() => courses('/courses')}>Courses</a></div>
          <div><a onClick={() => staff('/staff')}>Staff</a></div>
          <div><a onClick={() => blog('/blog')}>Blog</a></div>
          <div><a onClick={() => Contact('/contact')}>Contact</a></div>
        </div>
        <div>
          <input className='a11' type='text' placeholder='Search' />
        </div>
      </div>






      <div className='c'>
        <h1 className='c1'>University,College School Education</h1>
        <p className='c2'>A samll river named Duden flows by thier place and supplish it with the necessar regelialia</p>
        <button className='c3'>Contact Us</button>
      </div>



      <div className='cc'>

        <div className='c44'>
          <img className='c5' src={bd} height='40px' />
          <h2 className='c6'>Certified Teachers</h2>
          <p className='c8'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
        </div>

        <div className='c4'>
          <img className='c5' src={bd} height='40px' />
          <h2 className='c6'>Special Education</h2>
          <p className='c8'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
        </div>

        <div className='c44'>
          <img className='c5' src={bd} height='40px' />
          <h2 className='c6'>Book & Library</h2>
          <p className='c8'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
        </div>

        <div className='c4'>
          <img className='c5' src={bd} height='40px' />
          <h2 className='c6'>Sport Clubs</h2>
          <p className='c8'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
        </div>

      </div>






      <div className='d'>


        <div className='d1'>
          <h1 className='d3'>What We Offer</h1>
          <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word.</p>

          <div className='dd'>
            <div className='d4'>
              <div><img src={bf} height='70px' /></div>
              <div>
                <h3>Safety First</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
              </div>
            </div>
            <div className='d4'>
              <div><img src={bf} height='70px' /></div>
              <div>
                <h3>Safety First</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
              </div>
            </div>
          </div>

          <div className='dd'>
            <div className='d4'>
              <div><img src={bf} height='70px' /></div>
              <div>
                <h3>Safety First</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
              </div>
            </div>
            <div className='d4'>
              <div><img src={bf} height='70px' /></div>
              <div>
                <h3>Safety First</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
              </div>
            </div>
          </div>

          <div className='dd'>
            <div className='d4'>
              <div><img src={bf} height='70px' /></div>
              <div>
                <h3>Safety First</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
              </div>
            </div>
            <div className='d4'>
              <div><img src={bf} height='70px' /></div>
              <div>
                <h3>Safety First</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
              </div>
            </div>
          </div>

        </div>


        <div className='d2'>
          <img src={be} height='700px' width='100%' />
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







      <div className='f'>
        <h1 className='f1'>Our Courses</h1>
        <p className='f2'>Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
      </div>


      <div className='ff'>

        <div className='f3'>
          <img src={bh} height='300px' width='100%' />
          <h2 className='f4'>Electric Engineering</h2>
          <p className='f5'>Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
          <button className='f6'>Aplly now</button>
        </div>

        <div className='f3'>
          <img src={bi} height='300px' width='100%' />
          <h2 className='f4'>Electric Engineering</h2>
          <p className='f5'>Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
          <button className='f6'>Aplly now</button>
        </div>

        <div className='f3'>
          <img src={bh} height='300px' width='100%' />
          <h2 className='f4'>Electric Engineering</h2>
          <p className='f5'>Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
          <button className='f6'>Aplly now</button>
        </div>

        <div className='f3'>
          <img src={bj} height='300px' width='100%' />
          <h2 className='f4'>Electric Engineering</h2>
          <p className='f5'>Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
          <button className='f6'>Aplly now</button>
        </div>

      </div>







      <div className='g'>
        <h1 className='g1'>Certified Teachers</h1>
        <p className='g2'>Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
      </div>

      <div className='gg'>

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






      <div className='t'>
        <div className='t1'>
          <h1 className='t7'>Request A Quote</h1>
          <p className='t6'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          <div className='t4'>
            <input className='t3' type='text' placeholder='First Name'/>
            <input className='t3' type='text' placeholder='Last Name'/>
          </div>

          <div className='t4'>
            <input className='t3' type='text' placeholder='Your Course'/>
            <input className='t3' type='tel' placeholder='Phone'/>
          </div>

          <div className='t4'>
            <textarea className='t3' typeof='taxt' placeholder='Message'></textarea>
            <button className='t5'>Request A Quote</button>
          </div>
        </div>
      </div>






      <div className='i'>
        <h1 className='i1'>Recent Blog</h1>
        <p className='i2'>Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
      </div>
      <div className='ii'>

        <div>
          <img src={bp} height='300px' width='100%' />
          <div className='i3'>
            <p className='i4'><strong>Skills To Develop Your Child Memory</strong></p>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <div className='i5'>
              <div><button className='i6'>Read More</button></div>
              <div><p className='i7'>Admin</p></div>
            </div>
          </div>
        </div>

        <div>
          <img src={bq} height='300px' width='100%' />
          <div className='i3'>
            <p className='i4'><strong>Skills To Develop Your Child Memory</strong></p>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <div className='i5'>
              <div><button className='i6'>Read More</button></div>
              <div><p className='i7'>Admin</p></div>
            </div>
          </div>
        </div>

        <div>
          <img src={br} height='300px' width='100%' />
          <div className='i3'>
            <p className='i4'><strong>Skills To Develop Your Child Memory</strong></p>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <div className='i5'>
              <div><button className='i6'>Read More</button></div>
              <div><p className='i7'>Admin</p></div>
            </div>
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

  );
}
export default App;
