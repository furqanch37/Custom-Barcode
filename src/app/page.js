
import styles from "./page.module.css";
import ProductList from "./productlist/page";

export default function Home() {
  return (
    <div className={styles.page}>
      <ProductList/>
       
    </div>
  );
}
