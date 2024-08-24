'use client'

import {
    AllStringSets, CustomStringSetName,
    EBPowerSlinky,
    EBRegularSlinky,
    EBSkinnyTopHeavyBottom,
    EBSuperSlinky, GuitarStringSet, guitarStringSetFrom,
} from "@/types/string";
import {useState} from "react";
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    ListItem,
    List,
    Stack
} from "@mui/material";
import {
    AllNotes, AllTunings, customTuning, CustomTuningName,
    MusicalNote, noteFrom,
    SixDropCTuning,
    SixDropDTuning,
    SixStandardDTuning,
    SixStandardETuning, Tuning, tuningFrom,
} from "@/types/music";

export function StringSet({stringSet, tuning}: {stringSet: GuitarStringSet, tuning: Tuning}) {
    const [chosenStrings, setChosenStrings] = useState(stringSet)
    const [chosenTuning, setChosenTuning] = useState(tuning)

    function handleTuningChange(event: any) {
        setChosenTuning(tuningFrom(event.target.value))
    }

    function handleGaugeChange(event: any) {
        setChosenStrings(guitarStringSetFrom(event.target.value))
    }

    function handleNoteChange(index: number): (event: any) => void {
        return (event: any) => {
            setChosenTuning((currentTuning: Tuning) => {
                console.log("chose note", event.target.value, "for string", index+1)
                const newNotes = currentTuning.notes.map((note, noteIndex) => {
                    if (noteIndex === index) {
                        return noteFrom(event.target.value)
                    }
                    return note
                })
                return customTuning(newNotes)
            })
        }
    }

    function TunableGuitarString({gauge, note, index}: {gauge: number, note: MusicalNote, index: number}) {
        const reverseIndex = chosenStrings.strings.length - index - 1
        return <>
            <ListItem>
                <InputLabel sx={{fontSize: 20}}>{gauge}</InputLabel>
                <FormControl sx={{ m: 2, minWidth: 250}}>
                    <Select
                        label={gauge.toString()}
                        variant="standard"
                        value={note.name}
                        onChange={handleNoteChange(reverseIndex)}
                        inputProps={{style: {fontSize: 20}}}
                    >
                        {AllNotes.map((note, index) => (
                            <MenuItem
                                key={index}
                                value={note.name}
                            >
                                {note.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </ListItem>
        </>
    }

    function GuitarStrings({stringSet, tuning}: {stringSet: GuitarStringSet, tuning: Tuning}) {
        return (
            <List>
                {stringSet.strings.toReversed().map((string, index) => (
                    <TunableGuitarString
                        key={index}
                        gauge={string.gauge}
                        note={tuning.notes.toReversed()[index]}
                        index={index}
                    />
                ))}
            </List>
        )
    }

    return (
        <>
            <Stack
                direction={{ sm: 'row', xs: 'column' }}
                alignItems="center"
                spacing={2}
            >
                <Stack
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                >
                    <FormControl sx={{m: 2, p: 2, minWidth: 300, maxWidth: 320}} size="small">
                        <InputLabel id="select-gauges-label">Gauges</InputLabel>
                        <Select
                            labelId="select-gauges-label"
                            id="select-gauges"
                            label="Gauges"
                            value={chosenStrings.name}
                            onChange={handleGaugeChange}
                            variant="filled">

                            <MenuItem value={CustomStringSetName}><em>{CustomStringSetName}</em></MenuItem>
                            {AllStringSets.map((stringSet, index) => (
                                <MenuItem key={index} value={stringSet.name}>{stringSet.name}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <FormControl sx={{m: 2, p: 2, minWidth: 300, maxWidth: 320}} size="small">
                        <InputLabel id="select-tuning-label">Tuning</InputLabel>
                        <Select
                            labelId="select-tuning-label"
                            id="select-tuning"
                            label="Tuning"
                            value={chosenTuning.name}
                            onChange={handleTuningChange}
                            variant="filled">

                            <MenuItem value={CustomTuningName}><em>{CustomTuningName}</em></MenuItem>
                            {AllTunings.map((tuning, index) => (
                                <MenuItem key={index} value={tuning.name}>{tuning.name}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Stack>

                <GuitarStrings stringSet={chosenStrings} tuning={chosenTuning} />
            </Stack>
        </>
    );
}

