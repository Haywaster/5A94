import {useState} from 'react'
import data from '../../database/5A94.json'
import View from '../view/View'
import SearchPerson from '../searchPerson/SearchPerson';

const NamePage = () => {
    const [enterValue, setEnteredValue] = useState('')
    const [sameNameSurname, setSameNameSurname] = useState([]);
    const [items] = useState(data);
    const [error, setError] = useState(false);
    const [personArr, setPersonArr] = useState([]);
    const [person, setPerson] = useState(null);
    const [showData, setShowData] = useState(false);

    return (
        <>
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
        </>
    )
}

export default NamePage