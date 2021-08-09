/*
* CohortGreeting is a Functional Component
*/

function CohortGreeting() {
    // every component is a function
    // that returns HTML ("JSX")
    return (
        <> {/* <-- a Fragment! */}
            <h1>Hello Mersenne!!!</h1>
            <h2>How's it going?</h2>
        </>
    );
}

// export our component function
// so others can use it
export default CohortGreeting;