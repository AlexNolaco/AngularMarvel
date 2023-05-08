import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';

import { SearchBarComponent } from './../search-bar/search-bar.component';

export default {
  title: 'Shared/SearchBarComponent',
  component: SearchBarComponent,
  props: {
    placeHolder: 'Alex',
  },
  decorators: [
    moduleMetadata({
      declarations: [SearchBarComponent],
      imports: [CommonModule],
    }),
  ],
};

const Template: Story<SearchBarComponent> = () => ({
  component: SearchBarComponent,
  template: `<app-search-bar [placeHolder]="placeHolder"></app-search-bar>`,
});
export const base = Template.bind({});

