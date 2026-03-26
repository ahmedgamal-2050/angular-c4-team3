import { Category } from "./category.model";
import { Occasion } from "./occasions.model";


export interface CategoryWithIcon extends Category {
  
 selected: boolean;  
}

export interface OccasionWithSelected extends Occasion {
  selected: boolean;  
}