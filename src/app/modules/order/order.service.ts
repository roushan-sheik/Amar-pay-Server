import Product from '../product/product.model';
import Order from './order.model';

const createOrder = async (orderData: any) => {
    const { user, products } = orderData;

    let totalPrice = 0;

    // Calculate the total price
    const productDetails = await Promise.all(
        products.map(async (item: any) => {
            const product = await Product.findById(item.product);
            if (product) {
                totalPrice += product.price * item.quantity;
                return {
                    product: product._id,
                    quantity: item.quantity
                };
            } else {
                throw new Error('Product not found');
            }
        })
    );

    const transactionId = `TXN-${Date.now()}`;

    const order = new Order({
        user,
        products: productDetails,
        totalPrice,
        status: 'Pending',
        paymentStatus: 'Pending',
        transactionId
    });

    await order.save();

    return order;
};


export const orderService = {
    createOrder
}