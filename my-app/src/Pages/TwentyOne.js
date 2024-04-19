import { useEffect, useState } from "react";
import { requests } from "../Request";
import Row from "../components/Row";

function TwentyTwo() {
    const [oscars, setOscars] = useState([]);
    const year = 2021;
    useEffect(() => {
        fetch(requests.winner21)
            .then(response => response.json())
            .then(data => setOscars(data.results));
    }, []);
    return (
        <Row movies={oscars} year={year} />
    );
}

export default TwentyTwo;