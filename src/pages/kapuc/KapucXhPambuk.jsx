import React from "react";
import ProductPage from "../../components/shared/ProductPage.jsx";

const features = [
  {
    title: "Material i Butë dhe Elastik",
    description: "Kapuçet janë të punuara me material elastik dhe të butë, që përshtatet lehtësisht me formën e kokës për rehati maksimale."
  },
  {
    title: "Mbajtje e Sigurt pa Rrëshqitje",
    description: "Kapuçet qëndrojnë mirë në vend pa pasur nevojë për kapëse shtesë, duke ofruar siguri gjatë gjithë ditës."
  },
  {
    title: "Dizajn Minimalist dhe Praktik",
    description: "Me një dizajn të thjeshtë dhe të pastër, kapuçet janë ideale për përdorim të përditshëm dhe kombinime të ndryshme."
  },
  {
    title: "Përshtatshmëri për Nën-aksesore",
    description: "Kapuçet janë të përshtatshme për t'u veshur nën shamia apo shalla, duke i dhënë një bazë të qëndrueshme dhe të rregullt veshjes."
  },
  {
    title: "Ajrosje dhe Freski",
    description: "Materiali lejon frymëmarrjen e lëkurës, duke shmangur mbinxehjen dhe e bërë kapuçin të rehatshëm edhe në ditë të ngrohta."
  },
  {
    title: "I Përshtatshëm për Të Gjitha Mënyrat e Veshjes",
    description: "Pavarësisht stilit, kapuçi përshtatet me veshje sportive, casual, ose më elegante, duke e bërë një aksesor shumëfunksional."
  }
];


const details = [
  "<strong>Çmimi</strong> 500L"
];

export default function KapucXhPambuk() {
  return <ProductPage
    features={features}
    details={details}
    title="Kapuc me pambuk lidhese xhufke"
    description="Kapuçet janë aksesorë esencialë për çdo stil modest veshjeje, duke ofruar rehati, qëndrueshmëri dhe pamje të pastër."
    mainAlt="Kapuc"
    hideColorCircle={true}
    showMainImage={false}
    featuresTitle="Karakteristikat e Kapucit me pambuk lidhese xhufke"
  />
}
