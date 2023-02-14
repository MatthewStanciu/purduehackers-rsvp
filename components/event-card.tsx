import { format } from 'date-fns'
import Link from 'next/link'
import { past } from '../lib/past'

const EventCard = ({
  name,
  slug,
  start,
  end
}: {
  name: string
  slug: string
  start: string
  end: string
}) => (
  <Link
    href={`/${slug}`}
    className={`col-span-1 shadow-lg dark:shadow-black/25 flex flex-col rounded-lg justify-center p-5 ${
      past(start)
        ? 'bg-gray-200 dark:bg-gray-700'
        : 'bg-amber-400 dark:bg-amber-500 hover:scale-105 transform transition'
    }`}
    passHref
  >
    <p className={past(start) ? '' : 'text-black dark:text-black transition'}>
      {start === 'TBD'
        ? 'TBD'
        : format(
            new Date(start),
            `${past(start) ? 'LLL do, Y •' : 'eee. LLL do •'}`
          )}{' '}
      {start === 'TBD'
        ? ''
        : format(new Date(start), `h:mm${end === 'TBD' ? ' a' : ''}`) + '—'}
      {end === 'TBD' ? '???' : format(new Date(end), 'h:mm a')}
    </p>
    <h3
      className={`${name.length < 30 ? 'text-2xl' : 'text-2xl sm:text-xl'} ${
        past(start) ? '' : ' text-black dark:text-black transition'
      } font-bold`}
    >
      {name}
    </h3>
  </Link>
)

export default EventCard
