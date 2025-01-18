import { useState } from "react";
import HomeToggle from "../../components/homeToggle/HomeToggle";

export default function Home() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <HomeToggle tabIndex={tabIndex} setTabIndex={setTabIndex} />
  )
}
