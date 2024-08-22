import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {StringSet} from "@/component/string";
import {EBRegularSlinky} from "@/types/string";
import {SixStandardETuning} from "@/types/music";

export default function Home() {

    return (
        <>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <StringSet stringSet={EBRegularSlinky} tuning={SixStandardETuning} />
            </main>
        </>
    );
}
