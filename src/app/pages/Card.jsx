import React from "react";
import {Card, CardHeader, Image} from "@nextui-org/react";

const titles = ["What to watch", "Plant a tree", "Learn to code", "Explore the world"];
const subtitles = ["Stream the Acme event", "Contribute to the planet", "Join the open source community", "Travel from home"];

const numCards = Math.floor(Math.random() * (20 - 5 + 1)) + 5;

const cardData = Array.from({ length: numCards }, () => ({
  title: titles[Math.floor(Math.random() * titles.length)],
  subtitle: subtitles[Math.floor(Math.random() * subtitles.length)],
}));

export default function App() {
  return (
    <section className="flex flex-col">
      <h1 className="p-8 text-6xl text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-red-500 to-blue-500">Galeria Dinamica</h1>
      <div className="max-w-[1500px] gap-4 mx-auto grid grid-cols-1 sm:grid-cols-3 px-16">
        {cardData.map((card, index) => (
          <Card key={index} className="w-full h-[400px] shadow-md shadow-white">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start bg-black bg-opacity-50">
              <p className="font-bold uppercase text-tiny text-white/60">{card.title}</p>
              <h4 className="font-medium text-white text-large">{card.subtitle}</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 object-cover w-full h-full"
              src={`https://source.unsplash.com/random/${index}`}
            />
          </Card>
        ))}
      </div>
    </section>
  );
}