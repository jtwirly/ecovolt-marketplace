import React from 'react'
import { Typography, Table, Tag, Space } from 'antd'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function TransactionsPage() {
  const { user } = useUserContext()
  const { data: transactions, isLoading } = Api.transaction.findMany.useQuery({
    where: {
      OR: [{ buyerId: user?.id }, { sellerId: user?.id }],
    },
    include: {
      buyer: true,
      seller: true,
      energyListing: {
        include: {
          energyType: true,
        },
      },
    },
  })

  const columns = [
    {
      title: 'Date',
      dataIndex: 'transactionDate',
      key: 'transactionDate',
      render: (date: string) => dayjs(date).format('YYYY-MM-DD HH:mm'),
    },
    {
      title: 'Type',
      key: 'type',
      render: (_: any, record: any) => (
        <Tag color={record.buyerId === user?.id ? 'green' : 'blue'}>
          {record.buyerId === user?.id ? 'Purchase' : 'Sale'}
        </Tag>
      ),
    },
    {
      title: 'Energy Type',
      dataIndex: ['energyListing', 'energyType', 'name'],
      key: 'energyType',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
      render: (quantity: number) => quantity.toString(),
    },
    {
      title: 'Total Price',
      dataIndex: 'totalPrice',
      key: 'totalPrice',
      render: (price: number) => `$${price.toFixed(2)}`,
    },
    {
      title: 'Status',
      key: 'status',
      render: (_: any, record: any) => (
        <Tag
          color={
            record.energyListing.status === 'COMPLETED' ? 'green' : 'orange'
          }
        >
          {record.energyListing.status}
        </Tag>
      ),
    },
    {
      title: 'Other Party',
      key: 'otherParty',
      render: (_: any, record: any) => (
        <span>
          {record.buyerId === user?.id ? record.seller.name : record.buyer.name}
        </span>
      ),
    },
  ]

  return (
    <PageLayout layout="narrow">
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <div>
          <Title level={2}>
            <i className="las la-history"></i> Transaction History
          </Title>
          <Paragraph>
            View your energy trading activities, including purchases and sales.
            Monitor the progress of ongoing transactions.
          </Paragraph>
        </div>
        <Table
          columns={columns}
          dataSource={transactions}
          rowKey="id"
          loading={isLoading}
          pagination={{ pageSize: 10 }}
          scroll={{ x: 'max-content' }}
        />
      </Space>
    </PageLayout>
  )
}
