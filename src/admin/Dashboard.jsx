import React from 'react';
import { useGetDashboardQuery } from '../app/portfolioAPI';
import Page404 from '../components/Page404';
import DashboardCard from './admin_compunents/DashboardCard';

export default function Dashboard() {
  const { isError, data } = useGetDashboardQuery()
  if (isError) {
    return <Page404 />
  }

  return <>
    {data &&
      <div className="containerDash">

        <div className="row">
          <DashboardCard description={'upload your project from here'} title={'projects'} navigatePath={'projectsUpload'} />
          <DashboardCard description={'upload your project from here'} title={'projects'} navigatePath={'projectsUpload'} />
          <DashboardCard description={'upload your project from here'} title={'projects'} navigatePath={'projectsUpload'} />
        </div>
      </div>
    }
  </>;
}
