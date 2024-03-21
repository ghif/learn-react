//single selection
//multiple selection

import { useState } from "react";
import data from "./data";
import "./styles.css";
import { useEffect } from "react";

function Accordian() {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);


    const handleSingleSelection = (getCurrentId) => {
        setSelected(getCurrentId === selected ? null : getCurrentId)
    }

    const handleMultiSeelection = (getCurrentId) => {
        let cpyMultiple = [...multiple];
        const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);
    
        if (findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId);
        else cpyMultiple.splice(findIndexOfCurrentId, 1);

        setMultiple(cpyMultiple);
    }

    useEffect(() => {
        // Change button color
        const btn = document.querySelector('button');
        btn.style.backgroundColor = enableMultiSelection ? 'green' : 'gray';

        // reset states
        setSelected(null);
        setMultiple([]);

        }, [enableMultiSelection]
    )

    return (
        <div className="acc-wrapper">
            <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable Multi Selection</button>
            <div className="accordian">
                {
                    data && data.length > 0 ? 
                    data.map(dataItem => (
                        <div className="item">
                            <div onClick={enableMultiSelection 
                                ? () => handleMultiSeelection(dataItem.id) 
                                : () => handleSingleSelection(dataItem.id)} className="title"
                            >
                                <h3>{dataItem.question}</h3>
                                <span>
                                {
                                    selected === dataItem.id ? '-' : '+'
                                }
                                </span>
                            </div>
                            {
                                selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ? 
                                <div className="content">{dataItem.answer}</div>
                                : null
                            }
                        </div>
                    ))
                    : <div>No data found !</div>
                }
            </div>
        </div>
    );
}

export default Accordian;