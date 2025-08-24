import NavGenreSkeleton from '@/components/pages/the-loai/NavGenreSkeleton';
import DynamicPageStatusSkeleton from '@/components/skeleton/DynamicPageStatusSkeleton';

const Loading = () => {
    return (
       <div>
           <NavGenreSkeleton/>
           <DynamicPageStatusSkeleton/>
       </div>
    )
}

export default Loading