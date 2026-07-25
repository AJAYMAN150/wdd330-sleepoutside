// import utilities
import { getParam } from './utils.mjs';
import ProductData from './ProductData.mjs';
import ProductDetails from './ProductDetails.mjs';

// get the product id from the URL
const productId = getParam('product');

// create the data source
const dataSource = new ProductData('tents');

// create a product details object
const product = new ProductDetails(productId, dataSource);

// initialize the page
product.init();