import './loadingCard.scss';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

export const LoadingCard =()=>{

    return (
        <div className='loading-card'>
            <Spin className='spin' indicator={<LoadingOutlined style={{ fontSize: 40 }} tip="Loading" spin />} />
        </div>
    )
}