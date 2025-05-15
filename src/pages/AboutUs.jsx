import OptimizedImage from "../components/ImageOptimized.jsx";

const AboutUs = () => {
  return (
    <div className="py-16 px-6 md:px-20">

      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-xl md:text-4xl font-extrabold text-gray-800">Rreth Nesh</h2>
        <p className="mt-4 text-lg text-gray-600">
        Hijab Throne u krijua për të ofruar hijabe cilësore dhe elegante, të dizajnuara për çdo stil dhe rast. Ne ofrojmë një koleksion të gjerë shajesh, të cilat pasqyrojnë përkushtimin tonë ndaj cilësisë dhe shijes, duke plotësuar nevojat e grave shqiptare për veshje që reflektojnë besimin dhe personalitetin e tyre unik.        </p>
      </div>

          <div className="w-full flex justify-center">
              <OptimizedImage
            src="/landing_page/image00057.jpeg"
            alt="About us"
            width={1644}
            height={1184}
            imageClassName='object-cover object-top md:object-center'
            className="max-h-[400px] max-w-full md:max-w-[800px] rounded-lg mt-4"
          />
          </div>

      <div className="mt-12 space-y-12 max-w-5xl mx-auto">
        {[{
          title: "Si Lindi Hijab Throne?",
          content: "Historia e Hijab Throne nisi nga dëshira për të sjellë një koleksion hijabesh të bukura dhe cilësore për gratë shqiptare. Pasi identifikuam një mungesë mundësish në treg, vendosëm të ofrojmë një platformë ku gratë mund të gjenin shaje të stilizuara, të dizajnuara me kujdes dhe që reflektonin stilin e jetesës dhe besimin e tyre. Edhe pse ne nuk i prodhojmë vetë, ne punojmë me markat më të besueshme për t'ju ofruar produkte të cilësisë së lartë."
        }, {
          title: "Inspirimi",
          content:"Frymëzimi ynë vjen nga dëshira e grave shqiptare për të gjetur hijabe që respektojnë traditën, por gjithashtu ofrojnë mundësi për shprehje personale dhe stil të modernizuar. Me këtë frymë, krijuam një hapësirë ku mund të zgjidhni nga një gamë e gjerë shajesh, nga ato përditshme deri te hijabet për raste speciale."
        }, {
          title: "Fillimet",
          content:"Pasi filluam të eksperimentojmë me materiale cilësore dhe dizajne të ndryshme, Hijab Throne u themelua me qëllimin për të ofruar diçka të veçantë për tregun shqiptar. Ne ofrojmë një përvojë të shkëlqyer blerjeje, ku çdo produkt është një përzgjedhje e kujdesshme për të sjellë më të mirën për ju."
        }, {
          title: "Rritja",
          content:"Gjatë periudhës së shkurtër që prej hapjes, Hijab Throne ka njohur një rritje të qëndrueshme falë mbështetjes dhe besnikërisë së klientëve tanë. Sot, jemi krenarë që jemi një nga zgjedhjet më të njohura për hijabe në Shqipëri, dhe vazhdojmë të rritemi çdo ditë."
        }, {
          title: "E Ardhmja",
          content:"Ne jemi të përkushtuar për të vazhduar inovimin dhe për të sjellë hijabet më të bukura dhe funksionale për gratë në Shqipëri dhe më gjerë. Synimi ynë është të krijojmë një të ardhme ku çdo grua të ndihet e fuqizuar dhe e bukur me hijabin e duhur nga Hijab Throne."
        }, {
          title: "Vizioni Ynë",
          content:"Vizioni ynë është të bëhemi lider në tregun e modës modeste në Shqipëri, duke ofruar hijabe që kombinojnë traditën me stilin modern. Ne synojmë të fuqizojmë gratë, duke ofruar shaje që i bëjnë të ndihen të rehatshme dhe të bukura, ndërkohë që respektojnë identitetin dhe besimin e tyre. Përmes përkushtimit ndaj cilësisë dhe diversitetit, ne synojmë të krijojmë një komunitet mbështetës ku çdo grua mund të gjejë hijabin që pasqyron stilin dhe personalitetin e saj unik."
        }].map((section, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6"
          >
            <h3 className="text-2xl font-semibold text-gray-800">{section.title}</h3>
            <p className="mt-2 text-gray-600">{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
