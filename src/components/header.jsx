import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetLikesQuery, useSendLikesMutation } from '../app/portfolioAPI'
import img1 from '../assets/img/earth.png'
import { setDidLike, setLikes } from '../featrues/likeSlice';
export default function Header() {

    const [addLike] = useSendLikesMutation();
    const { data, refetch } = useGetLikesQuery();
    const [hitlike, setHitlike] = useState(false);
    const dispatch = useDispatch()


    
    const addLikeHandler = async () => {
        dispatch(setDidLike())
        await addLike({like: 'liked'})
        refetch();
        
    }
    const addDisLikeHandler = async () => {
        dispatch(setDidLike())
        await addLike({like: 'liked'})
        refetch();
        alert('lol')

    }
    data?.map((datas) => {
        return dispatch(setLikes(datas.like.length))
    })
    const {likeNumber} = useSelector((state)=> state.likeSlice)
    const {didLiked} = useSelector((state)=> state.likeSlice)
    if (didLiked === 'liked') {
         setHitlike(true)
    }
   
    return (

        <>
            <main>
                <div id="section--2">
                    <div className="container ">
                        <div className="row">
                            <div className="col-sm-6 col-md-6 col-lg-6 s2">
                                <div className="myText">
                                    <h4>hey, iam</h4>
                                    <h1>ahmed soran majeed</h1>
                                    <h4>from <span>kurdistan</span> iraq , developing websites & apps</h4>
                                </div>
                                <div className="socialBtn">
                                    <i onClick={() => window.open("https://twitter.com/ahmadsorannn", "_blank")} className="fab fa-twitter"></i>
                                    <i onClick={() => window.open("https://github.com/ahmadsoran", "_blank")} className="fab fab fa-github"></i>
                                    <i onClick={() => window.open("https://www.facebook.com/ahmasoran", "_blank")} className="fab fa-facebook"></i>
                                </div>
                                <div className="portLike">
                                    <h1>did you like my portfolio?</h1>
                                    {

                                    }
                                    {!hitlike ? <>
                                     <div className="like-dislike-btn">
                                            <i className="far fa-thumbs-up" onClick={addLikeHandler}> yes</i> <i className="far fa-thumbs-down" onClick={addDisLikeHandler}> no</i>
                                        </div>     
                                         <p>you and  {likeNumber} others liked</p> 
                                        </>
                                         :  <><h1>thankyou</h1><p>you and  {likeNumber} others liked</p> </>  
                                    
                                }
                               </div>

                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-6 s2">
                                <div className="myImage">
                                    <img src={img1} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main >

        </>
    )
}

