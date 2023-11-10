import ProductSection from "../components/ProductSection/ProductSection";
import DefaultLayout from "../components/layouts/DefaultLayout";

const productDetail = [
  {
    title: "Embroidered Shirt With Dupatta",
    id: `923948739879823749-Peach-37846723`,
    price: 7000,
    stock: 10,
    size: 8,
    description:
      "Embroidered Shirt With Panels And Embroidery On Sleeves And Lace Detailing On Hem, Sleeves, Showk And Hem. Comes With Digital Silk Dupatta",
    sizeChart: "",
    fabric: "Multi Neps",
    content: "Shirt+Dupatta",
    fit: "Regular Fit",
    modelFit: "Model is Wearing 8 Size",
    modleSize: "Model Height is 5'" + 6 + '"',
    deliveryDetails:
      'Due to "Season End Sale" orders will be dispatched within 05 working days. Thank you!',
    note: "Actual product color may vary slightly from the image. Please allow 1-3 (cm) difference due to manual measurement.",
    img1: "https://beechtree.pk/cdn/shop/files/BTS232613056_1.jpg?v=1687434775",
    img2: "https://beechtree.pk/cdn/shop/files/BTS232613056_2.jpg?v=1687434775",
    img3: "https://beechtree.pk/cdn/shop/files/BTS232613056_3.jpg?v=1687434774",
    img4: "https://beechtree.pk/cdn/shop/files/BTS232613056_4.jpg?v=1687434775",
  },
];

const Details = () => {
  return (
    <DefaultLayout>
      <p>details page here</p>
      {productDetail.map((product) => (
        <div key={product.id}>
          <ProductSection product={product} />
        </div>
      ))}
    </DefaultLayout>
  );
};

export default Details;
