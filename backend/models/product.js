const mongoose = require('mongoose');

//Product Schema
const productSchema = mongoose.Schema ({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    richDescription: {
        type: String,
        default: ''
    },
    image: {
        type: String,
        default: ''
    },
    images: [{
        type: String,
    }],
    brand: {
        type: String,
        default: ''
    },
    price: {
        type: Number,
        default: 0
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    countInStock: {
        type:Number,
        required:true,
        min:0,
        max:25
    },
    rating: {
        type:Number,
        default: 0,
    },
    numReviews: {
        type: Number,
        default:0,
    },
    isFeatured: {
        type: Boolean,
        default:false,
    },
    datecreated: {
        type: Date,
        default: Date.now,
    }
    
})

// Duplicate the ID field.
productSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
productSchema.set('toJSON', {
    virtuals: true
});
// End Id 
exports.Product = mongoose.model('Product', productSchema);