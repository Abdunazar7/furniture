import React, { useRef } from 'react';
import NavbarTop from './components/NavbarTop';
import NavbarMain from './components/NavbarMain';

import { NavbarWrapper } from './Navbar.styled';

function Navbar(props) {
    const mobNavRef = useRef(null);

    const handleOpen = () => {
        mobNavRef.current.classList.toggle("visible");
    }

    return (
        <NavbarWrapper>
            <div className='container desktop-content'>
                <NavbarTop />
                <NavbarMain />
            </div>

            <div className='container mobile-content'>
                <p>Mobile navbar</p>
                <button onClick={handleOpen}>Open Nav</button>

                <div ref={mobNavRef} className='mobile-opening-content'>
                    Opening Content
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dolor repellendus expedita delectus tempora laborum ullam cum magnam fugit voluptates harum, accusantium dolore quo reiciendis alias sit id, voluptas provident optio officiis. Veniam reprehenderit voluptas sed excepturi sint consequatur illum corrupti ex distinctio quibusdam aperiam, non nobis esse. Quo libero qui quia, laboriosam in itaque voluptatem. Aperiam earum dolor saepe optio officiis cum accusantium at aliquam unde veniam, reiciendis quaerat aut, consequatur placeat vitae iste. Exercitationem facere, quo ipsam cupiditate quidem eos cumque, excepturi nam aperiam commodi esse in, voluptas voluptatum sint saepe! Cum, amet similique accusamus cumque eaque illum libero eum? Nisi eveniet corporis odio quos minima maxime, nostrum blanditiis molestiae sit error excepturi voluptate officia nesciunt magnam atque aspernatur eos ipsa dolorum ipsum! Quia aperiam quo eligendi sunt in animi corrupti error, rerum odit laborum qui illum. Fuga quisquam dolore quasi nostrum, magnam magni sit veniam architecto natus ipsam in voluptates id dolor dolorem consectetur error facilis odio quas vel adipisci deleniti nam earum! Sequi atque excepturi repellendus dolorum asperiores ad pariatur sit debitis? Sint consequatur eos quam at cumque incidunt quo molestiae necessitatibus id? Omnis, exercitationem tempora? Hic saepe illo deserunt, voluptate quae ipsam magnam vel animi ratione similique sit dicta adipisci voluptatum tempore in nulla nobis asperiores. Velit nulla magnam odit praesentium, iusto sit. Delectus nesciunt mollitia eligendi. Aspernatur nemo accusantium tempora consequatur. Molestiae provident facere, culpa atque odio quos? Iste animi dolores veritatis vero. Iure debitis facere laudantium beatae itaque fugiat nemo tempora nisi. Eos perspiciatis veniam dolores assumenda eius laudantium dignissimos optio velit in doloribus ipsum, consequuntur ipsam ut quae obcaecati quisquam officiis repellat tempore quidem dolorem molestiae porro tenetur cupiditate! Quod delectus debitis itaque sapiente vitae, fugiat sint quibusdam ex culpa aperiam. Esse beatae, magni, voluptates non odio maxime perferendis deserunt, modi pariatur fugiat vero voluptatum maiores aperiam! Minima corrupti accusamus fugit rerum dolor perspiciatis quae ab repudiandae sint obcaecati. Totam temporibus et nisi ducimus, error ea alias? Cumque atque, fugit tenetur iste, minima quaerat pariatur quod voluptate minus facilis ex sapiente qui quae placeat, voluptatibus nobis provident unde quibusdam magni dolores quas nesciunt eius sit ut! Et praesentium voluptas cumque ad autem vitae quidem, sint necessitatibus mollitia! Nam commodi eaque quo? In fuga, autem accusamus magnam beatae sit. Temporibus aliquid unde architecto harum possimus consectetur ullam placeat fugiat cum sunt veniam necessitatibus culpa, odit enim qui libero, et tempora! Iste, ut obcaecati?
                </div>
            </div>
        </NavbarWrapper>
    );
}

export default Navbar;