import './Title.css'

const Title = ({setPerson, setSameNameSurname, setError}) => {

    function restart() {
        setPerson(null)
        setSameNameSurname([])
        setError(false)
    }

    return (
        <h1 onClick={() => restart()} className="Title">5А94 Group</h1>
    )
}

export default Title