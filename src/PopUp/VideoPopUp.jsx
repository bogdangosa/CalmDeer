import './VideoPopUp.css';

function VideoPopUp({video,className,close}) {
  return (
    <div className='background-blur'>
        <div  className={'VideoPopUpContainer '+className}>
            <video autoPlay loop muted className='popup_video_el'>
                <source src={video} type="video/mp4" loop muted></source>
            </video>
            <img className='popup_close_icon' src='/icon_close.svg' alt='error' onClick={()=>close()}/>
        </div>
    </div>
  )
}
export default VideoPopUp; 
