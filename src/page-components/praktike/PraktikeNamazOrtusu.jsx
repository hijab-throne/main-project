import React from "react";
import ProductPage from "../../components/shared/ProductPage.jsx";

const CONTENT = {
  sq: {
    title: "Shami Praktike Namaz Ortusu",
    description: "Zbulo koleksionin tonë të shamive praktike – të lehta për t’u veshur, të rehatshme për përdorim ditor dhe të disponueshme në lloje të ndryshme për çdo stil dhe nevojë.",
    mainAlt: "Chiffon Hijab",
    featuresTitle: "Karakteristikat e Shamise Praktike",
    features: [
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
    ],
    details: [
      "<strong>Çmimi</strong> 600L"
    ],
  },
  en: {
    title: "Practical Namaz Örtüsü",
    description: "Discover our collection of practical hijabs — easy to wear, comfortable for daily use, and available in different styles to suit every need.",
    mainAlt: "Chiffon Hijab",
    featuresTitle: "Practical Hijab Features",
    features: [
      {
        title: "Light and Practical",
        description: "The practical hijab is designed for everyday wear — lightweight and wrinkle-free, with no ironing required."
      },
      {
        title: "All-Day Comfort",
        description: "The soft, flexible fabric provides full comfort with no tension on the head or neck."
      },
      {
        title: "Breathable and Cool",
        description: "Ideal for any season, this hijab allows natural airflow and doesn't overheat even after hours of wear."
      },
      {
        title: "Quick and Easy to Wear",
        description: "Designed for active women, it can be put on without a mirror and stays in place without unwanted slipping."
      },
      {
        title: "Non-Slip",
        description: "The fabric texture grips easily over hair or underscarves, removing the need for multiple pins."
      },
      {
        title: "Minimalist Yet Elegant Style",
        description: "Neutral colors and a clean design make it perfect for work, school, or daily outings."
      }
    ],
    details: [
      "<strong>Price</strong> 600L"
    ],
  },
};

export default function PraktikeNamazOrtusu(props) {
  const t = CONTENT[props.locale || "sq"] || CONTENT.sq;
  return <ProductPage pathname={props.pathname} locale={props.locale}
    features={t.features}
    details={t.details}
    title={t.title}
    description={t.description}
    mainImage="/shall_chiffon/main_img.png"
    mainAlt={t.mainAlt}
    showMainImage={false}
    hideColorCircle={true}
    featuresTitle={t.featuresTitle}
  />
}
