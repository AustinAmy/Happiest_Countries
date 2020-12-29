var config = {
    style: 'mapbox://styles/vizdr/ckigjt4qc0xlr1aog80ofs4av?fresh=true',
    accessToken: 'pk.eyJ1Ijoidml6ZHIiLCJhIjoiY2tjMmlscXNiMDBjNDJ6cXY1NWM5cnh4YyJ9.OE1eDoBmj0HGAaxNJesJSQ',
    showMarkers: false,
    theme: 'light',  
    alignment: 'left',
    title: 'The Happiest Countries on Earth',
    byline: 'By Amy Wu',
    footer: 'Data Sources: </br>Helliwell, J., Layard, R., Sachs, J, & De Neve, J., eds. (2020). World Happiness Report 2020. New York: Sustainable Development Solutions Network. https://worldhappiness.report/ed/2020/ </br>Mapbox. (2020). Storytelling. https://github.com/mapbox/storytelling </br>Pruitt, S. (2018, Aug. 31). The War of Words behind ‘Happy Holidays’. History.com, https://worldhappiness.report/ed/2020/</br>Wikimedia Commons. https://commons.wikimedia.org/wiki/Main_Page',

  chapters: [

       {
            id: 'earth1',
            description: '"Happy Holidays" is a phrase that was first used over 100 years ago (Pruitt, 2018), but which countries are the happiest? In 2020, the World Happiness Report ranked countries based on several factors, including GDP per capita, perceptions of corruption, social support, healthy life expectancy, generosity, and freedom. (Helliwell, J., Layard, R., Sachs, J, & De Neve, J., eds., 2020). The top 10 countries had the highest combined scores in these categories. Who were they? Scroll down to view the happiest countries on Earth.',

            location: {
                center: [-97.73744, 30.281],
                zoom: 0,
                pitch: 45,
                bearing: -40
            },
            onChapterEnter: [],
            onChapterExit: []
        },
      {
            id: 'country1',
            title: '1. Finland',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Imatran_kylpyl%C3%A4.jpg/800px-Imatran_kylpyl%C3%A4.jpg',
            alt: 'Photo of lakes in Finland',
            description: '</a>Photo by <a href="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Imatran_kylpyl%C3%A4.jpg/800px-Imatran_kylpyl%C3%A4.jpg">Hirvela8860</a>.</br></br>Finland has occupied the top average score for three years. They have high scores for social support and freedom to make life choices. (Helliwell, J., Layard, R., Sachs, J., & De Neve, J., eds., 2020).',


            location: {
                center: [26.04436, 65.37495],
                zoom: 4.77,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
       {
            id: 'country2',
            title: '2. Denmark',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Oodi_July_2019_2.jpg/1280px-Oodi_July_2019_2.jpg',
            alt: 'Photo of Helsinki Central Library',
            description: '</a>Photo by <a href="https://commons.wikimedia.org/wiki/File:Oodi_July_2019_2.jpg">Vadelmavene</a>.</br></br>Denmark has high GDP per capita and social support scores. Denmark was the top country in 2016. (Helliwell, J., Layard, R., Sachs, J., & De Neve, J., eds., 2020).',


            location: {
                center: [10.00825, 56.06058],
                zoom:  6.37,
                pitch: 45,
                bearing: -40
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'country3',
            title: '3. Switzerland',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Engadine.jpg/800px-Engadine.jpg',
            alt: 'Photo of the high valley of Engadine',
            description: '</a>Photo by <a href="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Engadine.jpg/800px-Engadine.jpg">Biovit</a>.</br></br>Switzerland has a high life expectancy score. They moved up to 3rd place from 6th place last year. Switzerland was the top country in 2015. (Helliwell, J., Layard, R., Sachs, J., & De Neve, J., eds., 2020).',
            location: {
                center: [8.22403, 46.82248],
                zoom: 6.63,
                pitch: 45,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
          },
          {
              id: 'country4',
              title: '4. Iceland',
              image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Hafnarfj%C3%B6r%C3%B0urHarbourView.JPG/800px-Hafnarfj%C3%B6r%C3%B0urHarbourView.JPG',
              alt: 'Photo of Hafnarfjörður',
            description: '</a>Photo by <a href="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Hafnarfj%C3%B6r%C3%B0urHarbourView.JPG/800px-Hafnarfj%C3%B6r%C3%B0urHarbourView.JPG">Udm</a>.</br></br>Iceland has a high freedom to make life choices score. This country maintains a strong welfare state and a regulated labor market. (Helliwell, J., Layard, R., Sachs, J., & De Neve, J., eds., 2020).',
              location: {
                  center: [-19.01361, 64.98082],
                  zoom: 5.32,
                  pitch: 45,
                  bearing: 0
              },
            onChapterEnter: [],
            onChapterExit: []

        },
        {
              id: 'country5',
              title: '5. Norway',
              image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Stavanger_sett_fra_fly.jpg/800px-Stavanger_sett_fra_fly.jpg',
              alt: 'Photo of Stavanger/Sandnes',
            description: '</a>Photo by <a href="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Stavanger_sett_fra_fly.jpg/800px-Stavanger_sett_fra_fly.jpg">Øyvind Rask</a>.</br></br>Norway was the happiest country in 2017. They have strong social support and health life expectancy scores. (Helliwell, J., Layard, R., Sachs, J., & De Neve, J., eds., 2020).',
              location: {
                  center: [ 8.70564, 61.60217],
                  zoom: 4.43,
                  pitch: 45,
                  bearing: 0
              },
            onChapterEnter: [],
            onChapterExit: []

        },
        {
              id: 'country6',
              title: '6. Netherlands',
              image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/BSN_Junior_School_Vlaskamp.jpg/800px-BSN_Junior_School_Vlaskamp.jpg',
              alt: 'Photo of a School',
            description: '</a>Photo by <a href="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/BSN_Junior_School_Vlaskamp.jpg/800px-BSN_Junior_School_Vlaskamp.jpg">C. Van Meeuwen</a>.</br></br>The Netherlands scored highly on social support and GDP per capita scores. The country was 5th last year. It is one of the richest countries in the world. (Helliwell, J., Layard, R., Sachs, J., & De Neve, J., eds., 2020).',
              location: {
                  center: [5.28070, 52.22055],
                  zoom: 7.17,
                  pitch: 45,
                  bearing: 0
              },
            onChapterEnter: [],
            onChapterExit: []

        },
        {
              id: 'country7',
              title: '7. Sweden',
              image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Stockholm_8721-B_%289870833193%29.jpg/800px-Stockholm_8721-B_%289870833193%29.jpg',
              alt: 'Photo of Stockholm',
            description: '</a>Photo by <a href="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Stockholm_8721-B_%289870833193%29.jpg/800px-Stockholm_8721-B_%289870833193%29.jpg">Bengt Nyman</a>.</br></br>Sweden has a great freedom to make life choices score. Locally born people and immigrants tend to have similar levels of happiness. Approximately 19% of the population was born in another country. (Helliwell, J., Layard, R., Sachs, J., & De Neve, J., eds., 2020).',
              location: {
                  center: [17.51587, 62.97015],
                  zoom: 4.50,
                  pitch: 45,
                  bearing: 0
              },
            onChapterEnter: [],
            onChapterExit: []

        },
        {
              id: 'country8',
              title: '8. New Zealand',
              image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Hobbit_holes_reflected_in_water.jpg',
              alt: 'Photo of the Hobbiton Movie Set',
            description:'</a>Photo by <a href="https://upload.wikimedia.org/wikipedia/commons/8/89/Hobbit_holes_reflected_in_water.jpg">Jackie.lck</a>.</br></br>New Zealand has high health life expectancy and social support scores. The capital of New Zealand, Wellington, was also ranked the third happiest city on Earth based on subjective well-being. (Helliwell, J., Layard, R., Sachs, J., & De Neve, J., eds., 2020).',
              location: {
                  center: [172.83508, -44.08473 ],
                  zoom: 4.72,
                  pitch: 45,
                  bearing: 0
              },
            onChapterEnter: [],
            onChapterExit: []

        },
        {
              id: 'country9',
              title: '9. Austria',
              image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Stephansdom_Vienna_July_2008_%2827%29-Stephansdom_Vienna_July_2008_%2831%29.jpg/800px-Stephansdom_Vienna_July_2008_%2827%29-Stephansdom_Vienna_July_2008_%2831%29.jpg',
              alt: 'Photo of Vienna',
            description:'</a>Photo by <a href="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Stephansdom_Vienna_July_2008_%2827%29-Stephansdom_Vienna_July_2008_%2831%29.jpg/800px-Stephansdom_Vienna_July_2008_%2827%29-Stephansdom_Vienna_July_2008_%2831%29.jpg">Roland Geider</a>.</br></br>Austria has strong social support and GDP per capita scores. According to the report, from 2008-2012 to 2017-2019, Austria experienced a negative change in happiness. (Helliwell, J., Layard, R., Sachs, J., & De Neve, J., eds., 2020).',
              location: {
                  center: [13.34575, 47.71324],
                  zoom: 7.44,
                  pitch: 45,
                  bearing: 0
              },
            onChapterEnter: [],
            onChapterExit: []

        },
        {
              id: 'country10',
              title: '10. Luxembourg',
              image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Grund%2C_Luxembourg_from_wall_above.jpg/800px-Grund%2C_Luxembourg_from_wall_above.jpg',
              alt: 'Photo of Laugavegur hiking trail',
            description: '</a>Photo by <a href="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Grund%2C_Luxembourg_from_wall_above.jpg/800px-Grund%2C_Luxembourg_from_wall_above.jpg">Yoo Chung</a>.</br></br>Luxembourg moved up from 14th place last year. It is one of the richest non-Nordic countries. Luxembourg had the highest GDP per capita in 2020. (Helliwell, J., Layard, R., Sachs, J., & De Neve, J., eds., 2020).',
              location: {
                  center: [6.13338, 49.81664],
                  zoom: 9.22,
                  pitch: 45,
                  bearing: 0
              },
            onChapterEnter: [],
            onChapterExit: []

        },
        {
              id: 'closing',
              title: 'Happy Holidays, everyone!',
            
              
 
              location: {
                  center: [6.13338, 49.81664],
                  zoom: 9.22,
                  pitch: 45,
                  bearing: 0
              },
            onChapterEnter: [],
            onChapterExit: []

        }
    ]   
};
