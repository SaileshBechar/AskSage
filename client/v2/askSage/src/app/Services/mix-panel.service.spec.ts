import { TestBed } from '@angular/core/testing';

import { MixPanelService } from './mix-panel.service';

describe('MixPanelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MixPanelService = TestBed.get(MixPanelService);
    expect(service).toBeTruthy();
  });
});
