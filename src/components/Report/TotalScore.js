import { useContext} from "react";
import { UserContext } from "../../pages/home";

const TotalProfileScore = () => {
  const { oneProfile } = useContext(UserContext);

  return (
    <div className="total_score_view">
      { oneProfile.percentage }% FACIAL HARMONY
    </div>
  )
};

export default TotalProfileScore;