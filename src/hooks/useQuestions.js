import React, { useEffect, useState } from 'react';
import { getDatabase, ref, query, get, orderByKey, startAt, limitToFirst } from 'firebase/database'

const useQuestions = (videoID) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [questions, setQuestions] = useState([]);
    
    useEffect(() => {
        async function fetchQuestions() {
            //database related work

            const db = getDatabase();
            const quizRef = ref(db, 'quiz/' + videoID + '/questions' );
            const quizQuery = query(
                quizRef,
                orderByKey(),
            );

            try {
                setError(false);
                setLoading(true);

                //request firebase database

                const snapshot = await get(quizQuery);
                setLoading(false);
                if (snapshot.exists()) {
                    setQuestions((prevQuestions) => {

                        return [ ...prevQuestions, ...Object.values(snapshot.val())]
                        
                    })
                } 
            } catch (err) {
                console.log(err);
                setLoading(false);
                setError(true)
            }
        }
        
        fetchQuestions();
    }, [videoID])
    return (
   
            {
                loading,
                error, 
                questions,
                
            }
        
    );
};

export default useQuestions;