function Card() {
  return (
    <div className="m-5 w-60 bg-zinc-700 shadow-xl shadow-slate-900 rounded-lg text-sm text-white text-center font-medium">
      <div className="p-4 flex flex-col items-center">
        <img
          src="https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
          alt="product"
        />
        <h1 className="mt-2">Title</h1>
        <p className="mt-2">
          Price :<span className="ml-2 p-1 bg-rose-600 rounded-md">$99</span>
        </p>
        <p className="mt-2">
          Discount :<span className="ml-2 p-1 bg-rose-600 rounded-md">12%</span>
        </p>
        <p className="mt-2">
          Rating :<span className="ml-2 p-1 bg-rose-600 rounded-md">4.5</span>
        </p>
        <p className="mt-2">
          Stock :<span className="ml-2 p-1 bg-rose-600 rounded-md">94</span>
        </p>
        <p className="mt-2">
          Brand :<span className="ml-2 p-1 bg-rose-600 rounded-md">Apple</span>
        </p>
        <p className="mt-2">
          Category :
          <span className="ml-2 p-1 bg-rose-600 rounded-md">IOS Phone</span>
        </p>
        <div className="inline-flex items-center mt-2">
          <button className="fa mr-2">
            <i className="fas fa-plus text-xl"></i>
          </button>
          <span className="bg-yellow-300 inline-flex items-center px-4 py-1 rounded-full text-black">
            2
          </span>
          <button className="fa ml-2">
            <i className="fas fa-minus text-xl"></i>
          </button>
        </div>

        <button className="py-2 px-4 bg-rose-600 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center">
          <span className="fa mr-2">
            <i className="fas fa-cart-arrow-down text-xl"></i>
          </span>
          Add to order
        </button>
      </div>
    </div>
  );
}

export default Card;
