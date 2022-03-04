import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetDashboardQuery } from '../app/portfolioAPI';
import Page404 from '../components/Page404';
import { removeToken } from '../featrues/tokenSlice';
import DashboardCard from './admin_compunents/DashboardCard';

export default function Dashboard() {
  const { isError, data } = useGetDashboardQuery()
  const dispatch = useDispatch()
  const token = useSelector(state => state.tokenSlice.token);
  if (isError) {
    if (token) {
      dispatch(removeToken('token'))
    }
    return <Page404 />
  }

  return <>
    {data &&
      <div className="containerDash">

        <div className="row">
          <DashboardCard description={'upload your project from here'} title={'projects'} navigatePath={'projectsUpload'} />
          <DashboardCard description={'see who contact you'} title={'contacts'} navigatePath={'contact'} />
          <DashboardCard description={'upload your project from here'} title={'projects'} navigatePath={'projectsUpload'} />
        </div>
      </div>
    }
  </>;
}
