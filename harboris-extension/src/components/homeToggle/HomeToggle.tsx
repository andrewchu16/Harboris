interface HomeToggleProps {
  tabIndex: number;
  setTabIndex: (newTabIndex: number) => void;
}

export default function HomeToggle({ tabIndex, setTabIndex }: HomeToggleProps) {
  return (
    <div
      style={{
        display: "flex",
        height: "50px",
        justifyContent: "space-between",
        alignItems: "center",
        flexShrink: 0,
        alignSelf: "stretch",
        borderRadius: "100px",
        border: "0.5px solid #E1E1E1",
        background: "#F0F0F0",
        boxSizing: "border-box",
      }}
    >
      <button
        style={{
          width: "50%",
          height: "100%",
          borderRadius: "100px",
          padding: "0px",
          fontWeight: tabIndex === 0 ? "600" : "400",
          background: tabIndex === 0 ? "#FFF" : "#F0F0F0",
          borderWidth: "0px",
          transition: "background 0.2s",
        }}
        onClick={() => setTabIndex(0)}
      >
        Orders
      </button>
      <button
        style={{
          width: "50%",
          height: "100%",
          borderRadius: "100px",
          padding: "0px",
          fontWeight: tabIndex === 1 ? "600" : "400",
          background: tabIndex === 1 ? "#FFF" : "#F0F0F0",
          borderWidth: "0px",
          transition: "background 0.2s",
        }}
        onClick={() => setTabIndex(1)}
      >
        Insights
      </button>
    </div>
  );
}
