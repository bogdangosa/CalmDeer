import './SimpleButton2.css';

function SimpleButton2({children,className,onClick}) {
  return (
    <div className={'SimpleButton2 '+className} onClick={()=>onClick()}> 
            <p>{children}</p>
    </div>)
}
export default SimpleButton2; 
