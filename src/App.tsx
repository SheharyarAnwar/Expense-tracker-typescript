import React from "react";
import TrackerView from "./Views/TrackerView/index";
import Layouts from "./Layouts/index";
import GlobalContextWrapper from "./Context/viewSwitcher";
export default function App() {
  return (
    <>
      <GlobalContextWrapper>
        <TrackerView layout={Layouts.main} />
      </GlobalContextWrapper>
    </>
  );
}
