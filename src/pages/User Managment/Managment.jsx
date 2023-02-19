import React from "react";
import './Managment.css';
import { Col, Row,Button,   Table, Input } from "antd";
import { SearchOutlined,EditTwoTone  } from '@ant-design/icons';

const columns = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Class",
    dataIndex: "class",
    key: "class",
  },
  {
    title: "Subject",
    key: "subject",
    dataIndex: "subject",
  },
  {
    title: "Action",
    key: "action",
    dataIndex: "action",
  },
];

const data = [
  {
    id: "1",
    name: "Abdul Rafay",
    age: 18,
    class: "matric",
    subject: "Math",
    action: <EditTwoTone style={{
      fontSize:20
    }}/>,
  },
  {
    id: "2",
    name: "Muhammad Amaan",
    age: 22,
    class: "Inter",
    subject: "Chemistry",
    action:<EditTwoTone style={{
      fontSize:20
    }}/>,
  },
  {
    id: "3",
    name: "Abdul Samad",
    age: 14,
    class: "Eight",
    subject: "English",
    action: <EditTwoTone style={{
      fontSize:20
    }} /> ,
  },
];

const Managment = () => {
  return (
    <>
    <Row className="Managment_Main_Row" style={{
       margin:70
    }}>
    <Col lg={24}>
    <Row style={{
        // marginBottom:-30,
        
        marginRight:70,
        marginLeft:70,
        marginTop:30
    }}>

        <Col lg={5}>
       <h2>User Managment</h2>
        </Col> 
        <Col lg={12}>
        <Input placeholder="Search" className="changing_size" prefix={<SearchOutlined style={{color:'gainsboro',textIndent:5}}/>}/>
        </Col> 
        <Col lg={3}>
      
        </Col>
        <Col lg={4}>
        <Button block>Add Row</Button>
        </Col>
       
    </Row>
    </Col>
    <Col lg={24}>
     
    <Row>
        <Col lg={24}>
        <Table
      columns={columns}
      dataSource={data}
      style={{ marginTop: 50 ,}}
      size="large"
    />
        </Col>
       </Row>
       </Col>
       </Row>
    </>
  );
};
export default Managment;
