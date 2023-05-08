import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';

import { CharacterDetailComponent } from '../character-detail/character-detail.component';

export default {
  title: 'Character/CharacterDetailComponent',
  component: CharacterDetailComponent,
  decorators: [
    moduleMetadata({
      declarations: [CharacterDetailComponent],
      imports: [CommonModule, HttpClientModule],
    }),
  ],
};
const Template: Story<CharacterDetailComponent> = () => ({
  component: CharacterDetailComponent,
  template: `<app-character-detail></app-character-detail>`,
});
export const base = Template.bind({});
