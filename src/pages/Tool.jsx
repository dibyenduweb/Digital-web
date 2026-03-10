const Tool = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 to-pink-500 flex items-center justify-center">
            <div className="text-center bg-white p-12 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Coming Soon
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-pink-500 mx-auto mb-6"></div>
                <p className="text-gray-600 text-xl mb-8">
                    Something amazing is on the way!
                </p>
                <div className="flex justify-center space-x-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
                    <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce delay-100"></div>
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-200"></div>
                </div>
            </div>
        </div>
    );
}

export default Tool;