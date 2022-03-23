import './App.css';
import {Route, Link, Routes} from "react-router-dom";
import NamePage from '../pages/NamePage';
import Title from '../title/Title';

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <Title/>
                <Routes>
                    <Route path='/' element={
                        <>
                            <Link to="/name" element={<NamePage/>}>Имя</Link>  
                            <Link to="/number">Номер</Link>
                        </>
                        }
                    />
                    <Route path='/name' element={<NamePage/>}/>
                </Routes>
            </header>
        </div>        
    ) 
}

export default App;
