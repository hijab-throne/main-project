import React from "react";
import ProductPage from "../../components/shared/ProductPage.jsx";

const CONTENT = {
  sq: {
    title: "Shalli Saten",
    description: "Shalli Saten është i njohur për butësinë dhe shkëlqimin e tij delikat; tekstura e lëmuar i lejon drapimet elegante pa rrudha, ndërsa materiali rrëshqitës siguron një veshje të rehatshme dhe të qëndrueshme gjatë gjithë ditës. Ai ofron një pamje rafinuar, e përshtatshme si për rastet formale ashtu edhe për përdorimin e përditshëm.",
    mainAlt: "Saten Hijab",
    featuresTitle: "Karakteristikat e Shall-it Saten",
    features: [
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
    ],
    details: [
      "<strong>Çmimi</strong> 900L"
    ],
  },
  en: {
    title: "Satin Hijab",
    description: "The satin hijab is known for its softness and delicate sheen; the smooth texture allows for elegant, wrinkle-free drapes, while the silky fabric ensures a comfortable, polished look all day. It offers a refined appearance, suitable for both formal occasions and everyday wear.",
    mainAlt: "Satin Hijab",
    featuresTitle: "Satin Hijab Features",
    features: [
      {
        title: "Elegant Sheen",
        description: "Satin has a smooth surface with a subtle sheen that gives every look a touch of luxury and elegance."
      },
      {
        title: "Ultra-Soft Feel",
        description: "The satin hijab feels exceptionally soft and silky against the skin, offering both comfort and refinement."
      },
      {
        title: "Perfect for Events",
        description: "Thanks to its sophisticated look, it's the ideal choice for evenings, parties, or formal occasions."
      },
      {
        title: "Controlled Slip",
        description: "Although satin is naturally slippery, a few small pins keep it secure all day long."
      },
      {
        title: "Feminine and Refined Effect",
        description: "The fabric has a natural drape that softly frames the face."
      },
      {
        title: "Rich, Eye-Catching Colors",
        description: "Satin hijabs come in deep, rich tones that shimmer in the light, drawing the eye in a subtle way."
      }
    ],
    details: [
      "<strong>Price</strong> 900L"
    ],
  },
};

export default function Saten(props) {
  const t = CONTENT[props.locale || "sq"] || CONTENT.sq;
  return <ProductPage pathname={props.pathname} locale={props.locale}
    features={t.features}
    details={t.details}
    title={t.title}
    description={t.description}
    mainImage="/saten/saten_main.png"
    mainAlt={t.mainAlt}
    featuresTitle={t.featuresTitle}
  />
}
