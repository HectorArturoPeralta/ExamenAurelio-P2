import React from 'react';
import BarChart from './Charts/BarChart';
import DoughnutChart from './Charts/DoughnutChart';
import LineChart from './Charts/LineChart';
import { AuctionBody } from './components/auctions/Body';
import { NavComp } from './components/authentication/NavComp';
import { AuthProvider } from './context/AuthContext';

export const App = () => {
  return (
    <AuthProvider>
      <div className="App">
        <NavComp />
        <AuctionBody />
        <BarChart />
        <DoughnutChart />
        <LineChart />
      </div>
    </AuthProvider>
  );
};




