import styled from "styled-components";
const MovieDetailsStyled = styled.div`
  display: flex;
  margin-bottom: 20px;
  .detailsImg {
    margin-right: 50px;
  }
  .detailsTitle {
    margin-bottom: 30px;
    font-size: 50px;
    text-transform: uppercase;
    color: #0732a8;
  }
  .detailsSubtitle {
    margin-bottom: 15px;
    font-size: 30px;
    color: #819ff5;
  }
  .detailsOverview {
    display: block;
    font-weight: 500;
    font-size: 20px;
    margin-bottom: 15px;
    color: #6f7b9c;
  }
  .detailsList {
    text-align: left;
    list-style: square outside;
  }
  .detailsItem {
    margin-left: 20px;
    color: #0f3292;
    font-size: 20px;
    font-weight: 500;
  }
`;

export default MovieDetailsStyled;
