import "./App.css";
import { Card } from "./components/Card/Card";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { SortWrapper } from "./components/SortWrapper/SortWrapper";
import { useFilter } from "./context/FilterContext";

function App() {
  const { filteredProducts } = useFilter();
  return (
    <div className="App flex flex-col min-h-screen w-screen bg-gray-50">
      <header className="header z-20 sticky top-0 flex items-center gap-4 justify-center  w-screen h-16 bg-blue-500">
        <div>
          <img
            src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
            alt="Flipkart logo"
            className="h-4"
          />
          <p className="text-white italic flex items-center gap-1">
            Explore{" "}
            <span className="text-yellow-300 font-semibold not-italic flex items-center">
              Plus{" "}
              <img
                src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png"
                alt="plus_logo"
                className="w-3 ml-1"
              />
            </span>
          </p>
        </div>
        <input
          type="text"
          name="search"
          id="search"
          className="w-1/3 h-10 px-2 rounded-sm"
          placeholder="Search for products,brands and more"
        />
        <button className="px-6 py-1 bg-white text-blue-500 font-semibold">
          Login
        </button>
        <p className="font-semibold mx-2 text-white">Become a Seller</p>
        <p className="font-semibold mx-2 text-white">More</p>
        <p className="font-semibold  mx-2 text-white">Cart</p>
      </header>
      <div className="content mt-4 w-full h-fit min-h-full flex flex-col lg:flex-row md:flex-row">
        {" "}
        <Sidebar />
        <main className=" h-full w-full lg:w-9/12 bg-white mx-2">
          <div className="listing-wrapper w-full flex flex-col outline-red-50">
            <SortWrapper />
            <div className="cards-wrapper relative flex flex-wrap flex-row justify-center lg:justify-start md:justify-start h-fit min-h-full w-full">
              {filteredProducts.length === 0 ? (
                <div className="absolute translate-x-1/2 translate-y-0 top-0 left-0">
                  <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/error-no-search-results_2353c5.png" />
                </div>
              ) : (
                filteredProducts?.map((product) => <Card product={product} />)
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
