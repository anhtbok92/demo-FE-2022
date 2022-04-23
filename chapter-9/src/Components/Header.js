import {Col, Image, Input, Layout, Row} from 'antd';
import logo from '../logo.svg';
const { Header } = Layout;
const { Search } = Input;

const HeaderComponent = (props) => {
  return (
    <Header>
      <Row>
        <Col span={16}>
          <Image
            width={80}
            src={logo}
          />
        </Col>
        <Col span={8}>
          <Search
            placeholder="Tìm kiếm"
            allowClear
            enterButton
            size="large"
            onSearch={props.getKeywords}
            style={{ marginTop: '15px', width: 300 }}
          />
        </Col>
      </Row>
    </Header>
  )
}
export default HeaderComponent;