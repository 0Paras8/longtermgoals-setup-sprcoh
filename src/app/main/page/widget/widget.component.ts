import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import { WidgetAnimations } from './widget.animations';
import { LongTermGoal } from '../../../core/store/long-term-goal/long-term-goal.model';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: WidgetAnimations,
})
export class WidgetComponent implements OnInit {
  // --------------- INPUTS AND OUTPUTS ------------------
  isInitialWidgetVisible: boolean = true;

  //---------------------EVENT HANDLING--------------------
  showNewWidget() {
    this.isInitialWidgetVisible = false;
  }

  showInitialWidget() {
    this.isInitialWidgetVisible = true;
  }

  isModalVisible: boolean = false;

  toggleModal() {
    if(this.isInitialWidgetVisible == true)
    {
    this.showNewWidget();
    this.isModalVisible = !this.isModalVisible;
    }
    else
    { 
      this.showInitialWidget();
      this.isModalVisible = !this.isModalVisible;
    } 
  }

  /** The long term goal. */
  @Input() longTermGoal: LongTermGoal = {
    __id: 'ltg',
    __userId: 'test-user',
    oneYear: 'Improve my grades',
    fiveYear: 'Land a well paying job that I enjoy',
  };

  /** Initiate edit of long term goals. */
  @Output() editGoals: EventEmitter<void> = new EventEmitter<void>();


  // --------------- LOCAL AND GLOBAL STATE --------------

  // --------------- DATA BINDING ------------------------

  // --------------- EVENT BINDING -----------------------

  // --------------- HELPER FUNCTIONS AND OTHER ----------
  onEdit() {
    this.editGoals.emit();
    
  }
  constructor() {}

  ngOnInit(): void {
    
  }
  
}
