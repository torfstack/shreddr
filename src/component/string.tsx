'use client'

import {
    AllEightStringSets, AllSevenStringSets,
    AllSixStringSets,
    AllStringSets, CustomStringSetName, defaultStringSetOfLength, GuitarString,
    GuitarStringSet, guitarStringSetFrom,
} from "@/types/string";
import {useState} from "react";
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    ListItem,
    List,
    Stack, ListSubheader, Typography, IconButton, TextField
} from "@mui/material";
import {
    AllEightStringTunings,
    AllNotes, AllSevenStringTunings, AllSixStringTunings, AllTunings, CustomTuningName, defaultTuningOfLength,
    MusicalNote, noteFrom,
    Tuning, tuningFromName, tuningFromNotes,
} from "@/types/music";
import {tensionOf, tensionOfStrings} from "@/types/tension";
import PlusIcon from '@mui/icons-material/Add';
import MinusIcon from '@mui/icons-material/Remove';
import _ from "lodash-es";

export function StringSet({stringSet, tuning}: {stringSet: GuitarStringSet, tuning: Tuning}) {
    const [chosenStrings, setChosenStrings] = useState(stringSet)
    const [chosenTuning, setChosenTuning] = useState(tuning)
    const [scaleLength, setScaleLength] = useState(25.5)

    function handleTuningChange(event: any) {
        const newTuning = tuningFromName(event.target.value)
        setChosenTuning(newTuning)
        setChosenStrings((currentStrings: GuitarStringSet) => {
            if (currentStrings.strings.length != newTuning.notes.length) {
                return defaultStringSetOfLength(newTuning.notes.length)
            }
            return currentStrings
        })
    }

    function handleGaugeChange(event: any) {
        const newStringSet = guitarStringSetFrom(event.target.value)
        setChosenStrings(newStringSet)
        setChosenTuning((currentTuning: Tuning) => {
            if (currentTuning.notes.length != newStringSet.strings.length) {
                return defaultTuningOfLength(newStringSet.strings.length)
            }
            return currentTuning
        })
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
                return tuningFromNotes(newNotes)
            })
        }
    }

    function ScaleLengthSelect() {
        return <>
            <Stack
                direction="row"
                spacing={2}
                sx={{
                    pt: 2,
                    pl: 2
                }}
            >
                <IconButton
                    onClick={() => setScaleLength(scaleLength - 0.25)}
                >
                    <MinusIcon />
                </IconButton>
                <TextField
                    label="Scale Length"
                    value={scaleLength}
                />
                <IconButton
                    onClick={() => setScaleLength(scaleLength + 0.25)}
                >
                    <PlusIcon />
                </IconButton>
            </Stack>
        </>
    }

    function TunableGuitarString({string, note, index}: {string: GuitarString, note: MusicalNote, index: number}) {
        const reverseIndex = chosenStrings.strings.length - index - 1
        return <>
            <ListItem>
                <InputLabel sx={{fontSize: 20}}>{string.gauge}</InputLabel>
                <FormControl sx={{ m: 2, minWidth: 250}}>
                    <Select
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
                <InputLabel sx={{fontSize: 20}}>
                    {_.round(tensionOf(string, note, scaleLength).value, 2)}
                </InputLabel>
            </ListItem>
        </>
    }

    function GuitarStrings({stringSet, tuning}: {stringSet: GuitarStringSet, tuning: Tuning}) {
        return (
            <List>
                {stringSet.strings.toReversed().map((string, index) => (
                    <TunableGuitarString
                        key={index}
                        string={string}
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
                alignItems="start"
                spacing={2}
            >
                <Stack
                    direction="column"
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
                            <ListSubheader>6 String</ListSubheader>
                            {AllSixStringSets.map((stringSet, index) => (
                                <MenuItem key={index} value={stringSet.name}>{stringSet.name}</MenuItem>
                            ))}
                            <ListSubheader>7 String</ListSubheader>
                            {AllSevenStringSets.map((stringSet, index) => (
                                <MenuItem key={index} value={stringSet.name}>{stringSet.name}</MenuItem>
                            ))}
                            <ListSubheader>8 String</ListSubheader>
                            {AllEightStringSets.map((stringSet, index) => (
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
                            <ListSubheader>6 String</ListSubheader>
                            {AllSixStringTunings.map((tuning, index) => (
                                <MenuItem key={index} value={tuning.name}>{tuning.name}</MenuItem>
                            ))}
                            <ListSubheader>7 String</ListSubheader>
                            {AllSevenStringTunings.map((tuning, index) => (
                                <MenuItem key={index} value={tuning.name}>{tuning.name}</MenuItem>
                            ))}
                            <ListSubheader>8 String</ListSubheader>
                            {AllEightStringTunings.map((tuning, index) => (
                                <MenuItem key={index} value={tuning.name}>{tuning.name}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <ScaleLengthSelect />
                </Stack>

                <GuitarStrings stringSet={chosenStrings} tuning={chosenTuning} />

                <Typography
                    sx={{
                        p: 2,
                        fontSize: 20,
                        fontWeight: 'light'
                    }}
                >
                    Tension in Pound: {_.round(tensionOfStrings(chosenStrings.strings, chosenTuning.notes, scaleLength).value, 2)}
                </Typography>
            </Stack>
        </>
    );
}

