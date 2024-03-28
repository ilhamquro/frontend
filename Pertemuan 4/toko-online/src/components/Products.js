
const Products = (props) => {
    const { nama, harga, jenis, tombol, gambar } = props;
    return (
        <div>
          <ul>
            <img src={gambar} alt="" width={256} />
            <li>Nama : {nama}</li>
            <li>harga : {harga}</li>
            <li>jenis : {jenis}</li>
            <button onClick={() => tombol(nama)}>Message</button>
          </ul>
        </div>
      );
};

export default Products;