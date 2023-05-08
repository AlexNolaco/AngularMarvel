import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';

import { NotFoundPageComponent } from '../not-found-page/not-found-page.component';

export default {
  title: 'Shared/NotFoundPageComponent',
  component: NotFoundPageComponent,
  decorators: [
    moduleMetadata({
      declarations: [NotFoundPageComponent],
      imports: [CommonModule],
    }),
  ],
};
const Template: Story<NotFoundPageComponent> = () => ({
  component: NotFoundPageComponent,
  template: `<app-not-found-page></app-not-found-page>`,
});
export const base = Template.bind({});

