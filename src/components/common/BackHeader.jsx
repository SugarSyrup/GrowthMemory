import { RxCross1 } from "react-icons/rx";
import styled from "styled-components";
export default function BackHeader() {
  return (
    // 현재 라우터 경로 확인해서 약관 동의 창 아니면 다 prev 버튼 출력
    <Div>
      <RxCross1 />
    </Div>
  );
}

const Div = styled.div`
  margin-top: 44px;
  width: 360px;
  height: 56px;
  background-color: aqua;
`;
