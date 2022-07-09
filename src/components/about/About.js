import './about.css';
import ME from '../../assets/me-about.jpg'
import {FaReact} from 'react-icons/fa'
import {SiFlutter} from 'react-icons/si'
import {SiEthereum} from 'react-icons/si'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <img style={{aspectRatio: '1/1'}} src={ME} alt='me' className='about__me-image'></img>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaReact className='about__icon'/>
            <h5>Web Development</h5>
            <small>Full Stack</small>
            </article>
            <article className='about__card'>
              <SiFlutter className='about__icon'/>
            <h5>Flutter Development</h5>
            <small>Dart and Firebase</small>
            </article>
            <article className='about__card'>
              <SiEthereum className='about__icon'/>
            <h5>Blockchain</h5>
            <small>Ethereum and Hyperledger Fabric</small>
            </article>
          </div>
          <p>
            Hello, My Name is Kavish Dadhich and I am a student at IIIT-Gwalior pursuing Integrated Bachelors in Information Technology & MBA. I am able to develop full stack Web applications , Flutter application and Decentralized applications using Ethereum Blockchain and Hyperledger Fabric.I have a good understanding of Data Structures and Algorithms . I like to work on my problem-solving skills using C++.In my free time I like to watch Anime and learn how to play Guitar.
            </p>
          <a href='#contact' className='btn btn-primary'> Let's Talk</a>
        </div>
      </div>
    </section>

  )
}

export default About