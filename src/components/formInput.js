import './formInput.css'

function FormInput({ title, type, placeholder }) {
    return (
        <>
            <label className='labelForm'> <strong>{title}:</strong></label>
            <input className='inputForm' type={type} placeholder={placeholder}></input>
        </>
    );
}

export default FormInput;