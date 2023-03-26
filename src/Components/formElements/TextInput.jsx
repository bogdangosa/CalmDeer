import './TextInput.css';

function TextInput({placeholder,value,setValue, className}) {
  return <input className={'TextInput '+className} placeholder={placeholder} value={value} onChange={(e)=>setValue(e.target.value)}/>
}
export default TextInput; 
