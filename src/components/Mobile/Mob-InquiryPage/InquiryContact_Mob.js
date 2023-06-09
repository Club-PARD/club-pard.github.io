import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';
import Askmobile from './InquiryContact_Mob_ASked';


const PartDiv = styled.div`
    display: flex;
    flex-direction: column;
    
    margin: 0px auto;
    padding-right:6px;
    padding-top: 45px;
    height: 800px;
`;
//<Header7>문의하세요! 모바일</Header7>
function InquiryContactMob() {

    return (
        <PartDiv>
             <ThemeProvider theme={theme}>
            <Askmobile/>
            </ThemeProvider>
        </PartDiv>
    );
}

export default InquiryContactMob;