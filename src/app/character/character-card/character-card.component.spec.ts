import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCardComponent } from './character-card.component';

describe('CharacterCardComponent', () => {
  let component: CharacterCardComponent;
  let fixture: ComponentFixture<CharacterCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterCardComponent],
    });
    fixture = TestBed.createComponent(CharacterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set image', () => {
    const urlImage = 'http://i.annihil.us/u/prod/marvel/i/mg/a/10/528d369de3e4f/landscape_incredible.jpg';
    component.image =  urlImage;
    expect(component.image).toBe(urlImage);
  });

});
