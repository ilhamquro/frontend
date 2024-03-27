
const Car = ({merk, harga, isNew, colors, beli}) => {
    return (
      <>
      <h3>Merk Mobil : {merk}</h3>
      <h4>Harga Mobil : Rp {harga} Juta</h4>
      <h5>Keadaan Mobil : {isNew ? "Baru" : "Bekas"}</h5>
      <h5>Varian Warna : {colors}</h5>
      <button onClick={beli}>Beli</button>
      </>
    );
  };

export default Car;

