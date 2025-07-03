'use client'
import './page.css'
import Header from '../../components/header'
import Footer from '../../components/footer'
import profilephoto from '../../public/profilephoto.jpg'
import Image from 'next/image'
import javascript from '../../public/JavaScript-logo.png'
import html from '../../public/HTML5_logo_and_wordmark.svg.png'
import css from '../../public/CSS.png'
import next from '../../public/next.svg'
import python from '../../public/python.png'
import java from '../../public/java.png'
import c from '../../public/C.png'
import numpy from '../../public/numpy.png'
import pytorch from '../../public/pytorch.png'
import tensorflow from '../../public/tensorflow.jpg'
import r from '../../public/R.svg'

export default function About() {
  return (
    <div>
      <Header/>
      <div>
        <h2>About Ma Yuanxin</h2>
      </div>
      <div className='main'>
        <div className='profilephoto'>
        <Image src = {profilephoto} alt = "profilephoto" width ={100} height ={125}/>
        <p>I am Yuanxin and I enjoy creating solutions to solve everyday issues. My interest in Computer Science began back in 2017, when I explored many online courses and fell in love with programming.</p>
        </div>   
        <p>Today, I am a Masters Computer Science student in San Jose State Unviersity. Previously, I attained a Bachelor of Computing in Computer Science (Distinction) at the National University of Singapore, specialising in Software Engineering and Database Systems.
        I work to make a better web; one that is fast, easy to use, beautiful, accessible to all, and frustration-free.
        </p>
        <div>
          <h2>Techinical Skills</h2>
          <ul>
            <li><Image src = {javascript} alt = 'javascript' width = {50} height ={50}/>JavaScript</li>
            <li><Image src = {html} alt = 'html' width = {50} height ={50}/>HTML</li>
            <li><Image src = {css} alt = 'css' width = {50} height ={50}/>CSS</li>
            <li><Image src = {next} alt = 'next.js' width = {50} height ={50}/>Next.Js</li>
            <li><Image src = {python} alt = 'python' width = {50} height ={50}/>Python</li>
            <li><Image src = {java} alt = 'java' width = {50} height ={50}/>Java</li>
            <li><Image src = {c} alt = 'C' width = {50} height ={50}/>C</li>
            <li><Image src = {numpy} alt = 'numpy' width = {50} height ={50}/>Numpy</li>
            <li><Image src = {pytorch} alt = 'pytorch' width = {50} height ={50}/>Pytorch</li>
            <li><Image src = {tensorflow} alt = 'tensorflow' width = {50} height ={50}/>Tensorflow</li>
            <li><Image src = {r} alt = 'r' width = {50} height ={50}/>R</li>
            <li>Rust</li>
          </ul>
        </div>
        <h2>Work Experience</h2>
        <p>1. <b>Univers Pte. Ltd. </b></p>
        <p>Univers helps companies and countries optimize energy systems and reduce carbon emissions with accurate, reliable,
        and actionable decarbonization data.</p>
        <p>Role: <b>Quality Assurance Engineer </b>(Jan 2024 - May 2025)</p>
        <ul>
          <li>Working on EnOS Charge, an electric vehicle charging web and mobile application, to perform automated and
          manual regression, integration testing</li>
           <li>50% reduction in error rate and testing time achieved using postman automation and Cypress</li>
           <li>Leveraged on Postman, MySQL, Selenium, Cypress, iOS mobile application testing</li>
        </ul>
        <p>2. <b>KiwiAR </b></p>
        <p>KiwiAR offers retailers the ability to monetize their valuable 1st party data by helping brands connect with their loyal
        customers.</p>
        <p>Role: <b>Software Developer </b>(May 2023 - Aug 2023)</p>
        <ul>
          <li>Built a <a href='https://github.com/mayuanxin1234/reciepegenerator'>full stack web application</a> which leveraged the ChatGPT API to generate recipe and ingredient lists linking to
          NTUC (Singapore grocery chain) from user inputs</li>
           <li>Web application was built using ReactJS on the front end and NextJS for the backend</li>
           <li>Researched and put together a presentation for company executives on modern AI Generated Content (AIGC) tools
           like StableDifussion and ZMO.ai</li>
        </ul>
        <p>3. <b>M S CNC Manufacture Pte. Ltd. </b></p>
        <p>M S CNC is a precision engineering company with a focus on Computer Numeric Control (CNC) machinery.</p>
        <p>Role: <b>Software Developer </b>(Apr 2022 - Dec 2023)</p>
        <ul>
          <li>Re-built the company website using React, JavaScript, CSS & HTML. The previous website was built with a website builder and did not meet their business needs</li>
           <li>Created Java application to improve a daily process that involved manual, and error-prone copying and pasting of CNC machine code</li>
        </ul>
        <p>Role: <b>Assistant Accountant </b> (Feb 2021 - Aug 2021)</p>
        <ul>
          <li>Sorted out invoices and keyed invoices into accounting software (WHIZIT). Assisted with monthly accounting duties</li>
          <li>Leveraging Siemens Unigraphics software to generate machine code to run on CNC machines and helped with manufacturing of items</li>
        </ul>
        <div>
        <h2>Projects</h2>
        <p>1. <b>Final Year Project (FYP) </b></p>
        <p>Role: Researcher (May 2024 - Apr 2025)</p>
        <ul>
          <li><a href='https://www.google.com/url?q=https://drive.google.com/uc?export%3Ddownload%26id%3D1Q0ecc_gwPw8sUwqEuO8YkGhdi9q_TOyU&sa=D&source=apps-viewer-frontend&ust=1751614400462310&usg=AOvVaw14Df7q7lor0yjW6FFpdDhc&hl=en'>Thesis:</a> To understand the mutual perception of personal agents on their human counterparts</li>
          <li>Worked under the supervision of Dr. Lee Yi-Chieh (EJ Lee) in the <a href='https://www.ai4sg.org/'>AI4SG</a> lab, focusing on Huamn Computer Interaction (HCI) research</li>
        </ul>
        <p>2. <b>TikTok Youth Camp </b></p>
        <p>Role: Participant (May 2022 - Jun 2022)</p>
        <ul>
          <li>4 weeks camp teaching basics of HTML, CSS, JavaScript, Web Animation, Android Development</li>
          <li>Embarked on a Front End development project creating a HangMan game</li>
        </ul>
        <p>3. <b>Amazon Web Services Early Careers Innovation Program </b></p>
        <p>Role: Participant (May 2022 - Jun 2022)</p>
        <ul>
          <li>5 weeks camp with seminars from industry experts on Amazon Web Services</li>
          <li>Embarked on a CASE competition with presenting sample business proposal</li>
        </ul>
      </div>
      <div>
        <h2>Coursework</h2>
        <h3>San Jose State University: </h3><ul>
          <li>CS157C NoSQL Database Systems</li>
          <li>CS247 Advanced Computer Architecture</li>
          <li>CS257 Database System Principles</li>
          <li>CS200W Graduate Technical Writing</li>
        </ul>
        <h3>National Unviersity of Singapore: </h3>
        <ul>
          <li>CS3219 Software Engineering Principles and Patterns - React</li>
          <li>CS4226 Software Testing - Java</li>
          <li>CS3230 Database Systems - MySQL</li>
          <li>CS4225 Big Data Systems for DataScience - Hadoop</li>
          <li>CS2040S Data structures and algorithms - Java</li>
          <li>CS2103T Software Engineering - Java</li>
          <li>CS2030S Programming Methodology II - Java</li>
          <li>CS2106 Introduction to Operating Systems - C</li>
          <li>CS2100 Computer Organisation - C</li>
          <li>CS1101S Programming Methodology I - Source (JavaScript)</li>
          <li>CS2105 Introduction to computer networks - Python</li>
          <li>CS2109S Introduction to AI and machine learning - Python (numpy, pytorch, tensorflow)</li>
        </ul>
      </div>
      </div>      
      <Footer/>
    </div>
  )
}