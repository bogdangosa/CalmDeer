import './TextInput.css';

function TextInput({placeholder,type,name,value,setValue, className}) {
  return (
    <div className='TextInputContainer'>
      <input className={'TextInput '+className} type={type} name={name} placeholder={placeholder} value={value} onChange={(e)=>setValue(e.target.value)}/>
    </div>)
}
export default TextInput; 
