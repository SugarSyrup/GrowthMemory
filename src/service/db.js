import { db } from "./firebaseConfig";

import { addDoc, collection, doc, setDoc } from "firebase/firestore";

const discussionsRef = collection(
    db,
    "users",
    "a5SZCoK6ejXG6520hlUhTSSUuau1",
    "discussions",
    "1"
);

export const dodo = async () => {
    await setDoc(doc(discussionsRef, "message"), {
        prompt: "도시들의 평균 population이 뭐야?",
    });
};
