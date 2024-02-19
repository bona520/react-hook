import { useReducer } from 'react';

function reducer(state, actions) {
    if (actions.type === 'incremented_age') {
        return {
            age: state.age + 1
        }
    }
    throw Error("Unknown action.")
}

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, { age: 24 })
    function handleClick() {
        dispatch({ type: 'incremented_age' })
    }

    return (
        <div className="text-white flex items-center justify-center h-full w-full">
            <button onClick={() => { dispatch({ type: 'incremented_age' }) }}>
                Increment Age
            </button>
            <p>Your age is {state.age}</p>
        </div>
    )
}

export default UseReducer