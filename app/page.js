'use client'
import Image from 'next/image'
import Header from '../components/header'
import Footer from '../components/footer'
import { motion } from 'framer-motion';
import './page.css'
import frontend from '../public/frontenddevelopment.jpg'
import wordpress from '../public/WordPress.png'
import next from '../public/next.svg'
import mscnc from '../public/mscnc.jpg'
import mscncdesktop from '../public/mscncdesktop.png'
import mscncmobile from '../public/mscncmobile.png'
import powerconnect from '../public/powerconnect.png'
import powerconnectlabel from '../public/powerconnectlabel.png'
import recipegeneratorbefore from '../public/recipegeneratorbefore.png'

export default function Home() {
  return (
    <div>
      <Header/>
      <div className='description'>
        <h1 className='descriptionheading'>Computer Science student at <br/>
        National University of Singapore</h1>
        <p className = 'descriptionparagraph'>Hi. I&apos;m Yuanxin, a Year 3 computer science student with a passion in <br/>
        Front-End Development and Artifical Intelligence.</p>
      </div>
      <div className ='description2'>
        <div>
        <Image src = {frontend} alt = 'frontend' 
        className='frontendimage' width = {280} height = {280}/>
        <h3>Front-end development</h3>
        <p>Responsive websites built for an <br/>
        optimal user experience that <br/>
        achieves your business goals.</p>
        </div>
        
        <div>
        <Image src = {wordpress} alt = 'wordpress' 
        className='wordpress' width = {280} height = {280}/>
        <h3>WordPress websites</h3>
        <p>Manage your website using the <br/>
        web&apos;s most popular content <br/>
        management system.</p>
        </div>
        <div>
        <Image src = {next} alt = 'nextjs' 
        className='nextjs' width = {280} height = {280}/>
        <h3>Next.js websites</h3>
        <p>Manage your website using the <br/>
        latest web development <br/>
        framework. <br/></p>
        </div>
        </div>
        <hr/>
        <div className='experience'>
          <h1>Experience</h1>
          <div className='mscnc'>
            <div>
            <motion.div
              whileHover={{
                scale: 1.04,
                transition: { duration: 1 },
              }}
            >
          <a href = '/resumewebsite/portfolio/mscnc'>
          <Image src = {mscnc} alt = 'mscnclogo'
          width ={200} height = {200} />
          
          <h3>
          {'>'} M S CNC Manufacture Pte. Ltd.
          </h3>
          </a>
          </motion.div>
          <p>
            I was the designer and front-end developer
            for the M S CNC website in 2021. I made a major
            overhaul of their website using technologies such as react.
          </p>
          </div>
          <div>
          <a href = '/resumewebsite/portfolio/mscnc'>
            <Image src = {mscncdesktop} alt = 'mscncdesktop'
            width = {800} height = {450} className='mscncdesktop'/>
            </a>
          </div>
          <div>
          <a href = '/resumewebsite/portfolio/mscnc'>
          <Image src = {mscncmobile} alt = 'mscncmobile'
            width = {250} height = {450} className='mscncmobile' />
            </a>
          </div>
          </div>
        </div>
        <hr/>
        <div className='experience'>
          <h1>Projects</h1>
          <div className='mscnc'>
            <div>
            <motion.div
              whileHover={{
                scale: 1.04,
                transition: { duration: 1 },
              }}
            >
          <a href = '/resumewebsite/portfolio/powerconnect'>
          <Image src = {powerconnectlabel} alt = 'mscnclogo'
          width ={200} height = {200} />          
          <h3>
          {'>'} PowerConnect
          </h3>
          </a>
          </motion.div>
          <p>
          PowerConnect is a desktop app for managing students, optimized for use via a Command Line Interface (CLI) while still having the benefits of a Graphical User Interface (GUI). If you can type fast, PowerConnect can get your contact management tasks done faster than traditional GUI apps.
          </p>
          <p>
          This was done as part of a software engineering project module in NUS.
          </p>
          </div>
          <div>
          <a href = '/resumewebsite/portfolio/powerconnect'>
            <Image src = {powerconnect} alt = 'mscncdesktop'
            width = {500} height = {450} className='mscncdesktop'/>
            </a>
          </div>
          <div >
          <a href = '/resumewebsite/portfolio/powerconnect'>
          <Image src = {powerconnect} alt = 'mscncmobile'
            width = {500} height = {450} className='mscncmobile' />
            </a>
          </div>
          
          </div>
          <div className='mscnc'>
            <div>
            <motion.div
              whileHover={{
                scale: 1.04,
                transition: { duration: 1 },
              }}
            >
          <a href = '/resumewebsite/portfolio/recipegenerator'>         
          <h3>
          {'>'} Recipe Generator
          </h3>
          </a>
          </motion.div>
          <p>
          RecipeGenerator is an app for getting ideas for parties/cooking and creating shopping lists from NTUC website.
          </p>
          <p>
          This was done as a self-initiated summer project.
          </p>
          </div>
          <div>
          <a href = '/resumewebsite/portfolio/recipegenerator'>
            <Image src = {recipegeneratorbefore} alt = 'mscncdesktop'
            width = {600} height = {450} className='mscncdesktop'/>
            </a>
          </div>
          <div>
          <a href = '/resumewebsite/portfolio/recipegenerator'>
          <Image src = {recipegeneratorbefore} alt = 'mscncmobile'
            width = {500} height = {450} className='mscncmobile' />
            </a>
          </div>
          </div>
        </div>
        <Footer/>
    </div>
    
  )
}
