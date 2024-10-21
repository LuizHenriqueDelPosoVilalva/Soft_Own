import Image from "next/image"
import ListWithCheck from "./UI/lists/ListWithCheck"

interface SchedulingServices {
  title: string
  description: string
}

interface SchedulingContainerProps {
  path_image: string
  schedulingServices: SchedulingServices[]
  icon_path: string
  titleListColor: string
  descriptionColor?: string
}

export default function SchedulingContainer({
  path_image,
  schedulingServices,
  icon_path,
  titleListColor,
  descriptionColor
}: SchedulingContainerProps) {
  return (
    <div className="bg-containerColor mt-0 md:mt-24 relative min-h-[598px]">
      <div className="pt-10 px-4 sm:px-20 z-10 pb-10">
        <div className="flex flex-col lg:flex-row justify-center items-start gap-4 lg:gap-10">
          <div className="flex-1">
            <h1 className="font-bold md:text-lg lg:text-3xl text-blue text-xl mb-5 z-10">
              Agenda e prontuário de seus pacientes.
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-textColor mb-5">
              Explica pro Product Owner que o módulo de recursão paralela corrigiu o bug
              do JSON compilado a partir de proto-buffers.
            </p>
            <ListWithCheck
              items={schedulingServices}
              icon_path={icon_path}
              titleListColor={titleListColor}
              descriptionColor={descriptionColor}
            />
          </div>
          <div className="flex-1">
            <Image
              src={path_image}
              width={1000}
              height={541}
              alt="services"
              className="w-full h-auto z-10"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
