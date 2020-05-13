import React from 'react'

export const renderTitle = story => {
    if (story.veteran){ return 'The Veteran' }
    else if (story.traveler){ return 'The Traveler' }
    else if (story.coder) { return 'The Coder' }
    else { return 'My Story' }
}

export const renderStory = story => {
    if (story.veteran){
        return theVet
    }
    else if (story.traveler){
        return theTraveler
    }
    else if (story.coder) {
        return theCoder
    }
    else {
        return myStory
    }
}

const myStory = (
    <> 
        <p id='top'> I was born in Heidelberg, Germany to two US Army parents. Being an Army brat, we had to move often, because of this I've been exposed to many different walks of life.
            One of the pros to not having a sedentary home is that I had to get use to making new connections everywhere I've gone.</p>
        <p> In Highschool I lived in Clarksville, TN. There I worked for AT&T, broke horses for a summer, and helped in restoration projects during the TN floods. I have many a
            fond memories there and tons of adventures to boot.</p>
        <p> After HS I moved to San Anotnio, TX. There I worked for AT&T as a door to door salesman, moonlighted as a bartender, and went to University of Texas San Antonio.
            I loved Texas, but after two years in I was looking towards following my parents footsteps and enlisting in the US Army. I sold all of my things, took a break from school, put my notice into work and drove off to Ft. Walton Beach, Florida to train with my dads unit while I went through the enlistment process. </p>
    </>
)

const theVet = (
    <>
        <p id='top'> I joined the Army in 2013 as an 11B Infantryman. I'd like to say I knew what I was getting into when I joined, because I was an Army brat, but it couldn't be further from the truth. There is a saying among Infantrymen that highlights ignorance and forces humility; "You gunna learn today"... and learned I did.</p>
        <p> Basic was a culture shock for sure. You don't quite grasp a sense of urgency until you have a Drill Seargent screaming in your face. I developed foundations for many of the skills I posses today there. One of the biggest take aways I recieved there was our Drill Seargents last speach
            before graduation. He said there is always one more hill to take, one more kilometer to march, and one more day to do it all over again. This philosophy is the motivation that allows me to push myself past impossible and yet still remain grounded.</p>
        <p> After Basic I was stationed at the worst place in the world... Hawaii; try not to feel to sorry for me. When it wasn't raining on us, we'd often bust our backs up mountains with nearly 100lbs of equipment, but even though my time there wasn't a cake walk... it was still Hawaii!!!</p>
        <p> The 3 years I was stationed there: I became a Jungle Expert, deployed to the Philippines, worked with many forieng nationals, learned about 'chokes' (alot) of cultures, and forged tons of memories.</p>
        <p> Nearing the end of my contract, I decided to leave. I felt like I had done my part and was now motivated to explore ever more cultures and carve my slice out of life somewhere. I decided to headout and backpack the whole world. The things I took with me from the Army: Dicipline, attention to detail, undying motivation,
            fortitued, a sense of urgency, survival skills, and perseverance.</p> 
    </>
)

const theTraveler = (
    <>
        <p id='top'> While I was in the Army I managed to save up a years paycheck. I decided when I got out I'd use that money to explore as much of the world as I could. During my travels I've met wonderous people, the closest of which signed my guitar in thier native tounge. I learned so many things from so many different cultures. I visited over 28 countries in the span of 3 years, met the love of my life,
            and even survived a few terrorist attacks.</p>
        <p> The first place I traveled to was spain. Two weeks before I left, I was studying spanish. I had always wanted to learn another language and, seeing as many of my friends spoke spanish, I figured it would be a good place to start. I spent a whole month in Spain. I learned quite abit of the language and could even hold
            simple conversations by the time I left.</p>
        <p> After Spain, I traveled to Morocco, Parts of the Sahara with the Berbers, and learned alot about Muslim culture and customs especially since my visit was during Ramadan. The thing that shocked me most was to find out that the king of Morocco was the first to officially recognize the United States as a sovereign nation.</p>
        <p> France was amazing until I found myself admidst a terrorist plot in Nice. Fortune smiled upon me and my partner as we where suppose to be further up the shoreline. I would later return to explore Paris and the country side, but wouldn't be back for a year. Instead I went to Itally.</p>
        <p> I could go on forever about the cultures and the places I've been to. To keep this section brief I will summerize even more so then the previous paragraphs. After Italy I went into eastern block Europe, parts of the baltics, then to west Europe and some scandinavian countries, then off to south east Asia and Australia, and finnally ending up in the UK where I'd eventually find work
            as a Full Stack Developer.</p>
    </>
)

const theCoder = (
    <>
        <p id='top'>After all my traveling I realized I'd have to become a productive member of society again. Since I was a kid I've always been interested in tech, but didn't have an avenue of approaching it as a carreer. I decided to go back to university and was accepted at the University of Alabama for a Computer Science Degree path. </p>
        <p>Unfortionately due to a traumatic brain injury (TBI) from the Army I soon found myself having to temporarily halt my studies to get treated. I fully recovered after my treatments, but found myself having to wait to get back to my studies. Reflecting upon some experiences I had, and the length it would take me to get into the career field, I decided I wasn't learning as much
            as I should fast enough. An example being that I got a 100% on an exam for writing an 13 nested 2000 line if else statement after a year of study.</p>
        <p> The realization of my ineptitude led me to re-evaluate my mindset and the way I went about learning. In school I'd wait for a lesson to be given and not be proactive in finding these things out on my own. I decided during summer break I'd continue my studies at a code camp in London called Makers Academy. I chose Makers, because it destinguished itself as 
            a school that focussed more on the mindset of a developer and less on the code. I understood from my days in the military that a mindset is more valuable then the skills in your profession, from mindset comes ethic, from ethics come skills.</p>
        <p> I scoffed at the idea of the 'Bootcamp" part in coding bootcamp, but as someone who has been through Infantry bootcamp and Coding bootcamp... the similarities are eerie. Codecamp was no joke and I found myself struggling, albiet in different ways, as I would in the Army. In the army I was forged into a Soldier, at Makers I feel like I was forged into a Coder. I got the piece
            of the puzzle for the career I wanted at makers and I started to develop a programers mindset. So much so I even abandond the language taught at makers (Ruby) almost immidiately and chose to learn Javascript. At this point language and stack doesn't matter to me, because I have the confidence and the mindset to accomplish anything I decide to persue.</p>
        <p> Since code camp I've continued my passion for code and new technology. The first place I worked was a Cambridge startup named Healthera. It was a very young company, in its initial days, and I found myself on a small team of 3. My first week working remote, while waiting on my Visa, I had wrote a production level end to end feature that went live... Lets just say I
            got thrown in the deepend and, honestly, I wouldn't have had it anyother way. The senior devs I had arround to help me out and the increasingly difficult/complex tasks I had to work on solo really brought me up through trial by fire.</p>
        <p> I'm still young in my career in tech, but I'm constantly pushing my limits and expanding my horizon. There is little in this world that can stop me from persuing my dreams of becoming an expert. I live for those moments of eurika and hunt the challenges as much as I can.</p>
    </>
)