import './ErrorMessage.scss';

function ErrorMessage({ message }) {
  return (
    <div className="error-message" role="alert">
      <strong>Error: </strong>
      <span>{message}</span>
    </div>
  );
}

export default ErrorMessage;
