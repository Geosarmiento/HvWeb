import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import "./Slider.scss";

const teamMembers = [
  { id: 1, name: "Design Graphic", role: "Visual Creative", image: "/img/web1.png" },
  { id: 2, name: "Frontend Design", role: "Interface & Experience", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600" },
  { id: 3, name: "Sofia Rossi", role: "3D Artist", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600" },
  { id: 4, name: "Carlos Rivera", role: "Lead Developer", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600" },
  { id: 5, name: "Edgar Zaya", role: "CTO", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600" },
];

export default function TeamCoverflow() {
  return (
    <div className="general">
      <Swiper 
  className="Slider"
  modules={[EffectCoverflow, Autoplay]}
  effect={'coverflow'}
  grabCursor={true}
  centeredSlides={true}///
  loop={true}
  
  slidesPerView={'auto'}
  
  /* 🛠️ SOLUCIÓN PARA DESKTOP: Define el número de clones para el loop */
  loopedSlides={5}
  loopAdditionalSlides={1}
  
  /* 🛠️ APUNTA AL CENTRO REAL: Si tienes 5 tarjetas (índices 0, 1, 2, 3, 4), el centro es 2 */
  initialSlide={2} ///

  observer={true}
  observeParents={true}
  resizeObserver={true}
  
  coverflowEffect={{
    rotate: 20,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false  }}
>
        {teamMembers.map((member) => (
          <SwiperSlide key={member.id}>
            <div className="relative w-full h-full">
              <img 
                className="imagenes"
                src={member.image}
                alt={member.name}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="text-xs text-slate-300">{member.role}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}