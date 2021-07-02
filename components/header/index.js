import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import CartIcon from '../cart-icon/';
import CartDropdown from '../cart-dropdown';


const Header = ({ currentUser, hidden }) => {
  return (
    <header className="flex justify-between">
      <div>
        <Link href="/">
          <Image src="/img/logo.svg" height={60} width={150} />
        </Link>
      </div>
      <div>
        <Link href="/">
          CONTACT
        </Link>
        <Link href="/">
          SIGN IN
        </Link>
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </header>
  );
};

export default Header;