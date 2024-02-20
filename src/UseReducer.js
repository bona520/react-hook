import { useReducer } from 'react';

function reducer(state, actions) {
    // eslint-disable-next-line default-case
    switch (actions.type) {
        case 'incremented_age': {
            return {
                name: state.name,
                age: state.age + 1
            };
        }
        case 'changed_name': {
            return {
                name: actions.nextName,
                age: state.age
            };
        }
    }

    throw Error('Unknown action: ' + actions.type);
}

const initialState = { name: 'Bona', age: 24}

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    function handleButtonClick() {
        dispatch({ type: 'incremented_age' })
    }
    function handleInputChange(e) {
        dispatch({
            type: 'changed_name',
            nextName: e.target.value
        })
    }

    return (
        <div className="text-white flex items-center justify-center h-full w-full flex-col">
            <button onClick={handleButtonClick} className="border-transparent px-2 py-3 mb-3 bg-red-500 text-white rounded-md">
                Increment Age
            </button>
            <input type="text" value={state.name} onChange={handleInputChange} name="" id="" className="text-gray-600" />
            <p> Hello, {state.name} .Your age is {state.age}</p>
        </div>
    )
}

export default UseReducer