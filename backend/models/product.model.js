const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter the Product Name"],
    trim: true,
    maxlength: [100, "Product name cannot exceed 100 characters"],
  },

  price: {
    type: Number,
    required: [true, "Please Enter the Product Name:"],
    trim: true,
    maxlength: [100, "Product name cannot exceed 100 characters"],
  },

  description: {
    type: String,
    required: [true, "Please Enter the Product Description"],
  },

  ratings: {
    type: Number,
    default: 0,
  },

  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],

  category: {
    type: String,
    required: [true, "Please select category for this Product"],
    enum: {
      values: [
        "Electronics",
        "Cameras",
        "Laptops",
        "Accessories",
        "Headphones",
        "Food",
        "Books",
        "Clothes/Shoes",
        "Beauty/Health",
        "Sports",
        "Outdoor",
        "Home",
      ],
      message: "Please select correct category for product",
    },
  },

  seller: {
    type: String,
    required: [true, "Please enter Product Seller"],
  },

  stock: {
    type: Number,
    required: [true, "Please enter product stock"],
    maxlength: [5, "Product name cannot exceed 5 characters"],
    default: 0,
  },

  numOfReviews: {
    type: Number,
    default: 0,
  },

  reviews: [
    {
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],

  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
