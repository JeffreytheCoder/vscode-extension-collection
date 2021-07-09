const Card = ({imageUrl, name, tags, downloadCount, description}) => {
    return ( 
        <div className="bg-white rounded shadow-md w-1/3 p-6">
            <div className="flex justify-center">
            <img src="python.png" alt="python" className="w-20 h-20"></img>
            </div>
            <div className="flex justify-between mt-5">
            <Link href="https://marketplace.visualstudio.com/items?itemName=ms-python.python">
                <span className="text-gray-500 cursor-pointer font-bold text-lg">Python</span>
            </Link>
            <span className="text-indigo-600 font-semibold text-lg">38.6M downloads</span>
            </div>
            <div className="my-2">
            <p className="text-gray-500">A Visual Studio Code extension with rich support for the Python language (for all actively supported versions of the language: >=3.6), including features such as IntelliSense (Pylance), linting, debugging, code navigation, code formatting, refactoring, variable explorer, test explorer, and more!</p>
            </div>
            <div className="bg-indigo-200 rounded-full py-2 px-4 w-min">
            <span>Python</span>
            </div>
        </div>
    );
}
 
export default Card;