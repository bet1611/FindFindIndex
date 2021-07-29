function findUserByUsername(array, string) {
    return array.find(function(obj) {
        return obj.username === string
    })
}

function removeUser(userArray, username) {
    let foundIndex = userArray.findIndex(function(user) {
        return user.username === username;
    })
    if(foundIndex === -1) return;
    return userArray.splice(foundIndex,1)[0];
}

