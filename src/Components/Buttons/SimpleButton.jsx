import './SimpleButton.css';

function SimpleButton({children,className}) {
  return (
    <div className={'SimpleButton '+className}> 
        <div>
            <span>{children}</span>
            <span>{children}</span>
        </div>
    </div>)
}
export default SimpleButton; 
