import React from "react";
import ProductPage from "../../components/shared/ProductPage.jsx";

const CONTENT = {
  sq: {
    title: "Jersey",
    description: "Hijabi i materialit ZHARS (jersey) është shumë i preferuar për shkak të disa karakteristikave kryesore që e bëjnë të rehatshëm dhe praktik për përdorim të përditshëm.",
    mainAlt: "Chiffon Hijab",
    featuresTitle: "Karakteristikat e Shamise Jersey",
    features: [
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
    ],
    details: [
      "<strong>Përmasat</strong> 200:100 cm",
      "<strong>Firma</strong> Mercan",
      "<strong>Çmimi</strong> 900L"
    ],
  },
  en: {
    title: "Jersey",
    description: "The jersey (ZHARS) hijab is highly favored for several key qualities that make it comfortable and practical for everyday wear.",
    mainAlt: "Jersey Hijab",
    featuresTitle: "Jersey Hijab Features",
    features: [
      {
        title: "Stretchy and Flexible",
        description: "The fabric stretches and fits easily around the head without needing extra pins or clips."
      },
      {
        title: "Cozy and Comfortable",
        description: "Its softness makes it very pleasant to wear all day long."
      },
      {
        title: "Heavy and Non-Slip",
        description: "Thanks to its moderate weight, the jersey hijab stays in place and doesn't slip, avoiding the need for frequent adjustments."
      },
      {
        title: "Suitable for Every Season",
        description: "The material keeps you warm in winter and stays cool in summer, making it ideal year-round."
      },
      {
        title: "No Ironing Required",
        description: "The fabric resists wrinkling, so there's no need to iron it — perfect for daily use and travel."
      },
      {
        title: "Elegant Look",
        description: "The jersey hijab offers a neat, polished appearance that pairs with both casual and more sophisticated styles."
      }
    ],
    details: [
      "<strong>Size</strong> 200:100 cm",
      "<strong>Brand</strong> Mercan",
      "<strong>Price</strong> 900L"
    ],
  },
};

export default function Jersey200(props) {
  const t = CONTENT[props.locale || "sq"] || CONTENT.sq;
  return <ProductPage pathname={props.pathname} locale={props.locale}
    features={t.features}
    details={t.details}
    title={t.title}
    description={t.description}
    mainImage="/shall_jersey/main.png"
    showMainImage={false}
    mainAlt={t.mainAlt}
    featuresTitle={t.featuresTitle}
  />
}
