import React from 'react'
import { Space, Spin } from 'antd'

export default function Loader() {
  return (
    <div className="loader">
      <p>Please wait...</p>
      <Space size="middle">
        <Spin size="large" />
      </Space>
    </div>
  );
}
