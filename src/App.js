import './index.css';
import UseReducer from './UseReducer';
import TodoListUseReducer from './TodoListUseReducer'

function App() {
  return (
    <div className="bg-gray-800 h-screen w-screen">

      {/* <UseReducer /> */}
      <TodoListUseReducer />
    </div>
  );
}

export default App;
