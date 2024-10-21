import PlanCards from "../components/UI/cards/PlanCards"

export default function PlansContainer() {
  return (
    <div id="plans" className="mt-0 md:mt-24 relative">
      <div className="pt-10 px-4 sm:px-20 z-10 pb-10">
        <div className="flex flex-col justify-center items-center gap-5">
          <h1 className="text-blue font-bold text-3xl">Nossos Planos</h1>
          <p className="text-textColor text-xl">
            Encontre o melhor plano de acordo com a necessidade do seu escritório.
          </p>
          <div className="flex flex-wrap align-middle justify-center items-center gap-5">
            <PlanCards titlePlan="Inicial" price="/R$30.png"/>
            <PlanCards titlePlan="Intermediário" price="/R$100.png"/>
            <PlanCards titlePlan="Completo" price="/R$300.png"/>
          </div>
        </div>
      </div>
    </div>
  )
}
