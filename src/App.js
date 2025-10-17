import React, { useState } from "react";

function App() {
  const products = [
    {
      id: 1,
      name: "KL University T-Shirt",
      price: "₹499",
      shortDesc: "Comfortable cotton t-shirt.",
      fullDesc: "Made from 100% pure cotton, perfect for everyday use.",
    },
    {
      id: 2,
      name: "KL University Hoodie",
      price: "₹999",
      shortDesc: "Warm and cozy hoodie.",
      fullDesc: "Soft fleece fabric, available in all sizes.",
    },
    {
      id: 3,
      name: "KL University Mug",
      price: "₹299",
      shortDesc: "Ceramic coffee mug.",
      fullDesc: "Microwave-safe mug with KL University logo print.",
    },
  ];

  const [selectedProduct, setSelectedProduct] = useState(null);

  const openPopup = (product) => setSelectedProduct(product);
  const closePopup = () => setSelectedProduct(null);

  // Inline styles
  const styles = {
    app: { fontFamily: "Arial, sans-serif", textAlign: "center", padding: "20px", backgroundColor: "#f8f9fa" },
    productList: { display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap", marginTop: "20px" },
    productCard: { backgroundColor: "white", border: "1px solid #ccc", borderRadius: "10px", width: "200px", padding: "15px", cursor: "pointer", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", transition: "0.3s" },
    popupOverlay: { position: "fixed", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.6)", display: "flex", justifyContent: "center", alignItems: "center" },
    popup: { backgroundColor: "white", padding: "20px", borderRadius: "12px", width: "300px", textAlign: "center", boxShadow: "0 4px 12px rgba(0,0,0,0.3)" },
    button: { backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "6px", padding: "8px 15px", cursor: "pointer", fontSize: "14px", marginTop: "10px" }
  };

  return (
    <div style={styles.app}>
      <h1>KL University Online Store</h1>

      <div style={styles.productList}>
        {products.map((p) => (
          <div
            key={p.id}
            style={styles.productCard}
            onClick={() => openPopup(p)}
            onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
            onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
          >
            <h3>{p.name}</h3>
            <p>{p.price}</p>
            <p>{p.shortDesc}</p>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div style={styles.popupOverlay}>
          <div style={styles.popup}>
            <h2>{selectedProduct.name}</h2>
            <p><strong>Price:</strong> {selectedProduct.price}</p>
            <p>{selectedProduct.fullDesc}</p>
            <button style={styles.button} onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
