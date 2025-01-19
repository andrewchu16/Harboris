import { useState } from "react";
import HomeToggle from "../../components/homeToggle/HomeToggle";
import Orders from "../../components/orders/Orders";
import Insights from "../../components/insights/Insights";

export default function Home() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <>
      <HomeToggle tabIndex={tabIndex} setTabIndex={setTabIndex} />
      {tabIndex === 0 ? <Orders /> : <Insights />}
    </>
  );
}
