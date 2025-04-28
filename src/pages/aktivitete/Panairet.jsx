import React from "react";
import OptimizedImage from "../../components/ImageOptimized.jsx";

const panair_photos = [
      { id: 1, image: "/aktivitetet/panairet/2025/panair1.jpg" },
      { id: 1, image: "/aktivitetet/panairet/2025/panair2.jpg" },
      { id: 1, image: "/aktivitetet/panairet/2025/panair4.jpeg" },
      { id: 1, image: "/aktivitetet/panairet/2025/panair5.jpg" },
      { id: 1, image: "/aktivitetet/panairet/2025/panair6.jpg" },
      { id: 1, image: "/aktivitetet/panairet/2025/panair7.jpg" },
      { id: 1, image: "/aktivitetet/panairet/2025/panair8.jpg" },
      { id: 1, image: "/aktivitetet/panairet/2025/panair9.jpg" },
      { id: 1, image: "/aktivitetet/panairet/2025/panair10.jpg" },
    ]
const Panairet = () => {
  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-xl md:text-4xl font-bold text-center text-gray-800 mb-8">
         Panairet e Autizmit
        </h1>

        <section className="mb-12">
          <p className="text-sm md:text-lg text-center text-gray-600">
            Hijab Throne është gjithashtu e angazhuar në mbështetjen e fëmijëve me autizëm dhe familjeve të tyre përmes pjesëmarrjes në panaire dhe evente të dedikuara. Gjatë këtyre panaireve, ne ofrojmë ndihmë përmes donacioneve dhe krijojmë hapësira ndërgjegjësimi për të promovuar përfshirjen dhe mirëkuptimin për personat me autizëm. Këto aktivitete janë një mundësi për të rritur ndërgjegjësimin mbi sfidat që hasin fëmijët me autizëm dhe për të mbështetur organizatat që punojnë për përmirësimin e jetës së tyre.
          </p>
          <p className="text-sm md:text-lg text-center text-gray-600 mt-4">
           Përmes këtyre iniciativave, ne synojmë jo vetëm të mbledhim fonde, por edhe të rrisim ndërgjegjësimin dhe të nxisim solidaritetin në komunitetin tonë.
          </p>
        </section>

        <section className="flex flex-wrap justify-center gap-4">
          {panair_photos.map((item) => (
              <OptimizedImage
                  key={item.id}
                  src={item.image}
                  alt={`Sfilata ${item.id}`}
                  className="w-40 h-40 object-cover rounded-lg shadow-md"
              />
          ))}
        </section>

      </div>
    </div>
  );
};

export default Panairet;