'use client'
import { useState } from "react";
import SmallCard from "@/app/components/cards/SmallCard";
import FilterSection from "../components/sections/FilterSection";
import { Card } from "@/app/types/card";

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
        <div className="px-24 mt-8">
            <h1 className="text-2xl mb-8"><strong>Resultados para:</strong> {query}</h1>
            
            <FilterSection
            activeCard={activeCardButton}
              activeFilter={activeFilterTagClicked}
              activeNd={activeNdTagClicked}
              setActiveCardButton={setActiveCardButton}
              setActiveFilterTagClicked={setActiveFilterTagClicked}
              setActiveNdTagClicked={setActiveNdTagClicked}
            />

            <div className="flex flex-wrap gap-4 mt-8">
                {filteredResults.length > 0 ? (
                    filteredResults.map((card) => (
                        <SmallCard state={true} key={card.id} cardData={card} size="small" />
                    ))
                ) : (
                    <div className="w-full py-20 bg-neutral-50 rounded-xl text-center">
                        <p className="text-neutral-400">Nenhum card encontrado com esses filtros.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchClient;