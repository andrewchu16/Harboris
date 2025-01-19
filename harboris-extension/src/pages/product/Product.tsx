interface ProductProps {
  companyName: string;
  productName: string;
  price: number;
  productImage: string;
  companyLogo: string;
  icon: string;
}

const Product = ({ 
  companyName, 
  productName, 
  price, 
  productImage, 
  companyLogo, 
  icon 
}: ProductProps) => {
  const containerStyle = {
    maxWidth: "400px",
    margin: "0 auto",
    backgroundColor: "white",
    borderRadius: "8px",
    padding: "16px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    border: "1px solid #e5e7eb",
    fontFamily: "Arial, sans-serif",
  };

  const shoppingTextStyle = {
    fontSize: "14px",
    color: "#6b7280",
    marginTop: "8px",
  };

  const productTitleStyle = {
    marginTop: "16px",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#374151",
  };

  const productPriceStyle = {
    fontSize: "16px",
    color: "#4b5563",
    marginTop: "8px",
  };

  const verificationStyle = {
    backgroundColor: "#d1fae5",
    color: "#065f46",
    padding: "8px",
    marginTop: "16px",
    borderRadius: "6px",
    display: "flex",
    alignItems: "center",
  };

  const containerInfoStyle = {
    fontSize: "14px",
    color: "#6b7280",
    marginTop: "16px",
  };

  const buttonStyle = {
    marginTop: "16px",
    width: "100%",
    backgroundColor: "#2563eb",
    color: "white",
    padding: "12px",
    borderRadius: "6px",
    fontSize: "16px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    border: "none",
  };

  return (
    <div style={containerStyle}>
      {/* Shopping Info */}
      <p style={shoppingTextStyle}>Shopping on:</p>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <p style={{ fontWeight: "bold" }}>{companyName}</p>
        <img
          src={companyLogo}
          alt={`${companyName} Logo`}
          style={{ height: "20px" }}
        />
      </div>

      {/* Product Image */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: "16px" }}>
        <img
          src={productImage}
          alt={productName}
          style={{ width: "150px", borderRadius: "6px" }}
        />
      </div>

      {/* Product Info */}
      <h2 style={productTitleStyle}>{productName}</h2>
      <p style={productPriceStyle}>${price}</p>

      {/* Verified Badge */}
      <div style={verificationStyle}>
        <span style={{ marginRight: "8px" }}>✔️</span>
        <p>This is a genuine product from {companyName}.</p>
      </div>

      {/* Container Buy Section */}
      <div style={containerInfoStyle}>
        <p>📦 Consider joining a container buy to save money and earn Avion points!</p>
        <p>✅ <strong>6 Containers available</strong></p>
      </div>

      {/* Button */}
      <button style={buttonStyle}>
        {icon} View Containers
      </button>
    </div>
  );
};

export default Product;
