'use strict';

module.exports = function (News) {
    // //Server session 
    // var cache = [{}];
    // var i = 0;
    // //Example: [{time: 1540432613766, news: "ABC Corp", param:"abc" },{...},{...}] 


    // //Before calling a api check if query param is available in cache
    // News.beforeRemote('getNews', function (ctx, news, next) {
    //     //Session expiry    
    //     var nextDay = Date.now() + (1 * 24 * 60 * 60 * 1000);

    //     //Check in cache for query param
    //     //returns item is present else returns boolean false
    //     for (let item of cache) {
    //         var isPresent = item.param == ctx.args.name? item:false
    //         console.log(isPresent);
    //     }


    //     if ( isPresent && (isPresent.time < nextDay)) {
    //         //Get from Cache
    //         console.log("From cache", isPresent.time);
    //         ctx.res.send(isPresent.news);
    //     } else {
    //         //Redirect to external API
    //         next();
    //     }
    
    // });

    // News.afterRemote('getNews', function (ctx, news, next) {
    //     var news = ctx.result;
    //     news.map(function (news) {

    //         //Remove unwanted properties returned from the API here
    //         // delete news.created;
    //         delete news.id;
    //         return news;
    //     });
    //     //the new news
    //     ctx.result = news;

        
       
    //     // if(!isPresent){
    //     // console.log(isPresent);

    //     cache[i] = { "time": Date.now(), "news": news, "param": ctx.args.name };
    //     console.log("Wrote to cache", cache[i].param);
    //     i++;

    //     // for (let item of cache) {
    //     //     console.log(item.time, item.param); 
    //     //     var isPresent = item.param == ctx.args.name? item:false
    //     //     // console.log(isPresent);
    //     // }
    //     // }
    //     next();

    // });

    // curl -s https://api.spacexdata.com/v3/launches/latest | jq


};
