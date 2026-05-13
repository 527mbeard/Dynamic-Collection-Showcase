if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}

document.getElementById("darkModeBtn").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    // optional: save preference
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});
//dark mode

{/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
    {movies.map((movie, index) => (
        <div
            key={index}
            className="movie-card bg-[#7d0000] border-4 border-dashed border-white rounded-3xl overflow-hidden shadow-2xl transition duration-300"
        >
            <img
                src={movie.image}
                className="h-72 w-full object-cover"
            />

            <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                    <span className="bg-[#e6c88f] text-black px-3 py-1 rounded-full text-sm font-bold">
                        {movie.genre}
                    </span>

                    <span className="text-sm">⭐ {movie.rating}</span>
                </div>

                <h3 className="text-3xl font-black uppercase mb-2">
                    {movie.title}
                </h3>

                <p className="text-sm text-[#f5e7c4] leading-6 font-sans mb-5">
                    {movie.description}
                </p>

                <div className="flex justify-between items-center">
                    <span className="font-bold">{movie.year}</span>

                    <button className="bg-[#e6c88f] text-black px-4 py-2 rounded-full font-bold hover:scale-105 transition">
                        View
                    </button>
                </div>
            </div>
        </div>
    ))}
</div>  */}