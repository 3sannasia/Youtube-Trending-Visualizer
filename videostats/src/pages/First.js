import "./first.css"
const api="https://10.192.38.59:5000/query";
function First() {
    async function c() {
        await fetch(api, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: 'INSERT INTO Videos(' + document.getElementById("VideoID") + ',\"' + document.getElementById("VideoTitle") + '\",\"' + document.getElementById("Region") + '\",' + document.getElementById("Length") + ',' + document.getElementById("Views") + ',' + document.getElementById("Dislikes") + ',' + document.getElementById("Likes") + ', NULL,' + document.getElementById("NumComments") + ',' + document.getElementById("ChannelID") + ',' + document.getElementById("UserID") + ');' })
        });
    }
    async function re() {
        await fetch(api, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: 'SELECT VideoTitle FROM Videos WHERE VideoID=' + document.getElementById("rVideoID") + ' AND ChannelID=' + document.getElementById("rChannelID") + ' AND UserID=\"' + document.getElementById("rUserID") + ";" })
        }).then(r => {
            document.getElementById("rtitle").value = r.JSON().VideoTitle;
        });
    }
    async function u() {
        await fetch(api, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: 'UPDATE Videos SET VideoTitle=/"' + document.getElementById("VideoTitle") + '/" WHERE VideoID=' + document.getElementById("uVideoID") + ' AND ChannelID=' + document.getElementById("uChannelID") + ' AND UserID=' + document.getElementById("uUserID") })
        });
    }
    async function d() {
        await fetch(api, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: 'DELETE FROM Videos WHERE VideoID=' + document.getElementById("dVideoID") + ' AND ChannelID=' + document.getElementById("dChannelID") + ' AND UserID=' + document.getElementById("dUserID") })
        });
    }
    return (
        <div>
            <div className="header">
                <>Upload Video</>
                <div className="row">
                    <input type="text" placeholder="VideoID" id="VideoID" className="search" />
                    <input type="text" placeholder="VideoTitle" id="VideoTitle" className="search" />
                    <input type="text" placeholder="Region" id="Region" className="search" />
                    <input type="text" placeholder="Length" id="Length" className="search" />
                    <input type="text" placeholder="Views" id="Views" className="search" />
                    <input type="text" placeholder="Dislikes" id="Dislikes" className="search" />
                    <input type="text" placeholder="Likes" id="Likes" className="search" />
                    <input type="text" placeholder="NumComments" id="NumComments" className="search" />
                    <input type="text" placeholder="ChannelID" id="ChannelID" className="search" />
                    <input type="text" placeholder="UserID" id="UserID" className="search" />
                    <button type="submit" className="button" onClick={c}>Submit</button>
                </div>
            </div>
            <div className="header">
                <>Get Video Title</>
                <div className="row">
                    <input type="text" placeholder="VideoID" id="rVideoID" className="search" />
                    <input type="text" placeholder="ChannelID" id="rChannelID" className="search" />
                    <input type="text" placeholder="UserID" id="rUserID" className="search" />
                    <button type="submit" className="button" onClick={re}>Submit</button>
                    <p id="rtitle" className="output"></p>
                </div>
            </div>
            <div className="header">
                <>Update Video Title</>
                <div className="row">
                    <input type="text" placeholder="VideoID" id="uVideoID" className="search" />
                    <input type="text" placeholder="ChannelID" id="uChannelID" className="search" />
                    <input type="text" placeholder="UserID" id="uUserID" className="search" />
                    <input type="text" placeholder="VideoTitle" id="uVideoTitle" className="search" />
                    <button type="submit" className="button" onClick={u}>Submit</button>
                </div>
            </div>
            <div className="header">
                <>Delete Video</>
                <div className="row">
                    <input type="text" placeholder="VideoID" id="dVideoID" className="search" />
                    <input type="text" placeholder="ChannelID" id="dChannelID" className="search" />
                    <input type="text" placeholder="UserID" id="dUserID" className="search" />
                    <button type="submit" className="button" onClick={d}>Submit</button>
                </div>
            </div>
        </div>
    );
}

export default First;