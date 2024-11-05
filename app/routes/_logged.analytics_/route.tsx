import React, { useState, useEffect } from 'react'
import { Typography, Card, Row, Col, Spin, Select, Table } from 'antd'
const { Title, Paragraph } = Typography
const { Option } = Select
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function MarketplaceAnalyticsPage() {
  const [selectedEnergyType, setSelectedEnergyType] = useState<string | null>(
    null,
  )
  const [timeRange, setTimeRange] = useState<string>('7d')

  const { data: energyTypes, isLoading: isLoadingEnergyTypes } =
    Api.energyType.findMany.useQuery({})
  const { data: transactions, isLoading: isLoadingTransactions } =
    Api.transaction.findMany.useQuery({
      include: { energyListing: { include: { energyType: true } } },
    })

  const filteredTransactions = transactions?.filter(
    t =>
      !selectedEnergyType ||
      t.energyListing?.energyType?.id === selectedEnergyType,
  )

  const getDateRange = () => {
    const end = dayjs()
    let start
    switch (timeRange) {
      case '7d':
        start = end.subtract(7, 'day')
        break
      case '30d':
        start = end.subtract(30, 'day')
        break
      case '90d':
        start = end.subtract(90, 'day')
        break
      default:
        start = end.subtract(7, 'day')
    }
    return { start, end }
  }

  const { start, end } = getDateRange()

  const processedData = filteredTransactions
    ?.filter(t => {
      const transactionDate = dayjs(t.transactionDate)
      return transactionDate.isAfter(start) && transactionDate.isBefore(end)
    })
    .map(t => ({
      key: t.id,
      date: dayjs(t.transactionDate).format('YYYY-MM-DD'),
      price:
        t.totalPrice && t.quantity
          ? (t.totalPrice / t.quantity).toFixed(2)
          : '0',
      volume: t.quantity || 0,
    }))
    .sort((a, b) => dayjs(a.date).unix() - dayjs(b.date).unix())

  const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Volume',
      dataIndex: 'volume',
      key: 'volume',
    },
  ]

  if (isLoadingEnergyTypes || isLoadingTransactions) {
    return (
      <PageLayout layout="narrow">
        <Spin size="large" />
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>
        <i className="las la-chart-line"></i> Market Trends and Analytics
      </Title>
      <Paragraph>
        View market trends and analytics to make informed decisions about buying
        or selling energy. Analyze price fluctuations and demand patterns to
        optimize your energy trading strategy.
      </Paragraph>

      <Card>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12}>
            <Select
              style={{ width: '100%' }}
              placeholder="Select Energy Type"
              onChange={value => setSelectedEnergyType(value)}
              allowClear
            >
              {energyTypes?.map(type => (
                <Option key={type.id} value={type.id}>
                  {type.name}
                </Option>
              ))}
            </Select>
          </Col>
          <Col xs={24} sm={12}>
            <Select
              style={{ width: '100%' }}
              placeholder="Select Time Range"
              onChange={value => setTimeRange(value)}
              defaultValue="7d"
            >
              <Option value="7d">Last 7 days</Option>
              <Option value="30d">Last 30 days</Option>
              <Option value="90d">Last 90 days</Option>
            </Select>
          </Col>
        </Row>
      </Card>

      <Card title="Market Data" style={{ marginTop: '1rem' }}>
        <Table
          dataSource={processedData}
          columns={columns}
          pagination={{ pageSize: 10 }}
        />
      </Card>
    </PageLayout>
  )
}
