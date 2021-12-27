import { Link } from 'react-router-dom'
import { Table } from 'antd'
import Filter from './Filter'
import styles from './index.module.less'

const dataSource = []
for (var i = 0; i < 20; i++) {
  dataSource.push({
    key: `${i}`,
    id: i,
    name: '胡彦斌',
    age: i,
    address: '西湖区湖底公园1号',
  })
}

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    render: (text, record) => {
      return <Link to={`detail/${record.id}`}>{text}</Link>
    }
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
];


export default () => {
  return (
    <div className={styles.container}>
      <Filter />
      <div className={styles.table_wrap}>
        <Table dataSource={dataSource} columns={columns} />
      </div>

    </div>
  )
}