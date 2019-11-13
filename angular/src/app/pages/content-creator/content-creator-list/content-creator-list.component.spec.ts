import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCreatorListComponent } from './content-creator-list.component';

describe('ContentCreatorListComponent', () => {
  let component: ContentCreatorListComponent;
  let fixture: ComponentFixture<ContentCreatorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentCreatorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentCreatorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
