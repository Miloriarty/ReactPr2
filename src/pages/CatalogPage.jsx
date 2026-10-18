import Header from "../components/Header.jsx";
import ProductCard from "../components/ProductCard.jsx";
import HeroImage from "../assets/hero.png";

function CatalogPage() {
    return (
        <div className="catalog">
            <ProductCard id="1" name="something1" price="100" image={HeroImage}/>
            <ProductCard id="2" name="something2" price="200" image={HeroImage}/>
            <ProductCard id="3" name="something3" price="300" image={HeroImage}/>
            <ProductCard id="4" name="something4" price="400" image={HeroImage}/>
            <ProductCard id="5" name="something5" price="500" image={HeroImage}/>
        </div>
    );
}

export default CatalogPage;