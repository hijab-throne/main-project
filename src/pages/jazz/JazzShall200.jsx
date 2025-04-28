import React from "react";
import ProductPage from "../../components/shared/ProductPage.jsx";

const features = [
  {
    title: "Materiali i Lehtë dhe i Butë",
    description: "Shalli jazz është i bërë nga një përzierje materialesh të lehta dhe të buta, zakonisht pambuk dhe viskozë, që e bëjnë të rehatshëm për t’u mbajtur gjatë gjithë ditës."
  },
  {
    title: "Elastik dhe i Fleksibël",
    description: "Materiali është lehtësisht i shtrirshëm, duke e bërë të përshtatshëm për përdorim të ndryshëm, si shall, hijab ose aksesor mode."
  },
  {
    title: "Frymëmarrja e Mirë",
    description: "Për shkak të natyrës së tij të lehtë dhe të ajrosshme, shalli jazz është i shkëlqyer për t’u përdorur në çdo stinë, duke parandaluar djersitjen në ditët e ngrohta."
  },
  {
    title: "Nuk Rrëshqet",
    description: "Materiali ka një teksturë që qëndron mirë në vend, duke shmangur nevojën për rregullime të shpeshta."
  },
  {
    title: "Stil Elegant dhe Modern",
    description: "Shalli jazz ofron një pamje të thjeshtë, por elegante, që përshtatet me stile të ndryshme të veshjeve, nga ato të përditshme deri tek ato më formale."
  },
  {
    title: "Nuk Kërkon Hekurosje",
    description: "Materiali rrudhet shumë pak, kështu që nuk ka nevojë për hekurosje të shpeshtë, gjë që e bën praktik dhe të përshtatshëm për udhëtime."
  },
  {
    title: "Shumëllojshmëri Ngjyrash dhe Dizajnesh",
    description: "Shalli jazz vjen në një gamë të gjerë ngjyrash dhe modelesh, duke e bërë të lehtë kombinimin me veshjet e ndryshme."
  }
];

const details = [
  "<strong>Përmasat</strong> 200:70 cm",
  "<strong>Firma</strong> Sedef",
  "<strong>Çmimi</strong> 1000L"
];

export default function JazzShall200() {
  return <ProductPage
    features={features}
    details={details}
    title="Shalli Jazz"
    description="Lehtësia dhe eleganca e këtij materiali i përshtatet në mënyrë të përkryer çdo rasti dhe stine. I njohur për rehatinë dhe mënyrën se si përshtatet në mënyrë ideale për çdo person."
    mainImage="/shall_jazz/main2.png"
    mainAlt="Jazz Hijab"
    featuresTitle="Karakteristikat e Shall-it Jazz"
  />
}
