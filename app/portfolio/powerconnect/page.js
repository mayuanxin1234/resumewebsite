'use client'
import './page.css'
import Header from '../../../components/header'
import Footer from '../../../components/footer'
import Image from 'next/image'
import powerconnect from '../../../public/powerconnect.png'

export default function Mscnc() {
    return(
        <div>
           <Header/>
           <div className='mainpage'>
            <div className='leftpage'>
                <a href = "https://ay2223s2-cs2103t-t09-1.github.io/tp/" target='_blank'>
           <button class="button-viewwebsite" ><span>View Website </span></button>
           </a>
           <div className='responsibilities'>
            <h2>RESPONSIBILITIES</h2>
            <ul>
                <li>Java</li>
                <li>Test cases</li>
                <li>Deliverables & Deadline</li>
                <li>Integration</li>
            </ul>
           </div>
           <a href = "https://github.com/AY2223S2-CS2103T-T09-1/tp/releases/download/v1.4/PowerConnect.jar" target='_blank'>
           <button class="button-viewwebsite" ><span>Download </span></button>
           </a>
           </div>
           <div>
            <h1>PowerConnect</h1>
            <p>This project was done as a NUS software engineering module over a semester. </p>
            <div className='descriptiontext'>
            <p>I was part of a 4 member team tasked to build a project from an existing large code base. Main difficulties faced were understanding
                the old code base and how to morph it to what we envision our product to be. This application aims to track student and parent details
                through the use of typed commands rather than graphics. Our target audience is teachers who are fast typists and require a quick and easy solution
                to track student details. 
            </p>
            <h3>Demo Video</h3>
                <iframe width="700" height="400"
                    src="https://www.youtube.com/embed/SaAi4I9NUYg" className = 'powerconnectdemo'>
                </iframe>
            </div>
            <div className='mscncimage'>
            <Image src = {powerconnect} alt = 'mscncdesktop'
            width = {500} height = {450} className='mscncdesktop'/>
            </div>
            <div>
                <p>The technologies used were Java, Git, Java Continutous Integration (CI) and codecov.</p>
            </div>
            <div>
                <h2>Struggles Faced</h2>
                <p>The main difficulty faced was navigating the huge code base pre-written for us and once we got it sorted, we could
                    implement the features quickly.
                </p>
            </div>
           </div>
           </div>
           <Footer/>
        </div>

    )
}