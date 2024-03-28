import React from "react";
import Products from "./Products";

const Main = () => {
  return (
    <div className="content">
      <Products 
      nama="headset fantech"
      harga={120000}
      jenis="elektronik"
      gambar="https://picsum.photos/200"
      tombol={(nama) => alert(`anda membeli ${nama}`)}
      />
    </div>
  );
};

export default Main;
