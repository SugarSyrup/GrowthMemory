import { db } from "./firebaseConfig";

import { addDoc, collection, doc, setDoc, getDoc } from "firebase/firestore";

export const dodo = async (uid,date) => {
    const userDocumentRef = doc(db, "review", "a5SZCoK6ejXG6520hlUhTSSUuau1")

    const docSnap = await getDoc(userDocumentRef);
    return docSnap.data();
};

//회고 생성 및 수정 함수
export const registReview = async (uid,date,data) => {
    const userDocumentRef = doc(db, "review", uid);

    const reviewData = {};
    reviewData[date] = {
        ...data
        // Keep: "더 열심히",
        // Problem: "해야지",
        // Try: "아마도",
        // date: "23년 21월 24일",
        // isAnalyze: false,
    }
        
    await setDoc(userDocumentRef, reviewData);
};

export const getUserAllReviews = async (uid) => {
    const userDocumentRef = doc(db, "review", "a5SZCoK6ejXG6520hlUhTSSUuau1")

    const docSnap = await getDoc(userDocumentRef);
    return docSnap.data();
}

export const ReadReview = async (uid,date) => {
    const data = await getUserAllReviews(uid);
    return data[date];
}