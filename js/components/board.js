// js/components/board.js

import React from "react";
import List from "./list";

export default function Board() {
    const numLists = 3;
    const lists = new Array(numLists)
        .fill("")
        .map(() => {return (<List />)});

    return (
        <div className="board">
            {lists}
        </div>
    );
}
