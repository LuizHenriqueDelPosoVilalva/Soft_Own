import Image from "next/image";
import ListWithCheck from "./UI/lists/ListWithCheck";

interface Securitys {
  title: string;
  description: string;
}

interface SecurityContainerProps {
  path_image: string;
  securitys: Securitys[];
  icon_path: string;
  titleListColor: string;
  descriptionColor?: string;
}

export default function SecurityContainer({
  path_image,
  securitys,
  icon_path,
  titleListColor,
  descriptionColor,
}: SecurityContainerProps) {
  return (
    <div className="relative">
      <div className="pt-10 px-4 sm:px-20 pb-10">
        <div className="flex flex-col lg:flex-row justify-center items-start gap-4 lg:gap-10">
          <div className="flex-1">
            <h1 className="font-bold text-blue text-xl md:text-2xl lg:text-3xl mb-5">
              Proteja seus dados e garanta a conformidade com as normas jurídicas.
            </h1>
            <ListWithCheck
              items={securitys}
              icon_path={icon_path}
              titleListColor={titleListColor}
              descriptionColor={descriptionColor}
            />
          </div>
          <div className="flex-1">
            <Image src={path_image} width={1000} height={541} alt="services" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}
