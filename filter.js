const numbers = [1, 4, 5, 15, 12];
const players = [5, 2, 45, 75, 65, 67, 12, 34, 56];
// const selected = players.filter((p) => p > 50);
// const selected = players.filter((p) => p > 50);
const selected = players.filter(p => p % 2 ===1);


console.log(selected);



const friends = ['Tom', 'John', 'Micheal', 'Oliver'];
const oddFriends = friends.filter(friend => friend.length > 4);
console.log(oddFriends);