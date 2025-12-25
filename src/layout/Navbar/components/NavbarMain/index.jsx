import React from 'react';
import {
    CartIcon,
    CatalogIcon,
    HeartIcon,
    NetworkIcon,
    SearchIcon
} from '../../../../components';

import { NavMainWrapper, SearchWrapper, NavigationItems } from './NavbarMain.styled';

function NavbarMain(props) {
    return (
        <NavMainWrapper>
            <img src="/logo.svg" alt="Logo" />
            <SearchWrapper>
                <button className='catalog-button'>
                    <CatalogIcon />
                    <span>Каталог</span>
                </button>
                <div className='input-wrapper'>
                    <input type="text" placeholder='Поиск по товарам' />
                    <span className='search-icon-wrap'>
                        <SearchIcon />
                    </span>
                </div>
            </SearchWrapper>
            <NavigationItems>
                <div className='item'>
                    <HeartIcon />
                    <span>Избранное</span>
                </div>
                <div className='item'>
                    <NetworkIcon />
                    <span>Сравнение</span>
                </div>
                <div className='item'>
                    <CartIcon />
                    <span>Корзина</span>
                </div>
            </NavigationItems>
        </NavMainWrapper>
    );
}

export default NavbarMain;