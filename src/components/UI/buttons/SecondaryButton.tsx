import { buttonVariants } from "@/animations/buttonAnimation"
import { motion } from "framer-motion"
import { ReactNode } from "react"

interface ButtonProps {
  children: ReactNode
  h: number
  w: number
  scrollTo?: string
}

export default function SecondaryButton({ children, h, w, scrollTo }: ButtonProps) {
  const scrollToDiv = (id: string) => {
    const div = document.getElementById(id)
    if (div) {
      const elementPosition = div.getBoundingClientRect().top + window.scrollY

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      })
    }
  }

  const scroll = () => {
    if (scrollTo) {
      scrollToDiv(scrollTo)
    }
  }
  return (
    <motion.div
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
      initial="hidden"
      animate="visible"
    >
      <button
        className="bg-blue border-2 rounded-md border-white hover:font-bold text-white text-base p-2"
        style={{ minHeight: `${h}px`, minWidth: `${w}px` }}
        onClick={() => scroll()}
      >
        {children}
      </button>
    </motion.div>
  )
}
