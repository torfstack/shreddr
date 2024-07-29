'use client'

import {EBRegularSlinky, EBSuperSlinky, TunedGuitarString, TunedGuitarStringSet} from "@/types/string";
import {useState} from "react";
import {MenuItem, Select} from "@mui/material";
import {SixDropDTuning, SixStandardTuning} from "@/types/music";

function TunableGuitarString({gauge, note}: TunedGuitarString) {
    return <p>{note}          {gauge}</p>
}

export function Strings({strings, tuning}: TunedGuitarStringSet){
    const [chosenStrings, setChosenStrings] = useState(strings)
    const [chosenTuning, setChosenTuning] = useState(tuning)

    function handleTuningChange(event: any) {
        setChosenTuning(event.target.value)
    }

    function handleGaugeChange(event: any) {
        setChosenStrings(event.target.value)
    }

    return (
        <>
            <Select
                labelId="select gauges"
                label="Gauges"
                value={chosenStrings}
                onChange={handleGaugeChange}>

                <MenuItem value={EBRegularSlinky}>Regular Slinky (10 - 46)</MenuItem>
                <MenuItem value={EBSuperSlinky}>Super Slinky (9 - 42)</MenuItem>
            </Select>

            <Select
                labelId="select tuning"
                label="Tuning"
                value={chosenTuning}
                onChange={handleTuningChange}>

                <MenuItem value={SixStandardTuning}>Standard</MenuItem>
                <MenuItem value={SixDropDTuning}>DropD</MenuItem>
            </Select>

            {chosenStrings.map((string, index) => (
                <TunableGuitarString key={index} gauge={string.gauge} note={chosenTuning[index]}/>
            ))}
        </>
    );
}

