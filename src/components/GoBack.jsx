import { useHistory } from "react-router-dom";

function GoBack() {
  const history = useHistory();

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <div onClick={handleGoBack} style={{ cursor: "pointer", color: "blue" }}>
      &lt;-- go back
    </div>
  );
}

export default GoBack;
