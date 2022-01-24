import { connect } from "react-redux";

import "./index.scss";
import NavBar from "./components/todoNavBar";
import TodoMain from "./components/todoMain";
import AddReduction from "./components/addRedactionForm/addReduction";

const mapStateToProps = (state) => {
  return {
    state,
  };
};

function App(props) {
  return (
    <div className="wrapper">
      <div className="window">
        <NavBar />

        {props.state.addReduction ? (
          <>     
            <TodoMain />
            <AddReduction />
          </>
        ) : (
          <TodoMain />
        )}

      </div>
    </div>
  );
}

export default connect(mapStateToProps)(App);
