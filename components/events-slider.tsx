'use client'

import { EventCard } from './event-card'

export function EventsSlider() {
  return (
    <div className="container mx-auto px-4 -mt-20 relative z-10">
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <EventCard 
          date="1st"
          month="2024"
          title="Event Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam mauris quam."
        />
        <EventCard 
          date="15th"
          month="2024"
          title="Event Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam mauris quam."
        />
      </div>
      <div className="flex justify-center mt-6 gap-2">
        <div className="w-2 h-2 rounded-full bg-[#FF9F00]" />
        <div className="w-2 h-2 rounded-full bg-gray-300" />
        <div className="w-2 h-2 rounded-full bg-gray-300" />
      </div>
    </div>
  )
}

