import questions from "../public/static/questions.json";
import styles from "../styles/TestComp.module.css";

export function TestComp() {
    return (
        <div className={styles.container}>
            <form action="" onSubmit={(e) => e.preventDefault()}>
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
                                                <option disabled defaultChecked>
                                                    Select
                                                </option>
                                                <option value="true">
                                                    Yes
                                                </option>
                                                <option value="false">
                                                    No
                                                </option>
                                            </select>
                                        ) : data.select ? (
                                            <select>
                                                <option disabled defaultChecked>
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
