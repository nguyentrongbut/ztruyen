import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/vi';

dayjs.extend(relativeTime);
dayjs.locale('vi');

const formatRelativeTime = (date: string | Date) => {
    return dayjs(date).fromNow();
};

export default formatRelativeTime;
