import ProductCategorySection from "../../components/ProductCategorySection"
import Advertisements from "./Advertisements"
import Banner from "./Banner"

const Home = () => {
 import("./Banner").then(v=>console.log(v));

  
  return (
    <>
    <Banner/>
    <div className="Container">
    <ProductCategorySection/>
    <Advertisements/>
    </div>
    </>
  )
}

export default Home
