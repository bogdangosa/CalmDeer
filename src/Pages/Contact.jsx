import { useRef, useState } from 'react';
import SimpleButton from '../Components/Buttons/SimpleButton';
import SimpleButton2 from '../Components/Buttons/SimpleButton2';
import TextInput from '../Components/formElements/TextInput';
import emailjs from '@emailjs/browser';
import './Contact.css';
import ScrollToTop from '../Components/Auxiliary/ScrolltoTop';

function Contact() {
  const form_ref = useRef()

    const [Name,setName] = useState("");
    const [Email,setEmail] = useState("");
    const [Title,setTitle] = useState("");
    const [Message,setMessage] = useState("");
    const [SuccesText,setSuccesText] = useState(false);
    const [ErrorText,setErrorText] = useState(false);


    const sendEmail = () => {
      console.log(form_ref.current);
      if(Name==""||Email==""||Title==""||Message==""){
        setErrorText(true);
        setSuccesText(false);
        return;
      }
        

  
      emailjs.sendForm('service_epk99w5', 'template_miw9xey', form_ref.current, 'kjZmu4x22_ToT2D8c')
        .then((result) => {
            console.log(result.text);
            setSuccesText(true);        
            setErrorText(false);
        }, (error) => {
            setErrorText(true);
            setSuccesText(false);
            console.log(error.text);
        });
    };

  return (
    <div className='Contact'>
        <ScrollToTop/>
        <h1 className='contact-title'>Work with Us</h1>
        <p className='contact-description'>Fusce mattis finibus urna, eu dictum enim porttitor sed. Donec egestas eget quam eu ullamcorper. Praesent turpis libero, vestibulum ut faucibus nec, finibus sed quam. Fusce rutrum velit augue, eget placerat purus maximus eu.</p>
        <form ref={form_ref} className='contact-form' onSubmit={sendEmail}>
            <div className='contact-form-sameline'>
                <TextInput name="user_name" type="text" placeholder="Your Name" value={Name} setValue={(name)=>setName(name)}/>
                <TextInput name="user_email" type="email" placeholder="Your Email" value={Email} setValue={(email)=>setEmail(email)}/>
            </div>
            <TextInput name="title"  type="text" placeholder="Title" value={Title} setValue={(name)=>setTitle(name)}/>
            <TextInput name="message" type="text" placeholder="Your Message" value={Message} setValue={(message)=>setMessage(message)}/>
            <div className='contact-form-container'>
              <SimpleButton className="black-btn" onClick={()=>sendEmail()}>Send</SimpleButton>
              {SuccesText?<p className='succes-text'>Your email was sent succesfully!</p>:<></>}
              {ErrorText?<p className='error-text'>Please fill all the fields before submiting!</p>:<></>}
            </div>
        </form>
        <div className='contact-social-container'>
          <h2 className='contact-subtitle'>Find us Here</h2>
          <div className='contact-social-links-container'>
            <svg className='contact-social-link' width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M33.2003 11.64C31.8332 10.0792 31.0797 8.07486 31.0803 6H24.9003V30.8C24.8526 32.142 24.2861 33.4132 23.3198 34.3459C22.3536 35.2785 21.0632 35.7998 19.7203 35.8C16.8803 35.8 14.5203 33.48 14.5203 30.6C14.5203 27.16 17.8403 24.58 21.2603 25.64V19.32C14.3603 18.4 8.32031 23.76 8.32031 30.6C8.32031 37.26 13.8403 42 19.7003 42C25.9803 42 31.0803 36.9 31.0803 30.6V18.02C33.5863 19.8197 36.595 20.7853 39.6803 20.78V14.6C39.6803 14.6 35.9203 14.78 33.2003 11.64Z" fill="#222"/></svg>
            <svg className='contact-social-link' width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.8809 10C13.8803 11.0609 13.4584 12.0781 12.7079 12.8279C11.9574 13.5777 10.9397 13.9986 9.87886 13.998C8.81799 13.9975 7.80079 13.5756 7.05102 12.8251C6.30125 12.0745 5.88033 11.0569 5.88086 9.99605C5.88139 8.93518 6.30333 7.91798 7.05385 7.16821C7.80437 6.41844 8.82199 5.99752 9.88286 5.99805C10.9437 5.99858 11.9609 6.42051 12.7107 7.17103C13.4605 7.92155 13.8814 8.93918 13.8809 10ZM14.0009 16.96H6.00086V42H14.0009V16.96ZM26.6409 16.96H18.6809V42H26.5609V28.86C26.5609 21.54 36.1009 20.86 36.1009 28.86V42H44.0009V26.14C44.0009 13.8 29.8809 14.26 26.5609 20.32L26.6409 16.96Z" fill="#222"/></svg>
            <svg className='contact-social-link' width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M44.9201 12C43.3801 12.7 41.7201 13.16 40.0001 13.38C41.7601 12.32 43.1201 10.64 43.7601 8.62C42.1001 9.62 40.2601 10.32 38.3201 10.72C36.7401 9 34.5201 8 32.0001 8C27.3001 8 23.4601 11.84 23.4601 16.58C23.4601 17.26 23.5401 17.92 23.6801 18.54C16.5601 18.18 10.2201 14.76 6.00008 9.58C5.26008 10.84 4.84008 12.32 4.84008 13.88C4.84008 16.86 6.34008 19.5 8.66008 21C7.24008 21 5.92008 20.6 4.76008 20V20.06C4.76008 24.22 7.72008 27.7 11.6401 28.48C10.3815 28.8244 9.06027 28.8723 7.78008 28.62C8.32329 30.325 9.38715 31.8168 10.8221 32.8859C12.2571 33.9549 13.991 34.5474 15.7801 34.58C12.7473 36.9809 8.98807 38.2786 5.12008 38.26C4.44008 38.26 3.76008 38.22 3.08008 38.14C6.88008 40.58 11.4001 42 16.2401 42C32.0001 42 40.6601 28.92 40.6601 17.58C40.6601 17.2 40.6601 16.84 40.6401 16.46C42.3201 15.26 43.7601 13.74 44.9201 12Z" fill="#222"/></svg>
            <svg className='contact-social-link' width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M38.5402 10.6601C35.8802 9.42009 33.0002 8.52009 30.0002 8.00009C29.9739 7.99925 29.9478 8.00419 29.9236 8.01455C29.8994 8.02492 29.8778 8.04047 29.8602 8.06009C29.5002 8.72009 29.0802 9.58009 28.8002 10.2401C25.6182 9.76009 22.3822 9.76009 19.2002 10.2401C18.9202 9.56009 18.5002 8.72009 18.1202 8.06009C18.1002 8.02009 18.0402 8.00009 17.9802 8.00009C14.9802 8.52009 12.1202 9.42009 9.44023 10.6601C9.42023 10.6601 9.40023 10.6801 9.38023 10.7001C3.94023 18.8401 2.44023 26.7601 3.18023 34.6001C3.18023 34.6401 3.20023 34.6801 3.24023 34.7001C6.84023 37.3401 10.3002 38.9401 13.7202 40.0001C13.7802 40.0201 13.8402 40.0001 13.8602 39.9601C14.6602 38.8601 15.3802 37.7001 16.0002 36.4801C16.0402 36.4001 16.0002 36.3201 15.9202 36.3001C14.7802 35.8601 13.7002 35.3401 12.6402 34.7401C12.5602 34.7001 12.5602 34.5801 12.6202 34.5201C12.8402 34.3601 13.0602 34.1801 13.2802 34.0201C13.3202 33.9801 13.3802 33.9801 13.4202 34.0001C20.3002 37.1401 27.7202 37.1401 34.5202 34.0001C34.5602 33.9801 34.6202 33.9801 34.6602 34.0201C34.8802 34.2001 35.1002 34.3601 35.3202 34.5401C35.4002 34.6001 35.4002 34.7201 35.3002 34.7601C34.2602 35.3801 33.1602 35.8801 32.0202 36.3201C31.9402 36.3401 31.9202 36.4401 31.9402 36.5001C32.5802 37.7201 33.3002 38.8801 34.0802 39.9801C34.1402 40.0001 34.2002 40.0201 34.2602 40.0001C37.7002 38.9401 41.1602 37.3401 44.7602 34.7001C44.8002 34.6801 44.8202 34.6401 44.8202 34.6001C45.7002 25.5401 43.3602 17.6801 38.6202 10.7001C38.6002 10.6801 38.5802 10.6601 38.5402 10.6601ZM17.0402 29.8201C14.9802 29.8201 13.2602 27.9201 13.2602 25.5801C13.2602 23.2401 14.9402 21.3401 17.0402 21.3401C19.1602 21.3401 20.8402 23.2601 20.8202 25.5801C20.8202 27.9201 19.1402 29.8201 17.0402 29.8201ZM30.9802 29.8201C28.9202 29.8201 27.2002 27.9201 27.2002 25.5801C27.2002 23.2401 28.8802 21.3401 30.9802 21.3401C33.1002 21.3401 34.7802 23.2601 34.7602 25.5801C34.7602 27.9201 33.1002 29.8201 30.9802 29.8201Z" fill="#222"/></svg>
            <svg className='contact-social-link' width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 4C12.96 4 4 12.96 4 24C4 35.04 12.96 44 24 44C35.04 44 44 35.04 44 24C44 12.96 35.04 4 24 4ZM33.28 17.6C32.98 20.76 31.68 28.44 31.02 31.98C30.74 33.48 30.18 33.98 29.66 34.04C28.5 34.14 27.62 33.28 26.5 32.54C24.74 31.38 23.74 30.66 22.04 29.54C20.06 28.24 21.34 27.52 22.48 26.36C22.78 26.06 27.9 21.4 28 20.98C28.0139 20.9164 28.012 20.8503 27.9946 20.7876C27.9772 20.7249 27.9447 20.6673 27.9 20.62C27.78 20.52 27.62 20.56 27.48 20.58C27.3 20.62 24.5 22.48 19.04 26.16C18.24 26.7 17.52 26.98 16.88 26.96C16.16 26.94 14.8 26.56 13.78 26.22C12.52 25.82 11.54 25.6 11.62 24.9C11.66 24.54 12.16 24.18 13.1 23.8C18.94 21.26 22.82 19.58 24.76 18.78C30.32 16.46 31.46 16.06 32.22 16.06C32.38 16.06 32.76 16.1 33 16.3C33.2 16.46 33.26 16.68 33.28 16.84C33.26 16.96 33.3 17.32 33.28 17.6Z" fill="#222"/></svg>
          </div>
        </div>
    
    </div>
  )
}

export default Contact; 
