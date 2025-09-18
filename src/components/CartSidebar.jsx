import { FiX, FiPlus, FiMinus, FiTrash2 } from "react-icons/fi";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router";

function CartSidebar({ isOpen, onClose }) {
  const { cartItems, increaseQty, decreaseQty, removeFromCart, totalPrice } =
    useCart();

  const navigate = useNavigate();

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 pb-10 bg-white shadow-2xl transform transition-transform duration-300 z-50 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b bg-[#5D3A6A] text-white">
        <h2 className="text-lg font-bold">Your Cart</h2>
        <button onClick={onClose} className="hover:text-[#E6E6FA]">
          <FiX size={20} />
        </button>
      </div>

      {/* Items */}
      <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-150px)]">
        {cartItems.length === 0 && (
          <p className="text-gray-500">Your cart is empty.</p>
        )}

        {cartItems.map((item) => {
          // calculate discount if item has salePrice
          const onSale = item.salePrice && item.salePrice < item.price;
          const discountPercent = onSale
            ? Math.round(((item.price - item.salePrice) / item.price) * 100)
            : 0;

          return (
            <div
              key={`${item.id}-${item.selectedSize}-${item.selectedColor}`}
              className="flex items-center gap-3 border-b pb-3"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-14 h-14 rounded-md object-cover"
              />

              {/* Details */}
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-[#3A1D4D]">
                  {item.name}
                </h3>

                {/* Size & Color badges */}
                <div className="flex items-center gap-2 mt-1">
                  {item.selectedSize && (
                    <span className="text-xs bg-[#E6E6FA] text-[#5D3A6A] px-2 py-0.5 rounded-md">
                      Size: {item.selectedSize}
                    </span>
                  )}
                  {item.selectedColor && (
                    <span className="w-4 h-4 rounded-full border-2 border-[#5D3A6A]" style={{ backgroundColor: item.selectedColor }} />
                  )}
                </div>

                {/* Price */}
                <div className="mt-1">
                  {onSale ? (
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-[#9D4EDD]">
                        ₦{item.salePrice.toLocaleString()}
                      </span>
                      <span className="text-xs line-through text-gray-400">
                        ₦{item.price.toLocaleString()}
                      </span>
                      <span className="text-xs font-semibold text-red-500">
                        -{discountPercent}%
                      </span>
                    </div>
                  ) : (
                    <span className="text-sm font-semibold text-[#5D3A6A]">
                      ₦{item.price.toLocaleString()}
                    </span>
                  )}
                </div>

                {/* Quantity controls */}
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() =>
                      decreaseQty(item.id, item.selectedSize, item.selectedColor)
                    }
                    className="p-1 border rounded-full text-[#5D3A6A] hover:bg-[#E6E6FA]"
                  >
                    <FiMinus size={14} />
                  </button>
                  <span className="text-sm">{item.quantity}</span>
                  <button
                    onClick={() =>
                      increaseQty(item.id, item.selectedSize, item.selectedColor)
                    }
                    className="p-1 border rounded-full text-[#5D3A6A] hover:bg-[#E6E6FA]"
                  >
                    <FiPlus size={14} />
                  </button>
                </div>
              </div>

              {/* Remove button */}
              <button
                onClick={() =>
                  removeFromCart(item.id, item.selectedSize, item.selectedColor)
                }
                className="text-red-500 hover:text-red-600"
              >
                <FiTrash2 />
              </button>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="p-4 border-t bg-gray-50">
        <div className="flex justify-between mb-4">
          <span className="font-semibold text-[#5D3A6A]">Subtotal:</span>
          <span className="font-bold text-[#3A1D4D]">
            ₦{totalPrice.toLocaleString()}
          </span>
        </div>
        <button
          onClick={() => {
            onClose();
            navigate("/order");
          }}
          className="w-full py-2 bg-[#5D3A6A] text-white font-semibold rounded-lg hover:bg-[#4B2E58] transition"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CartSidebar;
