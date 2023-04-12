import { Box, styled, Typography } from "@mui/material";
import Carousel from "react-multi-carousel";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Title =styled('Typography')`
color:#FFFFFF;
`

const StyledBanner =styled('img')`
  width:100%
`
const Slide =({movies}) =>{

   return(
    <Carousel 
      responsive={responsive}
        infinite={true}
        swipeable={false}
        slidesToSlide={1}
        autoPlay={true}
        draggable={false}
      autoPlaySpeed={3000}
      keyBoardControl={true}
  >
        {movies.map((movie, index) => (
          <>
          <StyledBanner
            key={index}
            src={`https://images.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt="banner"
          />
          <Title>{movie.original_title}</Title>
          </>
        ))}
      </Carousel>
   )
}



export default Slide;