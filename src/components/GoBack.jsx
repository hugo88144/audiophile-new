import { useNavigate } from "react-router-dom";

function GoBack() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // This navigates back one page in the history stack
  };

  return (
    <div
      onClick={handleGoBack}
      style={{
        cursor: "pointer",
        color: "grey",
        fontSize: "1.7rem",
        padding: "  5rem 0   0 20%",
      }}
    >
      Go back
    </div>
  );
}

export default GoBack;
