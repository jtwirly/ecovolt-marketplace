import { Typography, Card, Row, Col, Statistic } from 'antd'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function HomePage() {
  const navigate = useNavigate()
  const { user } = useUserContext()

  const { data: energyListings, isLoading: isLoadingListings } =
    Api.energyListing.findMany.useQuery({
      include: { energyType: true },
      where: { status: 'ACTIVE' },
      take: 5,
    })

  const { data: energyConsumption, isLoading: isLoadingConsumption } =
    Api.energyConsumption.findMany.useQuery({
      where: { userId: user?.id },
      orderBy: { consumptionDate: 'desc' },
      take: 1,
    })

  const { data: energyProduction, isLoading: isLoadingProduction } =
    Api.energyProduction.findMany.useQuery({
      where: { userId: user?.id },
      orderBy: { productionDate: 'desc' },
      take: 1,
    })

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Clean Energy Dashboard</Title>
      <Text>
        Welcome to your clean energy marketplace. View available listings and
        your energy statistics.
      </Text>

      <Row gutter={[16, 16]} style={{ marginTop: '2rem' }}>
        <Col xs={24} md={12}>
          <Card title="Energy Consumption" loading={isLoadingConsumption}>
            {energyConsumption && energyConsumption[0] && (
              <Statistic
                title="Latest Consumption"
                value={
                  energyConsumption[0].consumptionAmount?.toString() ?? 'N/A'
                }
                suffix="kWh"
                precision={2}
              />
            )}
            <Text type="secondary">
              Date:{' '}
              {energyConsumption && energyConsumption[0]
                ? dayjs(energyConsumption[0].consumptionDate).format(
                    'MMMM D, YYYY',
                  )
                : 'N/A'}
            </Text>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card title="Energy Production" loading={isLoadingProduction}>
            {energyProduction && energyProduction[0] && (
              <Statistic
                title="Latest Production"
                value={
                  energyProduction[0].productionAmount?.toString() ?? 'N/A'
                }
                suffix="kWh"
                precision={2}
              />
            )}
            <Text type="secondary">
              Date:{' '}
              {energyProduction && energyProduction[0]
                ? dayjs(energyProduction[0].productionDate).format(
                    'MMMM D, YYYY',
                  )
                : 'N/A'}
            </Text>
          </Card>
        </Col>
      </Row>

      <Title level={3} style={{ marginTop: '2rem' }}>
        Available Energy Listings
      </Title>
      <Row gutter={[16, 16]}>
        {isLoadingListings ? (
          <Col span={24}>
            <Card loading={true} />
          </Col>
        ) : (
          energyListings?.map(listing => (
            <Col xs={24} sm={12} md={8} key={listing.id}>
              <Card
                title={listing.energyType?.name}
                extra={
                  <a onClick={() => navigate(`/listings/${listing.id}`)}>
                    Details
                  </a>
                }
              >
                <Statistic
                  title="Quantity"
                  value={listing.quantity?.toString() ?? 'N/A'}
                  suffix="kWh"
                  precision={2}
                />
                <Statistic
                  title="Price"
                  value={listing.price?.toString() ?? 'N/A'}
                  prefix="$"
                  precision={2}
                />
                <Text type="secondary">
                  Listed on: {dayjs(listing.listingDate).format('MMMM D, YYYY')}
                </Text>
              </Card>
            </Col>
          ))
        )}
      </Row>
      {energyListings?.length === 0 && (
        <Text>No energy listings available at the moment.</Text>
      )}
      <div style={{ marginTop: '1rem', textAlign: 'right' }}>
        <a onClick={() => navigate('/listings')}>
          View all listings <i className="las la-arrow-right"></i>
        </a>
      </div>
    </PageLayout>
  )
}
