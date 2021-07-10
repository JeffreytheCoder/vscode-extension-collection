import { useEffect, useState } from "react";
import Card from "../components/card";
import { extensions, tags } from "../components/json";
import Head from "next/head";
import Image from 'next/image';

export default function Home() {
  const [displayItems, setDisplayItems] = useState([]);
  const [currentTag, setCurrentTag] = useState("General");
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
    <>
    <Head>
      <title>Must-have vscode extensions</title>
      <link rel="shortcut icon" href="vscode.ico"></link>
    </Head>
    <body className="bg-background top-0 min-h-screen">

      {/* top */}
      <div className="flex flex-col py-16 relative">

        {/* mobile burger */}
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

        {/* add */}
        <a target="_blank" href="https://096w44xmskp.typeform.com/to/J0pH9gPa" rel="noreferrer">
        <button className="bg-darken text-white absolute top-5 right-5 rounded py-2 px-4 font-semibold text-lg shadow-lg hover:bg-primary duration-100 ease-out">Add yours</button>
        </a>
  

        {/* title */}
        <div className="flex justify-center mb-8">
          <Image src="/public/vscode.png" className="w-40 h-40" alt="vscode icon" layout='fill'></Image>
        </div>
        <h1 className="text-darken text-center text-4xl font-bold mb-5">Must-have vscode extensions for developers 🔨</h1>
        <h2 className="text-gray-500 text-center text-xl">Find and download the productivity booster for your tech stack!</h2>
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

      {/* footer */}
      <div className="bottom-0 w-full py-14 mt-20 bg-white text-gray-700 flex justify-center items-center">
        <span className="font-semibold text-xl ">Made by Jeffrey Yu © 2021</span>
        <a target="_blank" href="https://github.com/JeffreytheCoder/vscode-extension-collection" rel="noreferrer">
          <svg className="text-white h-10 w-10 ml-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        </a>
      </div>
    </body>
    </>
  )
}
