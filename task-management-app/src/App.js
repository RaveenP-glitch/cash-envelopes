import logo from './logo.svg';
import './App.css';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';

function App() {
  return (
    <div className="App min-h-screen bg-gray-100 p-4">
       <div className='max-w-2l mx-auto bg-white shadow-md rounded-md p-6'>
         <h2 className='text-center font-bold text-3xl mt-4 md-4 text-purple-700'>Task Management App</h2>
               <AddTask />
               <TaskList />
       </div>
    </div>
  );
}

export default App;
