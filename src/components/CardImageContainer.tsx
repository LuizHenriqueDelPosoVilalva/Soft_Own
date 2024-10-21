import { motion } from "framer-motion"
import Image from "next/image"

interface cardImageContainerProps {
  path_image: string
}

export default function CardImageContainer({ path_image }: cardImageContainerProps) {
  return (
    <div className="flex justify-center z-40">
      <motion.div className="z-40 md:mt-[-100px]">
        <Image src={path_image} width={1000} height={541} alt="logo" />
      </motion.div>
    </div>
  )
}
