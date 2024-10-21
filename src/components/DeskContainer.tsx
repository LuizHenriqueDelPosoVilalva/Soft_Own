import Image from "next/image"
import ListWithCheck from "./UI/lists/ListWithCheck"

interface DeskServices {
  title: string
  description: string
}

interface DeskContainerProps {
  path_image: string
  deskServices: DeskServices[]
  icon_path: string
  titleListColor: string
  descriptionColor?: string
}

export default function DeskContainer({
  path_image,
  deskServices,
  icon_path,
  titleListColor,
  descriptionColor
}: DeskContainerProps) {
  return (
    <div id="services" className="bg-blue w-full z-0 relative">
      <div className="pt-10 px-4 sm:px-20 z-10 pb-10">
        <div className="flex flex-col flex-wrap lg:flex-row justify-around items-center gap-4 lg:gap-10">
          <div>
            <h1 className="font-bold md:text-lg lg:text-3xl text-white text-xl z-10">
              Elimine todos papéis do seu escritório.
            </h1>
            <ListWithCheck
              items={deskServices}
              icon_path={icon_path}
              titleListColor={titleListColor}
              descriptionColor={descriptionColor}
              limitItem={true}
            />
          </div>
          <Image
            src={path_image}
            width={350}
            height={100}
            alt="services"
            className="z-40"
          />
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-0 md:w-[25%] h-full 2xl:w-[611.57px]">
        <Image
          src={"/sixty-decoration.png"}
          alt="services"
          layout="fill"
          className="z-10"
        />
      </div>
    </div>
  )
}
