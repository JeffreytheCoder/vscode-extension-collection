import Image from 'next/image';

const Card = ({imageUrl, extensionUrl, name, download, description, tags}) => {
  return ( 
    <div className="bg-white rounded shadow-md p-6 mb-3 hover:shadow-lg transition duration-100 ease-out cursor-hover">
      <a target="_blank" href={extensionUrl} rel="noreferrer">
      <div className="flex justify-center">
        <Image src={imageUrl} alt="extension icon" className="w-20 h-20 cursor-pointer" layout='fill'></Image>
      </div>
      <div className="flex justify-between mt-5 items-center">
        <span className="text-gray-500 cursor-pointer font-bold text-lg">{name}</span>
      </div>
      <div className="my-2">
        <p className="text-gray-500">{description}</p>
      </div>
      {/* <div className="flex justify-end">
        <div className="flex flex-row flex-nowrap">
          <a target="_blank" href=~{extensionUrl}>
            <span className="text-darken font-semibold text-lg cursor-pointer inline">{download}</span>
            <svg class="h-6 w-6 inline-block text-darken" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />  <polyline points="7 11 12 16 17 11" />  <line x1="12" y1="4" x2="12" y2="16" /></svg>
          </a>
        </div>
      </div> */}
      {/* <div className="flex flex-row w-full">
        {tags.map((tag, index) => (
          <div key={index} className="bg-lighten text-white font-semibold rounded-full py-1 px-3 w-min inline mr-2 cursor-pointer">
            <span>{tag}</span>
          </div>
        ))}
      </div> */}
      </a>
    </div>
  );
}
 
export default Card;