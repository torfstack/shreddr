'use client'

import {
    EBPowerSlinky,
    EBRegularSlinky,
    EBSkinnyTopHeavyBottom,
    EBSuperSlinky,
    Gauges,
    TunedGuitarString,
    TunedGuitarStringSet
} from "@/types/string";
import {useState} from "react";
import {Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {
    MusicalNotes,
    SixDropCTuning,
    SixDropDTuning,
    SixStandardDTuning,
    SixStandardETuning,
} from "@/types/music";

function TunableGuitarString({gauge, note}: TunedGuitarString) {
    return <p>
        <Button>-</Button>  {note}  <Button>+</Button>
        <Button>-</Button>  {gauge}  <Button>+</Button>
    </p>
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
        <div>
            <FormControl sx={{m: 1, minWidth: 240}} size="small">
                <InputLabel id="select-gauges-label">Gauges</InputLabel>
                <Select
                    labelId="select-gauges-label"
                    id="select-gauges"
                    label="Gauges"
                    value={chosenStrings}
                    onChange={handleGaugeChange}>

                    <MenuItem value={EBRegularSlinky}>{EBRegularSlinky}</MenuItem>
                    <MenuItem value={EBSuperSlinky}>{EBSuperSlinky}</MenuItem>
                    <MenuItem value={EBPowerSlinky}>{EBPowerSlinky}</MenuItem>
                    <MenuItem value={EBSkinnyTopHeavyBottom}>{EBSkinnyTopHeavyBottom}</MenuItem>

                </Select>
            </FormControl>

            <FormControl sx={{m: 1, minWidth: 240}} size="small">
                <InputLabel id="select-tuning-label">Tuning</InputLabel>
                <Select
                    labelId="select-tuning-label"
                    id="select-tuning"
                    label="Tuning"
                    value={chosenTuning}
                    onChange={handleTuningChange}>

                    <MenuItem value={SixStandardETuning}>{SixStandardETuning}</MenuItem>
                    <MenuItem value={SixDropDTuning}>{SixDropDTuning}</MenuItem>
                    <MenuItem value={SixStandardDTuning}>{SixStandardDTuning}</MenuItem>
                    <MenuItem value={SixDropCTuning}>{SixDropCTuning}</MenuItem>
                </Select>
            </FormControl>

            {Gauges(chosenStrings).map((string, index) => (
                <TunableGuitarString key={index} gauge={string.gauge} note={MusicalNotes(chosenTuning)[index]}/>
            ))}
        </div>
    );
}

