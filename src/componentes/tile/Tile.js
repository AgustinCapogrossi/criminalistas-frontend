import "./Tile.css"

//Azulejos del tablero
export default function Tile({i, j, image}){

    if(i === 6){
        return (
            <div className="tile line">
                {image && <div style={{backgroundImage: `url(${image})`}} className="piece"></div>}
            </div>
        );
    }else if(i === 13){
        return (
            <div className="tile line">
                {image && <div style={{backgroundImage: `url(${image})`}} className="piece"></div>}
            </div>
        );
    }else if(j === 6){
        return (
            <div className="tile line">
                {image && <div style={{backgroundImage: `url(${image})`}} className="piece"></div>}
            </div>
        );
    }else if(j === 13){
        return (
            <div className="tile line">
                {image && <div style={{backgroundImage: `url(${image})`}} className="piece"></div>}
            </div>
        );
    }else if(i === 5 && j === 17 ){
        return (
            <div className="tile line">
                {image && <div style={{backgroundImage: `url(${image})`}} className="piece"></div>}
            </div>
        );
    }else if(i === 14 && j === 15 ){
        return (
            <div className="tile line">
                {image && <div style={{backgroundImage: `url(${image})`}} className="piece"></div>}
            </div>
        );
    }else if(i === 4 && j === 12 ){
        return (
            <div className="tile line">
                {image && <div style={{backgroundImage: `url(${image})`}} className="piece"></div>}
            </div>
        );
    }else if(i === 5 && j === 9 ){
        return (
            <div className="tile line">
                {image && <div style={{backgroundImage: `url(${image})`}} className="piece"></div>}
            </div>
        );
    }else if(i === 3 && j === 7 ){
        return (
            <div className="tile line">
                {image && <div style={{backgroundImage: `url(${image})`}} className="piece"></div>}
            </div>
        );
    }else if(i === 5 && j === 4 ){
        return (
            <div className="tile line">
                {image && <div style={{backgroundImage: `url(${image})`}} className="piece"></div>}
            </div>
        );
    }else if(i === 14 && j === 3 ){
        return (
            <div className="tile line">
                {image && <div style={{backgroundImage: `url(${image})`}} className="piece"></div>}
            </div>
        );
    }else if(i === 10 && j === 5 ){
        return (
            <div className="tile line">
                {image && <div style={{backgroundImage: `url(${image})`}} className="piece"></div>}
            </div>
        );
    }else if(i === 16 && j === 7 ){
        return (
            <div className="tile line">
                {image && <div style={{backgroundImage: `url(${image})`}} className="piece"></div>}
            </div>
        );
    }else if(i === 14 && j === 9 ){
        return (
            <div className="tile line">
                {image && <div style={{backgroundImage: `url(${image})`}} className="piece"></div>}
            </div>
        );
    }else if(i === 15 && j === 12 ){
        return (
            <div className="tile line">
                {image && <div style={{backgroundImage: `url(${image})`}} className="piece"></div>}
            </div>
        );
    }else if(i === 10 && j === 14 ){
        return (
            <div className="tile line">
                {image && <div style={{backgroundImage: `url(${image})`}} className="piece"></div>}
            </div>
        );
    }
    else{
        return <div className="tile"></div>;
    }

}
