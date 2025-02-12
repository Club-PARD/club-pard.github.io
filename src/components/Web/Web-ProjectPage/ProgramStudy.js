import styled from "styled-components";
import img1 from "../../../assets/img/study_1.png";
import img2 from "../../../assets/img/study_2.png";
import img3 from "../../../assets/img/study_3.png"
import img4 from "../../../assets/img/study_4.png";
import img5 from "../../../assets/img/study_5.png";

function ProgramSeminar() {
  const cardData = [
    {
      id: 1,
      image: img1,
    },
    {
      id: 2,
      image: img2,
    },
    {
      id: 3,
      image: img3,
    },
    {
      id: 4,
      image: img4,
    },
    {
      id: 5,
      image: img5,
    },
  ];

  return (
    <SeminarDiv>
      {cardData.map((content) => (
        <Card key={content.id}>
          <CardImage src={content.image} alt={`Card ${content.id}`} />
        </Card>
      ))}
    </SeminarDiv>
  );
}

export default ProgramSeminar;

const SeminarDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const Card = styled.div`
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  width: 330px;
  height: 304px;  
  margin-right: 40px;
  border-radius: 20px;
`;

const CardImage = styled.img`
  // object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 20px;
`;