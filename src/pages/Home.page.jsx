// import React, { useState } from "react";

// // Layout Hoc
// import DefaultLayout from "../layout/Default.layout";


// // Components
// import HeroCarousel from "../components/HeroCarousel/HeroCarouselComponent";
// import PosterSlider from "../components/PosterSlider/PosterSlider.Component";
// import EntertainmentCardComponent from './../components/Entertainment/EntertainmentCardComponent';



// const HomePage = () => {
//   const [recomendedMovies, setRecomendedMovies] = useState ([]);
//   const [premierMovies, SetPremierMovies ] = useState([]);
//   const [onlineStreamEvents, setOnlineStreamEvents ] = useState([]);
//   return (
//     <>
//       <HeroCarousel />
//       <div className="container mx-auto px-4 md:px-12 my-8">
//         <h1 className="text-2xl font-bold text-gray-800 sm;ml-0 my-3">
//           The Best Of Entertainment
//         </h1>
//         <EntertainmentCardComponent />
//       </div>
//       <div className="container mx-auto px-4 md:px-12 my-8">
//         <PosterSlider
//           title="Recomended Movies"
//           subject="List Of recomended Movie"
//           poster={recomendedMovies}
//           isDark={false}
//         />
//       </div>

//       <div
//         className="container mx-auto px-4 md:12 my-8 
//       flex flex-col gap-3"
//       >
//         <div class="hidden md:flex">
//           {/* <img
//             src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fndtv.in%2Findia%2Fegypt-shows-interest-in-buying-tejas-fighter-aircraft-other-military-equipment-from-india-ndtv-hindi-ndtv-india-3725051&psig=AOvVaw1Xs-3UvqrOucNhWUqydmbO&ust=1683018292018000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCND-0O3h0_4CFQAAAAAdAAAAABAW"
//             alt="Rupay"
//             className="w-full h-full"
//           /> */}
//           <PosterSlider
//             titile="Premiers"
//             subject="Brand new releases every Frieday"
//             poster={premierMovies}
//             isDark={true}
//           />
//         </div>
//       </div>
//       <div className="container mx-auto px-4 md:px-12 my-8 ">
//         <PosterSlider
//           title="Online Streaming Events"
//           subject="Online Stream Events"
//           poster={onlineStreamEvents}
//           isDark={false}
//         />
//       </div>
//     </>
//   );
// };

// export default DefaultLayout(HomePage);






import React, { useState } from "react";

// Layout HOC
import DefaultLayoutHoc from "../layout/Default.layout";

// Components

import PosterSlider from "../components/PosterSlider/PosterSlider.Component";
import EntertainmentCard from "../components/Entertainment/EntertainmentCardComponent";
import HeroCarousel from "../components/HeroCarousel/HeroCarouselComponent";


const HomePage = () => {
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [premierMovies, setPremierMovies] = useState([]);
  const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);

  return (
    <>
      <HeroCarousel />

      <div className="container mx-auto px-4 md:px-12 my-8">
        <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">
          The best of Entertainment
        </h1>
        <EntertainmentCard/>
      </div>

      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSlider
          title="Recommended Movies"
          subtitle="List of recommonded movies"
          posters={recommendedMovies}
          isDark={false}
        />
      </div>

      <div className="bg-premier-800 py-12">
        <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
          <div className="hidden md:flex">
            <img
              src=""
              alt="Rupay"
              className="w-full h-full"
            />
          </div>
          <PosterSlider
            title="Premiers"
            subtitle="Brand new releases every Friday"
            posters={premierMovies}
            isDark={true}
          />
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSlider
          title="Online Streaming Events"
          subtitle="Online Stream Events"
          posters={onlineStreamEvents}
          isDark={false}
        />
      </div>
    </>
  );
};

export default DefaultLayoutHoc(HomePage);
