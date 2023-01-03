import "./App.css";
import Header from "../Components/Header/Header";
import Home from "../Components/Home/App";



function App() {

    const role = localStorage.getItem("role");

    return (
        <div className="App">



            <Home />
        </div>
    );
}

export default App;
