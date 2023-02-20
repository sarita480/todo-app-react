import { useNavigate } from "react-router-dom";

{/*
To enable navigation from one page to another we need to use useNavigate.
 We create a separate functional component so that we can decorate any component that needs navigation!
*/}
function withNavigation(Component) {
  return props => <Component {...props} navigate={useNavigate()} />;
}

export default withNavigation
