/**
 * Created by sbkloaner-sbktech on 9/1/14.
 */

var canyonCows = [
    {name: "Bessie", type: "cow", hadCalf: "Burt"},
    {name: "Donald", type: "bull", hadCalf: null},
    {name: "Esther", type: "calf", hadCalf: null},
    {name: "Burt", type: "calf", hadCalf: null},
    {name: "Sarah", type: "cow", hadCalf: "Esther"},
    {name: "Samson", type: "bull", hadCalf: null},
    {name: "Delilah", type: "cow", hadCalf: null}
];


Array.prototype.countcattle = function (type)
{
    typeCount = 0;
    for (var i = 0; i < this.length; i++) {
        if (this[i].type == type) {
            console.log("in loop");
            typeCount++;
        }
    }
    return typeCount;
}


console.log(canyonCows.countcattle("cow"));

