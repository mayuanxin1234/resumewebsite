'use client'
import './page.css'
import Header from '../../../components/header'
import Footer from '../../../components/footer'
import Image from 'next/image'
import rgbefore from '../../../public/recipegeneratorbefore.png'
import rg1 from '../../../public/recipegeneratorresult1.png'
import rg2 from '../../../public/recipegeneratorresult2.png'

export default function Mscnc() {
    return(
        <div>
           <Header/>
           <div className='mainpage'>
            <div className='leftpage'>
                <a href = "https://github.com/mayuanxin1234/reciepegenerator" target='_blank'>
           <button class="button-viewwebsite" ><span>View Website </span></button>
           </a>
           <div className='responsibilities'>
            <h2>RESPONSIBILITIES</h2>
            <ul>
                <li>Javascript</li>
                <li>CHATGPT Api Implementation</li>
                <li>NTUC website crawling</li>
                <li>Integration</li>
            </ul>
           </div>
           </div>
           <div>
            <h1>Recipe Generator</h1>
            <p>This project was self initiated and completed over the summer. </p>
            <div className='descriptiontext'>
            <p> This project was inspired by ChatGPT and how we can leverage on advancements in natural language processing to bring value. One such area I noticed lacking was a convenient way of
                searching for recipe ideas and having them all processed into a single webpage with inputs from the local grocer, NTUC. Hence, this project was born aiming at amateur home cooks and 
                even professional chefs. 
            </p>
            <h3>Demo Video</h3>
            <iframe width="700" height="400"
                    src="https://www.youtube.com/embed/OQc7I6lfHeU" className='recipegeneratordemo'>
                </iframe>
            </div>
            <div className='mscncimage'>
            <Image src = {rgbefore} alt = 'mscncdesktop'
            width = {500} height = {350} className='mscncdesktop'/>
            <Image src = {rg1} alt = 'mscncdesktop'
            width = {500} height = {350} className='mscncdesktop'/>
            <Image src = {rg2} alt = 'mscncdesktop'
            width = {500} height = {350} className='mscncdesktop'/>
            </div>
            <div>
                <p>The technologies used were Javascript, Git, HTML, CSS, NextJS and ChatGPT.</p>
            </div>
            <div>
                <h2>Struggles Faced</h2>
                <p>The main difficulty faced was creating a dynamic page that updates its content when results are being generated after pressing the submit button.
                </p>
            </div>
           </div>
           </div>
           <Footer/>
        </div>

    )
}