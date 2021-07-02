import React from 'react';
import Image from 'next/image'

// import { toggleCartHidden } from '../../redux/cart/cart.actions';
// import { selectCartItemsCount } from '../../redux/cart/cart.selector';

//import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <Image src="/img/shopping-bag.svg" height={60} width={150} />
      <span className="item-count"> {itemCount} </span>
    </div>
  );
};

export default CartIcon;

// const mapDispatchToProps = dispatch => ({
//   toggleCartHidden: () => dispatch(toggleCartHidden())
// });

// const mapStateToProps = createStructuredSelector({
//   itemCount: selectCartItemsCount
// });

// export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);