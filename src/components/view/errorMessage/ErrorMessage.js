const ErrorMessage = (props) => {
    return (
        <>
            {props.error ? <h2 className='View-p'>Ошибка</h2> : null}
        </>
    )
}

export default ErrorMessage