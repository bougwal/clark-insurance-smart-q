import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, getTestBed } from '@angular/core/testing';
import { ErrorHandlingService } from './error-handling.service';

import { HttpService } from './http.service';

describe('HttpService', () => {
  let injector: TestBed;
  let service: HttpService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ], 
      providers: [HttpService, ErrorHandlingService]
    });
    injector = getTestBed();
    service = TestBed.inject(HttpService);
  });
  describe('#getQuestions', ()=>{
    it('Should return an Observable', ()=>{
      const dummyQuestions =  {
        "id": 40,
        "identifier": "ewBzTS",
        "name": "Privathaftpflichtversicherung",
        "questions": [
          {
            "question_type": "multiple-choice",
            "identifier": "list_12110962",
            "headline": "Wen möchtest Du versichern?",
            "description": null,
            "required": false,
            "multiple": "false",
            "choices": [
              {
                "label": "Meine Familie mit Kindern",
                "value": "Meine Familie mit Kindern",
                "selected": false
              },
              {
                "label": "Meine Familie ohne Kinder",
                "value": "Meine Familie ohne Kinder",
                "selected": false
              },
              {
                "label": "Mich ohne Kind",
                "value": "Mich ohne Kind",
                "selected": false
              },
              {
                "label": "Mich mit Kind",
                "value": "Mich mit Kind",
                "selected": false
              },
              {
                "label": "Mich und meinen Lebenspartner",
                "value": "Mich und meinen Lebenspartner",
                "selected": false
              }
            ],
            "jumps": []
          },
          {
            "question_type": "multiple-choice",
            "identifier": "list_12111610",
            "headline": "Bist Du Beamter oder im öffentlichen Dienst angestellt?",
            "description": null,
            "required": false,
            "multiple": "false",
            "choices": [
              {
                "label": "Ja",
                "value": "Ja",
                "selected": false
              },
              {
                "label": "Nein",
                "value": "Nein",
                "selected": false
              }
            ],
            "jumps": []
          },
        ]
      }
      service.questionnaire$.subscribe((res) => {
        expect(res.questions.length).toBe(2)
        expect(res).toEqual(dummyQuestions)
      })
    })
  })
})