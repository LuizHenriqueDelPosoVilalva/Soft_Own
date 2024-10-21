"use client"

import Header from "@/components/Heander"
import CardImageContainer from "@/components/CardImageContainer"
import ServicesContainer from "@/components/ServicesContainer"
import SecurityContainer from "@/components/SecurityContainer"
import SchedulingContainer from "@/components/SchedulingContainer"
import DeskContainer from "@/components/DeskContainer"
import ContactContainer from "@/components/ContactContainer"
import PlansContainer from "@/components/PlansContainer"
import QuestionsContainer from "@/components/QuestionsContainer"
import Footer from "@/components/Footer"

import { services, securitys, schedulingServices, deskServices } from "@/mocks/listsData"

export default function Home() {
  return (
    <div>
      <Header path_background_image={"/background.png"} path_logo={"/Logo white.png"} />
      <CardImageContainer path_image={"/first.png"} />
      <ServicesContainer
        path_image={"/third.png"}
        services={services}
        icon_path={"/Vector.png"}
        titleListColor="blue"
      />
      <SecurityContainer
        path_image="/four.png"
        securitys={securitys}
        icon_path={"/Vector.png"}
        titleListColor="blue"
      />
      <SchedulingContainer
        path_image="/fifth.png"
        schedulingServices={schedulingServices}
        icon_path={"/Vector.png"}
        titleListColor="blue"
      />
      <DeskContainer
        path_image="/ilustration.png"
        deskServices={deskServices}
        icon_path={"/CheckCircle.png"}
        titleListColor="white"
        descriptionColor="white"
      />
      <ContactContainer
        title="Comece seu teste gratuito hoje!"
        description="Entre em contato com nosso time e agende uma demonstração gratuita!"
        titleButton="Fale com nosso time de vendas"
        bgColor="containerColor"
      />
      <PlansContainer />
      <QuestionsContainer />
      <ContactContainer
        title="Agende uma demonstração gratuita"
        description="Descubra como nossa plataforma pode transformar seu escritório."
        titleButton="Fale com nosso time de vendas"
        bgColor="white"
      />
      <Footer />
    </div>
  )
}
