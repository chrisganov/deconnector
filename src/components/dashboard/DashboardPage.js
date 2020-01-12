import './DashboardPage.scss';
import DashboardContent from './DashboardContent';
import DashboardInfo from './DashboardInfo';
import DashboardList from './DashboardList';
import React from 'react';


const DashboardPage = (props) => {
  
  return (
    <div className='dashboard-page-container'>
      <div className='dashboard-page-header'>
        <div />
      </div>

      <div className='dashboard-page-main'>
        <div className='dashboard-page-list'>
          <DashboardList />
        </div>
        
        <div className='dashboard-page-content'>
          <DashboardContent />
        </div>

        <div className='dashboard-page-info'>
          <DashboardInfo />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
