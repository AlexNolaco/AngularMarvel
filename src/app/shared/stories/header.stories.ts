import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';

import { HeaderComponent } from '../header/header.component';

export default {
  title: 'Shared/HeaderComponent',
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      declarations: [HeaderComponent],
      imports: [CommonModule],
    }),
  ],
};
const Template: Story<HeaderComponent> = () => ({
  component: HeaderComponent,
  template: `<app-header></app-header>`,
});
export const base = Template.bind({});

