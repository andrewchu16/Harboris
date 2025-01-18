import { Outlet } from "react-router";
import Header from "../../header/Header";

export default function NavLayout() {
  return (
    <div style={{
      margin: 0,
      display: 'flex',
      padding: '24px',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '12px',
      width: '400px',
      height: '700px',
      borderRadius: '10px',
      boxSizing: 'border-box',
      backgroundColor: '#fff',
      fontFamily: "Helvetica, sans-serif"
    }}>
      <Header />
      <Outlet />
    </div>
  );
}
