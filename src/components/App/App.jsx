import { useEffect, useState } from "react";
import css from "../App/App.module.css";

import Description from "../Description/Description";
import Options from "../Options/Options";
import Notification from "../Notification/Notification";
import Feedback from "../Feedback/Feedback"

export default function App() {
    const defaultValues = { good: 0, neutral: 0, bad: 0 };

    const [feedback, setFeedback] = useState(() => {
        const initialFeedback = window.localStorage.getItem("feedback");
        return initialFeedback ? JSON.parse(initialFeedback) : defaultValues;
    });

    useEffect(() => {
        window.localStorage.setItem("feedback", JSON.stringify(feedback));
    }, [feedback]
    );

    const updateFeedback = (feedbackType) => {
        setFeedback((prevFeedback) => ({
            ...prevFeedback, [feedbackType]: prevFeedback[feedbackType] + 1,
        }))
    };

    const resetFeedback = () => {
        setFeedback({
            good: 0,
            neutral: 0,
            bad: 0,
        })
    };

    const { good, neutral, bad } = feedback;
    const totalFeedback = good + neutral + bad;
    const positiveFeedback = Math.round((good / totalFeedback) * 100);

    return (
        <div className={css.containerApp}>
            <Description />
            <Options
                updateFeedback={updateFeedback}
                resetFeedback={resetFeedback}
                totalFeedback={totalFeedback} />
            {totalFeedback !== 0 ? (<Feedback
                feedback={feedback}
                totalFeedback={totalFeedback}
                positiveFeedback={positiveFeedback} />) : (<Notification/>)}
            
        </div>
        
    )
};