import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from '../../components/sidebar/Sidebar';
import "./home.scss";
import Navbar from '../../components/navbar/Navbar';
import Widget from '../../components/widget/Widget';
import Featured from '../../components/featured/Featured';
import Chart from '../../components/chart/Chart';
import Table from '../../components/table/Table';

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className='homeContainer'>
        <Navbar />
        <div className='widget'>
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className='charts'>
          <Featured />
          <Chart />
        </div>
        <div className='listContainer'>
          <div className='listTitle'>
            Latest Transaction
          </div>
          <Table />
        </div>
      </div>
    </div>
  )
}

export default Home
