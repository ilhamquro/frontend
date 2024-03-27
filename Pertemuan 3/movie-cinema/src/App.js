import './App.css';
import { Component } from "react";
import Car from "./component/Car/Car.js";
import Header from "./component/Navbar/Navbar.js";
import User from "./component/User/User.js";
import Footer from "./component/Footer/Footer.js";

function App() {
  return (
    <div className="container">
      <Header/>
      <h1>Hello World</h1>
      <Footer nama="Muhammad Ilham"/>
      <Car merk="Ferrari" harga={500} isNew={true} colors={["Hitam ", "Putih ", "Abu-Abu "]} beli= {()=> {alert ("Sudah Dibeli")}}/>
      <User nama="Muhammad Ilham" alamat="Jl Pendidikan" angkatan={11} hobi="Ngoding,ngopi" isGraduate={false} 
      massage={() => {alert ("profil nama telah dibuka")}}/>
      <User nama="Aleksis" alamat="Jl Pendidikan" angkatan={11} hobi="Ngoding,ngopi" isGraduate={false} 
      massage={() => {alert ("profil nama telah dibuka")}}/>
      <User nama="HUHUHUHAHA" alamat="Jl Pendidikan" angkatan={11} hobi="Ngoding,ngopi" isGraduate={false} 
      massage={() => {alert ("profil nama telah dibuka")}}/>
    </div>
  );
}

export default App;
