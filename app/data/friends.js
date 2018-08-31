// Create a friends module to hold data
var Friends = function(){
    this.friendArr = [];
    // Adding a new friend
    this.addFriend = function(newFriend){
        this.friendArr.push(newFriend);
    };

    // Find the best match given a new friend
    this.getMatch = function(newFriend){
        var match = 0;
        var difference = 0;
        var smallestDiff = 100;
        // Find friend with the smallest difference in scores
        for(var i = 0; i < this.friendArr.length; i++){
            difference = 0;
            for(var j = 0; j < newFriend.scores.length; j++){
                difference += Math.abs(newFriend.scores[j] - this.friendArr[i].scores[j]);
            }
            if(difference < smallestDiff){
                match = i;
            }
        }
        this.friendArr.push(newFriend);
        return this.friendArr[match];
    };

    // Return the entire friends array
    this.returnFriends = function(){
        return this.friendArr;
    };
};

module.exports = Friends;