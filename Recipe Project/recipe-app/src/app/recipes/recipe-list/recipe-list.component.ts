import {Component} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Steak','Ribeye steak',
      'https://www.carriesexperimentalkitchen.com/wp-content/uploads/2016/04/Tuscan.Style-Grilled-Rib-Eye-Steak3-256x256.jpg'),
    new Recipe('Chicken','Fried Chicken',
      'https://redirect.bigoven.com/pics/rs/256/chicken-fried-chicken-13.jpg')
  ]

}
