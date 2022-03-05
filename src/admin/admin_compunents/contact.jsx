import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { ShimmerPostItem } from 'react-shimmer-effects';
import { useDeleteContactMutation, useGetContactByIdQuery, useGetContactQuery, useGetDashboardQuery } from '../../app/portfolioAPI'
import moment from 'moment'
export default function AdminContact() {
  const { isError } = useGetDashboardQuery();
  const { isLoading, data, refetch } = useGetContactQuery();
  const [ShowMsg, setShowMsg] = useState(false);
  const { id } = useParams();
  const goTo = useNavigate();
  const { data: dataById, } = useGetContactByIdQuery(id);
  const [deleteContactFunc] = useDeleteContactMutation()
  if (isError) {
    return window.location.href = '/dashboard';
  }
  if (isLoading) {

    return <ShimmerPostItem card title text cta />


  }
  const tableDataHandler = (e) => {
    goTo(`/dashboard/contact/${e.currentTarget.id}`)
    setShowMsg(true)

  }
  const deleteContact = async (e) => {
    e.preventDefault();
    goTo(`/dashboard/contact/${e.currentTarget.id}`)
    await deleteContactFunc(id)
    refetch();
  }

  if (data) {
    return (
      <>
        <div className="container parent-table-admin">
          <table className="admin-table">
            <thead>

              <tr>
                <th>name</th>
                <th>email</th>
                <th>phone</th>
                <th>date</th>
                <th>budget</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>

              {data && data.map((item) => (
                <tr id={item._id} key={item._id} onClick={tableDataHandler}>

                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{moment(item.date).format('l, h:mm a')}</td>
                  <td>{item.budget} IQD</td>
                  <td><button onClick={deleteContact} className="deleteBtn" type='submit'>delete</button></td>
                </tr>
              )).reverse()}

            </tbody>

          </table>
        </div>
        {dataById && dataById?.map((item, i) => (
          <div key={i || null} className={`message-admin-table ${ShowMsg ? 'show-meesage-table' : ''}`}>
            <div className="header">
              <h1>{item.name}</h1>
              <i className="fa fa-xmark" onClick={() => setShowMsg(false)}>close</i>
            </div>
            <p>{item.message}</p>
          </div>
        ))}


      </>
    )
  }
}
