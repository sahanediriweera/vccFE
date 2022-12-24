import React from 'react'
import Tabs from './component/Tabs';
import "./Styles.css";

export default function HomePage() {

    const data = [
        {
          heading: "NEWS FEED",
          body: "New 20000 Vaccines Arrived from china today through Sri Lankan Airways.\n American Goverment pledged to support Sri Lanka with new vaccines.Report of a new cure breakthrough from African continent"
        },
        {
          heading: "VACCINE TYPES",
          body: "Moderna , Phyzer , Synopharm , Artisenica "
        },
        {
          heading: "CURRENT STATUS",
          body: "2 million vaccines are done so far.1.5 million with first dose"
        }
      ];

  return (
    <div className="container" >
        <Tabs data={data} />
    </div>
  )
}
