import Accordion from "./UI/accordion/Accordion"
import { accordionQuestions } from "@/mocks/accordionData"

export default function QuestionsContainer() {
  return (
    <div className="bg-containerColor relative">
      <div className="pt-10 px-4 sm:px-20 z-10 pb-10">
        <div className="flex flex-col gap-5 w-full">
          <h1 className="font-bold text-3xl text-center text-blue">Perguntas frequentes</h1>
          <Accordion items={accordionQuestions}/>
        </div>
      </div>
    </div>
  )
}
