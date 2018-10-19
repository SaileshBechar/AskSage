import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { News } from '../Model/News.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  newsFeed: News[] = [
    {
      id: 0,
      topic: "AI",
      content: `I am a very simple card. I am good at containing small bits of information.
      I am convenient because I require little markup to use effectively.
    
      I am a very simple card. I am good at containing small bits of information.
      I am convenient because I require little markup to use effectively
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores culpa quibusdam assumenda aut recusandae 
      fugiat pariatur consequuntur quae sint architecto. Velit, temporibus eligendi corrupti praesentium incidunt 
      eum nesciunt excepturi, obcaecati error molestias tempora, doloribus quae est beatae facilis? Quo beatae id 
      atque quae mollitia totam nam omnis. Consectetur voluptatibus rerum nulla, quasi aut id odio atque voluptates 
      sequi quia optio voluptate similique obcaecati molestias neque sapiente alias illo voluptas deserunt ut quaerat 
      iusto minima possimus? Voluptatibus officia dolor impedit! Ipsa et voluptatem non voluptates molestiae consequuntur 
      vitae nemo quas modi, commodi eveniet quia! Distinctio, natus eligendi placeat aut laborum eius.`,
      imgPath: "https://images.unsplash.com/photo-1539580709660-0505d36fa6e7?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjM0OTcyfQ&s=ed5003c2a29929d401e8b53eb222306d"
    },
    {
      id: 1,
      topic: "IOT",
      content: `I am a very simple card. I am good at containing small bits of information.
      I am convenient because I require little markup to use effectively.
    
      I am a very simple card. I am good at containing small bits of information.
      I am convenient because I require little markup to use effectively
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores culpa quibusdam assumenda aut recusandae 
      fugiat pariatur consequuntur quae sint architecto. Velit, temporibus eligendi corrupti praesentium incidunt 
      eum nesciunt excepturi, obcaecati error molestias tempora, doloribus quae est beatae facilis? Quo beatae id 
      atque quae mollitia totam nam omnis. Consectetur voluptatibus rerum nulla, quasi aut id odio atque voluptates 
      sequi quia optio voluptate similique obcaecati molestias neque sapiente alias illo voluptas deserunt ut quaerat 
      iusto minima possimus? Voluptatibus officia dolor impedit! Ipsa et voluptatem non voluptates molestiae consequuntur 
      vitae nemo quas modi, commodi eveniet quia! Distinctio, natus eligendi placeat aut laborum eius.`,
      imgPath: "https://images.unsplash.com/photo-1539606025676-923342a6d86c?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjM0OTcyfQ&s=bf71fd61c790551cc1c0add49d3365fe"
    },
    {
      id: 0,
      topic: "AI",
      content: `I am a very simple card. I am good at containing small bits of information.
      I am convenient because I require little markup to use effectively.
    
      I am a very simple card. I am good at containing small bits of information.
      I am convenient because I require little markup to use effectively
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores culpa quibusdam assumenda aut recusandae 
      fugiat pariatur consequuntur quae sint architecto. Velit, temporibus eligendi corrupti praesentium incidunt 
      eum nesciunt excepturi, obcaecati error molestias tempora, doloribus quae est beatae facilis? Quo beatae id 
      atque quae mollitia totam nam omnis. Consectetur voluptatibus rerum nulla, quasi aut id odio atque voluptates 
      sequi quia optio voluptate similique obcaecati molestias neque sapiente alias illo voluptas deserunt ut quaerat 
      iusto minima possimus? Voluptatibus officia dolor impedit! Ipsa et voluptatem non voluptates molestiae consequuntur 
      vitae nemo quas modi, commodi eveniet quia! Distinctio, natus eligendi placeat aut laborum eius.`,
      imgPath: "https://images.unsplash.com/photo-1539580709660-0505d36fa6e7?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjM0OTcyfQ&s=ed5003c2a29929d401e8b53eb222306d"
    },
    {
      id: 1,
      topic: "IOT",
      content: `I am a very simple card. I am good at containing small bits of information.
      I am convenient because I require little markup to use effectively.
    
      I am a very simple card. I am good at containing small bits of information.
      I am convenient because I require little markup to use effectively
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores culpa quibusdam assumenda aut recusandae 
      fugiat pariatur consequuntur quae sint architecto. Velit, temporibus eligendi corrupti praesentium incidunt 
      eum nesciunt excepturi, obcaecati error molestias tempora, doloribus quae est beatae facilis? Quo beatae id 
      atque quae mollitia totam nam omnis. Consectetur voluptatibus rerum nulla, quasi aut id odio atque voluptates 
      sequi quia optio voluptate similique obcaecati molestias neque sapiente alias illo voluptas deserunt ut quaerat 
      iusto minima possimus? Voluptatibus officia dolor impedit! Ipsa et voluptatem non voluptates molestiae consequuntur 
      vitae nemo quas modi, commodi eveniet quia! Distinctio, natus eligendi placeat aut laborum eius.`,
      imgPath: "https://images.unsplash.com/photo-1539606025676-923342a6d86c?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjM0OTcyfQ&s=bf71fd61c790551cc1c0add49d3365fe"
    }
  ];


  constructor(private http: HttpClient) {
  }

  // Get news from NewsService
  getNews(): News[] {
    return this.newsFeed;
  }


}


