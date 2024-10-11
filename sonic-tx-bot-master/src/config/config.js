import { addressList } from "./address_list.js";

export class Config {
  static destAddress = addressList; // Address destination list
  static drawAmount = 3; // Lottery draw amount
  static maxRetry = 3; // Max error retry for claiming
  static useLottery = false; // If you want to use the lottery feature

  // Method to get a random send amount between 0.0005 and 0.002
  static getSendAmount() {
    return Math.random() * (0.002 - 0.0005) + 0.0005; 
  }
}
