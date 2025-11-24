import "../styles/AppStyles.css";
import data from "../data.js";

export default function ProductDesktop() {
  // 내부 Product 컴포넌트
  function Product({ title, price, img }) {
    return (
      <div className="single-image">
        <img className="product-img" src={img} />
        <h3 className="product-title">{title}</h3>
        <p className="product-content">{price}</p>
      </div>
    );
  }

  return (
    <div className="product-page-wrapper">
      {data.map((item, i) => (
        <Product
          key={i}
          title={item.title}
          price={
            item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "₩"
          }
          img={`https://codingapple1.github.io/shop/shoes${i + 1}.jpg`}
        />
      ))}
    </div>
  );
}
