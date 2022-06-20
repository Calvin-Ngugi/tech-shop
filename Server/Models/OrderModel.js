import mongoose from 'mongoose'

const OrderSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "User",
    },
    orderItems: [
        {
            name: {type: String, required: true},
            qty: {type: String, required: true},
            image: {type: String, required: true},
            price: {type: String, required: true},
            product: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: "Product",
            },
        },
    ],
    shippingAddress: {
        address: { type: String, required: true },
        city: { type: String, required: true },
        postalCode: { type: String, required: true },
        country: { type: String, required: true },
    },
    paymentMethod: {
        type: String,
        required: true,
        default: "PayPal",
    },
    paymentResult: {
        address: { type: String, required: true },
        city: { type: String, required: true },
        postalCode: { type: String, required: true },
        country: { type: String, required: true },
    },
},
{
    timestamps: true
})

const Order = mongoose.model("Order", orderSchema);

export default OrderSchema;