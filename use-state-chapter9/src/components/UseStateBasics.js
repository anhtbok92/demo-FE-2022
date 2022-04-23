import React, { useState } from 'react';
import { Button, Typography, Space } from 'antd';

const { Text } = Typography;
const UseStateBasics = () => {
    const [text, setText] = useState('Hello World');
    const handleClick = () => {
        if (text === 'Hello World') {
            setText('Hello WebFullStack')
        } else {
            setText('Hello World');
        }
    }

    return (
        <Space direction={'vertical'}>
          <h1><Text type="success">{text}</Text></h1>
          <Button type="primary" size={'large'} onClick={handleClick}>
            Change Title
          </Button>
        </Space>
    )
}

export default UseStateBasics