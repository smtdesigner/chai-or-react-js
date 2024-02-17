import './Background.css'
import video1 from '../../assets/video1.mp4'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
function Background({playStatus,heroCount}) => {
  if (playStatus) {
    return(
        <video className='background' autoPlay loop muted> 
        <source src={video1}/></video>
    )
  }
}

export default Background