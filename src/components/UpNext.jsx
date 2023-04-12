import { Box, Typography, styled } from "@mui/material";

const Component = styled(Box)`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  padding-left: 20px;
  & > p {
    color: #ffd93d;
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 10px;
  }
`;
const Wrapper = styled(Box)`
  color: #ffffff;
  display: flex;
`;

const Poster = styled("img")({
  width: 88,
});

const UpNext = ({ movies }) => {
  return (
    <Component>
      <Typography>Up Next</Typography>
      {movies.splice(0, 3).map((movie, index) => (
        <Wrapper key={index}>
          <Poster
            src={`https://images.tmdb.org/t/p/original/${movie.poster_path}`}
          />
          <Typography >{movie.original_title}</Typography>
        </Wrapper>
      ))}
    </Component>
  );
};

export default UpNext;
