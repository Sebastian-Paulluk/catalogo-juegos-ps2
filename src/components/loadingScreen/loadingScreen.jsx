import React from 'react'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons';
import './loadingScreen.scss';


export const LoadingScreen =()=> {
  return (
    <div className='loading-screen'>
        <Spin className='spin' indicator={<LoadingOutlined style={{ fontSize: 70 }} tip="Loading" spin />} />
        <span className='loading-text'>Cargando...</span>
    </div>
  )
}
