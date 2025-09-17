import NavGenreSkeleton from '@/skeleton/the-loai/NavGenreSkeleton';
import DynamicPageStatusSkeleton from '@/skeleton/DynamicPageStatusSkeleton';

const Loading = () => {
    return (
       <div>
           <NavGenreSkeleton/>
           <DynamicPageStatusSkeleton/>
       </div>
    )
}

export default Loading