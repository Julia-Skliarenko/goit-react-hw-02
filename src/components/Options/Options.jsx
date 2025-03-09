import css from "../Options/Options.module.css";

export default function Options ({updateFeedback, totalFeedback, resetFeedback}) {
    return (
        <div className={css.optionBlock}>
            <button onClick={() => updateFeedback("good")}>Good</button>
            <button onClick={() => updateFeedback("neutral")}>Neutral</button>
            <button onClick={() => updateFeedback("bad")}>Bad</button>
            {totalFeedback > 0 && <button onClick={resetFeedback}>Reset</button>}
        </div>
    )
}