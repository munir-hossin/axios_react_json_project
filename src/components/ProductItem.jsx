import { getImage } from "../utils/getImage";
// import image from "../assets/images/${products.image}"

function ProductItem({product}) {
  // let imageLink = "https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg";

    let imageLink = getImage(`../assets/images/${product.image}`);

    
    return (


        <div className="col-span-4 shadow border rounded overflow-hidden">
        <img src={imageLink} alt="img" />
        <div className="p-3">
          <h4 className="text-2xl ">{product.title}</h4>
          <p className="text-slate-400">{product.category}</p>
          <div className="flex justify-between items-center mt-3">
            <span className="text-xl font-semibold">
              ${product.price}
              </span>
              <span className="text-yellow-500">{product.ratting}</span>
          </div>
        </div>

        <a href="#" 
        className="block bg-green-600 text-white text-center text-xl font-semibold py-2">

          Read More</a>
    </div>
    );
}

export default ProductItem;