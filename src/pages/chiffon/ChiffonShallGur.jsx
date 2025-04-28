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
  "<strong>Përmasat</strong> 180:70 cm",
  "<strong>Firma</strong> Sedef",
  "<strong>Çmimi</strong> 800L"
];

const paletteImages = {
  palette1: "/chiffon_me_gura/paletat/1.png",
  palette2: "/chiffon_me_gura/paletat/2.png",
};

export default function ChiffonShallGur() {
  return <ProductPage
    features={features}
    details={details}
    title="Shalli Chiffon"
    description="Shalli Chiffon është i njohur për lehtësinë dhe elegancën e tij, duke qenë një nga materialet më të preferuara për veshjet e vajzave me shami."
    mainImage="/chiffon_me_gura/main.png"
    mainAlt="Chiffon Hijab"
    featuresTitle="Karakteristikat e Shall-it Chiffon"
    arrayWithPalettes={paletteImages}
  />
}
