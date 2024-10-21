import Image from "next/image"
import { motion } from "framer-motion"
import PrimaryButton from "./UI/buttons/PrimaryButton"
import SecondaryButton from "./UI/buttons/SecondaryButton"
import { textVariants } from "@/animations/textAnimation"
import { imageVariants } from "@/animations/imageAnimation"

interface HeaderProps {
  path_background_image: string
  path_logo: string
}

export default function Header({ path_background_image, path_logo }: HeaderProps) {
  return (
    <header
      className="relative w-full min-h-[680px] bg-cover bg-center z-0"
      style={{ backgroundImage: `url(${path_background_image})` }}
    >
      <div
        className="absolute inset-0  bg-opacity-88 z-0"
        style={{ backgroundColor: "#0277EEE0" }}
      >
        <div className="pt-10 px-4 sm:px-20">
          <nav className="flex flex-col sm:flex-row justify-center md:justify-between items-center gap-4 sm:gap-10">
            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5 }}
            >
              <Image src={path_logo} width={260} height={77.76} alt="logo" />
            </motion.div>
            <PrimaryButton h={40} w={167}>
              Acessar o <span className="font-bold">Sistema</span>
            </PrimaryButton>
          </nav>
          <div className="mt-10">
            <motion.div
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5 }}
            >
              <div>
                <h1 className="text-white font-bold text-3xl sm:text-4xl text-center mb-5">
                  Eleve sua experiência com a gestão inteligente de processos.
                </h1>
              </div>

              <div className="mt-8">
                <p className="text-white text-center text-lg sm:text-xl font-semibold">
                  Diga adeus às planilhas e papéis!
                </p>
              </div>
              <div>
                <p className="text-white text-center text-lg sm:text-xl">
                  Nosso sistema transforma a forma como você gerencia seus casos.
                  Automatize tarefas, centralize informações e ganhe mais tempo para focar
                  no que realmente importa:
                  <span className="font-semibold">seus clientes</span>
                </p>
              </div>
            </motion.div>
            <div className="flex flex-col sm:flex-row sm:align-middle items-center sm:justify-center justify-center align-middle gap-4 mt-10">
              <PrimaryButton w={268} h={42} scrollTo="services">
                Conheça nossa ferramenta
              </PrimaryButton>

              <SecondaryButton w={268} h={42} scrollTo="plans">
                Conheça nossos planos
              </SecondaryButton>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
