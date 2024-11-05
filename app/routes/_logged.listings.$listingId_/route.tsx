import { Typography, Card, Button, Spin, message } from 'antd'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function ListingDetailsPage() {
  const { listingId } = useParams()
  const navigate = useNavigate()
  const { user } = useUserContext()

  const { data: listing, isLoading } = Api.energyListing.findUnique.useQuery({
    where: { id: listingId },
    include: { energyType: true, user: true },
  })

  const { mutateAsync: createTransaction } =
    Api.transaction.create.useMutation()

  const handlePurchase = async () => {
    if (!user) {
      message.error('Please log in to make a purchase.')
      return
    }

    try {
      await createTransaction({
        data: {
          quantity: listing?.quantity,
          totalPrice: listing?.price,
          transactionDate: dayjs().format('YYYY-MM-DD'),
          buyerId: user.id,
          sellerId: listing?.userId || '',
          energyListingId: listing?.id || '',
        },
      })
      message.success('Purchase successful!')
      navigate('/transactions')
    } catch (error) {
      message.error('Failed to complete the purchase. Please try again.')
    }
  }

  if (isLoading) {
    return (
      <PageLayout layout="narrow">
        <Spin size="large" />
      </PageLayout>
    )
  }

  if (!listing) {
    return (
      <PageLayout layout="narrow">
        <Title level={2}>Energy Listing Not Found</Title>
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Energy Listing Details</Title>
      <Paragraph>
        View detailed information about this energy listing and make a purchase.
      </Paragraph>

      <Card>
        <Title level={3}>{listing.energyType?.name} Energy Listing</Title>
        <Paragraph>
          <Text strong>Quantity: </Text>
          {listing.quantity?.toString()} kWh
        </Paragraph>
        <Paragraph>
          <Text strong>Price: </Text>${listing.price?.toString()}
        </Paragraph>
        <Paragraph>
          <Text strong>Listing Date: </Text>
          {dayjs(listing.listingDate).format('MMMM D, YYYY')}
        </Paragraph>
        <Paragraph>
          <Text strong>Status: </Text>
          {listing.status}
        </Paragraph>
        <Paragraph>
          <Text strong>Seller: </Text>
          {listing.user?.name}
        </Paragraph>
        <Paragraph>
          <Text strong>Energy Type: </Text>
          {listing.energyType?.name}
        </Paragraph>
        {listing.energyType?.description && (
          <Paragraph>
            <Text strong>Energy Type Description: </Text>
            {listing.energyType.description}
          </Paragraph>
        )}

        {user && user.id !== listing.userId && (
          <Button
            type="primary"
            onClick={handlePurchase}
            icon={<i className="las la-shopping-cart"></i>}
          >
            Purchase Energy
          </Button>
        )}
      </Card>
    </PageLayout>
  )
}
