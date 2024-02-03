import { useContext} from "react";
import { UserContext } from "../../pages/home";

const TotalProfileScore = () => {
  const {frontProfileMark, sideProfileMark} = useContext(UserContext);

  return (
    <div className="total_score_view">
      {Math.max(((frontProfileMark + sideProfileMark) / 5).toFixed(1), 0)}% FACIAL HARMONY
    </div>
  )
};

export default TotalProfileScore;