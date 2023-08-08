import GameController from "./GameController";

type EventCallBack = (data: any) => void;
class SocketHelper {
  private socket;
  private subscribePool: Map<string, Array<EventCallBack>> = new Map();
  init() {
    
  }
  start() {
    const snakes = [
      {
        id: 1,
        score: 0,
        expectDirection: {
          x: 1,
          y: 0,
        }
      }
    ]
    if (true) {
      GameController.handelAction(snakes);
    }
  }
}
export default new SocketHelper();