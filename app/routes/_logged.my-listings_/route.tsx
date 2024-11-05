import {
  Typography,
  Table,
  Space,
  Button,
  Modal,
  Form,
  Input,
  InputNumber,
  Select,
  message,
} from 'antd'
import { useState } from 'react'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function MyListingsPage() {
  const { user } = useUserContext()
  const navigate = useNavigate()
  const [isEditModalVisible, setIsEditModalVisible] = useState(false)
  const [editingListing, setEditingListing] = useState(null)
  const [form] = Form.useForm()

  const {
    data: listings,
    isLoading,
    refetch,
  } = Api.energyListing.findMany.useQuery({
    where: { userId: user?.id },
    include: { energyType: true },
  })

  const { mutateAsync: updateListing } = Api.energyListing.update.useMutation()
  const { mutateAsync: deleteListing } = Api.energyListing.delete.useMutation()

  const handleEdit = record => {
    setEditingListing(record)
    form.setFieldsValue({
      quantity: record.quantity,
      price: record.price,
      status: record.status,
    })
    setIsEditModalVisible(true)
  }

  const handleDelete = async id => {
    try {
      await deleteListing({ where: { id } })
      message.success('Listing deleted successfully')
      refetch()
    } catch (error) {
      message.error('Failed to delete listing')
    }
  }

  const handleEditSubmit = async values => {
    try {
      await updateListing({
        where: { id: editingListing.id },
        data: values,
      })
      message.success('Listing updated successfully')
      setIsEditModalVisible(false)
      refetch()
    } catch (error) {
      message.error('Failed to update listing')
    }
  }

  const columns = [
    {
      title: 'Energy Type',
      dataIndex: ['energyType', 'name'],
      key: 'energyType',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
      render: text => text?.toString(),
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: text => `$${text?.toFixed(2)}`,
    },
    {
      title: 'Listing Date',
      dataIndex: 'listingDate',
      key: 'listingDate',
      render: text => dayjs(text).format('YYYY-MM-DD'),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={() => handleEdit(record)}>
            <i className="las la-edit"></i> Edit
          </Button>
          <Button danger onClick={() => handleDelete(record.id)}>
            <i className="las la-trash"></i> Delete
          </Button>
        </Space>
      ),
    },
  ]

  return (
    <PageLayout layout="narrow">
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Title level={2}>My Energy Listings</Title>
        <Text>View and manage all your energy listings</Text>
      </div>

      <Button
        type="primary"
        onClick={() => navigate('/listings/create')}
        style={{ marginBottom: '1rem' }}
      >
        <i className="las la-plus"></i> Create New Listing
      </Button>

      <Table
        columns={columns}
        dataSource={listings}
        loading={isLoading}
        rowKey="id"
      />

      <Modal
        title="Edit Listing"
        visible={isEditModalVisible}
        onCancel={() => setIsEditModalVisible(false)}
        footer={null}
      >
        <Form form={form} onFinish={handleEditSubmit} layout="vertical">
          <Form.Item
            name="quantity"
            label="Quantity"
            rules={[{ required: true, message: 'Please input the quantity!' }]}
          >
            <InputNumber min={0} style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item
            name="price"
            label="Price"
            rules={[{ required: true, message: 'Please input the price!' }]}
          >
            <InputNumber min={0} step={0.01} style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item
            name="status"
            label="Status"
            rules={[{ required: true, message: 'Please select the status!' }]}
          >
            <Select>
              <Select.Option value="AVAILABLE">Available</Select.Option>
              <Select.Option value="SOLD">Sold</Select.Option>
              <Select.Option value="PENDING">Pending</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Update Listing
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </PageLayout>
  )
}
