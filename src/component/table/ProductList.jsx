import React from 'react'
import { Table, Tag, Space } from 'antd'
import axios from 'axios'

function ProductList() {
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: 'Tên sản phẩm',
            dataIndex: 'name',
            key: 'name',
            filters: [
                {text: 'G', value: 'G' },
                {text: 'B', value: 'B' }
            ],
            onFilter:(value, record) => {
                return record.name === value
            }
        },
        {
            title: 'Giá sản phẩm',
            dataIndex: 'price',
            key: 'price',
            sorter:(item1, item2) => {
               return item1.price > item2.price
            }
            
        },
        {
            title: 'Tình trạng',
            dataIndex: 'status',
            key: 'status',
            render: (status) => (
                <>
                    {
                        status === true ? 'Còn hàng' : 'Hết hàng'
                    }
                </>
            ),
            
        },
    ]

    const [dataProduct, setDataProduct] = React.useState()
    React.useEffect(() => {
        const url = 'https://6191e22341928b00176901a5.mockapi.io/productList'
        axios
            .get(url)
            .then((res) => {
                console.log(res)
                setDataProduct(res.data)
            }).catch((err) => {
                console.log(err)
            })
    }, [])
    console.log(dataProduct)
    return (
        <div>
            <Table columns={columns} dataSource={dataProduct} />
        </div>
    )
}

export default ProductList
