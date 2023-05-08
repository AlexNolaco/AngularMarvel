import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';

import { LandingPageComponent } from '../landing-page/landing-page.component';

export default {
  title: 'Shared/LandingPageComponent',
  component: LandingPageComponent,
  decorators: [
    moduleMetadata({
      declarations: [LandingPageComponent],
      imports: [CommonModule],
    }),
  ],
};
const Template: Story<LandingPageComponent> = () => ({
  component: LandingPageComponent,
  template: `<app-landing-page></app-landing-page>`,
});
export const base = Template.bind({});

