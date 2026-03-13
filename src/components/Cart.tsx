import React, { useState } from 'react';
import {
  X,
  Minus,
  Plus,
  Trash2,
  MessageCircle,
  ChevronDown,
} from 'lucide-react';
import { useCart } from '@/context/CartContext';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const WHATSAPP_NUMBER = '917904303438';

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const {
    items,
    updateQuantity,
    removeFromCart,
    totalPrice,
    clearCart,
  } = useCart();

  const [showAddress, setShowAddress] = useState(false);

  const [address, setAddress] = useState({
    name: '',
    phone: '',
    houseno: '',
    street: '',
    area: '',
    city: '',
    district: '',
    state: '',
    pincode: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const generateWhatsAppMessage = () => {
    let message = `🎁 *New Order – RD Gifts*\n\n`;

    message += `👤 ${address.name}\n`;
    message += `📞 ${address.phone}\n\n`;
    message += `🏠 *Delivery Address:*\n`;
    message += `${address.houseno}, ${address.street}, ${address.area},\n`;
    message += `${address.city},\n`;
    message += `${address.district}, ${address.state},\n`;
    message += `Pin Code - ${address.pincode}\n\n`;

    message += '*Order Details:*\n';
    message += '─────────────────\n';

    items.forEach((item, i) => {
      message += `${i + 1}. *${item.product.name}*\n`;

      if (item.selectedSize) {
        message += `   Size: ${item.selectedSize}\n`;
      }

      if (item.withLamination) {
        message += `   ✨ Lamination: ${
          item.laminationType
            ? item.laminationType.charAt(0).toUpperCase() +
              item.laminationType.slice(1)
            : 'Yes'
        }\n`;
      }

      message += `   Qty: ${item.quantity} × ₹${item.price}\n\n`;
    });

    message += `*Total: ₹${totalPrice}*\n\n`;
    message += 'Please confirm 🙏';

    return encodeURIComponent(message);
  };

  const handleOrder = () => {
    const {
      name,
      phone,
      houseno,
      street,
      area,
      city,
      district,
      state,
      pincode,
    } = address;

    if (
      !name ||
      !phone ||
      !houseno ||
      !street ||
      !area ||
      !city ||
      !district ||
      !state ||
      !pincode
    ) {
      alert('Please fill delivery address');
      return;
    }

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${generateWhatsAppMessage()}`,
      '_blank'
    );
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 ${
          isOpen ? '' : 'hidden'
        }`}
        onClick={onClose}
      />

      {/* Cart */}
      <div
        className={`fixed right-0 top-0 h-full w-full max-w-md bg-card z-50 transition-transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-4 border-b flex justify-between items-center">
            <h2 className="text-xl font-bold">Your Cart</h2>
            <button onClick={onClose}>
              <X />
            </button>
          </div>

          {/* Products */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-4">
            {items.map((item) => (
              <div
                key={`${item.product.id}-${item.selectedSize}-${item.withLamination}-${item.laminationType}`}
                className="flex gap-3 bg-muted/40 p-3 rounded-lg"
              >
                <img
                  src={item.product.image}
                  className="w-20 h-20 rounded object-cover"
                />

                <div className="flex-1">
                  <p className="font-medium">{item.product.name}</p>

                  {item.selectedSize && (
                    <p className="text-xs">
                      Size: {item.selectedSize}
                    </p>
                  )}

                  {item.withLamination && (
                    <p className="text-xs text-primary">
                      ✨ Lamination:{' '}
                      {item.laminationType}
                    </p>
                  )}

                  <p className="font-semibold mt-1">
                    ₹{item.price}
                  </p>

                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() =>
                        updateQuantity(
                          item.product.id,
                          item.quantity - 1,
                          item.selectedSize,
                          item.withLamination,
                          item.laminationType
                        )
                      }
                    >
                      <Minus size={14} />
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        updateQuantity(
                          item.product.id,
                          item.quantity + 1,
                          item.selectedSize,
                          item.withLamination,
                          item.laminationType
                        )
                      }
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>

                <button
                  onClick={() =>
                    removeFromCart(
                      item.product.id,
                      item.selectedSize,
                      item.withLamination,
                      item.laminationType
                    )
                  }
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t p-4 space-y-3 bg-muted/20">
              <button
                onClick={() => setShowAddress(!showAddress)}
                className="w-full flex justify-between items-center text-sm font-medium"
              >
                Add Delivery Address
                <ChevronDown
                  className={`transition ${
                    showAddress ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {showAddress && (
                <div className="space-y-2">
                  <input
                    name="name"
                    placeholder="Full Name"
                    className="input"
                    onChange={handleChange}
                  />
                  <input
                    name="phone"
                    placeholder="Phone"
                    className="input"
                    onChange={handleChange}
                  />
                  <textarea
                    name="houseno"
                    placeholder="House No."
                    onChange={handleChange}
                  />
                  <textarea
                    name="street"
                    placeholder="Street / Area"
                    className="input"
                    rows={2}
                    onChange={handleChange}
                  />
                  <input
                    name="area"
                    placeholder="Area/Locality"
                    className="input"
                    onChange={handleChange}
                  />
                  <input
                    name="city"
                    placeholder="City"
                    className="input"
                    onChange={handleChange}
                  />
                  <input
                    name="district"
                    placeholder="District"
                    className="input"
                    onChange={handleChange}
                  />
                  <input
                    name="state"
                    placeholder="State"
                    className="input"
                    onChange={handleChange}
                  />
                  <input
                    name="pincode"
                    placeholder="PIN Code"
                    className="input"
                    onChange={handleChange}
                  />
                </div>
              )}

              <div className="flex justify-between font-semibold pt-2">
                <span>Total</span>
                <span>₹{totalPrice}</span>
              </div>

              <button
                onClick={handleOrder}
                className="w-full btn-whatsapp py-3 flex justify-center gap-2"
              >
                <MessageCircle /> Order via WhatsApp
              </button>

              <button
                onClick={clearCart}
                className="w-full text-xs text-muted-foreground"
              >
                Clear Cart
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
