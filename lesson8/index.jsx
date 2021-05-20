import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Aacsb from "../../pages/Aacsb";
import AACSBNews from "../../pages/AACSBNews";
import AACSBBrief from "../../pages/AACSBBrief";
import AACSBMission from "../../pages/AACSBMission";
import AACSBLatestRules from "../../pages/AACSBLatestRules";
import AACSBStrategy from "../../pages/AACSBStrategy";
import AACSBStatus from "../../pages/AACSBStatus";
import AACSBHowApply from "../../pages/AACSBHowApply";
import AACSBQuality from "../../pages/AACSBQuality";
import AACSBExecuteFlow from "../../pages/AACSBExecuteFlow";
import AACSBStructure from "../../pages/AACSBStructure";
import AACSBLearningTarget from "../../pages/AACSBLearningTarget";
import AACSBMaster from "../../pages/AACSBMaster";
import AACSBMBAEMBA from "../../pages/AACSBMBAEMBA";
import AACSBPhD from "../../pages/AACSBPhD";

export default class extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/aacsb" component={Aacsb} exact strict />
                <Route
                    path="/aacsb-news/:id"
                    component={AACSBNews}
                    exact
                    strict
                />
                <Route
                    path="/aacsb-brief"
                    component={AACSBBrief}
                    exact
                    strict
                />
                <Route
                    path="/aacsb-mission"
                    component={AACSBMission}
                    exact
                    strict
                />
                <Route
                    path="/aacsb-latest-rules"
                    component={AACSBLatestRules}
                    exact
                    strict
                />
                <Route
                    path="/aacsb-strategy"
                    component={AACSBStrategy}
                    exact
                    strict
                />
                <Route
                    path="/aacsb-status"
                    component={AACSBStatus}
                    exact
                    strict
                />
                <Route
                    path="/aacsb-how-to-apply"
                    component={AACSBHowApply}
                    exact
                    strict
                />

                <Route
                    path="/aacsb-quality"
                    component={AACSBQuality}
                    exact
                    strict
                />
                <Route
                    path="/aacsb-execute-flow"
                    component={AACSBExecuteFlow}
                    exact
                    strict
                />
                <Route
                    path="/aacsb-structure"
                    component={AACSBStructure}
                    exact
                    strict
                />
                <Route
                    path="/aacsb-learning-target"
                    component={AACSBLearningTarget}
                    exact
                    strict
                />

                <Route
                    path="/aacsb-master"
                    component={AACSBMaster}
                    exact
                    strict
                />
                <Route
                    path="/aacsb-mba-emba"
                    component={AACSBMBAEMBA}
                    exact
                    strict
                />
                <Route path="/aacsb-PhD" component={AACSBPhD} exact strict />
            </Switch>
        );
    }
}
