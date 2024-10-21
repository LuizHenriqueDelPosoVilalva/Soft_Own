import Image from "next/image"
import SecondaryButton from "./UI/buttons/SecondaryButton"

interface ContactContainerProps {
  title: string
  description: string
  titleButton: string
  bgColor: string
}

export default function ContactContainer({
  title,
  description,
  titleButton,
  bgColor
}: ContactContainerProps) {
  return (
    <div className={`bg-${ bgColor} relative`}>
      <div className="pt-10 px-4 sm:px-20 z-10 pb-10">
        <div className="flex flex-col justify-center items-center gap-5">
          <div>
            <h1 className="font-bold text-3xl text-blue text-center">{title}</h1>
          </div>
          <div>
            <p className="text-textColor text-2xl text-center">{description}</p>
          </div>
          <div>
            <SecondaryButton h={40} w={299}>
              <div className="flex gap-2 items-center justify-center align-middle">
                <p className="text-white font-medium lg:text-base text-xl text-center">
                  {titleButton}
                </p>
                <Image src={"/WhatsappLogo.png"} width={18} height={18} alt={"zap"} />
              </div>
            </SecondaryButton>
          </div>
        </div>
      </div>
    </div>
  )
}
