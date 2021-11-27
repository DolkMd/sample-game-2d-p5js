import p5 from "p5";
import Canvas from "../../../framework/p5js/Canvas";

interface Props {

}

const GamePage = (props: Props) => {
    return <Canvas sketch= {(p: p5) => {
        p.setup = () => {
            p.createCanvas(p.windowWidth, p.windowHeight);
        };
    
        p.draw = () => {
            p.line(p.random(1, 1000), p.random(1, 1000), p.random(1, 1000), p.random(1, 1000))
        }
    }} />
};


export default GamePage;