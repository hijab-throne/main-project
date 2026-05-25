import React from "react";
import ProductPage from "../../components/shared/ProductPage.jsx";

const CONTENT = {
  sq: {
    title: "Shalli Chiffon",
    description: "Shalli Chiffon është i njohur për lehtësinë dhe elegancën e tij, duke qenë një nga materialet më të preferuara për veshjet e vajzave me shami.",
    mainAlt: "Chiffon Hijab",
    featuresTitle: "Karakteristikat e Shall-it Chiffon",
    features: [
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
    ],
    details: [
      "<strong>Përmasat</strong> 180:70 cm",
      "<strong>Firma</strong> Sedef",
      "<strong>Çmimi</strong> 800L"
    ],
  },
  en: {
    title: "Chiffon Hijab",
    description: "The Chiffon hijab is known for its lightness and elegance, being one of the most preferred materials for women's modest fashion.",
    mainAlt: "Chiffon Hijab",
    featuresTitle: "Chiffon Hijab Features",
    features: [
      {
        title: "Light and Thin Material",
        description: "Chiffon is a very light and thin material that creates an airy, weightless look."
      },
      {
        title: "Soft and Comfortable",
        description: "The chiffon hijab feels soft and pleasant to the touch, making it comfortable to wear all day long."
      },
      {
        title: "Excellent Breathability",
        description: "Thanks to its thin structure, this material is highly breathable and ideal for warm weather."
      },
      {
        title: "Sheer and Delicate",
        description: "The fabric has a sheer, translucent effect that gives it an elegant, feminine appearance."
      },
      {
        title: "Slippery",
        description: "One downside of chiffon is that it can slip easily, so pins or clips are often needed."
      },
      {
        title: "Elegant and Formal Style",
        description: "Thanks to its luxurious and graceful look, the chiffon hijab is well suited for formal occasions."
      }
    ],
    details: [
      "<strong>Size</strong> 180:70 cm",
      "<strong>Brand</strong> Sedef",
      "<strong>Price</strong> 800L"
    ],
  },
};

const arrayWithPalettes = {
  palette1: "/shall_chiffon/paletat/1.png",
  palette2: "/shall_chiffon/paletat/2.png",
  palette3: "/shall_chiffon/paletat/3.png",
  palette4: "/shall_chiffon/paletat/4.png",
};

export default function ChiffonShall180(props) {
  const t = CONTENT[props.locale || "sq"] || CONTENT.sq;
  return <ProductPage pathname={props.pathname} locale={props.locale}
    features={t.features}
    details={t.details}
    title={t.title}
    description={t.description}
    mainImage="/shall_chiffon/main.png"
    mainAlt={t.mainAlt}
    featuresTitle={t.featuresTitle}
    arrayWithPalettes={arrayWithPalettes}
  />
}
