import React from 'react';

import Monitor from '../../components/Monitor'
import Header from '../../components/Header'
import Tips from '../../components/Tips'

function Dashboard() {
  return (
    <>
    <div id="opacity"></div>
    <Header/>
    <Monitor/>
    <Tips/>
    </>
  );
}

export default Dashboard;