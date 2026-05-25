import React from "react";
import ProductPage from "../../components/shared/ProductPage.jsx";

const CONTENT = {
  sq: {
    title: "Shalli Krep",
    description: "Teksturë jashtëzakonisht e butë dhe e lehtë, sikur të mos e ndjeni fare. E përkryer për të gjitha rastet.",
    mainAlt: "Krep Hijab",
    featuresTitle: "Karakteristikat e Shall-it Krep",
    features: [
      {
        title: "Material Mat dhe Elegant",
        description: "Shalli krep ka një pamje të sofistikuar me teksturë të lehtë të rrudhur dhe përfundim mat që duket bukur në çdo lloj veshjeje."
      },
      {
        title: "Nuk Rrëshqet",
        description: "Falë strukturës së tij unike, materiali krep qëndron mirë në vend pa pasur nevojë për shumë kapëse apo gjilpëra."
      },
      {
        title: "I Rehatshëm dhe Pa Rrudhje",
        description: "Shumë i përshtatshëm për përdorim të përditshëm, nuk rrudhet lehtë dhe nuk kërkon hekurosje të shpeshtë."
      },
      {
        title: "Ajrosje dhe Komoditet",
        description: "Edhe pse ka një pamje të trashë, është i ajrosshëm dhe nuk të nxe gjatë verës, ndërkohë që ofron mbulim të plotë."
      },
      {
        title: "Stil Modern dhe Minimalist",
        description: "I thjeshtë në dizajn, por shumë i efektshëm për të krijuar një pamje elegante dhe të organizuar."
      },
      {
        title: "I Përshtatshëm për Çdo Rast",
        description: "Nga veshja e përditshme te ajo formale – shalli krep mund të kombinohet lehtë për çdo rast."
      }
    ],
    details: [
      "<strong>Përmasat</strong> 180:70 cm",
      "<strong>Firma</strong> Sedef",
      "<strong>Çmimi</strong> 1000L"
    ],
  },
  en: {
    title: "Krep Hijab",
    description: "An extraordinarily soft, light texture you'll barely feel. Perfect for every occasion.",
    mainAlt: "Krep Hijab",
    featuresTitle: "Krep Hijab Features",
    features: [
      {
        title: "Matte and Elegant Material",
        description: "The krep hijab has a sophisticated look with a subtle crinkled texture and matte finish that pairs beautifully with any outfit."
      },
      {
        title: "Non-Slip",
        description: "Thanks to its unique structure, the krep fabric stays securely in place without needing many pins or clips."
      },
      {
        title: "Comfortable and Wrinkle-Resistant",
        description: "Ideal for daily wear — it resists wrinkles and rarely needs ironing."
      },
      {
        title: "Breathable and Comfortable",
        description: "Despite its thicker appearance, the fabric breathes well and won't overheat you in summer, while still offering full coverage."
      },
      {
        title: "Modern, Minimalist Style",
        description: "Simple in design but highly effective in creating an elegant, polished look."
      },
      {
        title: "Suitable for Every Occasion",
        description: "From casual to formal — the krep hijab pairs effortlessly with any outfit."
      }
    ],
    details: [
      "<strong>Size</strong> 180:70 cm",
      "<strong>Brand</strong> Sedef",
      "<strong>Price</strong> 1000L"
    ],
  },
};

const paletteImages = {
  palette1: "/shall_krep/paletat/1.png",
  palette2: "/shall_krep/paletat/2.png",
  palette3: "/shall_krep/paletat/3.png",
  palette4: "/shall_krep/paletat/4.png",
};

export default function ShallKrep(props) {
  const t = CONTENT[props.locale || "sq"] || CONTENT.sq;
  return <ProductPage pathname={props.pathname} locale={props.locale}
    features={t.features}
    details={t.details}
    title={t.title}
    description={t.description}
    mainImage="/shall_krep/main.png"
    mainAlt={t.mainAlt}
    featuresTitle={t.featuresTitle}
    arrayWithPalettes={paletteImages}
  />
}
