import Card from "../components/card";
import Link from "next/link"

export default function Home() {
  return (
    <div className="bg-gray-100 h-full top-0">
      <div className="flex flex-col p-28">
        <h1 className="text-indigo-600 text-center text-4xl font-bold mb-5">Best vscode extensions for developers</h1>
        <h2 className="text-gray-500 text-center text-xl">Find and download the best helpers for your tech stack</h2>
      </div>
      {/* <Card imageUrl="../public/python.png" name="Python"></Card> */}
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white rounded shadow-md p-6 mx-6">
          <div className="flex justify-center">
            <a target="_blank" href="https://marketplace.visualstudio.com/items?itemName=ms-python.python">
              <img src="python.png" alt="python" className="w-20 h-20 cursor-pointer"></img>
            </a>
          </div>
          <div className="flex justify-between mt-5">
            <a target="_blank" href="https://marketplace.visualstudio.com/items?itemName=ms-python.python">
              <span className="text-gray-500 cursor-pointer font-bold text-lg">Python</span>
            </a>
            <a target="_blank" href="https://marketplace.visualstudio.com/items?itemName=ms-python.python">
              <span className="text-indigo-600 font-semibold text-lg cursor-pointer">38.6M downloads</span>
            </a>
          </div>
          <div className="my-2">
            <p className="text-gray-500">A Visual Studio Code extension with rich support for the Python language (for all actively supported versions of the language: >=3.6), including features such as IntelliSense (Pylance), linting, debugging, code navigation, code formatting, refactoring, variable explorer, test explorer, and more!</p>
          </div>
          <div className="bg-indigo-200 rounded-full py-2 px-4 w-min">
            <span>Python</span>
          </div>
        </div>

        <div>2</div>

        <div>3</div>
      </div>
    </div>
  )
}
