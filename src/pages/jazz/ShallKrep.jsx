import React from "react";
import ProductPage from "../../components/shared/ProductPage.jsx";

const features = [
  {
    title: "Material Mat dhe Elegant",
    description: "Shalli krep ka një pamje të sofistikuar me teksturë të lehtë të rrudhur dhe përfundim mat që duket bukur në çdo lloj veshjeje."
  },
  {
    title: "Nuk Rrëshqet",
    description: "Falë strukturës së tij unike, materiali krep qëndron mirë në vend pa pasur nevojë për shumë kapëse apo gjilpëra."
  },
  {
    title: "I Rehatshëm dhe Pa Rrudhje",
    description: "Shumë i përshtatshëm për përdorim të përditshëm, nuk rrudhet lehtë dhe nuk kërkon hekurosje të shpeshtë."
  },
  {
    title: "Ajrosje dhe Komoditet",
    description: "Edhe pse ka një pamje të trashë, është i ajrosshëm dhe nuk të nxe gjatë verës, ndërkohë që ofron mbulim të plotë."
  },
  {
    title: "Stil Modern dhe Minimalist",
    description: "I thjeshtë në dizajn, por shumë i efektshëm për të krijuar një pamje elegante dhe të organizuar."
  },
  {
    title: "I Përshtatshëm për Çdo Rast",
    description: "Nga veshja e përditshme te ajo formale – shalli krep mund të kombinohet lehtë për çdo rast."
  }
];

const details = [
  "<strong>Përmasat</strong> 180:70 cm",
  "<strong>Firma</strong> Sedef",
  "<strong>Çmimi</strong> 1000L"
];

export default function ShallKrep() {
  return <ProductPage
    features={features}
    details={details}
    title="Shalli Krep"
    description="Teksturë jashtëzakonisht e butë dhe e lehtë, sikur të mos e ndjeni fare. E përkryer për të gjitha rastet."
    mainImage="../src/assets/shall_krep/main.png"
    mainAlt="Krep Hijab"
    featuresTitle="Karakteristikat e Shall-it Krep"
  />
}
