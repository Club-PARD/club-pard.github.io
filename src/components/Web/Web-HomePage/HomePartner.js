import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import DisquietImage from "../../../assets/img/Disquiet-partner.png";
import ImpactCampusImage from "../../../assets/img/ImpactCampus-partner.png";
import SImage from "../../../assets/img/S-partner.png";
import SpackImg from "../../../assets/img/SpackLab.png";
import AsanImg from "../../../assets/img/ASANImg.png";
import NextChallengeImg from "../../../assets/img/NextChallengeImg.png";
import dCamp from "../../../assets/img/dCamp.png";
import AWS from "../../../assets/img/AWS_logo.PNG";
import GyeongbukImg from "../../../assets/img/GyeongbukContentImg.png";

function HomePartner() {
  const handleClickSpark = () => {
    window.open("https://sparklabs.co.kr/kr/", "_blank");
  };
  const handleClickDiquiet = () => {
    window.open("https://disquiet.io/", "_blank");
  };
  const handleClickImpactCampus = () => {
    window.open("https://matching.impact.career/", "_blank");
  };
  const handleClickSwyg = () => {
    window.open("https://www.swygbro.com/", "_blank");
  };
  const handleClickAsan = () => {
    window.open("https://asan-nanum.org/", "_blank");
  };
  const handleClickNextChallenge = () => {
    window.open("https://www.ncf.or.kr/", "_blank");
  };
  const handleClickDcamp = () => {
    window.open("https://dcamp.kr/", "_blank");
  };
  const handleClickAWS = () => {
    window.open("https://aws.amazon.com/ko/?nc2=h_lg", "_blank");
  };
  const handleClickGyeongbuk = () => {
    window.open("https://www.gbcep.or.kr/");
  };

  const handleClick = () => {
    window.location.href = "mailto:official@we-pard.com";
  };

  return (
    <PartDiv>
      <ThemeProvider theme={theme}>
        <Header2>PARTNERS</Header2>
        <Header4>파드와 함께 해주신 후원사</Header4>
        <ContentWrapper>
          <AsanImgDiv onClick={handleClickAsan} src={AsanImg} alt="Asan" />
          <NextChallenge1Img
            onClick={handleClickNextChallenge}
            src={NextChallengeImg}
            alt="NextChallenge"
          />
          <SpackImgDiv onClick={handleClickSpark} src={SpackImg} alt="S" />
        </ContentWrapper>
        <ContentWrapper2>
          <ImpactCampusImage3
            onClick={handleClickImpactCampus}
            src={ImpactCampusImage}
            alt="Impact Campus"
          />
          <DisquietImage1
            onClick={handleClickDiquiet}
            src={DisquietImage}
            alt="Disquiet"
          />
          <SImage4 onClick={handleClickSwyg} src={SImage} alt="S" />
        </ContentWrapper2>
        <ContentWrapper3>
          <Dcamp onClick={handleClickDcamp} src={dCamp} alt="dCamp" />
          <AWSImg onClick={handleClickAWS} src={AWS} alt="AWS" />
          <GyeongbukImgDiv onClick={handleClickGyeongbuk} src={GyeongbukImg} alt="Gyeongbuk" />
        </ContentWrapper3>
        <ButtonDiv>
          <div style={{ width: "360px" }}>
            <DMButton>
              <Header5 onClick={handleClick}>후원 문의하기</Header5>
            </DMButton>
          </div>
        </ButtonDiv>
      </ThemeProvider>
    </PartDiv>
  );
}

export default HomePartner;

const Header2 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header2};
  font-weight: ${(props) => props.theme.fontWeights.Header2};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  margin-bottom: 25px;
  white-space: pre-line;
  text-align: center;
`;

const Header4 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header4};
  font-weight: ${(props) => props.theme.fontWeights.Header4};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  text-align: center;
`;

const PartDiv = styled.div`
  margin: 0px auto;
  height: 700px;
  justify-content: center;
  width: 1330px;
  margin-bottom: 265px;
`;

const DisquietImage1 = styled.img`
  width: 241px;
  height: 50px;
  margin-left: 100px;
  cursor: pointer;
`;

const AWSImg = styled.img`
  width: 140px;
  height: auto;
  margin-left: 30px;
  cursor: pointer;
`;

const Dcamp = styled.img`
  width: 180px;
  height: 7%;
  cursor: pointer;
`;

const ImpactCampusImage3 = styled.img`
  width: 366px;
  height: 50px;
  margin-left: -140px;
  cursor: pointer;
`;

const SImage4 = styled.img`
  width: 240px;
  height: 70px;
  margin-left: 150px;
  cursor: pointer;
`;

const NextChallenge1Img = styled.img`
  width: 223px;
  height: 40px;
  margin-right: 60px;
  cursor: pointer;
`;

const SpackImgDiv = styled.img`
  width: 217px;
  height: 60px;
  cursor: pointer;
`;

const AsanImgDiv = styled.img`
  width: 223px;
  height: 90px;
  margin-right: 65px;
  cursor: pointer;
`;

const GyeongbukImgDiv = styled.img`
  width: 250px;
  margin-left: 30px;
  cursor: pointer;
`;

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 120px;
  justify-content: center;
  gap: 85px;
`;

const ContentWrapper2 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 50px;
  margin-left: 80px;
  justify-content: center;
`;

const ContentWrapper3 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 70px;
  margin-right: 20px;
  justify-content: center;
  gap: 200px;
`;

const Header5 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header5};
  font-weight: ${(props) => props.theme.fontWeights.Header5};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  text-align: left;
  line-height: 140%;
  align-items: flex-start;
  display: flex;
  margin-top: 20px;
  margin-bottom: 15px;
  cursor: pointer;
`;

const DMButton = styled.div`
  align-items: center;
  display: flex;
  background-color: #5262F5;
  height: "57px";
  justify-content: center;
  width: "360px";
  border-radius: 10px;
  margin-top: 70px;
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: "75px";
`;