import React from 'react'
import { Button, Input, Modal, Table } from 'antd'
import { DeleteOutlined, EditOutlined, UserAddOutlined } from '@ant-design/icons'

function CRUDTable() {
    const [isEditing, setIsEditing] = React.useState(false);
    const [editingStudent, setEditingStudent] = React.useState(null);
    const [dataSource, setDataSource] = React.useState([
        {
            id: 1,
            name: 'ksbdkasbd',
            age: 17,
            address: 'skdaskjdb'
        },
        {
            id: 2,
            name: 'thanh',
            age: 28,
            address: 'ưewqrewr'
        }, {
            id: 3,
            name: 'eoweuorewrw',
            age: 40,
            address: 'eowriuwoe'
        },
        {
            id: 4,
            name: 'czxvxzvz',
            age: 25,
            address: 'vzxvbczxc'
        },
    ])
    const columns = [
        {
            key: 1,
            title: 'ID',
            dataIndex: 'id'
        },
        {
            key: 2,
            title: 'Name',
            dataIndex: 'name'
        },
        {
            key: 3,
            title: 'Age',
            dataIndex: 'age'
        },
        {
            key: 4,
            title: 'Adress',
            dataIndex: 'address'
        },
        {
            key: 5,
            title: 'Action',
            render: (record) => {
                return (
                    <>
                        <div style={{ display: 'flex', flex: 1 }}>
                            {/* <UserAddOutlined onClick={handleAdd} style={{ color: 'green', padding: 10 }} /> */}
                            <EditOutlined style={{ color: 'darkblue', padding: 10 }}
                                onClick={() => { handleEdit(record) }}
                            />
                            <DeleteOutlined
                                onClick={() => { handleDelete(record) }}
                                style={{ color: 'red', padding: 10 }}
                            />
                        </div>
                    </>
                )
            }
        },
    ];

    const handleAdd = () => {
        const ramdomNumber = parseInt(Math.random() * 1000)
        const newStudents = {
            id: ramdomNumber,
            name: 'czxvxzvz',
            age: 25,
            address: 'vzxvbczxc'
        }
        setDataSource(pre => {
            return [...pre, newStudents]  // thêm phần tử vào mảng. (Bảng).
        });
    }
    const handleDelete = (record) => {
        console.log(record)
        Modal.confirm({
            title: 'bạn có chắc chắn muốn xóa?',
            cancelText: 'Hủy',
            okType: 'danger',
            onOk: () => {
                setDataSource((pre) => {
                    return pre.filter(student => student.id !== record.id); //nếu khác id state khác id record thì update state.
                });
            }
        })
    };
    const handleEdit = (record) => {
        setIsEditing(true)
        setEditingStudent({ ...record })
        console.log({ ...record })
    }
    const resetEditing = () => {
        setIsEditing(false)
        setEditingStudent(null)
    }
    return (
        <div >
            <Button onClick={handleAdd}
                style={{ textAlign: 'left', borderRadius: 5, marginBottom: 10 }}
            >Thêm người dùng</Button>
            <Table dataSource={dataSource} columns={columns} />
            <Modal
                title='Chỉnh sửa thông tin'
                okText='Lưu'
                cancelText='Hủy'
                visible={isEditing}
                onCancel={() => {
                    setIsEditing(false);
                    resetEditing();
                }}
                onOk={() => {
                    setDataSource((pre) => {
                        return pre.map((student) => {
                            if (student.id === editingStudent.id) {
                                console.log(editingStudent);
                                return editingStudent;
                            } else
                                return student
                        })
                    })
                    resetEditing();
                }}

            >
                <Input
                    value={editingStudent?.name}
                    onChange={(e) => {
                        setEditingStudent(pre => {
                            return { ...pre, name: e.target.value }
                        });
                    }}
                />
                <Input
                    value={editingStudent?.age}
                    onChange={(e) => {
                        setEditingStudent(pre => {
                            return { ...pre, age: e.target.value }
                        })
                    }}
                />
                <Input
                    value={editingStudent?.address}
                    onChange={(e) => {
                        setEditingStudent(pre => {
                            return { ...pre, address: e.target.value }
                        })
                    }}
                />
            </Modal>
        </div >
    )
}

export default CRUDTable
