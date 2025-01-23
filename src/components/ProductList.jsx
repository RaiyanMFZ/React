function ProductList() {
    return (
        <div>
            <header style={{display: "flex", justifyContent: "space-between", paddingLeft: "5px", paddingRight: "5px", alignItems: "center"}}>
                <h2>Trending products</h2>
                <a href="#" style={{justifyContent: "center"}}>Shop the collection -></a>
            </header>
            <div style={{justifyContent: "space-between", display: "flex"}}>
                <nav style={{textAlign: "left"}}>
                    <img src="http://via.placeholder.com/400x400" alt="Leather Long Wallet"/>
                    <p>Leather long Wallet</p>
                    <p style={{opacity: 0.6}}>Natural</p>
                    <p><strong>$75</strong></p>
                </nav>
                <nav style={{textAlign: "left"}}>
                    <img src="http://via.placeholder.com/400x400" alt="Leather Long Wallet"/>
                    <p>Machined Pencil and Pen set</p>
                    <p style={{opacity: 0.6}}>Black</p>
                    <p><strong>$70</strong></p>
                </nav>
                <nav style={{textAlign: "left"}}>
                    <img src="http://via.placeholder.com/400x400" alt="Leather Long Wallet"/>
                    <p>Mini-Sketchbooks</p>
                    <p style={{opacity: 0.6}}>Light Brown</p>
                    <p><strong>$27</strong></p>
                </nav>
                <nav style={{textAlign: "left"}}>
                    <img src="http://via.placeholder.com/400x400" alt="Leather Long Wallet"/>
                    <p>Organizer Set</p>
                    <p style={{opacity: 0.6}}>Walnut</p>
                    <p><strong>$149</strong></p>
                </nav>
            </div>
        </div>
    );
}

export default ProductList;