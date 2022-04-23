import React, { useState } from 'react';
import { data } from '../people'
import { List, Avatar, Button, Row, Col, notification, Popconfirm, message } from 'antd';
import { DeleteOutlined, MailOutlined, WomanOutlined, GlobalOutlined } from '@ant-design/icons';

const UseStateArray = () => {
    const [people, setPeople] = useState(data);
    const removePeople = (id) => {
      const newPeople = people.filter((person) => parseInt(person.id) !== parseInt(id));
      setPeople(newPeople);
      notification['success']({
        message: 'Đã xoá thành viên thành công !',
        duration: 3
      });
    }

    const confirm = () => {
      setPeople([]);
      message.success('Đã xoá tất cả thành viên thành công');
    }

    const cancel = () => {
      console.log('click cancel');
    }

    return (
      <>
        <Row style={{ textAlign: 'center', marginTop: '20px' }}>
          <Col span={16} >
            <h2 style={{ float: 'left', marginLeft: 15 }}>Tổng số thành viên {people.length}</h2>
          </Col>
          <Col span={8}>
            <Popconfirm
              title="Bạn có chắc chắn xoá toàn bộ thành viên không?"
              onConfirm={confirm}
              onCancel={cancel}
              okText="Yes"
              cancelText="No"
            >
              {/*<a href="#">Delete</a>*/}
              <Button style={{ float: 'right', marginRight: 15 }} type="primary" size={'middle'}>
                Xoá toàn bộ
              </Button>
            </Popconfirm>
          </Col>
        </Row>
        <div
          id="scrollableDiv"
          style={{
            height: 800,
            overflow: 'auto',
            padding: '0 16px',
            border: '1px solid rgba(140, 140, 140, 0.35)',
          }}
        >
          <List
            dataSource={people}
            renderItem={item => (
              <List.Item key={item.id} style={{ textAlign: 'left' }}>
                <List.Item.Meta
                  avatar={<Avatar src={item.avatar} />}
                  title={<a href="https://ant.design">{`${item.first_name} ${item.last_name}`}</a>}
                  description={<div>
                    <Row>
                      <Col><MailOutlined /></Col>
                      <Col style={{ marginLeft: 10 }}>{item.email}</Col>
                    </Row>
                    <Row>
                      <Col><WomanOutlined /></Col>
                      <Col style={{ marginLeft: 10 }}>{item.gender}</Col>
                    </Row>
                    <Row>
                      <Col><GlobalOutlined /></Col>
                      <Col style={{ marginLeft: 10 }}>{item.address}</Col>
                    </Row>
                  </div>}
                />
                <DeleteOutlined onClick={() => removePeople(item.id)} />
              </List.Item>
            )}
          />
        </div>
      </>
    )
}
export default UseStateArray;