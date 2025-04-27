import { useState } from 'react'

const Features = ({ title, features }) => {
  const [open, setOpen] = useState(false)
  const [first, ...rest] = features

  return (
    <div className="md:my-8 my-4 text-center bg-white rounded-lg p-4">
      {/* header */}
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-semibold">{title}</h2>
        <button
          onClick={() => setOpen(o => !o)}
          aria-expanded={open}
          className="p-1 hover:bg-gray-100 rounded"
        >
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg"
                 className="w-6 h-6 text-gray-700"
                 fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                 stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round"
                    d="m4.5 15.75 7.5-7.5 7.5 7.5"/>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg"
                 className="w-6 h-6 text-gray-700"
                 fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                 stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
            </svg>
          )}
        </button>
      </div>

      {/* grid + overlay */}
      <div className="relative mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 gap-3 text-left">
          {/* always show first */}
          <div>
            <h3 className="font-bold">{first.title}</h3>
            <p className="text-gray-600">{first.description}</p>
          </div>

          {/* rest only when open */}
          {open && rest.map((feature, i) => (
            <div key={i}>
              <h3 className="font-bold">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* only collapsed: gradient fade at bottom of first item */}
        {!open && (
          <div
            className="absolute left-0 bottom-0 w-full h-12 pointer-events-none
                       bg-gradient-to-b from-transparent to-white"
          />
        )}
      </div>
    </div>
  )
}

export default Features
