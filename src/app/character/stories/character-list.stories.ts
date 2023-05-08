import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';

import { CharacterListComponent } from '../character-list/character-list.component';

export default {
  title: 'Character/CharacterListComponent',
  component: CharacterListComponent,
  decorators: [
    moduleMetadata({
      declarations: [CharacterListComponent],
      imports: [CommonModule, HttpClientModule],
    }),
  ],
};
const Template: Story<CharacterListComponent> = () => ({
  component: CharacterListComponent,
  template: `<app-character-list></app-character-list>`,
});
export const base = Template.bind({});
