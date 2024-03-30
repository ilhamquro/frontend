
import Hero from "../Hero/Hero";
import User from "../User/User";
import "./Main.css";

const Main = () => {
  const datas = [
    {
      nama: "Agus",
      member: "Gold",
      message: "Hello world",
    },
    {
      nama: "Herman",
      member: "Platinum",
      message: "Hello",
    },
    {
      nama: "Samsul",
      member: "Diamond",
      message: "Mau Ga",
    },
    {
      nama: "Adit",
      member: "Non Member",
      message: "Ga Jadi",
    },
    {
      nama: "Muis",
      member: "Silver",
      message: "Aku kan?",
    },
    {
      nama: "Sarah",
      member: "Gold",
      message: "kamu ko gitu",
    },
    {
      nama: "Lia",
      member: "Diamond",
      message: "iyahhh",
    },
    {
      nama: "Alya",
      member: "Gold",
      message: "aku suka kamu",
    },
    {
      nama: "Nia",
      member: "Platinum",
      message: "Akutuhh!!!",
    },
    {
      nama: "Salman",
      member: "Silver",
      message: "eeeee",
    },
    {
      nama: "Ilham",
      member: "Non Member",
      message: "dodol",
    },
    {
      nama: "Saeful",
      member: "Gold",
      message: "pengen makan",
    },
  ];
  return (
    <div className="content">
      {/* <Car
        merk="BMW"
        harga={5}
        isNew={true}
        gambar={bmw}
        colors={["Hitam", "Putih", "Abu-abu"]}
        beli={() => alert("Sudah dibeli")}
      />
       <Car
        merk="Ferrari"
        harga={4}
        isNew={true}
        gambar={bmw2}
        colors={["Hitam", "Putih", "Abu-abu"]}
        beli={() => alert("Sudah dibeli")}
      />
       <Car
        merk="Ferrari"
        harga={2}
        isNew={true}
        gambar={man}
        colors={["Hitam", "Putih", "Abu-abu"]}
        beli={() => alert("Sudah dibeli")}
      />
       <Car
        merk="Supra 2017"
        harga={3}
        isNew={true}
        gambar={supra}
        colors={["Hitam", "Putih", "Abu-abu"]}
        beli={() => alert("Sudah dibeli")}
      />
       <Car
        merk="Supra 2024"
        harga={10}
        isNew={true}
        gambar={supra2}
        colors={["Hitam", "Putih", "Abu-abu"]}
        beli={() => alert("Sudah dibeli")}
      /> */}
      <Hero />
      
    </div>
  );
};

export default Main;
