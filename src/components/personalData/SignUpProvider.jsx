import { useState } from "react";
import { SignUpContext } from "../SignUpContext";
import { useImmer } from "use-immer";

export default function SignUpProvider(props) {
  const [headerText, setHeaderText] = useState(0);
  const [agreement, setAgreement] = useState(0);
  const [disabled, setDisabled] = useState(true);
  const [isChecked, updateIsChecked] = useImmer(checked);
  // console.log(isChecked);
  return (
    <SignUpContext.Provider
      value={{
        headerText,
        setHeaderText,
        agreement,
        setAgreement,
        disabled,
        setDisabled,
        isChecked,
        updateIsChecked,
      }}
    >
      {props.children}
    </SignUpContext.Provider>
  );
}

let checked = [
  {
    text: "이용약관",
    checked: false,
  },
  {
    text: "개인정보 처리방침",
    checked: false,
  },
  { text: "마케팅 동의", checked: false },
];
