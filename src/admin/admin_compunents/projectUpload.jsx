import React from 'react';
import { useState } from 'react';
import { useGetDashboardQuery, useProjectUploadMutation } from '../../app/portfolioAPI';
import Posts from '../../components/posts';
import '../admin.css';
import Navbar from '../../components/Navbar'
import Page404 from '../../components/Page404';

export default function ProjectUpload() {
  const { isError, data: dashData } = useGetDashboardQuery()
  const [Img, setImg] = useState();
  const [SelectedFile, setSelectedFile] = useState();
  const [inputInfo, setinputInfo] = useState({});
  const [uploaded, setUploaded] = useState(false);
  const [uploadProjectFunction, { isLoading, error, isSuccess }] = useProjectUploadMutation();

  if (isError) {
    return <Page404 />
  }
  const handleChangeImage = e => {
    const imgUrl = URL.createObjectURL(e.target.files[0])
    setImg(imgUrl)
    setUploaded(true)
    let name = e.target.name

    setSelectedFile((prvData) => ({ ...prvData, [name]: e.target.files[0] }))

  }
  const handelInput = (e) => {

    const name = e.target.name;
    const value = e.target.value;
    setinputInfo((prvData) => ({ ...prvData, [name]: value }))

  }
  const handleSubmmit = (e) => {
    e.preventDefault()
    const formData = new FormData();

    formData.append('projectImage', SelectedFile.projectImage)
    formData.append('headerText', inputInfo.headerText)
    formData.append('description', inputInfo.description)
    formData.append('projectUrl', inputInfo.projectUrl)


    uploadProjectFunction(formData)
  }
  if (dashData) {

    return <>
      <Navbar />
      <form onSubmit={handleSubmmit} encType="multipart/form-data">
        <div className="proj-up-form">
          <div className="row">

            <div className="col-sm-12">
              <label>
                <div className='custom-upload'>

                  <h1>upload your image</h1>

                  <input type="file" name="projectImage" accept="image/*" style={{ display: 'none' }} onChange={handleChangeImage} />

                </div>
              </label>
            </div>
            <div className="col-sm-6">

              <input type="text" name="headerText" onChange={handelInput} value={inputInfo.headerText || ''} placeholder='headerText' />
            </div>
            <div className="col-sm-6">
              <input type="text" name="projectUrl" onChange={handelInput} value={inputInfo.projectUrl || ''} placeholder='project url' />

            </div>
            <div className="col-sm-12">

              <textarea type="text" name="description" onChange={handelInput} value={inputInfo.description || ''} placeholder='description' />
            </div>
          </div>
          {error && error}
          {isSuccess && 'uploaded'}
          <button type="submit" style={{ cursor: 'pointer' }}>{isLoading ? 'loading...' : 'submit'}</button>
        </div>
      </form>
      {uploaded &&
        <div className="container">'
          <center>
            <h1 style={{ color: 'gray', fontSize: '2rem', margin: '1% 0' }}>preview</h1>
            <div className="col-sm-4">

              <Posts ImgSrc={Img} title={inputInfo.headerText} des={inputInfo.description} url={inputInfo.projectUrl} />
            </div>
          </center>
        </div>

      }
    </>;
  }
}
