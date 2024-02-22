import GroupContainer from "./GroupContainer";
import Gender from "./Settings/Gender";
import Ethnicity from "./Settings/Ethnicity";
import Analyze from "./Settings/Report";
import PremiumComponent from "./Premium/Premium";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51OAYN0ItQ91j83DiQ3Va1ZtX1XVol7auYVuDqcg6fofSk974KXOxKjEDFGPeAJqk735lNSIvmNKPS2HibcZY0GWO00vjrhBydD"
);

function Setting() {
  return (
    <GroupContainer title={"Setting"}>
      <Gender />
      <Ethnicity />
      <Analyze />
      {localStorage.getItem("userLevel") !== "1" && (
        <Elements stripe={stripePromise}>
          <PremiumComponent />
        </Elements>
      )}
    </GroupContainer>
  );
}

export default Setting;
