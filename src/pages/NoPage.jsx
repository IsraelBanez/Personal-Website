import { useNavigate } from "react-router-dom";
import '../styles/NoPage.css';


function NoPage() {
    const navigate = useNavigate();

    const returnHome = () => {
        navigate("/home")
      };
    return (
      <div className="nopage-container">
            404: Page Does Not Exist
            <div onClick={returnHome}> Click Me</div>
      </div>
    );
  }
  
  export default NoPage;