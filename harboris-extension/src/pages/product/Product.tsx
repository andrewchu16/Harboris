import { Link } from "react-router";
import hAndMLogo from "../../assets/h-and-m-logo.svg";
import cardiganImage from "../../assets/red-shirt.png";
import verifiedIcon from "../../assets/verified_user.svg";
import tagIcon from "../../assets/loyalty.svg";
import playlistIcon from "../../assets/playlist_add.svg";
import containerIcon from "../../assets/package_2.svg";
import React, { useState, useEffect } from "react";

interface ProductPageProps {
  companyName: string;
  productName: string;
  price: number;
  productImage: string;
  companyLogo: string;
  icon: string;
  status: "caution" | "real" | "flagged";
}

const ProductPage: React.FC<ProductPageProps> = ({
  companyName = "H&M",
  productName = "V-Neck Cardigan",
  price = 29.99,
  productImage = cardiganImage,
  companyLogo = hAndMLogo,
  status = "real", // Default status
}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          fontFamily: "Helvetica, sans-serif",
          fontSize: "18px",
          color: "#6B7280",
        }}
      >
        Loading product details...
      </div>
    );
  }

  const getVerificationBadgeStyle = (status: "caution" | "real" | "flagged") => {
    switch (status) {
      case "caution":
        return { background: "rgba(255, 241, 190, 0.8)", color: "#856404" }; // Yellow
      case "real":
        return { background: "rgba(209, 250, 229, 0.8)", color: "#065F46" }; // Green
      case "flagged":
        return { background: "rgba(254, 202, 202, 0.8)", color: "#991B1B" }; // Red
      default:
        return { background: "rgba(249, 250, 251, 0.8)", color: "#6B7280" }; // Default (Gray)
    }
  };

  const styles = {
    container: {
      fontFamily: "Helvetica, sans-serif",
      maxWidth: "400px",
      margin: "0 auto",
      padding: "16px",
      background: "rgba(249, 250, 251, 0)", // Adjusted for transparency
      borderRadius: "8px",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.0)",
    },
    shoppingInfo: {
      fontSize: "14px",
      color: "#6B7280",
      marginBottom: "8px",
    },
    productCard: {
      background: "rgba(255, 255, 255, 0.8)", // Adjusted for transparency
      borderRadius: "12px",
      padding: "16px",
      marginBottom: "16px",
    },
    containerInfo: {
      padding: "12px",
      borderRadius: "8px",
      background: "rgba(249, 250, 251, 0.8)", // Adjusted for transparency
      marginBottom: "16px",
    },
    button: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#2563EB",
      color: "#FFF",
      textDecoration: "none",
      padding: "12px",
      borderRadius: "100px",
      fontSize: "14px",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "background 0.3s",
    },
  };

  return (
    <div style={styles.container}>
      {/* Shopping Info */}
      <p style={styles.shoppingInfo}>Shopping on:</p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "16px",
          color: "#000",
        }}
      >
        <p style={{ fontSize: "18px", color: "#000", margin: 0 }}>
          {companyName}
        </p>
        <img
          src={companyLogo}
          alt={`${companyName} Logo`}
          style={{
            width: "30px",
            height: "30px",
            borderRadius: "50%",
          }}
        />
      </div>

      {/* Product Card */}
      <div style={styles.productCard}>
        <img
          src={productImage}
          alt={productName}
          style={{
            width: "100%",
            borderRadius: "12px",
            marginBottom: "16px",
          }}
        />
        <h2
          style={{
            fontSize: "18px",
            fontWeight: "normal",
            color: "#000",
            marginBottom: "4px",
          }}
        >
          {productName}
        </h2>
        <p
          style={{
            fontSize: "14px",
            fontWeight: "normal",
            color: "#444",
          }}
        >
          ${price.toFixed(2)}
        </p>
      </div>

      {/* Verification Badge */}
      <div
        style={{
          ...getVerificationBadgeStyle(status), // Dynamic styling
          display: "flex",
          alignItems: "center",
          borderRadius: "8px",
          padding: "12px",
          marginBottom: "16px",
          gap: "8px",
        }}
      >
        <img
          src={verifiedIcon}
          alt="Verified"
          style={{ width: "20px", height: "20px" }}
        />
        <p style={{ fontSize: "12px", margin: 0 }}>
          {status === "real" && `This is a genuine product from ${companyName}.`}
          {status === "caution" &&
            "Caution: Verification pending for this product."}
          {status === "flagged" && "Warning: This product has been flagged."}
        </p>
      </div>

      {/* Container Buy Info */}
      <div style={styles.containerInfo}>
        <p
          style={{
            fontSize: "14px",
            color: "#444444",
            marginBottom: "4px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <img
            src={tagIcon}
            alt="Tag Icon"
            style={{ width: "16px", height: "16px" }}
          />
          Consider joining a container buy to save money and earn Avion points!
        </p>
        <p
          style={{
            fontSize: "14px",
            color: "#444444",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <img
            src={playlistIcon}
            alt="Container Icon"
            style={{ width: "16px", height: "16px" }}
          />{" "}
          6 Containers available
        </p>
      </div>

      {/* CTA Button */}
      <Link
        to="/containers"
        style={styles.button}
        onMouseEnter={(e) => (e.currentTarget.style.background = "#1D4ED8")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "#2563EB")}
      >
        <img
          src={containerIcon}
          alt="Container Icon"
          style={{ width: "20px", height: "20px", marginRight: "8px" }}
        />
        View Containers
      </Link>
    </div>
  );
};

export default ProductPage;
