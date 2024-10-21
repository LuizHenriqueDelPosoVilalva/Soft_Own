import { useState } from "react"

interface AccordionItems {
  title: string
  content: string
}

interface AccordionProps {
  items: AccordionItems[]
}

const Accordion = ({ items }: AccordionProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <div key={index} className="border-b border-gray-200">
          <button
            className="w-full text-left py-4 px-6 flex justify-between items-center"
            onClick={() => handleToggle(index)}
          >
            <span className="font-semibold text-lg text-textBlack">{item.title}</span>
            <svg
              className={`w-5 h-5 text-blue transition-transform duration-300 ${
                activeIndex === index ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {activeIndex === index && (
            <div className="px-6 py-4">
              <p className="text-textColor text-lg">{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default Accordion
