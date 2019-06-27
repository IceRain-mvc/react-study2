import React, {Component} from 'react';
import {
    Button, Divider,
    Dropdown,
    Icon,
    Menu, Modal, Table
} from "antd";

let dataSource = [
    {
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
    },
    {
        key: '2',
        name: '蔡徐彪',
        age: 18,
        address: '北京市海淀区',
    },
    {
        key: '3',
        name: '王嘉尔',
        age: 42,
        address: '西湖区湖底公园1号',
    },
    {
        key: '4',
        name: '高淼',
        age: 21,
        address: '北京市朝阳区',
    },
];
window.dataSource = dataSource;

let columns = [
    {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
    },
    {
        key: "action",
        title: "操作",

        render: (text, record) => {
            return <div>
                <span onClick={() => {
                    console.log(record);
                    dataSource.splice(parseFloat(record.key - 1), 1);
                    that.setState({});
                }
                }>删除</span>
                <Divider type="vertical"/>
                <span >修改</span>

            </div>


        }
    }
];


const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                1st menu item
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                2nd menu item
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                3rd menu item
            </a>
        </Menu.Item>
    </Menu>


);

let that = null;
class Home extends Component {
    constructor(props) {
        super(props);
        that = this;
    }

    state = {
        visible: false

    };

    render() {
        return (
            <div>
                <Button type="danger" onClick={() => {
                    this.setState({
                        visible: true
                    })
                }}>按钮</Button>
                <Button type="primary">按钮</Button>
                <Button type="dashed" disabled>按钮</Button>
                <Icon type="team" style={{fontSize: "20px", color: "red"}}/>

                <Dropdown overlay={menu}>
                    <span className="ant-dropdown-link" >
                        Hover me <Icon type="down"/>
                    </span>
                </Dropdown>

                <Modal
                    title="标题"
                    visible={this.state.visible}
                    onOk={() => {
                        this.setState({
                            visible: false
                        })
                    }}
                    onCancel={() => {
                        this.setState({
                            visible: false
                        })
                    }}
                >

                    <h1>弹弹弹</h1>
                </Modal>

                <Table dataSource={dataSource} columns={columns}/>
            </div>
        );
    }
}

export default Home;
