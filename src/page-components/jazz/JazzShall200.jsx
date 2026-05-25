import React from "react";
import ProductPage from "../../components/shared/ProductPage.jsx";

const CONTENT = {
  sq: {
    title: "Shalli Jazz",
    description: "Lehtësia dhe eleganca e këtij materiali i përshtatet në mënyrë të përkryer çdo rasti dhe stine. I njohur për rehatinë dhe mënyrën se si përshtatet në mënyrë ideale për çdo person.",
    mainAlt: "Jazz Hijab",
    featuresTitle: "Karakteristikat e Shall-it Jazz",
    features: [
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
    ],
    details: [
      "<strong>Përmasat</strong> 200:70 cm",
      "<strong>Firma</strong> Sedef",
      "<strong>Çmimi</strong> 1000L"
    ],
  },
  en: {
    title: "Jazz Hijab",
    description: "The lightness and elegance of this material make it a perfect fit for every occasion and season. Known for its comfort and how flawlessly it adapts to every wearer.",
    mainAlt: "Jazz Hijab",
    featuresTitle: "Jazz Hijab Features",
    features: [
      {
        title: "Light and Soft Material",
        description: "The Jazz hijab is made from a blend of light, soft fibers — typically cotton and viscose — making it comfortable to wear all day long."
      },
      {
        title: "Stretchy and Flexible",
        description: "The fabric stretches easily, making it versatile for use as a shawl, hijab, or fashion accessory."
      },
      {
        title: "Excellent Breathability",
        description: "Thanks to its light and airy nature, the Jazz hijab is great for every season and helps prevent sweating on warm days."
      },
      {
        title: "Non-Slip",
        description: "The fabric has a texture that holds its place well, eliminating the need for frequent adjustments."
      },
      {
        title: "Elegant, Modern Style",
        description: "The Jazz hijab offers a clean yet elegant look that complements outfits from casual to formal."
      },
      {
        title: "No Ironing Required",
        description: "The material barely wrinkles, so it rarely needs ironing — practical and perfect for travel."
      },
      {
        title: "Wide Range of Colors and Designs",
        description: "The Jazz hijab comes in a broad palette of colors and patterns, making it easy to match with any outfit."
      }
    ],
    details: [
      "<strong>Size</strong> 200:70 cm",
      "<strong>Brand</strong> Sedef",
      "<strong>Price</strong> 1000L"
    ],
  },
};

const paletteImages = {
  palette1: "/shall_jazz/paletat/1.png",
  palette2: "/shall_jazz/paletat/2.png",
  palette3: "/shall_jazz/paletat/3.png",
  palette4: "/shall_jazz/paletat/4.png",
};

export default function JazzShall200(props) {
  const t = CONTENT[props.locale || "sq"] || CONTENT.sq;
  return <ProductPage pathname={props.pathname} locale={props.locale}
    features={t.features}
    details={t.details}
    title={t.title}
    description={t.description}
    mainImage="/shall_jazz/main2.png"
    mainAlt={t.mainAlt}
    featuresTitle={t.featuresTitle}
    arrayWithPalettes={paletteImages}
  />
}
