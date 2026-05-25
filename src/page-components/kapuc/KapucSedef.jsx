import React from "react";
import ProductPage from "../../components/shared/ProductPage.jsx";

const CONTENT = {
  sq: {
    title: "Ninxha Pambuk Sedef",
    description: "Kapuçet janë aksesorë esencialë për çdo stil modest veshjeje, duke ofruar rehati, qëndrueshmëri dhe pamje të pastër.",
    mainAlt: "Kapuc",
    featuresTitle: "Karakteristikat e Kapucit Pambuk Sedef",
    features: [
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
    ],
    details: [
      "<strong>Çmimi</strong> 500L"
    ],
  },
  en: {
    title: "Ninja Cotton Sedef",
    description: "Underscarves are essential accessories for any modest wardrobe, offering comfort, stability, and a clean finish.",
    mainAlt: "Underscarf",
    featuresTitle: "Cotton Sedef Underscarf Features",
    features: [
      {
        title: "Soft and Stretchy Material",
        description: "These underscarves are made from soft, stretchy fabric that easily conforms to the shape of your head for maximum comfort."
      },
      {
        title: "Secure, Non-Slip Fit",
        description: "The underscarves stay firmly in place without needing extra clips, offering all-day security."
      },
      {
        title: "Minimalist and Practical Design",
        description: "With a simple, clean design, these underscarves are ideal for daily wear and pair well with a variety of looks."
      },
      {
        title: "Perfect Base Layer",
        description: "These underscarves are perfect for wearing beneath hijabs or shawls, providing a stable, tidy foundation for your outfit."
      },
      {
        title: "Breathable and Cool",
        description: "The fabric lets your skin breathe, preventing overheating and keeping the underscarf comfortable even on warm days."
      },
      {
        title: "Suitable for Every Style",
        description: "Regardless of your style, this underscarf pairs with sportswear, casual, or more elegant looks — a true multipurpose accessory."
      }
    ],
    details: [
      "<strong>Price</strong> 500L"
    ],
  },
};

export default function KapucSedef(props) {
  const t = CONTENT[props.locale || "sq"] || CONTENT.sq;
  return <ProductPage pathname={props.pathname} locale={props.locale}
    features={t.features}
    details={t.details}
    title={t.title}
    description={t.description}
    mainAlt={t.mainAlt}
    hideColorCircle={true}
    showMainImage={false}
    featuresTitle={t.featuresTitle}
  />
}
