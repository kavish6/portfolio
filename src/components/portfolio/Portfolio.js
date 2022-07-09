import './portfolio.css'
import P1 from '../../assets/hyperledger.png'
import P2 from '../../assets/flutter.png'
import P3 from '../../assets/ethereum.jpeg'
import P4 from '../../assets/infotsav.png'
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent</h5>
      <h2>Projects</h2>
      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={P1}  alt='project1' ></img>
          </div>
          <h3>Health-Records-DAPP</h3>
          <a href='https://github.com/kavish6/Private-Blockchain-EHR-DAPP' className='btn' target='_blank'>Github</a>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={P2}  alt='project image' ></img>
          </div>
          <h3>house Help</h3>
          <a href='https://github.com/kavish6/house_help' className='btn' target='_blank'>Github</a>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={P2}  alt='project image' ></img>
          </div>
          <h3>Air Chat</h3>
          <a href='https://github.com/kavish6/air_chat' className='btn' target='_blank'>Github</a>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={P3}  alt='project image' ></img>
          </div>
          <h3>Voting-DAPP</h3>
          <a href='https://github.com/kavish6/dapp-voting-front-end' className='btn' target='_blank'>Github</a>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={P4}  alt='project image' ></img>
          </div>
          <h3>Cultural Fest Website</h3>
          <a href='https://github.com/ravichopra0107/Webkriti' className='btn' target='_blank'>Github</a>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={P2}  alt='project image' ></img>
          </div>
          <h3>Climate App</h3>
          <a href='https://github.com/kavish6/climate' className='btn' target='_blank'>Github</a>
        </article>
      </div>

    </section>
  )
}

export default Portfolio