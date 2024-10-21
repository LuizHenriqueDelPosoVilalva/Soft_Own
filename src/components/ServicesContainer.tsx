import Image from "next/image"
import ListWithCheck from "./UI/lists/ListWithCheck"

interface Service {
  title: string
  description: string
}

interface ServicesContainerProps {
  path_image: string
  services: Service[]
  icon_path: string
  titleListColor: string
  descriptionColor?: string
}

export default function ServicesContainer({
  path_image,
  services,
  icon_path,
  titleListColor,
  descriptionColor
}: ServicesContainerProps) {
  return (
    <div className="bg-containerColor mt-0 md:mt-24 relative min-h-[598px]">
      <div className="pt-10 px-4 sm:px-20 z-10 pb-10">
        <div className="flex flex-col lg:flex-row justify-center items-start gap-4 lg:gap-10">
          <div className="flex-1 z-10">
            <Image
              src={path_image}
              width={1000}
              height={541}
              alt="services"
              className="w-full h-auto z-10"
            />
          </div>
          <div className="flex-1">
            <h1 className="font-bold text-blue text-xl md:text-lg lg:text-3xl mb-5 z-10">
              Foco na otimização de processos.
            </h1>
            <ListWithCheck
              items={services}
              icon_path={icon_path}
              titleListColor={titleListColor}
              descriptionColor={descriptionColor}
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-0 z-0">
        <Image
          src="/Mask group.png"
          alt="Mask group"
          width={347}
          height={347}
          className="w-auto h-auto"
        />
      </div>
    </div>
  )
}
