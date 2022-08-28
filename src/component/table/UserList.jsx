import React from 'react'
import { Table, Tag, Space, Button } from 'antd';
import axios from 'axios';

function UserList() {
    const columns = [
        {
            title: 'Họ Tên',
            dataIndex: 'name',
            key: 'name',
            render: text => <a>{text}</a>,
         
        },
        {
            title: 'Tuổi',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Địa chỉ',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Số điện thoại',
            key: 'tags',
            dataIndex: 'phoneNumber',
            // render: tags => (
            //     <>
            //         {tags.map(tag => {
            //             let color = tag.length > 5 ? 'geekblue' : 'green';
            //             if (tag === 'loser') {
            //                 color = 'volcano';
            //             }
            //             return (
            //                 <Tag color={color} key={tag}>
            //                     {tag.toUpperCase()}
            //                 </Tag>
            //             );
            //         })}
            //     </>
            // ),
        },
        {
            title: 'Email',
            key: 'email',
            dataIndex: 'email',
            render: text => <a>{text}</a>,
            // render: (text, record) => (
            //     <Space size="middle">
            //         <a>Invite {record.name}</a>
            //         <a>Delete</a>
            //     </Space>
            // ),
        },
    ];
    const [dataSource, setDataSource] = React.useState()
    const [tableLoading, setTableLoading] = React.useState(false);
    React.useEffect(() => {
        setTableLoading(true)
        const url = 'https://6191e22341928b00176901a5.mockapi.io/userInfo'
        axios
            .get(url)
            .then((res) => {
                setDataSource(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
            setTableLoading(false)
    }, []);
    console.log(dataSource);

    const [selectedRowKeys, setSelectedRowKeys] = React.useState({
        selecteds: [],
        loading: false  
    });

    // function start() {
    //     setSelectedRowKeys({
    //         loading: true
    //     })
    //     // sau khi click button de reset sellect -> sau 1s no moi reload.
    //     setTimeout(() => {
    //         setSelectedRowKeys({
    //             selectedRowKeys: [],
    //             loading: false
    //         })
    //     }, 1000);
    // }
    // function onSelectedChange(selectedRowKeys) {
    //     console.log('selectedRowKey', selectedRowKeys.selected);
    //     setSelectedRowKeys({
    //         selectedRowKeys.selected
    //     })
    // }
    // const { selectedRowKey, loading } = selectedRowKeys;
    // const rowSelection = {
    //     setSelectedRowKeys,
    //     onChange: onSelectedChange,
    // };
    // const hasSellected = selectedRowKey.length > 0;

    let onSelectChange = (selected) => {
        console.log('selectedRowKeys changed: ',selected);
         setSelectedRowKeys({...selectedRowKeys, selecteds});
      };
      console.log(selectedRowKeys);
      const {selecteds, loading} = selectedRowKeys;
      console.log(selecteds)
      const rowSelection = {
        selecteds,
        onChange: onSelectChange
      }; 

    return ( 
    <>
        {/* <div style={{ marginBottom: 16 }}>
            <Button type='primary' >
                Reload
            </Button>
            <span style={{ marginLeft: 8 }}>
                {`hasSellected`}
            </span>
        </div> */}
        <Table rowSelection={rowSelection} columns={columns} dataSource={dataSource} pagination={true} loading={tableLoading} />
        </>
    );
}








export default UserList
