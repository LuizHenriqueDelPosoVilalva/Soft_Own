import { ReactNode } from "react"
import { buttonVariants } from "@/animations/buttonAnimation"
import { motion } from "framer-motion"

interface ButtonProps {
  children: ReactNode
  h: number
  w: number
  scrollTo?: string
}

export default function PrimaryButton({ children, h, w, scrollTo }: ButtonProps) {
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
        className="bg-white border-2 rounded-md border-blue hover:font-bold text-blue text-base"
        style={{ height: `${h}px`, width: `${w}px` }}
        onClick={() => scroll()}
      >
        {children}
      </button>
    </motion.div>
  )
}
