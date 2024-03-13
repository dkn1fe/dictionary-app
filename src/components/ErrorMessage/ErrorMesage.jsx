import error from '../../assets/error.svg'

const ErrorMessage = () => {
     return (
         <div className="error-message">
             <img src = {error}></img>
             <p>Error,this words is don't find. Repeat write a new word</p>
         </div>
     )
}

export default ErrorMessage