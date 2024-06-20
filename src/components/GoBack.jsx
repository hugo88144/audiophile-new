import { useNavigate } from "react-router-dom";

function GoBack() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // This navigates back one page in the history stack
  };

  return (
    <div className="goBack-btn" onClick={handleGoBack}>
      Go back
    </div>
  );
}

export default GoBack;
