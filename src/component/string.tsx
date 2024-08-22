'use client'

import {
    EBPowerSlinky,
    EBRegularSlinky,
    EBSkinnyTopHeavyBottom,
    EBSuperSlinky, GuitarStringSet, guitarStringSetFrom,
} from "@/types/string";
import {useState} from "react";
import {
    Grid,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Box,
    Input,
    TextField,
    ListItem,
    List,
    ListItemText, ListItemIcon, Paper, Stack, Typography, Divider
} from "@mui/material";
import {
    MusicalNote,
    SixDropCTuning,
    SixDropDTuning,
    SixStandardDTuning,
    SixStandardETuning, Tuning, tuningFrom,
} from "@/types/music";

function TunableGuitarString(gauge: number, note: MusicalNote, index: number) {
    return <>
            <ListItem
                key={index}
            >
                <ListItemIcon>
                    <Box>
                        <TextField
                            label={gauge}
                            variant="standard"
                            value={note.name}
                            inputProps={{style: {fontSize: 20}}}
                        />
                    </Box>
                </ListItemIcon>
            </ListItem>
    </>
}

export function StringSet({stringSet, tuning}: {stringSet: GuitarStringSet, tuning: Tuning}) {
    const [chosenStrings, setChosenStrings] = useState(stringSet)
    const [chosenTuning, setChosenTuning] = useState(tuning)

    function handleTuningChange(event: any) {
        setChosenTuning(tuningFrom(event.target.value))
    }

    function handleGaugeChange(event: any) {
        setChosenStrings(guitarStringSetFrom(event.target.value))
    }

    return (
        <>
            <Typography variant={"h2"} gutterBottom fontWeight="medium">
                Guitar Tension
            </Typography>
            <Paper
                sx={{
                    p: 4,
                    margin: 'auto',
                    maxWidth: 1000,
                    flexGrow: 1,
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'dark' ? '#1A2027' : '#fafafa',
                }}
            >
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    useFlexGap
                    flexWrap="wrap"
                    divider={<Divider orientation="vertical" flexItem />}
                    spacing={2}
                >
                    <Stack
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <FormControl sx={{m: 3, p: 2, minWidth: 320, maxWidth: 320}} size="small">
                            <InputLabel id="select-gauges-label">Gauges</InputLabel>
                            <Select
                                labelId="select-gauges-label"
                                id="select-gauges"
                                label="Gauges"
                                value={chosenStrings.name}
                                onChange={handleGaugeChange}
                                variant="filled">

                                <MenuItem value={EBRegularSlinky.name}>{EBRegularSlinky.name}</MenuItem>
                                <MenuItem value={EBSuperSlinky.name}>{EBSuperSlinky.name}</MenuItem>
                                <MenuItem value={EBPowerSlinky.name}>{EBPowerSlinky.name}</MenuItem>
                                <MenuItem value={EBSkinnyTopHeavyBottom.name}>{EBSkinnyTopHeavyBottom.name}</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl sx={{m: 3, p: 2, minWidth: 320, maxWidth: 320}} size="small">
                            <InputLabel id="select-tuning-label">Tuning</InputLabel>
                            <Select
                                labelId="select-tuning-label"
                                id="select-tuning"
                                label="Tuning"
                                value={chosenTuning.name}
                                onChange={handleTuningChange}
                                variant="filled">

                                <MenuItem value={SixStandardETuning.name}>{SixStandardETuning.name}</MenuItem>
                                <MenuItem value={SixDropDTuning.name}>{SixDropDTuning.name}</MenuItem>
                                <MenuItem value={SixStandardDTuning.name}>{SixStandardDTuning.name}</MenuItem>
                                <MenuItem value={SixDropCTuning.name}>{SixDropCTuning.name}</MenuItem>
                            </Select>
                        </FormControl>
                    </Stack>


                    <Stack
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <List sx={{ width: '100%', maxWidth: 500 }}>
                            {chosenStrings.strings.map((string, index) => (
                                TunableGuitarString(string.gauge, chosenTuning.notes[index], index)
                            ))}
                        </List>
                    </Stack>
                </Stack>
            </Paper>
        </>
    );
}

