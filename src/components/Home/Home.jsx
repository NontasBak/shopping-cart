import { Navigate, Link } from "react-router-dom";

function Home() {
    return (
        <div className="flex h-full flex-col items-center justify-center">
            <div className="flex w-min -translate-y-20 flex-col items-center gap-8">
                <div className="flex flex-col items-center gap-4">
                    <h2 className="text-7xl font-bold tracking-wide text-white sm:text-9xl">
                        Scrootz
                    </h2>
                    <p className="text-center text-xl text-gray-300">
                        The right place to find the best deals{" "}
                        <span className="font-bold text-blue-400">for you</span>
                    </p>
                </div>
                <Link
                    to="/shop"
                    className="rounded-xl border-2 border-blue-400 bg-black p-3 text-2xl text-white transition-colors hover:bg-gray-900"
                >
                    Shop now
                </Link>
            </div>
        </div>
    );
}

export default Home;
