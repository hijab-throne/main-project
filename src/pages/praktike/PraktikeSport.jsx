import React from "react";
import ProductPage from "../../components/shared/ProductPage.jsx";

const features = [
  {
    title: "E Lehtë dhe Praktike",
    description: "Shamia praktike është krijuar për përdorim të përditshëm – e lehtë në peshë dhe pa nevojë për hekurosje."
  },
  {
    title: "Komoditet Gjatë Gjithë Ditës",
    description: "Materiali i butë dhe fleksibël siguron rehati të plotë pa tendosje në kokë apo qafë."
  },
  {
    title: "Ajrosje dhe Freski",
    description: "Ideale për çdo stinë, kjo shami lejon ajrosje natyrale dhe nuk nxehet edhe kur përdoret për orë të gjata."
  },
  {
    title: "Veshje e Shpejtë dhe e Thjeshtë",
    description: "E dizenjuar për gra aktive, mund të vishet pa pasqyrë dhe qëndron në vend pa rrëshkitje të panevojshme."
  },
  {
    title: "Nuk Rrëshqet",
    description: "Materiali ka teksturë që ngjitet lehtë mbi flokë ose kapuç, duke mos pasur nevojë për shumë kapëse."
  },
  {
    title: "Stil Minimalist por Elegant",
    description: "Ngjyrat neutrale dhe dizajni i thjeshtë e bëjnë të përshtatshme për punë, shkollë apo dalje të përditshme."
  }
];


const details = [
  "<strong>Çmimi</strong> 800L"
];


export default function PraktikeSport() {
  return <ProductPage
    features={features}
    details={details}
    title="Shami Praktike Fular Sportiv Duz"
    description="Zbulo koleksionin tonë të shamive praktike – të lehta për t’u veshur, të rehatshme për përdorim ditor dhe të disponueshme në lloje të ndryshme për çdo stil dhe nevojë."
    mainImage="/shall_chiffon/main_img.png"
    mainAlt="Praktike"
    showMainImage={false}
    hideColorCircle={true}
    featuresTitle="Karakteristikat e Shamise Praktike"
  />
}
