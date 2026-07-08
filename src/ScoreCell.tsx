import type { ScoreData } from "./types";

interface ComponentProps {
    data: ScoreData;
}

export default function ScoreCell( { data }: ComponentProps) {
    return(
        <div>
            {data.category}
            {data.score}/100
        </div>
    );
}