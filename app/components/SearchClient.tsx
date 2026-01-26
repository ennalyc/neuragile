'use client'
import { useState } from "react";
import SmallCard from "@/app/components/cards/SmallCard";
import FilterSection from "../components/sections/FilterSection";
import { Card } from "@/app/types/card";
import Link from "next/link";

interface SearchClientProps {
    initialResults: Card[]; 
    query: string;
}

const SearchClient = ({ initialResults, query }: SearchClientProps) => {
    const [activeFilterTagClicked, setActiveFilterTagClicked] = useState<null | string>(null);
    const [activeNdTagClicked, setActiveNdTagClicked] = useState<null | string>(null);
    const [activeCardButton, setActiveCardButton] = useState<null | string>(null);

    const filteredResults = initialResults.filter((card) => {
        const matchesFilter = !activeFilterTagClicked || card.relatedCP.includes(activeFilterTagClicked);
        const matchesNd = !activeNdTagClicked || card.relatedND.includes(activeNdTagClicked);
        const matchesType = !activeCardButton || card.category === activeCardButton;
        
        return matchesFilter && matchesNd && matchesType;
    });

    return (
        <div className="flex px-30 justify-center mt-8">
           <div className="w-full max-w-7xl">
             <h1 className="text-2xl mb-6"><strong>Results for:</strong> {query}</h1>
            
            <FilterSection
              activeCard={activeCardButton}
              activeFilter={activeFilterTagClicked}
              activeNd={activeNdTagClicked}
              setActiveCardButton={setActiveCardButton}
              setActiveFilterTagClicked={setActiveFilterTagClicked}
              setActiveNdTagClicked={setActiveNdTagClicked}
              style="hidden"
            />

            <div className="flex flex-wrap gap-4 mt-8">
                {filteredResults.length > 0 ? (
                    filteredResults.map((card) => (
                        <Link className="transition-transform duration-300 hover:scale-[1.02]" key={card.id} href={`/card/${card.front[0].cardNum}`}>
                            <SmallCard state={true} cardData={card} size="small" />
                        </Link>
                    ))
                ) : (
                    <div className="w-full py-20 bg-neutral-50 rounded-xl text-center">
                        <p className="text-neutral-400">Could not find any card with these filters.</p>
                    </div>
                )}
            </div>
           </div>
        </div>
    );
};

export default SearchClient;