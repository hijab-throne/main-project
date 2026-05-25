import ProductPage from "../components/shared/ProductPage.jsx";

const CONTENT = {
  sq: {
    title: "Shami me shkëlqim",
    description: "Shamia me shkëlqim është e njohur për teksturën e saj të lëmuar dhe pamjen elegante. Sipërfaqja me shkëlqim të lehtë i jep çdo veshjeje një prekje luksi dhe finesë. E butë në prekje dhe e lehtë për t'u modeluar, kjo shami kombinon rehatinë me një stil të rafinuar, duke e bërë atë të përshtatshme si për evenimente të veçanta, ashtu edhe për përdorim të përditshëm.",
    mainAlt: "Saten Hijab",
    featuresTitle: "Karakteristikat e Shall-it Saten",
    features: [
      {
        title: "Shkëlqim Elegant",
        description: "Sipërfaqe e lëmuar me një shkëlqim të lehtë që i jep pamjes një prekje luksi dhe elegance."
      },
      {
        title: "Ndjesi Super e Butë",
        description: "Teksturë jashtëzakonisht e butë dhe e këndshme në lëkurë për rehati maksimale."
      },
      {
        title: "Ideale për Evenimente",
        description: "Perfekte për mbrëmje, festa apo evente të tjera që kërkojnë një pamje të sofistikuar."
      },
      {
        title: "Rrëshqitje e Kontrolluar",
        description: "Megjithëse materiali është natyrshëm rrëshqitës, me disa kapëse të vogla mund të qëndrojë i fiksuar gjatë gjithë ditës."
      },
      {
        title: "Efekt Femëror dhe i Rafinur",
        description: "Ka një rënie natyrale që i jep një formë të butë dhe të hijshme fytyrës."
      },
      {
        title: "Ngjyra të Pasura dhe Tërheqëse",
        description: "Disponohet në nuanca të thella dhe të pasura që shkëlqejnë bukur nën dritë."
      }
    ],
    details: [
      "<strong>Çmimi</strong> 1000L"
    ],
  },
  en: {
    title: "Shimmer Hijab",
    description: "The shimmer hijab is known for its smooth texture and elegant appearance. The subtly shining surface gives any outfit a touch of luxury and refinement. Soft to the touch and easy to style, this hijab combines comfort with sophistication, making it suitable for both special events and everyday wear.",
    mainAlt: "Satin Hijab",
    featuresTitle: "Satin Hijab Features",
    features: [
      {
        title: "Elegant Sheen",
        description: "A smooth surface with a subtle sheen that adds a touch of luxury and elegance to your look."
      },
      {
        title: "Ultra-Soft Feel",
        description: "An extraordinarily soft, skin-friendly texture for maximum comfort."
      },
      {
        title: "Perfect for Events",
        description: "Ideal for evenings, parties, or other occasions that call for a sophisticated look."
      },
      {
        title: "Controlled Slip",
        description: "Although the fabric is naturally slippery, a few small pins keep it secure all day long."
      },
      {
        title: "Feminine and Refined Effect",
        description: "It has a natural drape that softly frames the face with elegance."
      },
      {
        title: "Rich, Eye-Catching Colors",
        description: "Available in deep, rich tones that shimmer beautifully in the light."
      }
    ],
    details: [
      "<strong>Price</strong> 1000L"
    ],
  },
};

export default function ShamiShkelqim(props) {
  const t = CONTENT[props.locale || "sq"] || CONTENT.sq;
  return <ProductPage pathname={props.pathname} locale={props.locale}
    features={t.features}
    details={t.details}
    title={t.title}
    description={t.description}
    mainImage="/landing_page/lulu/DSCF6721.jpg"
    showMainImage={false}
    hideColorCircle={true}
    imagePosition="object-top"
    mainAlt={t.mainAlt}
    featuresTitle={t.featuresTitle}
  />
}
