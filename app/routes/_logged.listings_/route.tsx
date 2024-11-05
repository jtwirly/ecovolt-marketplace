import React, { useState, useEffect } from 'react'
import {
  Typography,
  Card,
  Row,
  Col,
  Select,
  InputNumber,
  Input,
  Button,
  List,
} from 'antd'
const { Title, Text } = Typography
const { Option } = Select
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function EnergyListingsPage() {
  const [energyTypes, setEnergyTypes] = useState([])
  const [listings, setListings] = useState([])
  const [filteredListings, setFilteredListings] = useState([])
  const [filterType, setFilterType] = useState('')
  const [filterPrice, setFilterPrice] = useState(null)
  const [filterLocation, setFilterLocation] = useState('')

  const navigate = useNavigate()

  const { data: energyTypesData } = Api.energyType.findMany.useQuery({})
  const { data: listingsData } = Api.energyListing.findMany.useQuery({
    include: { energyType: true, user: { include: { locations: true } } },
  })

  useEffect(() => {
    if (energyTypesData) {
      setEnergyTypes(energyTypesData)
    }
  }, [energyTypesData])

  useEffect(() => {
    if (listingsData) {
      setListings(listingsData)
      setFilteredListings(listingsData)
    }
  }, [listingsData])

  const applyFilters = () => {
    let filtered = listings

    if (filterType) {
      filtered = filtered.filter(
        listing => listing.energyType.id === filterType,
      )
    }

    if (filterPrice !== null) {
      filtered = filtered.filter(listing => listing.price <= filterPrice)
    }

    if (filterLocation) {
      filtered = filtered.filter(listing =>
        listing.user.locations.some(
          loc =>
            loc.city?.toLowerCase().includes(filterLocation.toLowerCase()) ||
            loc.state?.toLowerCase().includes(filterLocation.toLowerCase()) ||
            loc.country?.toLowerCase().includes(filterLocation.toLowerCase()),
        ),
      )
    }

    setFilteredListings(filtered)
  }

  const resetFilters = () => {
    setFilterType('')
    setFilterPrice(null)
    setFilterLocation('')
    setFilteredListings(listings)
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Clean Energy Listings</Title>
      <Text>Compare available clean energy options and prices.</Text>

      <Card style={{ marginTop: 24, marginBottom: 24 }}>
        <Row gutter={16}>
          <Col xs={24} sm={8}>
            <Select
              style={{ width: '100%' }}
              placeholder="Filter by Energy Type"
              value={filterType}
              onChange={setFilterType}
            >
              <Option value="">All Types</Option>
              {energyTypes?.map(type => (
                <Option key={type.id} value={type.id}>
                  {type.name}
                </Option>
              ))}
            </Select>
          </Col>
          <Col xs={24} sm={8}>
            <InputNumber
              style={{ width: '100%' }}
              placeholder="Max Price"
              value={filterPrice}
              onChange={setFilterPrice}
            />
          </Col>
          <Col xs={24} sm={8}>
            <Input
              placeholder="Filter by Location"
              value={filterLocation}
              onChange={e => setFilterLocation(e.target.value)}
            />
          </Col>
        </Row>
        <Row style={{ marginTop: 16 }}>
          <Col span={24}>
            <Button
              type="primary"
              onClick={applyFilters}
              style={{ marginRight: 8 }}
            >
              Apply Filters
            </Button>
            <Button onClick={resetFilters}>Reset Filters</Button>
          </Col>
        </Row>
      </Card>

      <List
        grid={{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 3, xl: 3, xxl: 3 }}
        dataSource={filteredListings}
        renderItem={listing => (
          <List.Item>
            <Card
              hoverable
              onClick={() => navigate(`/listings/${listing.id}`)}
              cover={
                <div
                  style={{
                    height: 150,
                    background: '#f0f2f5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <i
                    className="las la-solar-panel"
                    style={{ fontSize: 48 }}
                  ></i>
                </div>
              }
            >
              <Card.Meta
                title={listing.energyType.name}
                description={
                  <>
                    <p>
                      <i className="las la-money-bill"></i> Price: $
                      {listing.price?.toString()}
                    </p>
                    <p>
                      <i className="las la-battery-full"></i> Quantity:{' '}
                      {listing.quantity?.toString()} kWh
                    </p>
                    <p>
                      <i className="las la-calendar"></i> Listed:{' '}
                      {dayjs(listing.listingDate).format('MMMM D, YYYY')}
                    </p>
                    <p>
                      <i className="las la-map-marker"></i> Location:{' '}
                      {listing.user.locations[0]?.city},{' '}
                      {listing.user.locations[0]?.country}
                    </p>
                  </>
                }
              />
            </Card>
          </List.Item>
        )}
      />
    </PageLayout>
  )
}
