import {User} from "./user";
import {CourtChange} from "./court-change";
import {OrderType} from "./order-type";


export class UserOrder {
  public id: number;
  public user: User;
  public courtChange: CourtChange;
  public orderType: OrderType;
  public price: number;
  quantity: number;
  quantity_executed: number;
  buyOrder: boolean;
  canceled_at: string;
  executed_at: string;
  terminated_at: string;
  created_at: string;
  updated_at: string;

}
