import React, {useState} from "react";

function App() {
    const [count, setCount] = useState(0);
    return (
        <div className="container my-5 ">
            <div className="card text-center my-5 ">
                <section className="card-body" style={{backgroundColor: '#80DEEA'}} >
                    <h2 className="text-dark">Counter Application</h2>
                    <section className="my-5">
                        <h3 className="box my-5 mx-5 ">{count}</h3>

                    <section >
                        <button className="btn btn-success mx-5 my-3"  onClick={() => setCount(count + 1)}>+</button>
                        <button className="btn btn-danger mx-5 my-3" onClick={() => setCount(count - 1)}
                                disabled={count === 0}>-
                        </button>

                    </section>
                        <button className="btn btn-primary mx-5 my-3" onClick={() => setCount(0)}
                                disabled={count === 0}>Reset
                        </button>

                    </section>
                </section>

            </div>
        </div>
    );
}

export default App;
