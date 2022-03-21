import './App.css';
import {useState} from 'react'
import View from '../view/View'
import SearchPerson from '../searchPerson/SearchPerson';
import Title from '../title/Title';
import data from '../../database/5A94.json'

const App = () => {
    const [enterValue, setEnteredValue] = useState('')
    const [sameNameSurname, setSameNameSurname] = useState([]);
    const [items] = useState(data);
    const [error, setError] = useState(false);
    const [personArr, setPersonArr] = useState([]);
    const [person, setPerson] = useState(null);
    const [showData, setShowData] = useState(false);

    return (
        <div className="App">
            <header className="App-header">
                <Title
                    setPerson={setPerson}
                    setSameNameSurname={setSameNameSurname}
                    setError={setError}
                />
                <View 
                    error={error} 
                    sameNameSurname={sameNameSurname} 
                    personArr={personArr}
                    person={person}
                    setPerson={setPerson}
                    showData={showData}
                    setShowData={setShowData}
                    />
                <SearchPerson 
                    items={items}
                    person={person}
                    setPerson={setPerson}
                    enterValue={enterValue}
                    setEnteredValue={setEnteredValue}
                    sameNameSurname={sameNameSurname} 
                    setSameNameSurname={setSameNameSurname}
                    showData={showData}
                    setShowData={setShowData}
                    setError={setError}
                    setPersonArr={setPersonArr}/>               
            </header>
        </div>
    ) 
}

export default App;
