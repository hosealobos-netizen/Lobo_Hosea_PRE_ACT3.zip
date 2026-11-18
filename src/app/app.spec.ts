import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show the name in the header', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hosea Dwayne J. Lobo');
  });

  it('should update the message when a skill is selected', () => {
    const fixture = TestBed.createComponent(App);
    fixture.componentInstance.onSkillSelected('Angular');
    expect(fixture.componentInstance.message).toBe('You selected: Angular');
  });
});
