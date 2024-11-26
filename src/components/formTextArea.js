import './formTextArea.css'

function FormTextArea({ title, placeholder }) {
    return (
        <>
            <label className='labelForm'> <strong>{title}:</strong></label>
            <textarea className='textAreaForm' rows={4} placeholder={placeholder}></textarea>
        </>
    );
}

export default FormTextArea;