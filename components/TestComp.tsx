import { FormEvent, useEffect, useState } from "react";

import questions from "../public/static/questions.json";
import styles from "../styles/TestComp.module.css";

export function TestComp() {
    const maxScore = 100;

    const [score, setScore] = useState(0),
        [requiredFailed, setRequiredFailed] = useState(false);

    function handleAnswers(e: FormEvent<HTMLFormElement>) {
        const elements = e.currentTarget.querySelectorAll("select");

        let loopScore = 0,
            loopRequiredFailed = false;

        for (let i = 0; i < elements.length; i++) {
            if (!questions[i]?.text) return; // Don't handle the button

            const ele = elements[i],
                question = questions[i];

            if (question.correct) {
                if (question.correct.toString() === ele.value)
                    loopScore = loopScore + question.score;
                else if (question.somewhat && ele.value === "somewhat")
                    loopScore = loopScore + question.somewhat;
                else if (question.required) loopRequiredFailed = true;
            } else if (question.select) {
                const item = question.select[parseInt(ele.value)];

                if (item) {
                    loopScore = loopScore + item.score;

                    if (question.requireScore && item.score <= 0)
                        loopRequiredFailed = true;
                }
            }

            if (i + 1 === elements.length) {
                setScore(loopScore);
                setRequiredFailed(loopRequiredFailed);

                document.querySelector(`.${styles.result}`)?.scrollIntoView();
                (
                    document.querySelector(
                        `.${styles.result}`
                    ) as HTMLDivElement
                ).style.display = "block";
            }
        }
    }

    useEffect(() => {
        document.querySelectorAll("select").forEach((ele) => {
            ele.value = "default";
        });
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.result} id={"result"}>
                <h3>
                    You've achieved {score.toFixed(2)} out of {maxScore} points!
                </h3>

                {requiredFailed ? (
                    <p>But sadly you failed the required questions.</p>
                ) : (
                    <>
                        <p>
                            {score >= 80 ? "Well done!" : "Good."} You can now
                            try to{" "}
                            <a
                                href={
                                    "https://www.joinlapd.com/there-are-seven-steps-application-process"
                                }
                                target={"_blank"}
                            >
                                apply
                            </a>
                            {score >= 80
                                ? "."
                                : ", but a score of 80 or higher is recommended."}
                        </p>
                        <i className={styles.note}>
                            Note that this result is not a guarantee that you
                            will be accepted.
                        </i>
                    </>
                )}
            </div>

            <form
                action=""
                onSubmit={(e) => {
                    e.preventDefault();
                    handleAnswers(e);
                }}
            >
                <div className={styles.items}>
                    {questions.map((data, i) => {
                        return (
                            <div className={styles.itemContainer} key={i}>
                                <div className={styles.item}>
                                    <p className={styles.text}>{data.text}</p>

                                    {data.list ? (
                                        <ul className={styles.list}>
                                            {data.list.map((item, i) => {
                                                return <li key={i}>{item}</li>;
                                            })}
                                        </ul>
                                    ) : (
                                        ""
                                    )}

                                    <div className={styles.response}>
                                        {data.correct || data.list ? (
                                            <select>
                                                <option
                                                    value={"default"}
                                                    disabled
                                                    defaultChecked
                                                >
                                                    Select
                                                </option>
                                                <option value="true">
                                                    Yes
                                                </option>
                                                {data.somewhat ? (
                                                    <option value="somewhat">
                                                        Somewhat
                                                    </option>
                                                ) : (
                                                    ""
                                                )}
                                                <option value="false">
                                                    No
                                                </option>
                                            </select>
                                        ) : data.select ? (
                                            <select>
                                                <option
                                                    value={"default"}
                                                    disabled
                                                    defaultChecked
                                                >
                                                    Select
                                                </option>
                                                {data.select.map((item, i) => {
                                                    return (
                                                        <option
                                                            value={i}
                                                            key={i}
                                                        >
                                                            {item.text}
                                                        </option>
                                                    );
                                                })}
                                            </select>
                                        ) : (
                                            ""
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <button className={styles.submit} type="submit">
                    Show Results
                </button>
            </form>
        </div>
    );
}
