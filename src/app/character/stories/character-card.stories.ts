import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';

import { CharacterCardComponent } from '../character-card/character-card.component';

export default {
  title: 'Character/CharacterCardComponent',
  component: CharacterCardComponent,
  decorators: [
    moduleMetadata({
      declarations: [CharacterCardComponent],
      imports: [CommonModule],
    }),
  ],
};
const Template: Story<CharacterCardComponent> = () => ({
  component: CharacterCardComponent,
  template: `<app-character-card></app-character-card>`,
});
export const base = Template.bind({});
