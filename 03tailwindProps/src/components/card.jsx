import React from 'react';

/* Now hum jab do baar card de rhe hai yo same info hi aa rhi hai. Suppose hume The coldest sunset ke jagah dusri info laani hai to hum props ka use karenge. */
const Card = ({channel = "Default"}) => {
  console.log("props: ",channel);
  
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
        {/* Now jab bhi hum img tag likhte hai usko yaha par closing tag dena padta hai. */}
        <img className="w-full" src='https://v1.tailwindcss.com/img/card-top.jpg' alt="Sunset in the mountains" />
          <div className="px-6 py-4">
            {/* Yaha par hum pipe(|) symbol bhi use kar skte the like this,
                  <div>{channel | "Default"}          
                lekin usse readability par asar padta hai.Isliye hum sidhe hi function mei pass akr dete hai.*/
            }
            <div className="font-bold text-xl mb-2">{channel}</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
          </div>
      </div>
    );
}

export default Card;
