import './App.css';
import {useNavigate} from 'react-router-dom'

function App() {
  const navigate = useNavigate()

  const onFormSubmit = e => {
    e.preventDefault()

      navigate("/subscribed")
  }

  return (
    <div className="w-screen items-center h-full flex flex-col">
      <img src="https://www.pinclipart.com/picdir/big/78-784074_tech-time-advanced-technology-technology-icon-clipart.png"
           className="w-60 m-10"/>
      <h1 className="text-4xl font-bold w-1/2 text-center">Tech News for those who don't have time to read news.</h1>
      <p className="text-gray-700 mt-4">Join more than <strong>22.403 active readers</strong>:</p>
      <form className="flex flex-col w-80" onSubmit={onFormSubmit}>
        <input type="email" placeholder="Enter your best email" className="rounded-md border-black border p-2 m-2"/>
        <input type="submit" value="Subscribe" className="hover:cursor-pointer p-2 bg-blue-500 shadow-md rounded-md text-white pr-4 pl-4 m-2 text-center"/>
      </form>
    </div>
  );
}

export default App;
