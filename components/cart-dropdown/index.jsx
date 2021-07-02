import React from 'react';

// import CartItem from '../cart-item/cart-item.component';

// import { selectCartItems } from '../../redux/cart/cart.selector';
// import { toggleCartHidden } from '../../redux/cart/cart.actions';

//import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {/* {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )} */}
        {/* <CustomButton
          onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
          }}
        >
          GO TO CHECKOUT
        </CustomButton> */}
        <button>GO TO CHECKOUT</button>
      </div>
    </div>
  );
};

export default CartDropdown;

// const mapStateToProps = createStructuredSelector({
//   cartItems: selectCartItems
// });

// export default withRouter(connect(mapStateToProps, null)(CartDropdown));