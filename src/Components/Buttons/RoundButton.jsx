import './RoundButton.css';

function RoundButton({children,className,onClick}) {
  return <p className={'RoundButton '+className} onClick={()=>onClick()}> {children}</p>
}
export default RoundButton; 
