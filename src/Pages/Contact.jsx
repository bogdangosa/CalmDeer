import { useState } from 'react';
import SimpleButton from '../Components/Buttons/SimpleButton';
import SimpleButton2 from '../Components/Buttons/SimpleButton2';
import TextInput from '../Components/formElements/TextInput';
import './Contact.css';

function Contact() {
    const [Name,setName] = useState("");
    const [Email,setEmail] = useState("");
    const [Title,setTitle] = useState("");
    const [Message,setMessage] = useState("");

  return (
    <div className='Contact'>
        <h1 className='contact-title'>Talk to Us</h1>
        <p className='contact-description'>Fusce mattis finibus urna, eu dictum enim porttitor sed. Donec egestas eget quam eu ullamcorper. Praesent turpis libero, vestibulum ut faucibus nec, finibus sed quam. Fusce rutrum velit augue, eget placerat purus maximus eu.</p>
        <div className='contact-form'>
            <div className='contact-form-sameline'>
                <TextInput placeholder="Your Name" value={Name} setValue={(name)=>setName(name)}/>
                <TextInput placeholder="Your Email" value={Email} setValue={(email)=>setEmail(email)}/>
            </div>
            <TextInput placeholder="Title" value={Title} setValue={(name)=>setTitle(name)}/>
            <TextInput placeholder="Your Message" value={Message} setValue={(message)=>setMessage(message)}/>

            <SimpleButton2>Send</SimpleButton2>
        </div>
    
    </div>
  )
}

export default Contact; 
