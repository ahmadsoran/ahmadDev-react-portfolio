import React from 'react'
import { useGetLikesQuery, useSendLikesMutation } from '../app/portfolioAPI'
import img1 from '../assets/img/earth.png'
export default function Header() {

    const [addLike] = useSendLikesMutation();
    const { data, refetch } = useGetLikesQuery();
    const like = {
        "like": "liked"
    }
    const addLikeHandler = async () => {
        localStorage.setItem('like', 'liked')
        await addLike(like)
        refetch();

    }
    const addDisLikeHandler = async () => {
        localStorage.setItem('like', 'liked')
        await addLike(like)
        refetch();
        alert('lol')

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
                                    <h1>thankyou</h1>
                                    {
                                        localStorage.getItem('like') === 'liked' ? '' : <div className="like-dislike-btn">
                                            <i className="far fa-thumbs-up" onClick={addLikeHandler}> yes</i> <i className="far fa-thumbs-down" onClick={addDisLikeHandler}> no</i>
                                        </div>


                                    }



                                    {
                                        localStorage.getItem('like') === 'liked' ? <p>you and  {
                                            data?.map((datas) => {
                                                return datas.like.length
                                            })
                                        } others liked</p> : <p>  {
                                            data?.map((datas) => {
                                                return datas.like.length
                                            })
                                        } liked</p>
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

