import ProductCategorySection from "../../components/ProductCategorySection"
import Advertisements from "./Advertisements"
import Banner from "./Banner"

const Home = () => {
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
