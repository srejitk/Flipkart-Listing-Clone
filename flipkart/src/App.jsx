import "./App.css";
import { Card } from "./components/Card/Card";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { SortWrapper } from "./components/SortWrapper/SortWrapper";
import { useFilter } from "./context/FilterContext";

function App() {
  const { filteredProducts } = useFilter();
  return (
    <div className="App flex flex-col min-h-screen bg-gray-50">
      <header className="header z-20 sticky top-0 flex items-center gap-4 justify-center  w-screen h-16 bg-blue-500">
        <div>
          <img
            src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
            alt="Flipkart logo"
            className="h-4"
          />
        </div>
        <input
          type="text"
          name="search"
          id="search"
          className="w-1/2 h-10 px-2 rounded-sm"
          placeholder="Search for products,brands and more"
        />
      </header>
      <div className="content mt-16  w-full h-fit min-h-full flex">
        {" "}
        <Sidebar />
        <main className=" h-full w-8/12 bg-white mx-2">
          <div className="listing-wrapper flex flex-col outline-red-50">
            <SortWrapper />
            <div className="cards-wrapper relative flex flex-wrap h-fit min-h-full w-full-blue-200">
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
