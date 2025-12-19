import React, { useState, useEffect } from 'react';
import Item from './Item';
import supabase from '../utils/supabase';

const Menu = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchMenuItems = async () => {
            try {
                setLoading(true);
                const { data, error } = await supabase
                    .from('food_items')
                    .select('id, alt, title, price, badge, description, img_name');

                if (error) {
                    throw error;
                }

                // Map the data to include full image path from assets
                const itemsWithImages = data.map(item => ({
                    ...item,
                    img: `/assets/images/${item.img_name}`
                }));

                setMenuItems(itemsWithImages);
            } catch (err) {
                setError(err.message);
                console.error('Error fetching menu items:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchMenuItems();
    }, []);

    const filteredItems = menuItems.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return (
            <section className="section menu" aria-label="menu-label" id="menu">
                <div className="container">
                    <p className="section-subtitle text-center label-2">Special Selection</p>
                    <h2 className="headline-1 section-title text-center">Delicious Menu</h2>
                    <p className="section-text text-center">Loading menu items...</p>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="section menu" aria-label="menu-label" id="menu">
                <div className="container">
                    <p className="section-subtitle text-center label-2">Special Selection</p>
                    <h2 className="headline-1 section-title text-center">Delicious Menu</h2>
                    <p className="section-text text-center" style={{ color: '#ff6b6b' }}>
                        Error loading menu: {error}
                    </p>
                </div>
            </section>
        );
    }

    return (
        <section className="section menu" aria-label="menu-label" id="menu">
            <div className="container">
                <p className="section-subtitle text-center label-2">Special Selection</p>
                <h2 className="headline-1 section-title text-center">Delicious Menu</h2>

                <div className="text-center" style={{ marginBottom: '40px', maxWidth: '400px', marginInline: 'auto' }}>
                    <div className="input-wrapper">
                        <input
                            type="text"
                            name="search"
                            placeholder="Search our menu..."
                            autoComplete="off"
                            className="input-field"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                <ul className="grid-list">
                    {filteredItems.map((item) => (
                        <li key={item.id}>
                            <Item
                                img={item.img}
                                alt={item.alt}
                                title={item.title}
                                price={item.price}
                                badge={item.badge}
                                description={item.description}
                            />
                        </li>
                    ))}
                </ul>

                {filteredItems.length === 0 && (
                    <p className="section-text text-center">No menu items found.</p>
                )}

                <p className="menu-text text-center">
                    During winter daily from <span className="span">7:00 pm</span> to <span className="span">9:00 pm</span>
                </p>

                <a href="#" className="btn btn-primary">
                    <span className="text text-1">View All Menu</span>
                    <span className="text text-2" aria-hidden="true">View All Menu</span>
                </a>

                <img src="/assets/images/shape-5.png" width="921" height="1036" loading="lazy" alt="shape" className="shape shape-2 move-anim" />
                <img src="/assets/images/shape-6.png" width="343" height="345" loading="lazy" alt="shape" className="shape shape-3 move-anim" />
            </div>
        </section>
    );
};

export default Menu;
