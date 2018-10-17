import { Component, OnInit } from '@angular/core';
import { News } from './News.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  public title: string; 

  //News card properties
  public cardColor : string;
  public cardTitle : string;



  news: News[] = [
    {
      id : 0,
      topic : "AI",
      content : `I am a very simple card. I am good at containing small bits of information.
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
      imgPath : "https://images.unsplash.com/photo-1539580709660-0505d36fa6e7?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjM0OTcyfQ&s=ed5003c2a29929d401e8b53eb222306d"
    },
    {
      id : 1,
      topic : "IOT",
      content :  `I am a very simple card. I am good at containing small bits of information.
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
      imgPath : "https://images.unsplash.com/photo-1539606025676-923342a6d86c?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjM0OTcyfQ&s=bf71fd61c790551cc1c0add49d3365fe"
    },
    {
      id : 2,
      topic : "SciKit Learn",
      content : `I am a very simple card. I am good at containing small bits of information.
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
      imgPath : "https://images.unsplash.com/photo-1539578741486-e0d3a45e16c2?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjM0OTcyfQ&s=b71a17ba4c13ed4d505677c3d1035810"
    },
    {
      id : 3,
      topic : "AI",
      content : `I am a very simple card. I am good at containing small bits of information.
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
      imgPath : "../assets/background1.jpg"
    },
    {
      id : 4,
      topic : "IOT",
      content :  `I am a very simple card. I am good at containing small bits of information.
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
      imgPath : "../assets/background2.jpg"
    },
    {
      id : 5,
      topic : "SciKit Learn",
      content : `I am a very simple card. I am good at containing small bits of information.
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
      imgPath : "../assets/background3.jpg"
    },
    {
      id : 6,
      topic : "SciKit Learn",
      content : `I am a very simple card. I am good at containing small bits of information.
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
      imgPath : "../assets/background3.jpg"
    },
    {
      id : 7,
      topic : "IOT",
      content :  `I am a very simple card. I am good at containing small bits of information.
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
      imgPath : "../assets/background2.jpg"
    },
    {
      id : 8,
      topic : "SciKit Learn",
      content : `I am a very simple card. I am good at containing small bits of information.
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
      imgPath : "../assets/background3.jpg"
    },
    {
      id : 9,
      topic : "AI",
      content : `I am a very simple card. I am good at containing small bits of information.
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
      imgPath : "https://images.unsplash.com/photo-1539578839907-f463d05d7ad9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjM0OTcyfQ&s=9f7e8172fe3bd1061a4fe05bcfd26ae7"
    },
    {
      id : 10,
      topic : "IOT",
      content :  `I am a very simple card. I am good at containing small bits of information.
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
      imgPath : "https://images.unsplash.com/photo-1539604880233-d282d9bac272?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjM0OTcyfQ&s=18865b2cadac149d312ee4e4e9d397e4"
    },
  ]
  constructor() { 
    //Make 1 call to Unsplash to get a few pics
    // https://api.unsplash.com/photos/?client_id=4f2e7025c82830559b6d448b81326715eae17cd829aaaa6255c79454dac22ca9

  }

  ngOnInit() {
    this.title ="Todays News Feed";

    this.cardColor="card green lighten-4";
    this.cardTitle="Block Chain";

  
    
  }

}

