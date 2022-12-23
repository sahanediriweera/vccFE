import React from "react";
import { Tab, Tabs as TabsComponent, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./Tabs.css"

const Tabs = ({ data }) => (
  <TabsComponent>
    <TabList>
      {data.map(({ heading }, i) => (
        <Tab key={i}>{heading}</Tab>
      ))}
    </TabList>
    <div className="tab-content">
      {data.map(({ body }, i) => (
      <TabPanel key={i}>{body}</TabPanel>
    ))}
    </div>
  </TabsComponent>
);

export default Tabs;
