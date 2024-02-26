import React, { useReducer } from 'react'

function createInitialState(username) {
    const initialTodos = [];
    for (let i = 0; i < 50; i++) {
        initialTodos.push({
            id: i,
            text: username + "'s task #" + (i + 1)
        })
    }
    return {
        draft: '',
        todos: initialTodos
    }
}

function reducer(state, actions) {
    switch (actions.type) {
        case 'changed_draft': {
            return {
                draft: actions.nextDraft,
                todos: state.todos
            }
        };
        case 'added_todo': {
            return {
                draft: '',
                todos: [
                    {
                        id: state.todos.length,
                        text: state.draft
                    }, ...state.todos
                ]
            }
        }
    }
    throw Error('Unknown action: ' + actions.type)
}

const TodoListUseReducer = ({ username }) => {
    const [state, dispatch] = useReducer(
        reducer,
        username,
        createInitialState
    );
    // set the initial state to the username

    console.log('state', state)

    const initialState = {
        draft: '',
        todos: []
    }


    return (
        <div className="text-white flex items-center justify-center h-full w-full flex-col">
            <input type="text" value={state.draft} className="text-gray-700 p-4 rounded-lg" 
                onChange={(e) => {
                    dispatch({
                        type: 'changed_draft',
                        nextDraft: e.target.value
                    })
                }}
                name="" id="" />
            <button onClick={() => {
                dispatch({ type: 'added_todo' })
            }}>Add</button>
            <up>
                {
                    state.todos.map(item => (
                        <li key={item.id}>
                            {item.text}
                        </li>
                    ))
                }
            </up>
        </div>
    )
}

export default TodoListUseReducer
