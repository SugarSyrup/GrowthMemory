import { useRef } from "react";
import { auth } from "../service/auth";
import { dodo } from "../service/db";

export default function TestPage() {
    const inputRef = useRef();

    return (
        <>
            <input ref={inputRef}></input>
            <button
                onClick={() => {
                    //console.log(inputRef.current.value);
                    //console.log(auth.currentUser.uid);
                    dodo();
                }}
            >
                CLICK!
            </button>
        </>
    );
}
