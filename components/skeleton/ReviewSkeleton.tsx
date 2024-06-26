import Skeleton from '../common/Skeleton'
import tw from 'twrnc'

const ReviewSkeleton = () => {
  return (
    <Skeleton count={5}>
      <Skeleton.Items style={tw`mb-8 gap-y-2 p-4`}>
        <Skeleton.Item animated="background" height="h-5" width="w-64" className="rounded-full" />
        <Skeleton.Item animated="background" height="h-5" width="w-20" className="rounded-md" />
        <Skeleton.Item animated="background" height="h-5" width="w-full" className="rounded-md" />
        <Skeleton.Item animated="background" height="h-5" width="w-full" className="rounded-md" />
        <Skeleton.Item animated="background" height="h-5" width="w-full" className="rounded-md" />
        <Skeleton.Item animated="background" height="h-5" width="w-1/3" className="rounded-md" />
      </Skeleton.Items>
    </Skeleton>
  )
}

export default ReviewSkeleton