import React, { useState } from 'react'
import {
  Typography,
  Form,
  Input,
  InputNumber,
  Select,
  DatePicker,
  Button,
  message,
} from 'antd'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function CreateListingPage() {
  const { user } = useUserContext()
  const navigate = useNavigate()
  const [form] = Form.useForm()

  const { data: energyTypes, isLoading: isLoadingEnergyTypes } =
    Api.energyType.findMany.useQuery({})
  const { mutateAsync: createListing, isLoading: isCreatingListing } =
    Api.energyListing.create.useMutation()

  const onFinish = async (values: any) => {
    try {
      if (!user) {
        message.error('You must be logged in to create a listing')
        return
      }

      const listingData = {
        quantity: values.quantity,
        price: values.price,
        listingDate: dayjs(values.availabilityPeriod).format('YYYY-MM-DD'),
        status: 'ACTIVE',
        userId: user.id,
        energyTypeId: values.energyType,
      }

      await createListing({ data: listingData })
      message.success('Energy listing created successfully')
      navigate('/my-listings')
    } catch (error) {
      console.error('Error creating listing:', error)
      message.error('Failed to create energy listing')
    }
  }

  return (
    <PageLayout layout="narrow">
      <div style={{ maxWidth: 600, margin: '0 auto', padding: '20px' }}>
        <Title level={2}>
          <i className="las la-bolt" style={{ marginRight: '10px' }}></i>
          Create New Energy Listing
        </Title>
        <Text>
          Offer your excess clean energy to neighbors by creating a new listing.
        </Text>

        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          style={{ marginTop: '20px' }}
        >
          <Form.Item
            name="energyType"
            label="Energy Type"
            rules={[
              { required: true, message: 'Please select an energy type' },
            ]}
          >
            <Select
              loading={isLoadingEnergyTypes}
              placeholder="Select energy type"
            >
              {energyTypes?.map(type => (
                <Select.Option key={type.id} value={type.id}>
                  {type.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            name="quantity"
            label="Energy Amount (kWh)"
            rules={[
              { required: true, message: 'Please enter the energy amount' },
            ]}
          >
            <InputNumber min={0} step={0.1} style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item
            name="price"
            label="Price per kWh"
            rules={[{ required: true, message: 'Please enter the price' }]}
          >
            <InputNumber
              min={0}
              step={0.01}
              prefix="$"
              style={{ width: '100%' }}
            />
          </Form.Item>

          <Form.Item
            name="availabilityPeriod"
            label="Availability Date"
            rules={[
              {
                required: true,
                message: 'Please select the availability date',
              },
            ]}
          >
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={isCreatingListing}
            >
              <i className="las la-plus" style={{ marginRight: '5px' }}></i>
              Create Listing
            </Button>
          </Form.Item>
        </Form>
      </div>
    </PageLayout>
  )
}
