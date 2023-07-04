import time from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';

time.extend(duration);
time.extend(relativeTime);

export { time };
