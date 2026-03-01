import { Component, signal } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { TruckIcon, RefreshCcwIcon, ShieldCheckIcon, HeadsetIcon } from 'lucide-angular';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-features-bar-section',
  imports: [LucideAngularModule, TranslocoPipe],
  templateUrl: './features-bar-section.component.html',
})
export class FeaturesBarSectionComponent {
  TruckIcon = TruckIcon;
  RefreshCcwIcon = RefreshCcwIcon;
  ShieldCheckIcon = ShieldCheckIcon;
  HeadsetIcon = HeadsetIcon;

  features = signal([
    {
      id: 1,
      icon: TruckIcon,
      title: 'features_bar_section_feature_1_title',
      description: 'features_bar_section_feature_1_description',
    },
    {
      id: 2,
      icon: RefreshCcwIcon,
      title: 'features_bar_section_feature_2_title',
      description: 'features_bar_section_feature_2_description',
    },
    {
      id: 3,
      icon: ShieldCheckIcon,
      title: 'features_bar_section_feature_3_title',
      description: 'features_bar_section_feature_3_description',
    },
    {
      id: 4,
      icon: HeadsetIcon,
      title: 'features_bar_section_feature_4_title',
      description: 'features_bar_section_feature_4_description',
    },
  ]);
}
