import {EBRegularSlinky} from "@/types/string";
import {SixStandardETuning} from "@/types/music";
import {Strings} from "@/component/string";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function Home() {

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Strings strings={EBRegularSlinky} tuning={SixStandardETuning} />
        </main>
    );
}
