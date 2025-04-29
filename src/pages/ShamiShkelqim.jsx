import ProductPage from "../components/shared/ProductPage.jsx";

const features = [
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
];


const details = [
  "<strong>Çmimi</strong> 1000L"
];

export default function ShamiShkelqim() {
  return <ProductPage
    features={features}
    details={details}
    title="Shami me shkëlqim"
    description="Shamia me shkëlqim është e njohur për teksturën e saj të lëmuar dhe pamjen elegante. Sipërfaqja me shkëlqim të lehtë i jep çdo veshjeje një prekje luksi dhe finesë. E butë në prekje dhe e lehtë për t'u modeluar, kjo shami kombinon rehatinë me një stil të rafinuar, duke e bërë atë të përshtatshme si për evenimente të veçanta, ashtu edhe për përdorim të përditshëm."
    mainImage="/landing_page/lulu/DSCF6721.jpg"
    showMainImage={false}
    hideColorCircle={true}
    imagePosition="object-top"
    mainAlt="Saten Hijab"
    featuresTitle="Karakteristikat e Shall-it Saten"
  />
}
