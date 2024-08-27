import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {StringSet} from "@/component/string";
import {EBRegularSlinky} from "@/types/string";
import {SixStandardETuning} from "@/types/music";
import {AppBar, Button, IconButton, Toolbar, Typography} from "@mui/material";
import MusicNoteIcon from '@mui/icons-material/MusicNote';

export default function Home() {

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MusicNoteIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Shreddr String Tension
                    </Typography>
                    <Button
                        color="inherit"
                        href={"mailto:torfstack+shreddr@gmail.com?body=Could you please add the following feature&subject=Shreddr Feedback"}
                    >
                        Contact
                    </Button>
                </Toolbar>
            </AppBar>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <StringSet stringSet={EBRegularSlinky} tuning={SixStandardETuning} />
            </main>
        </>
    );
}
