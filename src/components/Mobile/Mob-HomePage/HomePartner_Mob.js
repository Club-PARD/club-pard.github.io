import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import DisquietImage from "../../../assets/img/Disquiet-partner.png";
import LincImage from "../../../assets/img/Linc-partner.png";
import ImpactCampusImage from "../../../assets/img/ImpactCampus-partner.png";
import SImage from "../../../assets/img/S-partner.png";
import SpackImg from "../../../assets/img/SpackLab.png";
import AsanImg from "../../../assets/img/ASANImg.png";
import MobitImg from "../../../assets/img/MobitImg.png";
import NextChallengeImg from "../../../assets/img/NextChallengeImg.png";
import PickPly from "../../../assets/img/Pickply_Img.png";
import dCamp from "../../../assets/img/dCamp.png";
import AWS from "../../../assets/img/AWS_logo.PNG";

function HomePartnerMob() {
  const handleClickSpark = () => {
    window.open("https://sparklabs.co.kr/kr", "_blank");
  };
  const handleClickDiquiet = () => {
    window.open("https://disquiet.io/", "_blank");
  };
  const handleClickImpactCampus = () => {
    window.open("https://impact.career/", "_blank");
  };
  const handleClickLink = () => {
    window.open("https://linc30.handong.edu/", "_blank");
  };
  const handleClickSwyg = () => {
    window.open("https://www.swygbro.com", "_blank");
  };
  const handleClickAsan = () => {
    window.open("https://asan-nanum.org", "_blank");
  };
  const handleClickMobit = () => {
    window.open("https://www.momit.co.kr", "_blank");
  };
  const handleClickNextChallenge = () => {
    window.open("https://www.ncf.or.kr/", "_blank");
  };
  const handleClickPickPly = () => {
    window.open("https://pickply.com/company ", "_blank");
  };
  const handleClickDcamp = () => {
    window.open("https://dcamp.kr/", "_blank");
  };
  const handleClickAWS = () => {
    window.open("https://aws.amazon.com/ko/free/?gclid=Cj0KCQiA-5a9BhCBARIsACwMkJ5dcnUOTEANjDAzC9lgVnQh9AdBFb-VYpSZc37HyZrLWINPsS0tAOcaAshuEALw_wcB&trk=fa2d6ba3-df80-4d24-a453-bf30ad163af9&sc_channel=ps&ef_id=Cj0KCQiA-5a9BhCBARIsACwMkJ5dcnUOTEANjDAzC9lgVnQh9AdBFb-VYpSZc37HyZrLWINPsS0tAOcaAshuEALw_wcB:G:s&s_kwcid=AL!4422!3!563761819834!e!!g!!aws!15286221779!129400439466&all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=*all", "_blank");
  };
  const handleClick = () => {
    window.open("mailto:official@we-pard.com", "_blank");
  };

  return (
    <Div>
      <PartDiv>
        <ThemeProvider theme={theme}>
          <Header7>PARTNERS</Header7>
          <Subtitle3>함께하는 성장을 돕는 후원사</Subtitle3>
          <ContentWrapper>
            <AsanImgDiv onClick={handleClickAsan} src={AsanImg} alt="Asan" />
            <NextChallenge1Img
              onClick={handleClickNextChallenge}
              src={NextChallengeImg}
              alt="NextChallenge"
            />
            <Spacklab
              onClick={handleClickSpark}
              src={SpackImg}
              alt="SparkLab"
            />
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
            {/* <LincImage2 onClick={handleClickLink} src={LincImage} alt="Linc" /> */}
            <SImage4 onClick={handleClickSwyg} src={SImage} alt="S" />
            {/* <MobitDiv onClick={handleClickMobit} src={MobitImg} alt="Mobit" /> */}
            {/* <PickPlyDiv
              onClick={handleClickPickPly}
              src={PickPly}
              alt="PickPly"
            /> */}
            <Dcamp onClick={handleClickDcamp} src={dCamp} alt="dCamp" />
            <AWSImg onClick={handleClickAWS} src={AWS} alt="AWS" />
          </ContentWrapper>
          <Button1 onClick={handleClick}>후원 문의하기</Button1>
        </ThemeProvider>
      </PartDiv>
    </Div>
  );
}

export default HomePartnerMob;

const Header7 = styled.div`
  font-size: ${(props) => props.theme.Mob_fontSizes.Header7};
  font-weight: ${(props) => props.theme.fontWeights.Header7};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  margin-bottom: 30px;
  white-space: pre-line;
  text-align: center;
`;

const Subtitle3 = styled.div`
color: #FFF;
font-family: "NanumSquare Neo";
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 155%; /* 31px */
  white-space: pre-line;
  text-align: center;
`;

const DisquietImage1 = styled.img`
  width: 115px;
  height: auto;
  cursor: pointer;
`;

const LincImage2 = styled.img`
  width: 40%;
  height: auto;
  padding-top: 60px;
  cursor: pointer;
`;

const ImpactCampusImage3 = styled.img`
  width: 154px;
  height: auto;
  cursor: pointer;
`;

const SImage4 = styled.img`
  width: 115px;
  height: auto;
  cursor: pointer;
`;

const Spacklab = styled.img`
  width: 144px;
  height: auto;
  cursor: pointer;
`;

const AsanImgDiv = styled.img`
  width: 127px;
  height: auto;
  cursor: pointer;
`;

const NextChallenge1Img = styled.img`
  width: 127px;
  height: auto;
  cursor: pointer;
`;

const MobitDiv = styled.img`
  width: 40%;
  height: auto;
  padding-top: 50px;
  cursor: pointer;
`;

const PickPlyDiv = styled.img`
  width: 40%;
  height: auto;
  padding-top: 50px;
  cursor: pointer;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 75px;
`;
const PartDiv = styled.div`
  /* padding-top: 75px; */
  min-height: 800px;
  height: auto;
  /* padding-left: 10px; */
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 43px;
  width: 325.864px;
height: 310.197px;
justify-items: center;
align-items: center;
flex-shrink: 0;
`;

const AWSImg = styled.img`
  width: 75px;
  height: auto;
  cursor: pointer;
`;

const Dcamp = styled.img`
  width: 119px;
  height: auto;
  cursor: pointer;
`;

const Button1 = styled.button`
  font-size: ${(props) => props.theme.Mob_fontSizes.Subtitle1};
  font-weight: ${(props) => props.theme.fontWeights.Subtitle2};
  font-family: "NanumSquare Neo";
  white-space: pre-line;
  display: flex;
  align-items: center;
  line-height: 9px;
  width: 199px;
  height: 52px;
  background-color: #7b3fef;
  justify-content: center;
  margin: 50px auto 0; /* 상단 여백은 58px, 좌우는 auto로 중앙 정렬 */
  color: #ffffff;
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;