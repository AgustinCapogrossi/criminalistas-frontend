import "./Tile.css"


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
    }else{
        return <div className="tile"></div>;
    }

}