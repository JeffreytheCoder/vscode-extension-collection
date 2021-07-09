import { useEffect, useState } from "react";
import Card from "../components/card";
import { extensions, tags } from "../components/json";

export default function Home() {
  const [displayItems, setDisplayItems] = useState([]);
  const [currentTag, setCurrentTag] = useState("React");
  const [clickedMenu, setClickedMenu] = useState(false);
  
  useEffect(() => {
    const newDisplayItems = [];
    extensions.map(extension => {
      if (extension.tags.includes(currentTag)) {
        newDisplayItems.push(extension);
      }
    })
    setDisplayItems(newDisplayItems);
  }, [currentTag])

  return (
    <div className="bg-background top-0 min-h-screen">

      {/* top */}
      <div className="flex flex-col py-16 relative">

        {/* menu */}
        <div className="block absolute top-5 left-5 sm:hidden" onClick={() => setClickedMenu(!clickedMenu)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>

        <div className={`${clickedMenu ? "block" : "hidden"}`}>
          {tags.map((tag, index) => {
            return <div key={index} onClick={() => setCurrentTag(tag.name)} className={`font-bold text-xl ${tag.name == currentTag ? "text-darken" : "text-gray-500"} hover:text-darken transition duration-100 ease-out flex justify-between border-b-2 mb-4 cursor-pointer`}>
              <span>{tag.name}</span>
              <span>{tag.count}</span>
            </div>
          })}
        </div>

        {/* title */}
        <div className="flex justify-center mb-8">
          <img src="vscode.png" className="w-40 h-40"></img>
        </div>
        <h1 className="text-darken text-center text-4xl font-bold mb-5">Best vscode extensions for developers 🔨</h1>
        <h2 className="text-gray-500 text-center text-xl">Find and download the productivity booster for your tech stack</h2>
      </div>

      {/* tags & cards */}
      <div className="grid grid-cols-3 sm:grid-cols-4 mx-5">

        {/* tags */}
        <div className="hidden sm:block col-span-1 mx-10 my-5">
          {tags.map((tag, index) => {
            return <div key={index} onClick={() => setCurrentTag(tag.name)} className={`font-bold text-xl ${tag.name == currentTag ? "text-darken" : "text-gray-500"} hover:text-darken transition duration-100 ease-out flex justify-between border-b-2 mb-4 cursor-pointer`}>
              <span>{tag.name}</span>
              <span>{tag.count}</span>
            </div>
          })}
        </div>
        
        {/* cards */}
        <div className="col-span-3">
          <div className="grid gap-10 mx-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {displayItems.map((extension, index) => {
              return <Card key={index} imageUrl={extension.imageUrl} extensionUrl={extension.extensionUrl} name={extension.name} download={extension.download} description={extension.description} tags={extension.tags}></Card>
            })} 
          </div>
        </div>
      </div>
    </div>
  )
}
