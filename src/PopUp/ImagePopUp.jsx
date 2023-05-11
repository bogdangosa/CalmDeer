import './ImagePopUp.css';

function ImagePopUp({image,className,close}) {
  return (
    <div className='background-blur'>
        <div  className={'ImagePopUpContainer '+className}>
            <img className='popup_image_el' src={image} alt='error'/>
            <img className='popup_close_icon' src='/icon_close.svg' alt='error' onClick={()=>close()}/>
        </div>
    </div>
  )
}
export default ImagePopUp; 
