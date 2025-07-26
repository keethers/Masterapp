export const Exotica = {
  execute: async (command) => {
    switch (command.type) {
      case "bookHotel":
        return `Booking suite: ${command.name}`;
      case "purchaseVehicle":
        return `Purchasing ${command.vehicle} for ${command.amount} EX$`;
      case "checkBalance":
        return `Your current balance is ${command.balance} EX$`;
      case "playMusic":
        return `Now playing: ${command.song}`;
      default:
        return "Command not recognized";
    }
  }
};