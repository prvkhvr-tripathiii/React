function Card({username, btnText="Touch me"}) {
     
  return (
    <div className="w-80 overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl m-8 flex-1 items-center justify-center">
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
        alt="Mountain landscape"
        className="h-48 w-full object-cover"
      />

      <div className="p-5">
        <h2 className="mb-2 text-2xl font-bold text-gray-900">
          {username}
        </h2>

        <p className="mb-5 leading-relaxed text-gray-600">
          Explore beautiful mountains, peaceful landscapes, and amazing
          destinations.
        </p>

        <button className="rounded-lg bg-black px-5 py-2.5 text-white transition hover:bg-gray-800">
          {btnText}
        </button>
      </div>
    </div>
  );
}

export default Card;