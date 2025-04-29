import React from "react";
import ProductPage from "../../components/shared/ProductPage.jsx";

const features = [
  {
    title: "Shkëlqim Elegant",
    description: "Saten ka një sipërfaqe të lëmuar dhe me shkëlqim të lehtë që i jep pamjes një prekje luksi dhe elegance."
  },
  {
    title: "Ndjesi Super e Butë",
    description: "Shalli saten ndjehet jashtëzakonisht i butë dhe i lëmuar në lëkurë, duke ofruar rehati dhe finesë."
  },
  {
    title: "Përshtatje për Evenimente",
    description: "Për shkak të pamjes së tij të sofistikuar, është zgjedhja perfekte për mbrëmje, festa apo evente formale."
  },
  {
    title: "Rrëshqitje e Kontrolluar",
    description: "Megjithëse sateni është natyrshëm rrëshqitës, me disa kapëse të vogla mund të qëndrojë i fiksuar gjithë ditën."
  },
  {
    title: "Efekt Femëror dhe i Rafinur",
    description: "Materiali ka një rënie natyrale që i jep formë të butë dhe të hijshme fytyrës."
  },
  {
    title: "Ngjyra të Pasura dhe Tërheqëse",
    description: "Shamitë prej saten vijnë në nuanca të thella dhe të pasura që shkëlqejnë nën dritë, duke tërhequr vëmendjen në mënyrë delikate."
  }
];


const details = [
  "<strong>Çmimi</strong> 900L"
];

export default function Saten() {
  return <ProductPage
    features={features}
    details={details}
    title="Shalli Saten"
    description="Shalli Saten është i njohur për butësinë dhe shkëlqimin e tij delikat; tekstura e lëmuar i lejon drapimet elegante pa rrudha, ndërsa materiali rrëshqitës siguron një veshje të rehatshme dhe të qëndrueshme gjatë gjithë ditës. Ai ofron një pamje rafinuar, e përshtatshme si për rastet formale ashtu edhe për përdorimin e përditshëm."
    mainImage="/saten/saten_main.png"
    mainAlt="Saten Hijab"
    featuresTitle="Karakteristikat e Shall-it Saten"
  />
}
