class Player{
    constructor(){
        this.name = null;
        this.index = null;
        this.distance = 0;
    }
    getCount(){
        var PCref = database.ref("playerCount");
        PCref.on("value", function(data){
        playerCount = data.val();
        })
    }
    updateCount(count){
        database.ref("/").update({
            playerCount : count
        })
    }
    update(){
        var refPt = "players/player"+this.index;
        database.ref(refPt).set({
            'name' : this.name,
            'distance' : this.distance
        });
    }

    static getPlayerInfo(){
        var PLref = database.ref("players");
        PLref.on("value", function(data){
            allPlayers = data.val();
        });
    }
}