import Image from "next/image"

import { listIa } from "@/mocks/listsData"
import SecondaryButton from "../buttons/SecondaryButton"

interface PlanCardsProps {
  titlePlan: string
  price: string
}

interface ItemsList {
  title: string
  description: string
}

export default function PlanCards({ titlePlan, price }: PlanCardsProps) {
  return (
    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-slate-50 min-w-346.67">
      <h5 className=" text-center mb-2 text-2xl font-bold tracking-tight text-blue">
        {titlePlan}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipiscing praesent.
      </p>
      <div className="flex gap-4 items-end justify-center mb-10 mt-10">
        <Image src={price} width={161} height={42} alt="checks" />
        <p className="text-xl text-textColor">/mês</p>
      </div>
      <div className="flex flex-col w-full">
        {listIa.map((item: ItemsList, index: number) => (
          <div
            key={index}
            className="flex w-full items-center align-middle rounded-md gap-3"
          >
            <Image src={"/CheckCircle(1).png"} width={18} height={18} alt="checks" />
            <p className="font-bold text-base lg:text-xl text-textColor">
              <span className={`text-textColor font-normal`}>
                {item.title} {""}
              </span>
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center w-full mt-3">
        <SecondaryButton h={48} w={298.67}>
          Selecionar este plano
        </SecondaryButton>
      </div>
    </div>
  )
}
