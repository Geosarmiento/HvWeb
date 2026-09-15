/*import Swiper core and required modules*/

import {  EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./Slider1.scss"

const projectList = [
  { id: 1, name: "Design Graphic", role: "Visual Creative", image: "/img/design.png" },
  { id: 2, name: "Frontend Design", role: "Interface & Experience", image: "/img/frontend.png" },
  { id: 3, name: "Design 3D", role: "Modeling and Render", image: "/img/3d.png" },
  { id: 4, name: "Branding", role: "Visual Identid", image: "/img/branding.png" },
  { id: 5, name: "Web App", role: "Modern Interface", image: "/img/webApp.png" },
];

const Slider1 = () => {
  return (
    <div>
      <div className="general">
    <Swiper 
      // install Swiper modules
      modules={[EffectCoverflow]}
      loop={true}
      centeredSlides={true}
      effect={'coverflow'} // Efecto 3d
      initialSlide={2} // Elije la imagen activa
      grabCursor={true} //Cambia el mouse a mano
      slidesPerView={"auto"} // Cuantas imagenes se muestran
      spaceBetween={-30}// espaciado entre imagenes
      touchRatio={0.5} // Reduce la velocidad/sensibilidad del arrastre manual (0.5 = la mitad de velocidad)
      speed={600} // Duración de la animación de transición en milisegundos (más alto = más suave)
   
      /* 🛠️ CONFIGURACIÓN DE VISTA Y CLONES */
      //slidesPerView={'auto'} // Mantiene el flujo Coverflow responsivo según el ancho del CSS
      loopedSlides={2}
      coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 80,
          modifier: 1,
          slideShadows: false 
          }}
          
      //navigation
      //pagination={{ clickable: true }}
      //scrollbar={{ draggable: true }}
      //onSwiper={(swiper) => console.log(swiper)}
      //onSlideChange={() => console.log('slide change')}
    >
      
     {/* //<SwiperSlide>Slide 1</SwiperSlide>
     // <SwiperSlide>Slide 2</SwiperSlide>
      //<SwiperSlide>Slide 3</SwiperSlide>
      /*<SwiperSlide>Slide 4</SwiperSlide>
      */}
      
{projectList.map((member) => (
          <SwiperSlide key={member.id}>
          
              <div className="title_container_card">

              <img className="imagenes"
                src={member.image}
                alt={member.name}
              />

              <div className="title_container">
                <h3 className="title">{member.name}</h3>
                <p className="parafo">{member.role}</p>
              </div>

              </div>
             
              
           
           
          </SwiperSlide>
        ))}

    </Swiper>
    </div>
      
    </div>
  )
}




export default Slider1