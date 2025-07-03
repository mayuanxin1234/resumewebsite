'use client'
import './page.css'
import Header from '../../../components/header'
import Footer from '../../../components/footer'
import Image from 'next/image'
import evcharging from '../../../public/evcharging.svg'
import evchargingmobile from '../../../public/evchargingmobile.svg'

export default function Mscnc() {
    return(
        <div>
           <Header/>
           <div className='mainpage'>
            <div className='leftpage'>
                <a href = "https://univers.com/products/enos-charge">
           <button class="button-viewwebsite" ><span>View Website </span></button>
           </a>
           <div className='responsibilities'>
            <h2>RESPONSIBILITIES</h2>
            <ul>
                <li>Postman</li>
                <li>mySQL</li>
                <li>Mjolnir</li>
                <li>Cypress</li>
                <li>API Automation</li>
                <li>Regression Testing</li>
                <li>Integration Testing</li>
                <li>Acceptance Testing</li>
            </ul>
           </div>
           </div>
           <div className='rightpage'>
            <h1>Univers</h1>
            <p>Working as a Quality Assurance Engineer intern, I collaborated with other engineers to ensure
                a bug-free product during launch day.
            </p>
            <div className='descriptiontext'>
            <p>Maximising test coverage while minimising test timing was the main aim of our Quality Assurance team.</p>
            </div>
            <div className='mscncimage'>
            <Image src = {evcharging} alt = 'evcharging'
             className='mscncdesktop'/>
            
            <div>
            <Image src = {evchargingmobile} alt = 'evchargingmobile'
             className='mscncmobile' />
            </div>
                <p>The technologies used were mySQL, Postman, Cypress, API automation.</p>
            </div>
            <div>
                <h2>Struggles Faced</h2>
                <p>The main struggle faced was maximising test coverage given a limited time. Automation was key
                    to our success as we eliminated many repetitive regression testing so as to increase our regression
                    testing efficency. Up to 50% reduction in testing time and error rate through postman automation.
                </p>
            </div>
           </div>
           </div>
           <Footer/>
        </div>

    )
}