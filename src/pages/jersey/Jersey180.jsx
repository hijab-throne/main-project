import React from "react";
import ProductPage from "../../components/shared/ProductPage.jsx";

const features = [
  {
    title: "Elastik dhe Fleksibël",
    description: "Materiali është i shtrirshëm dhe përshtatet lehtësisht rreth kokës pa nevojën për kapëse ose gjilpëra shtesë."
  },
  {
    title: "Komod dhe i Rehatshëm",
    description: "Butësia e tij e bën shumë të këndshëm për përdorim gjatë gjithë ditës."
  },
  {
    title: "I Rëndë dhe Nuk Rrëshqet",
    description: "Për shkak të peshës së tij të moderuar, hijabi jersey qëndron në vend dhe nuk rrëshqet, duke shmangur nevojën për rregullime të shpeshta."
  },
  {
    title: "I Përshtatshëm për Çdo Stinë",
    description: "Materiali mban ngrohtë në dimër dhe është i freskët në verë, duke e bërë të përshtatshëm për të gjitha stinët."
  },
  {
    title: "Nuk Kërkon Hekurosje",
    description: "Materiali nuk rrudhet lehtë, kështu që nuk ka nevojë për hekurosje, gjë që e bën shumë praktik për përdorim të përditshëm dhe udhëtime."
  },
  {
    title: "Pamje Elegante",
    description: "Hijabi jersey jep një pamje të rregullt dhe elegante, duke u përshtatur me stilin casual dhe atë më të sofistikuar."
  }
];

const details = [
  "<strong>Përmasat</strong> 180:70 cm",
  "<strong>Firma</strong> Mercan",
  "<strong>Çmimi</strong> 800L"
];

const paletteImages = {
  palette1: "/shall_chiffon/paletat/1.png",
  palette2: "/shall_chiffon/paletat/2.png",
  palette3: "/shall_chiffon/paletat/3.png",
  palette4: "/shall_chiffon/paletat/4.png",
};

export default function Jersey180() {
  return <ProductPage
    features={features}
    details={details}
    title="Jersey"
    description="Hijabi i materialit ZHARS (jersey) është shumë i preferuar për shkak të disa karakteristikave kryesore që e bëjnë të rehatshëm dhe praktik për përdorim të përditshëm."
    mainImage="/shall_jersey/main.png"
    mainAlt="Jersey Hijab"
    showMainImage={false}
    featuresTitle="Karakteristikat e Shall-it Jersey"
    arrayWithPalettes={paletteImages}
  />
}
