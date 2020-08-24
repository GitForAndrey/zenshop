import React from 'react';
import { Alert } from 'antd';

const AlertBlock = ({ alert }) => {
  return <Alert message={alert.text} type={alert.type} showIcon />;
};

export default AlertBlock;
