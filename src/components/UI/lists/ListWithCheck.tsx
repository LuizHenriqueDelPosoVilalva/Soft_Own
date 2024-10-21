import Image from "next/image"

interface Items {
  title: string
  description: string
}

interface ListProps {
  items: Items[]
  icon_path: string
  titleListColor: string
  descriptionColor?: string
  limitItem?: boolean
}

export default function ListWithCheck({
  items,
  icon_path,
  titleListColor,
  descriptionColor,
  limitItem
}: ListProps) {
  return (
    <div className="flex flex-col p-1.5">
      {items.map((service: Items, index: number) => (
        <div key={index} className="flex w-full items-start rounded-md p-2 pl-3 gap-4">
          <Image src={icon_path} width={18} height={18} alt="checks" />
          <p
            className="text-base md:text-lg lg:text-xl"
            style={{
              color: descriptionColor ? descriptionColor : "#6B7280",
              width: limitItem && limitItem ? "400px" : "100%"
            }}
          >
            <span className={`font-bold`} style={{ color: titleListColor }}>
              {service.title}: {""}
            </span>
            {service.description}
          </p>
        </div>
      ))}
    </div>
  )
}
