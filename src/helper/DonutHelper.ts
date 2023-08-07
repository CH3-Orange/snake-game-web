import { Vector } from "./Vector";

export enum DonutType{
  Small = 0,
  Big = 1,
}

export class Donut{
  public Id: number;
  public DonutType: DonutType;
  public Position: Vector;
}

class DonutHelper{
  private DonutMap = new Map<number, Donut>();
  pushDonut(donut: Donut) {
    this.DonutMap.set(donut.Id, donut);
  }
  delDonut(dountId: number) {
    this.DonutMap.delete(dountId);
  }
  getAllDonuts() {
    return Array.from(this.DonutMap.values());
  }
}

export default new DonutHelper();
