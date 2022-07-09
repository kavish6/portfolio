import './services.css';
import {AiOutlineCheck} from 'react-icons/ai'
const Services = () => {
  return (
    <section id='services'>
      <h5>My Other</h5>
      <h2>Skills and Tools</h2>
      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>Flutter Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Creating responsive flutter applications .</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>State Management using provider.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Applying different api and fetching data from remote servers.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Using Material Ui components to create beautiful applications.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Backend functionality using firebase  .</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Full stack application by creating own api using node and express.</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className='service__head'>
            <h3>Blockchain Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Blockchain Development using Ethereum and Hyperledger Fabric.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Smart Contract Development using Solidity for Ethereum.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Hyperledger Fabric chaincode development using Javascript.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Full stack decentralized applications using both Ethereum and Hyperledger Fabric.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Tinkering with Bash scripts and Docker-compose to set up local fabric network.</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className='service__head'>
            <h3>Tools & Platforms</h3>
          </div>
          <ul className='service__list'>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Git and Github</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Visual code </p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Docker</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p> Android Studio</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Firebase</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Latex</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Brownie</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services