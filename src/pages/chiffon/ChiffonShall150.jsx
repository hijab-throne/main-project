import React from "react";
import ProductPage from "../../components/shared/ProductPage.jsx";

const features = [
  {
    title: "Material i Lehtë dhe i Hollë",
    description: "Chiffon është një material shumë i lehtë dhe i hollë, që krijon një pamje të lehtë dhe ajrosur."
  },
  {
    title: "I Butë dhe i Rehatshëm",
    description: "Shalli chiffon ka një ndjesi të butë dhe të këndshme në prekje, duke e bërë të rehatshëm për përdorim gjatë gjithë ditës."
  },
  {
    title: "Përshkueshmëri e Mirë e Ajrit",
    description: "Për shkak të strukturës së tij të hollë, ky material është shumë i ajrosshëm dhe i përshtatshëm për mot të ngrohtë."
  },
  {
    title: "I Hollueshëm dhe Delikat",
    description: "Materiali ka një efekt të hollueshëm dhe të tejdukshëm, që e bën të duket elegant dhe femëror."
  },
  {
    title: "Rrëshqitës",
    description: "Një nga disavantazhet e chiffon-it është se mund të rrëshqasë lehtë, prandaj shpesh nevojiten kapëse ose gjilpëra."
  },
  {
    title: "Stil Elegant dhe Formal",
    description: "Për shkak të pamjes së tij luksoze dhe të hijshme, shalli chiffon është i përshtatshëm për raste formale."
  }
];

const details = [
  "<strong>Përmasat</strong> 150:150 cm",
  "<strong>Firma</strong> Sedef",
  "<strong>Çmimi</strong> 1000L"
];

const paletteImages = {
  palette1: "../src/assets/shall_chiffon_150/paletat/1.png",
  palette2: "../src/assets/shall_chiffon_150/paletat/2.png",
  palette3: "../src/assets/shall_chiffon_150/paletat/3.png",
  palette4: "../src/assets/shall_chiffon_150/paletat/4.png",
};

export default function ChiffonShall150() {
  return <ProductPage
    features={features}
    details={details}
    title="Shami Chiffon"
    description="Shami Chiffon është i njohur për lehtësinë dhe elegancën e tij, duke qenë një nga materialet më të preferuara për veshjet e vajzave me shami."
    mainImage="../src/assets/shall_chiffon_150/main.png"
    mainAlt="Chiffon Hijab"
    imagePosition="object-top"
    featuresTitle="Karakteristikat e Shamise Chiffon"
    arrayWithPalettes={paletteImages}
  />
}
