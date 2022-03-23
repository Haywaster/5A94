import './SearchPerson.css'
import ArrowBack from './arrowBack/ArrowBack'

const SearchPerson = ({items, enterValue, setEnteredValue, sameNameSurname, setSameNameSurname, person, setPerson, setPersonArr, setError, setShowData}) => {    
    const addName = (event) => {
        event.preventDefault();
        setEnteredValue(event.target.value)
    }

    const searchPerson = (e) => {
        e.preventDefault();
        setEnteredValue('')

        const personArr = items.students.filter(item => {
            let obj;

            if (item.name.toLowerCase() === enterValue.toLowerCase()) {
                setError(false)
                return item
            } else if (typeof item.altname === 'string') {
                if (item.altname.toLowerCase() === enterValue.toLowerCase()) {
                    setError(false)
                    return item
                }
            } else if (typeof item.altname === 'object') {
                item.altname.forEach(name => {
                    if (name.toLowerCase() === enterValue.toLowerCase()) {
                        setError(false)
                        obj = item
                    }
                })
                return obj
            }
        })


        console.log(personArr)
        setPersonArr(personArr)
        setShowData(false)

        if(personArr.length === 0) {
            setError(true)
        }

        const sameNameSurname = personArr.map(item => item.surname)

        if(sameNameSurname.length === 1) {
            setSameNameSurname([])
            setPerson(personArr[0])
        } else {
            setSameNameSurname(sameNameSurname)
            setPerson(null)
        }
    }

    function restart() {
        if (person) {
            setPerson(null)
            setShowData(false)
        } else if (!person) {
            setSameNameSurname([])
        }
    }
    
    return (
        <form id="signin" autoComplete="off">
            <div id="wrapper">
                {person || "1" in sameNameSurname ? <ArrowBack restart={restart}/> : null}
                <input type="text" id="user" name="user" onChange={addName} value={enterValue} placeholder='Введите ваше имя'></input>
                <button type="submit" onClick={searchPerson}>&#xf0da;</button>
            </div>     
        </form>
    )
}

export default SearchPerson