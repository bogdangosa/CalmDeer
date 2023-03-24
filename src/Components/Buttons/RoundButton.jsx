import './RoundButton.css';

function RoundButton({children,className}) {
  return <p className={'RoundButton '+className}> {children}</p>
}
export default RoundButton; 
