import SignUpProvider from "../components/personalData/SignUpProvider";
import HeaderText from "../components/common/HeaderText";
import Button from "../components/common/Button";
import TermsBox from "../components/TermsBox";
import BackHeader from "../components/common/BackHeader";
import styled from "styled-components";

export default function CollectPersonalData() {
  return (
    <>
      <SignUpProvider>
        <BackHeader />
        <Section>
          <HeaderText />
          <Button num={0} />
          <TermsBox />
          <Button num={1} />
        </Section>
      </SignUpProvider>
    </>
  );
}

const Section = styled.section`
  width: 360px;
  height: 464px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
