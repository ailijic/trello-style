// js/components/list.js

import React from "react";
import Card from "./card";

export default function List() {
    const numCards = 3;
    const cards = new Array(numCards)
        .fill("")
        .map(() => {return (<Card />)});

    return (
        <div className="list">
            {cards}
        </div>
    );
}
