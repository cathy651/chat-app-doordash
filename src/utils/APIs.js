const BASE_URL = 'http://localhost:8080/api/rooms'

// http://localhost:8080/api/rooms/0/messages
// get messages

export const getMessages = async(id) => {
  try{
    const response = await fetch(`${BASE_URL}/${id}/messages`);
    const messages = await response.json();
    return messages;
  } catch(error) {
    console.log('error while getting messages');
  }
}

// get rooms
//http://localhost:8080/api/rooms

export const getRooms = async(id) => {
  try{
    const response = await fetch(`${BASE_URL}`);
    const rooms = await response.json();
    return rooms;
  } catch(error) {
    console.log('error while getting rooms');
  }
}

// get users in room
//http://localhost:8080/api/rooms/0

export const getUsersInARoom = async(id) => {
  try{
    const response = await fetch(`${BASE_URL}/${id}`);
    const users = await response.json();
    return users;
  } catch(error) {
    console.log('error while getting users in a room');
  }
}