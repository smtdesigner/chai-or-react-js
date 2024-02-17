import React from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import myMusic from '../../assets/myMusic.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import user_profile from '../../assets/user_profile.jpg'
import jack from '../../assets/jack.png'

const PlayVideo = () => {
  return (
    <div className='play-video'>
        <video src={video1} controls autoPlay muted ></video>
        <h3>Jack - Music Video and desin by sumit developer</h3>
        <div className="play-video-info">
            <p>1525 Views &bull; days ago</p>
            <div>
                <span><img src={like} alt="" />125</span>
                <span><img src={dislike} alt="" />2</span>
                <span><img src={share} alt="" />Share</span>
                <span><img src={save} alt="" />Save</span>
            </div>
        </div>

        <hr/>
        <div className="publisher">
            <img src={jack} alt="" />
            <div>
                <p>Smt motibational</p>
                <span>1M Subscribers</span>

            </div>
            <button>Subscribe</button>
        </div>

        <div className="vid-description">
            <p>This chanal to west learning coding</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto distinctio reicie</p>
            <hr />
            <h4>130 Comments</h4>
            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Smt motorola <span>1 day ago</span></h3>
                    <p>amet consectetur adipisicing elit. Repellat rerum non placeat! Reiciendis ipsa maxime deserunt sint, earum ducimus! Alias ea laudantium nulla explicabo eius ullam error. Quod, dolorem ad?</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Smt motorola <span>1 day ago</span></h3>
                    <p>amet consectetur adipisicing elit. Repellat rerum non placeat! Reiciendis ipsa maxime deserunt sint, earum ducimus! Alias ea laudantium nulla explicabo eius ullam error. Quod, dolorem ad?</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img className='dislike' src={dislike} alt="" />
                    </div>
                </div>
            </div>
            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Smt motorola <span>1 day ago</span></h3>
                    <p>amet consectetur adipisicing elit. Repellat rerum non placeat! Reiciendis ipsa maxime deserunt sint, earum ducimus! Alias ea laudantium nulla explicabo eius ullam error. Quod, dolorem ad?</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Smt motorola <span>1 day ago</span></h3>
                    <p>amet consectetur adipisicing elit. Repellat rerum non placeat! Reiciendis ipsa maxime deserunt sint, earum ducimus! Alias ea laudantium nulla explicabo eius ullam error. Quod, dolorem ad?</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
        </div>


    </div>
  )
}

export default PlayVideo