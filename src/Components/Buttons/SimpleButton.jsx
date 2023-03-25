import './SimpleButton.css';

function SimpleButton({children,className,onClick}) {
  return (
    <div className={'SimpleButton '+className} onClick={()=>onClick()}> 
        <div>
            <span>{children}</span>
            <span>{children}</span>
        </div>
    </div>)
}
export default SimpleButton; 
