interface EventCardProps {
  date: string;
  month: string;
  title: string;
}

export function EventCard({ date, month, title }: EventCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg">
      <div className="flex items-start gap-4">
        <div className="flex flex-col items-center">
          <span className="text-[#FF9F00] text-4xl font-bold">{date}</span>
          <span className="text-gray-500 uppercase">{month}</span>
        </div>
        <p className="text-gray-800">{title}</p>
      </div>
    </div>
  )
}

