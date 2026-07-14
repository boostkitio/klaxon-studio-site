// Extracted verbatim from the original design-tool source
// (Klaxon Studio Website.dc.html) — real client/production copy.
// British English preserved; curly quotes normalised to straight.

export interface Project {
  id: string;
  href: string;
  client: string;
  sector: string;
  title: string;
  cat: string[];
  ar: string;
  video: string;
  vimeo: string;
  vimeoHash?: string;
  vimeoAr: string;
  vimeoNativeAr?: number;
  vimeoThumb?: string;
  lead: string;
  body: string[];
}

export interface HomeService {
  num: string;
  title: string;
  desc: string;
  img: string;
  href: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface ServiceDetail {
  slug: string;
  href: string;
  num: string;
  title: string;
  desc: string;
  img: string;
  lead: string;
  body: string[];
  includes: string[];
  faqs: Faq[];
}

export interface Founder {
  id: string;
  name: string;
  role: string;
  bio: string[];
  img: string;
}

export interface Client {
  name: string;
  logo: string;
  scale: number;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  source: string;
}

export interface ContactRow {
  label: string;
  value: string;
  href: string;
  target: string;
}

export interface FooterLink {
  label: string;
  href: string;
  target?: string;
}

export interface FooterCol {
  title: string;
  links: FooterLink[];
}

export interface LondonData {
  lead: string;
  body: string[];
  includes: string[];
  faqs: Faq[];
}

export interface FaqSection {
  heading: string;
  qas: Faq[];
}

export interface FaqsData {
  lead: string;
  intro: string;
  sections: FaqSection[];
}

export interface SustainabilityPillar {
  num: string;
  title: string;
  points: string[];
}

export interface SustainabilityData {
  lead: string;
  body: string[];
  aims: string[];
  pillars: SustainabilityPillar[];
  approved: string;
  reviewed: string;
}

export interface GlossaryTerm {
  t: string;
  d: string;
}

export interface TermsSection {
  heading: string;
  items: string[];
}

export interface TermsData {
  updated: string;
  sections: TermsSection[];
}

export interface BlogBlock {
  t: "h2" | "p";
  x: string;
}

export interface BlogPost {
  slug: string;
  href: string;
  title: string;
  metaDesc: string;
  lead: string;
  blocks: BlogBlock[];
  img?: string;
}

export interface PricingBand {
  key: string;
  num: string;
  name: string;
  price: string;
  tag: string;
  includes: string[];
  idealFor: string;
}

export interface NavItem {
  label: string;
  href: string;
}

// ── Navigation ──

export const navItems: NavItem[] = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
];

export const moreLinks: NavItem[] = [
  { label: "London", href: "/london" },
  { label: "FAQs", href: "/faqs" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Glossary", href: "/glossary" },
  { label: "T&C's", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

// ── Work / case studies (27 projects) ──

export const filterNames: string[] = ["All", "Corporate", "Branded", "Social", "Documentary", "Sport", "Automotive"];

export const workAll: Project[] = [
      { id: "bmw-creative-car-review", href: "/work/bmw-creative-car-review", client: "BMW", sector: "Automotive", title: "Creative car reviews", cat: ["Branded", "Automotive"], ar: "16 / 9", video: "/uploads/loops/bmw.mp4", vimeo: "312000081", vimeoAr: "16 / 9",
        lead: "Premium car reviews for one of the world's largest media outlets.",
        body: ["This creative car review was a fun one, including a day shooting at the UK's fastest race circuit and a night shoot in central London for Telegraph Media Group.", "Jodie Kidd hosted these two films that we made for BMW showcasing the i3 and i8 models. More than just the usual 'car review', we wanted to produce films more high end than the norm to reflect the brand we were promoting.", "The night shoot within the city lights of Central London with the i3 was still a challenge with traffic despite the early hours, the city never sleeps!", "There was no such problem with the i8 shoot as we had Thruxton race circuit all to ourselves to capture the shots of the i8 being put through its paces.", "The final day of shooting was far less high octane, capturing awesome beauty shots of the i8 in an infinity white studio back in London."] },
      { id: "aston-martin", href: "/work/aston-martin", client: "Aston Martin", sector: "Automotive", title: "V12 Vantage launch", cat: ["Automotive"], ar: "3 / 4", video: "/uploads/loops/Aston-Martin.mp4", vimeo: "988536270", vimeoAr: "16 / 9",
        lead: "Stunning car launch for an iconic brand.",
        body: ["Official global launch video for the new Aston Martin, showcasing the style and finesse of the new V12 Vantage. Truly, a British icon.", "This film was shot in one day at a studio in West London, it took a total 15hrs!", "Part of the brief from the Creative Agency was to execute a contro-zoom which is a method where the camera tracks towards the subject whilst also zooming out at simultaneously. The budget for this film wasn't enormous so we reverted to our FX9 package. We also needed a lens that gave a cinematic look, whilst able to zoom and be affordable; we chose Canon's CN7 for that purpose. The rest of the film was shot on Arri's Ultra Prime Lenses, as we felt these gave the correct look for this production.", "Our role in this production was to provide the camera crew, as well as pre-production meetings about the general look and feel of the piece. We were asked if there was anything we could introduce that would help make the film stand out. Our suggestion was to use lens prisms in front of the lens to create abstract reflects in the foreground, you will be able to notice them in a few of the shots.", "Overall, we feel the production does this icon justice."] },
      { id: "boss-brand-promo", href: "/work/boss-brand-promo", client: "BOSS", sector: "Fashion", title: "Brand promo", cat: ["Branded", "Social"], ar: "3 / 4", video: "/uploads/loops/Boss_loop.mp4", vimeo: "988531174", vimeoAr: "16 / 9",
        lead: "Social teaser and full feature for a HUGE fashion brand.",
        body: ["Klaxon produced a series of three brand promo films for Boss\u2019 new launch of their equestrian brand with brand ambassador, Harry Charles, all shot in one location in Surrey, UK.", "The brief for these brand promo films was pretty in depth, however Boss relied on us to come up with a creative shooting style particularly for the teaser film and the interviews in the main film.", "For the teaser, the brief was to create a really moody, mysterious film to capture the audience\u2019s attention and to create noise over what was about to be launched. The campaign\u2019s narrative was, \u2018Be Your Own Boss\u2019, so with the announcement we were asked to deliver a film that told the story of how Harry was indeed his own boss.", "The idea being that we would hear from Harry and his Dad (also a gold medal winning Olympian), about how much drive and determination it takes to be a Boss \u2013 the sleepless nights, pressure and stress that comes with competing at the highest level."] },
      { id: "peugeot-multi-camera", href: "/work/peugeot-multi-camera", client: "Peugeot", sector: "Automotive", title: "Multi-camera tennis challenge", cat: ["Branded", "Sport"], ar: "16 / 9", video: "/uploads/loops/peugeot_tennis_challenge_loop.mp4", vimeo: "1003234232", vimeoHash: "bf316591c9", vimeoAr: "16 / 9",
        lead: "Hilarious multi-camera brand film.",
        body: ["As part of Peugeot's sponsorship of the ATP Tennis Masters Championship they commissioned a short series of films, shot in multi camera format, to promote their affiliation with the Tour.", "Shot at the Royal Albert Hall where, after weeks of training, celebrities Helen Skelton and Anton du Beke, with their doubles partners, went head to head for bragging rights to win the Peugeot Tennis Challenge Trophy.", "As this was an ongoing live event the challenge was ensuring that we had the coverage we needed with the cameras, unlike most shoots where we have full control and can stop / start as we like, for this we couldn't.", "Careful planning of camera positions and lensing during pre-production coupled with some smart camera choreography on the day, ensured that we took every shot that we needed.", "As expected Anton provided great entertainment to the crowd in this 'exhibition' match, all of which was brilliantly captured by our team in what was a greatly received film."] },
      { id: "fei-sports-feature", href: "/work/fei-sports-feature", client: "FEI / Sunset + Vine", sector: "Sport", title: "Sports feature", cat: ["Documentary", "Sport"], ar: "16 / 9", video: "/uploads/loops/FEI_loop.mp4", vimeo: "988530705", vimeoAr: "16 / 9",
        lead: "Captivating sports features for a governing body.",
        body: ["A series of sports features created for Sunset + Vine. These features are typically part of a 30 minute broadcast programme. The sports feature is often produced with a single shooting producer/director.", "These small 6-8 minute features are part of a series commissioned by the FEI (equestrian governing body). They are to show all sides of the equestrian world in feature form.", "The Ride series has undergone a few changes in the last few years, and is now a series of beautifully-shot films that focus on the lifestyle and culture of equestrianism rather than purely sport-focused.", "There are 10x 30minute programmes commissioned per year, that go out to 50+ broadcasters as well as digital formats and are reached by 400m households!"] },
      { id: "jack-stein-inside-the-box", href: "/work/jack-stein-inside-the-box", client: "Jack Stein: Inside the Box", sector: "Food", title: "Food docu-series", cat: ["Documentary"], ar: "1 / 1", video: "/uploads/loops/Jack-Stein-1.mp4", vimeo: "988531291", vimeoAr: "16 / 9",
        lead: "A tongue-in-cheek food docu-series.",
        body: ["TV Series for the Food Network UK, where we travelled across the globe, taking British food with us for different cultures to try, with varying degrees of success!", "We had an absolutely amazing time filming this one! Over the course of around 6 months we travelled across the globe to 10 different cities to get the locals opinion on some classic British dishes. Each episode Jack teamed up with a local chef who helped him put a twist on his British dish. We also spent a week out in a lovely Cornwall countryside cottage to create the opening cooking segments for the dishes he took around the world.", "This production was handled through our good friends \u2018The Projucers\u2019 down in Australia who requested our help in the filming of the series."] },
      { id: "goodwood", href: "/work/goodwood", client: "Goodwood Festival of Speed", sector: "Automotive", title: "Lifestyle film", cat: ["Automotive"], ar: "16 / 9", video: "/uploads/loops/Goodwood.mp4", vimeo: "988530867", vimeoAr: "16 / 9",
        lead: "Lifestyle film for an exotic supercar.",
        body: ["A lot of fun was had on this lifestyle film! The Italian hills outside of Bologna, and a big purple Lamborghini, what else could you want?!", "Working in such intense heat was a struggle, we had to ensure the crew had regular breaks and a substantial amount of suncream! But we were loving it; the in-car cameras however, were not. We were hindered with cameras overheating, not ideal when we only had the car for two days. But our contributors were patient and so were the crew. We decided to shoot the in-car stuff in sections, to give the cameras a break from the scorching sun! What Divas!", "The scenery was divine, and so was the car, so we were spoiled for shots. It was hard to leave a lot of them on the cutting room floor!"] },
      { id: "salesforce", href: "/work/salesforce", client: "Salesforce / Smyle Creative", sector: "Technology", title: "Customer testimonial", cat: ["Corporate"], ar: "16 / 9", video: "/uploads/loops/Salesforce-1.mp4", vimeo: "988531570", vimeoAr: "16 / 9",
        lead: "Customer testimonial video shot in the Netherlands.",
        body: ["We produced this customer testimonial for Salesforce. What better way to pitch to prospective clients than to hear from previous happy customers?!", "We were hired as crew on this job and travelled to The Netherlands for this customer testimonial film. On the surface it was a simple shoot, but it used some complex equipment and had a larger crew. This piece was shot on Arri Amira and Alexa Mini, which just gives that edge over the other cameras \u2013 it remains one of our favourite cameras to use. We paired the Arri\u2019s with their own Master Prime lenses. By doing this we ensured that the image was the best possible considering the budget.", "We even got to take home some chocolate!"] },
      { id: "shell", href: "/work/shell", client: "Shell / The Telegraph", sector: "Energy", title: "Branded content", cat: ["Branded", "Automotive"], ar: "16 / 9", video: "/uploads/loops/Shell.mp4", vimeo: "988531350", vimeoAr: "16 / 9",
        lead: "Branded content film for one of the world\u2019s giants.",
        body: ["Part of a series of films created for Shell by The Telegraph. We travelled to see a handmade sports car.", "We shot this film all the way back in 2015, but we\u2019re still immensely proud of it. It still stands the test of time, even though the car is looking very dated now! We travelled to a Norfolk shed, where we stayed for 2 days shooting the general happenings around the factory. Our contribs were very accommodating which made it all worth it. The edit \u2013 done by The Telegraph Media Group \u2013 is brilliant, and really pulls out a lot of the visuals with the use of sound design."] },
      { id: "nested", href: "/work/nested", client: "Nested", sector: "Property", title: "Social media campaign", cat: ["Corporate"], ar: "3 / 4", video: "/uploads/loops/Nested.mp4", vimeo: "988532031", vimeoAr: "16 / 9",
        lead: "Quality social media campaign for the modern estate agency.",
        body: ["A social media campaign for the in-trend estate agent brand. Bitesize stories from real customers and consumer advice from the experts at Nested.", "Our aim with the social media campaign was to create really personable videos, in which the agent would come across as easy-going, knowledgable and convincing.", "Working directly with Nested\u2019s marketing team during the creative process, we came up with the best way to portray Nested on camera. The agents talking directly to camera helped create that intimate feel. We chose to film each agent in a homely setting, for the same reason. Having the agents walk around their local areas helped engage the local audience, which was ultimately Nested\u2019s goal.", "This shoot was conducted over six days across six different London boroughs, so it\u2019s needless to say, our crew definitely got their steps in! We kept the kit relatively light on this shoot for that reason, all b-roll was shot handheld on prime lenses; and the only lighting required was that for each PTC.", "Six locations. Six agents. Forty-six different videos."] },
      { id: "scott-brash", href: "/work/scott-brash", client: "Scott Brash", sector: "Sport", title: "Training app videos", cat: ["Sport"], ar: "16 / 9", video: "/uploads/loops/Scott-Brash-App-Launch.mp4", vimeo: "988531826", vimeoAr: "16 / 9",
        lead: "Training app videos for one of the world\u2019s greatest horsemen.",
        body: ["Back to shooting after lockdown and we had this mammoth project to tackle!", "During the lockdown in the UK, Scott wanted to release an equestrian training app. For this, he needed a lot of video content. Around 70 app videos in total, we would shoot around 4/5 per day, so it was a lengthy project. But it was a pleasure working with such a determined client.", "We were incredibly lucky with weather conditions for the three weeks of filming, meaning we could rattle through the videos with relative ease, despite a few tantrums from the horses!", "The majority of the instructional videos were shot with four cameras, and were around an hour or so of recording. The size of the data was immense, but we managed it carefully and the project was signed off within six weeks."] },
      { id: "rize", href: "/work/rize", client: "Rize", sector: "Consumer", title: "Stock-footage edit", cat: ["Corporate", "Social"], ar: "16 / 9", video: "/uploads/loops/Rize.mp4", vimeo: "988531633", vimeoAr: "16 / 9",
        lead: "Impactful edit using only stock imagery.",
        body: ["Impactful video about a climate change fund from Rize ETF. Created solely using stock video gathered from various sources.", "This film is a perfect example for creative storytelling in the digital realm, proving that engaging content doesn\u2019t require tangible product footage. The execution involved deep asset sourcing over four days, recording with a professional voice actor for the narration, and six days piecing it all together in post-production. Through exciting editing and extensive sound design, we finished with an immersive piece that effectively describes a narrative about climate change and motivates viewers toward investment action.", "This method is brilliant for health-tech clients who often deal with complex, invisible, or purely digital products (like software or diagnostics) that don\u2019t have exciting visual footage."] },
      { id: "badminton-horse-trials", href: "/work/badminton-horse-trials", client: "Badminton Horse Trials", sector: "Sport", title: "Anniversary promo", cat: ["Sport"], ar: "16 / 9", video: "", vimeo: "1208364202", vimeoHash: "f2b6cd4a85", vimeoAr: "16 / 9", vimeoThumb: "https://i.vimeocdn.com/video/2177670527-4b00ee8b7972f902df36ec0de403d5de0fadd465e8bfd3e73398e19331eacbe4-d_960x540?region=us",
        lead: "75 years of Badminton Horse Trials.",
        body: ["A promotional film marking 75 years of the Badminton Horse Trials, one of the sport's great fixtures."] },
      { id: "mahou-beer-promos", href: "/work/mahou-beer-promos", client: "Mahou", sector: "Drinks", title: "Beer promos", cat: ["Branded"], ar: "16 / 9", video: "/uploads/loops/mahou.mp4", vimeo: "325920534", vimeoHash: "c7917b056b", vimeoAr: "16 / 9",
        lead: "Branded content for luxury beer brand, Mahou.",
        body: ["A campaign series of films for the legendary Madrid beer brand \u2018Mahou\u2019. Beer and tapas, pairings with acclaimed chef Mark Sargent.", "This series of films was part of the campaign to launch Mahou beer into the UK market.", "Madrid is synonymous with great food, predominantly the superb tapas that you can find throughout the city. What better way to introduce UK consumers to Mahou than through tapas dishes that pair perfectly with Mahou beer!", "Working with Mahou and the Telegraph Commercial Video team we conceptualised and created the video campaign that was to be filmed over 4 days in 4 different locations.", "We wanted the tone of the films to reflect the Madrid tapas culture, celebrating the social aspects of sharing food, and of course, enjoying a beer with friends.", "With each film only 2 minutes in length we had to think creatively to pack in all of the information that Mahou wanted to get across alongside the food content.", "The campaign was greatly received by the client and viewers, almost as well as the leftover tapas was received by the crew."] },
      { id: "yorkshire-tea-branded-content", href: "/work/yorkshire-tea-branded-content", client: "Yorkshire Tea", sector: "Food", title: "Branded content", cat: ["Branded"], ar: "16 / 9", video: "/uploads/loops/yorkshiregold_loop.mp4", vimeo: "312003484", vimeoAr: "16 / 9",
        lead: "Branded content for Britain\u2019s favourite tea, Yorkshire Tea.",
        body: ["Having run a competition to find \u2018Britain\u2019s Best Garden\u2019, this branded content campaign for Yorkshire Tea culminated in this film showcasing the winning garden.", "After seeing the undulations of the garden on the recce we knew a jib would be perfect to show the space in all its glory. Alongside our main camera we captured some beautiful visuals which were actually made even better by the weather, the rain adding to the atmosphere.", "Despite the weather we shot everything that we wanted to capture to create a charming film about a humble(ish) English garden. Best viewed with a cup of tea.", "We are proud to have contributed to this project that went on to win \u2018Best Branded Content Campaign\u2019 at the Campaign awards."] },
      { id: "dove-emotive-storytelling", href: "/work/dove-emotive-storytelling", client: "Dove", sector: "Consumer", title: "Emotive brand story", cat: ["Branded", "Sport"], ar: "16 / 9", video: "/uploads/loops/scott_fardy.mp4", vimeo: "312001005", vimeoAr: "16 / 9",
        lead: "Emotive storytelling using stock for skincare giant, Dove.",
        body: ["Klaxon Studio worked with Dove to produce a film for their \u2018Act of Care\u2019 campaign where Rugby legend Scott Fardy reflected on the 2011 tsunami and the impact it had on the fishing town of Kamaishi, Japan.", "This one is a favourite of Matt and James. Whilst no filming took place specifically for this project we crafted the narrative arc of Scott Fardy\u2019s emotive story and then whiled away many, many hours sourcing archive footage of Scott and also the Tsunami that hit Kamaishi.", "This film that we produced was one in a series that Dove commissioned for their \u2018Men\u2019s Act of Care\u2019 series. We flew to Dublin to interview Scott about his experiences in Japan when the Tsunami struck Kamaishi and how he helped in the aftermath. From that we built the narrative structure of the film, sourcing the relevant supporting archive and contributors to help tell the story.", "Having spent over a month on this project conceptualising, researching, planning, interviewing and editing there was a strange twist of fate 3 years later when Matt actually ended up in Kamaishi for a different project. It was humbling both to see the remarkable rebuilding that had taken place in Kamaishi after the Tsunami and also to speak to the locals about what they had gone through. An amazing experience."] },
      { id: "nfu-sponsored-content", href: "/work/nfu-sponsored-content", client: "NFU Mutual", sector: "Finance", title: "Sponsored content", cat: ["Branded"], ar: "16 / 9", video: "/uploads/loops/nfu_mutual_loop.mp4", vimeo: "445542784", vimeoAr: "16 / 9",
        lead: "Slick branded campaign for NFU Mutual.",
        body: ["Over two days we shot two sponsored content films for NFU Mutual, one at a Gin distillery in the Wye Valley and the other at a beautiful Dairy farm in Lincolnshire.", "Sometimes you get particularly lucky with the subject of your shoots, this one was of those!", "The aim of the films was to highlight the relationships shared between \u2018The Rural\u2019, \u2018The Town\u2019 and \u2018The City\u2019 and to position NFU Mutual as a modern insurance provider that can adapt to the UK\u2019s ever changing \u2018consumer culture\u2019 and lifestyles.", "The films were a documentary portrait of the featured producers. The best hook to keep people watching content is to see someone talking passionately about a subject they love. This was certainly the case with the two producers that we featured and it was great to be able to work with them to showcase their business and their produce.", "Perks of the job, yes we tried some Chase Gin (after the shoot of course) and yes we tried some Lincolnshire Poacher Cheese, both were delicious!"] },
      { id: "shell-corporate", href: "/work/shell-corporate", client: "Shell", sector: "Energy", title: "Corporate film", cat: ["Corporate"], ar: "16 / 9", video: "/uploads/loops/shell_v_power_loop.mp4", vimeo: "429320412", vimeoAr: "16 / 9",
        lead: "A corporate film for a massive corporate giant.",
        body: ["A trip to Hamburg to see Shell\u2019s cutting-edge fuel technology lab.", "With Shell being a leading corporate player in their industry, they are constantly developing new fuel technologies. The film that we produced was to showcase one of their new consumer products, Shell V-Power Nitro+ diesel.", "The challenge with a lot of subject matters that are niche and technical in nature, is to make it understandable and engaging to the casual viewer.", "So our concept was that of a \u2018visual essay\u2019. No talking heads taking up valuable screen time, instead a well curated voice-over underpinned by cinematic shots that visually show the processes and concepts that are being explained in an easily digestible way.", "The voice over was created from an interview we conducted with a fuel scientist from Shell on location. It was vital to ensure that we curated the questions in a way that we could then create the narrative voice over for the film seamlessly, which we achieved.", "We were really happy with the end result, who knew fuel science could be so interesting!"] },
      { id: "subaru-branded-content", href: "/work/subaru-branded-content", client: "Subaru", sector: "Automotive", title: "Branded content", cat: ["Branded", "Automotive"], ar: "16 / 9", video: "/uploads/loops/subaru_loop.mp4", vimeo: "312002577", vimeoAr: "16 / 9",
        lead: "Branded content films in the shadow of Snowdonia.",
        body: ["Subaru was the client for this project, commissioning two car reviews for their new models of the Forester and Levorg.", "November in Snowdonia isn\u2019t for the faint hearted, but we pulled off the shooting in 3 days despite the weather doing its best to stop us!", "Both cars fall in different sectors, one being a 4x4 and the other being a Sports Tourer. So, with just three consecutive days available to shoot a film for both cars, the challenge was that of ensuring efficient use of time, to find a location that would suit and enable us to show the strengths of both vehicles without having to make time consuming location moves.", "After lots of researching on Google Maps and then two days of physical recces, we decided upon shooting in Snowdonia.", "We found a spectacular disused slate mine as the location to shoot the Forester. Subaru were keen to heavily feature their \u2018x-mode\u2019 system which is utilised in challenging off-road, low grip environments and the slate mine was the perfect place to show this.", "For the Levorg, we really wanted to show its capabilities as a Sports Tourer, focusing on the ride and handling of the car. The twisting mountain roads of Snowdonia was perfect for this, not to mention the stunning scenery that it also provides as a backdrop.", "Add former Stig Ben Collins as the host and you have the perfect person to put the cars through their paces."] },
      { id: "commonwealth-games", href: "/work/commonwealth-games", client: "Commonwealth Games", sector: "Sport", title: "Sports profile VT", cat: ["Sport"], ar: "16 / 9", video: "/uploads/loops/CWG.mp4", vimeo: "988534829", vimeoAr: "16 / 9",
        lead: "Sports profile VT for use across global broadcasters.",
        body: ["A sports profile VT about Louise Sugden, a paralympic power-lifter. Louise tells us an awe-inspiring story, and her hopes for the Birmingham Commonwealth Games.", "The agency wanted a very fast turnaround with this project. Our self-shooting PD shot for around four hours at Louise\u2019s gym, and then spent one day editing the following day. However, despite the lack of finesse time, the results are great and a number of broadcasters have taken the film.", "There were a few challenges with this shoot, the location was small and the exterior was unusable so our filmmaker made use of what they could; and did a fantastic job! Louise was a natural, she welcomed us open armed and was incredibly helpful with the entire shoot.", "We kept our kit light on this job just because of the time restraints. We took four lights, two microphones and one camera! However, you\u2019d think we had more!!"] },
      { id: "cavalor", href: "/work/cavalor", client: "Cavalor", sector: "Equine", title: "Promotional video", cat: ["Corporate", "Sport"], ar: "16 / 9", video: "/uploads/loops/Cavalor.mp4", vimeo: "988536100", vimeoAr: "16 / 9",
        lead: "Emotive promotional video to capture everyone\u2019s hearts.",
        body: ["Emotive promotional video with horsemen and women telling stories about why they love the equestrian world.", "Cavalor wanted to produce a promotional video that was more about the beauty of the film and stories than their own brand. We were only happy to oblige. We had a crew of only three, a director and two camera people, but we managed to produce some cracking results!", "This piece was shot in two days across two countries. It was logistically quite a challenge. The budget was limited, so the only way to meet the client\u2019s needs was to shoot in a limited timeframe, this would help to reduce the crew costs. We managed to squeeze five different contributors in three different locations across two countries. We put a fair amount of miles on the hire van to say the least! We carefully planned the shoot days down to the minute so that the crew weren\u2019t overworked and still managed to achieve the quality films we strive for."] },
      { id: "aesme-instructional-video", href: "/work/aesme-instructional-video", client: "Aesme", sector: "Consumer", title: "Instructional video", cat: ["Branded"], ar: "1 / 1", video: "/uploads/loops/Aesme-1.mp4", vimeo: "988531951", vimeoAr: "16 / 9",
        lead: "Beautifully crafted instructional videos.",
        body: ["This series of instructional videos were made to be informative and easy to understand. Aesme wanted the films to be wide reaching so accommodating a large audience was vital.", "Aesme have very clear definitions for what they want from video content. They came to us after separating from another production company who they felt didn\u2019t meet their expectations. Having been through the process before, they were careful to get it right this time. We were provided with storyboards that we made sure we followed as best we could.", "We shot the instructional videos with two cameras in the Aesme floristry studio in West London, unfortunately this location was right underneath the railway and Shepherd\u2019s Bush station. With a tight budget, there was no option but to film in this location. The crew and contributors had to be patient and wait for trains at every shoot. Our soundman was vigilant and we glad for it, as you don\u2019t hear the trains at all!"] },
      { id: "telegraph-lullingstone-castle", href: "/work/telegraph-lullingstone-castle", client: "The Telegraph", sector: "Media", title: "Lullingstone Castle film", cat: ["Social"], ar: "16 / 9", video: "", vimeo: "1127525470", vimeoHash: "387659f32f", vimeoAr: "16 / 9", vimeoNativeAr: 0.75, vimeoThumb: "https://i.vimeocdn.com/video/2070282340-9580c0c0479537a059f2680a925e6a0be9fc03b8a1d9fd0ed2b4a26dc028c2dd-d_960x540?region=us",
        lead: "A plant hunter, a kidnapping, and the garden that saved a castle.",
        body: ["We spent a day at Lullingstone Castle with Tom Hart Dyke, 20th heir to the estate, for The Telegraph. He turned out to have quite a story.", "Tom is a plant hunter and travelled the world looking for rare species he could bring back to the UK.", "While he was looking for a rare orchid in Colombia, he, along with 3 others, got kidnapped and taken deep into the jungle - where he was held captive for 9 months and threatened at gunpoint daily. His friends were killed off, some accidentally. Tom was assumed dead by those closest to him and a memorial was held for Tom in the UK.", "When he was told one day had 5 hours to live, Tom passed his time by drawing up and designing a \"world garden\" in his diary.", "He and one other eventually escaped by speedboat and stumbled across two rangers who radioed the consulate; who in turn thought it was all a hoax as Tom had \"died\" ages ago.", "Eventually after much negotiation, they sent someone to rescue him.", "When back at Lullingstone Castle, Tom put the world garden into action. It's fascinating and has an amazing array of really peculiar plants! In fact, the garden has saved Lullingstone from the depths of financial ruin!", "Filmed in a day at Lullingstone by Shooting Producer/Director, Charlie."] },
      { id: "historic-england-bruce-grove", href: "/work/historic-england-bruce-grove", client: "Historic England", sector: "Heritage", title: "Bruce Grove short doc", cat: ["Documentary", "Social"], ar: "1 / 1", video: "", vimeo: "1208377115", vimeoHash: "7ce7cef536", vimeoAr: "16 / 9", vimeoThumb: "https://i.vimeocdn.com/video/2177689621-20527acb4b141c6876f720174263c98844370251daa810d21ba0f8b3730ac8c1-d_960x540?region=us",
        lead: "Films produced for Public sector bodies.",
        body: ["In late 2025, we won a public sector tender to become one of 8 approved suppliers from around the country for Historic England. We are incredibly proud of this achievement and of the work we produce for them.", "Our first commission was a film about Bruce Grove Toilets. Yep, a toilet block!", "Actually, it was a lovely little Victorian toilet block which has a huge and very important social history, it has since been given a new lease of life as a community cafe.", "Here's an excerpt from our creative treatment:", "\u201cOur style will avoid anything that's overly formal and instead embrace humour and curiosity. The on-screen delivery will be warm, playful, and informed, guiding viewers through the site's history, social context, and architectural significance with energy and authority.\u201d", "We nailed it."] },
      { id: "barclays-social-advice", href: "/work/barclays-social-advice", client: "Barclays", sector: "Finance", title: "Social advice content", cat: ["Corporate", "Social"], ar: "1 / 1", video: "", vimeo: "1208420545", vimeoHash: "7dd07a857c", vimeoAr: "16 / 9", vimeoThumb: "https://i.vimeocdn.com/video/2177739816-f98c153c0568f48cca470d0b7c4565d1b86dc4da24acf76d38045846ffafe2f3-d_960x540?region=us",
        lead: "A massive retained client over three series.",
        body: ["We have been asked back consistently to film these financial advice films for Barclays. The creative agency, Rapp (part of the Omnicom group) handle all of the creative before we get involved. We direct, shoot and edit these films ready for use across youtube, website, social and embedded into emails.", "This is the film before handoff, Rapp applied the motion graphics in post.", "We've filmed 3 series of these films, usually shot on one day in one location with 2 cameras and although it looks subtle, there is a helluva lot of lighting, especially for 6 flights of stairs!"] },
      { id: "travis-mathew-ambassador-documentary", href: "/work/travis-mathew-ambassador-documentary", client: "Travis Mathew", sector: "Apparel", title: "Ambassador documentary", cat: ["Branded", "Sport"], ar: "16 / 9", video: "", vimeo: "1208364200", vimeoHash: "a0715c635d", vimeoAr: "16 / 9", vimeoThumb: "https://i.vimeocdn.com/video/2177670842-5bb64a967838efe355b96b44f1a689d80e51087787ee0a66f79e322a7dc65da6-d_960x540?region=us",
        lead: "Creating great video content, despite massive footage challenges.",
        body: ["This was a tricky project, not least because we didn't have the rights to use broadcast tour footage in the film - however, we managed to make it work! Just. We filmed 5 interviews with Josh and the main contributors plus a tonne of b-roll over 3 days.", "The main challenge was the lack of footage to support the interviews when talking of early life, or the experiences on tour. That's where the creative problem-solving started. We shot b-roll sequences specifically to carry those moments, effectively building coverage from scratch where none existed.", "We also delved deep into social archives and approached close friends and family for photos of Josh to use and help drive the edit. With 4 x 10 minute episodes to deliver this was invaluable.", "So, despite the challenges on this project, it came out very well."] },
      { id: "uniteq-brand-launch", href: "/work/uniteq-brand-launch", client: "Uniteq", sector: "Fashion", title: "Brand launch", cat: ["Social"], ar: "3 / 4", video: "", vimeo: "1208380461", vimeoHash: "ee5536a47e", vimeoAr: "9 / 16", vimeoThumb: "https://i.vimeocdn.com/video/2177691023-a113fb55e1dc3372d83a70b39a962333066bc10de00da21c96d8932ccb49f767-d_960x540?region=us",
        lead: "Social media launch for new clothing brand.",
        body: ["Uniteq came to us with a brief to launch their new clothing brand on social media. Twelve vertical clips and a hero film - all shot in a single day on location in Surrey, in mid-December!", "The creative direction was deliberately unglamorous. This was an \u2018atypical\u2019 fashion promo film. We wanted the brand to feel authentic and gritty, so we leaned into handheld camera work and gave the models room to move. Our mantra for this was \u2018less polish, more edge\u2019."] },
];

// ── Home-page service teasers ──

export const homeServices: HomeService[] = [
  { num: "01", title: "Corporate Video", desc: "Films that get it right for boardrooms, stakeholders, and externally. Every time.", img: "uploads/vlcsnap-2025-12-01-10h35m19s188-b999ec69.webp", href: "/services/corporate-video" },
  { num: "02", title: "Branded Content", desc: "Sponsored content and UGC that builds brands.", img: "uploads/vlcsnap-2024-06-10-15h38m45s397-40806154.webp", href: "/services/branded-content" },
  { num: "03", title: "Social Content", desc: "Social-first thinking from the very first conversation.", img: "uploads/Channel 4 x Boots Great British Summer crop.webp", href: "/services/social-content" },
  { num: "04", title: "B2B Video", desc: "Complex products, specialist audiences, high-stakes communications, done properly.", img: "uploads/vlcsnap-2022-07-13-14h33m09s835-a351d372.webp", href: "/services/b2b-video" },
];

// ── Production services (12) ──

export const svcOrder: string[] = ["production-management", "directing", "filming", "editing", "ideation", "podcast-recording", "colour-grading", "sound-design", "delivery-versioning", "white-labelling", "uk-production-services", "film-crew-hire"];

export const services: ServiceDetail[] = [
      { img: "uploads/IMG_2697 2.webp", slug: "ideation", href: "/services/ideation", num: "01", title: "Ideation & Creative", desc: "Where great ideas are born, shaped and built into something real.",
        lead: "Every great film starts with a great idea. But great ideas don't just happen, they're built.",
        body: [
          "At Klaxon, ideation isn't a box-ticking exercise or a slide deck full of buzzwords. It's where we do some of our best work. We get under the skin of your brand, your audience and your objectives, then we start asking the questions that lead somewhere interesting.",
          "We work collaboratively, bringing your team's knowledge together with our creative instincts to develop concepts that are original, purposeful and actually executable. No ideas that look good in a meeting room but fall apart on a shoot day.",
          "From the first spark of an idea through to a fully realised creative concept, we shape the direction of your project with clarity and confidence. That means developing the narrative, defining the visual language, writing scripts that sound like humans talking, and building storyboards that give everyone a clear picture of where we're heading.",
          "We know the creative process can feel uncertain, especially when you're trying to translate a business objective into something that moves people. That's what we're here for. We've navigated enough briefs, stakeholder sign-offs and creative curveballs to know how to keep the process focused without losing the spark that makes content worth watching.",
          "Good ideas, well executed, change how people feel about a brand. Let's find yours.",
        ],
        includes: ["Ideation", "Video Concept Development", "Creative Direction", "Scripting", "Storyboarding"],
        faqs: [
          { q: "How long does the creative development process take?", a: "It depends on the complexity of the project, but typically we'd expect concept development to take one to three weeks. This includes initial briefing, internal ideation, and the presentation of fully developed creative ideas for your feedback. For larger or more complex productions, we build in more time to ensure the concept is properly stress-tested before we move into production." },
          { q: "What if we already have an idea, can you develop it further rather than start from scratch?", a: "Absolutely. Many of our best projects start with a client's initial idea that we then help shape, refine and build out into a fully realised concept. We're as comfortable developing someone else's spark as we are generating our own." },
          { q: "Do you provide scripts and storyboards as part of the creative process?", a: "Yes, scripting is a standard part of our concept development process, we won't move into production without a clear, signed-off script. Storyboarding depends on the nature of the project; for more complex or visually ambitious productions it's an invaluable tool, but for simpler shoots it's not always necessary. We'll always recommend the level of pre-production detail that's right for your specific project." },
        ] },
      { img: "uploads/Levorg&Forester Wales-80.webp", slug: "production-management", href: "/services/production-management", num: "02", title: "Production Management", desc: "Every detail handled, so your production runs exactly as it should.",
        lead: "The best shoot days don't happen by accident. They happen because someone thought of everything before the cameras rolled.",
        body: [
          "Production management is the backbone of every project we deliver, and while it might not carry the glamour of a great idea or a stunning shot, without it, neither of those things would make it to screen.",
          "At Klaxon, we take the operational complexity of a production completely off your plate. From the moment a concept is greenlit, we're building the framework that makes it happen: locking locations, sourcing and scheduling talent, crewing up, managing budgets, arranging permits and making sure every moving part is in the right place at the right time.",
          "We're meticulous planners, but we're also realists. Productions rarely go exactly to plan, and when something shifts (and something always shifts), our job is to solve it quickly and quietly, so your shoot day stays on track and on budget.",
          "We work closely with clients throughout the pre-production process, keeping communication clear and making sure there are no surprises. You'll always know where things stand. And on shoot days, you can focus on what matters, the creative, while we handle everything else.",
          "It's not the most glamorous part of filmmaking. But done well, it's what separates a smooth, successful production from a stressful one. We've been doing this long enough to know the difference.",
        ],
        includes: ["Scheduling", "Location Scouting", "Budgeting", "Crewing", "Permits & Logistics", "Talent Coordination", "Pre-Production Services London"],
        faqs: [
          { q: "What does production management actually cover?", a: "Everything that needs to happen before filming begins and everything that needs to be coordinated on shoot days. That includes budgeting, scheduling, location scouting, permits, crewing, talent management, equipment sourcing and logistics. Essentially, if it needs to be organised for a production to happen, it falls under production management." },
          { q: "How do you handle unexpected changes on shoot days?", a: "Calmly and quickly. Productions rarely go entirely to plan - locations change, talent drops out, weather intervenes. Our production managers are experienced problem solvers who anticipate issues before they arise and resolve them without drama when they do. Keeping clients informed throughout is a core part of how we work." },
          { q: "Can you manage productions outside London?", a: "Yes. We manage productions across the UK and internationally. Our network of trusted crew, suppliers and location contacts extends well beyond London, and we're comfortable coordinating complex logistics in locations we haven't worked in before." },
        ] },
      { img: "uploads/33032478-0a8d-45bf-8722-1b0ad18f27e6 2.webp", slug: "directing", href: "/services/directing", num: "03", title: "Directing", desc: "Calm, creative direction that gets the best out of every subject and situation.",
        lead: "A great director doesn't just capture what's in front of the camera. They know exactly what needs to be felt on the other side of it.",
        body: [
          "Direction is where creative vision becomes reality, and it's one of the most nuanced skills in the entire production process. It's the ability to hold the big picture in mind while staying completely present in the moment. To know when a performance needs pushing, when a shot needs rethinking, and when what's happening spontaneously is better than anything in the plan.",
          "At Klaxon, our directors bring a calm, focused energy to set, because a relaxed crew is a creative crew, and a relaxed subject is a compelling one. Whether we're working with seasoned on-screen talent or a CEO doing their first piece to camera, we know how to draw out the best in people. We create the kind of environment where good things happen naturally, rather than having to be forced.",
          "We're fluent across formats, brand films, documentaries, interviews, product content, live events, and we adapt our approach to suit the tone and objectives of each project. Some films call for a strong, structured vision. Others need a lighter touch and a willingness to follow the story where it leads. We know the difference, and we know when to switch.",
          "The goal is always the same: footage that gives the edit everything it needs to make something genuinely great.",
        ],
        includes: ["Creative Direction", "Commercial Video Director", "On-Set Direction", "Talent Direction", "Interview Direction", "Documentary Direction", "Director for Hire London"],
        faqs: [
          { q: "How do you approach directing at Klaxon?", a: "All directing at Klaxon is handled in-house by our own team. This means the creative vision stays consistent from concept through to delivery, and the person directing your project has been involved in shaping it from the start. Our directors bring experience across a wide range of formats and tones, so whatever your project calls for, we have the capability to deliver it ourselves." },
          { q: "Can you direct people who've never been on camera before?", a: "This is one of our specialities. We've directed everyone from nervous first-timers to senior executives who are convinced they're terrible on camera - and in almost every case, the results surprise them. The key is creating the right environment and taking the time to put people at ease before filming begins." },
          { q: "Do clients have input into the creative direction on set?", a: "Yes, and we actively encourage it. Having the right client representative on set - someone with the authority to make decisions - makes for better films. We work collaboratively throughout the shoot and welcome input, while also being clear when we think something isn't serving the film." },
        ] },
      { img: "uploads/LevorgForester-Wales-102-1-scaled-655fed34.webp", slug: "filming", href: "/services/filming", num: "04", title: "Filming", desc: "Cinema-grade camera work, from short interviews to large-scale productions.",
        lead: "Beautiful images don't just look good, they make people feel something. That's the standard we hold ourselves to on every shoot.",
        body: [
          "Filming is where the preparation, the planning and the creative vision all collide with reality. It's fast, it's demanding, and it requires a level of technical expertise and instinctive decision-making that only comes from doing it, a lot. Our camera teams have shot everything from intimate documentary portraits to large-scale commercial productions, and they bring the same obsessive attention to image-making to every single project.",
          "We work with professional cinema and broadcast-grade kit, but equipment is only ever a means to an end. What matters is the eye behind the lens, the ability to read a location, work with available light, frame a shot that serves the story and move with the moment when things don't go to plan. That's where experience counts.",
          "Our Directors of Photography work in close collaboration with the director from pre-production through to the shoot, so that by the time we're on set, the visual language of the film is already established. Every shot has a purpose. Every setup is considered. And when something unexpected happens, a change in light, a spontaneous moment, a better option than the one on the shot list, we're ready to take it.",
          "The result is footage that gives post-production exactly what it needs to do its best work",
        ],
        includes: ["DoP", "Cinematography Services", "Camera Crew Hire London", "Sound Recording", "Lighting", "Film Crew London", "Multi-Camera Production"],
        faqs: [
          { q: "What camera and equipment do you work with?", a: "We shoot on Sony FX series cinema cameras, which deliver exceptional image quality across a wide range of production environments. For specialist requirements such as additional camera bodies, lenses, lighting and grip, we have established relationships with trusted rental houses and can scale our kit package to suit the demands of any project." },
          { q: "Can you film in low-light or challenging environments?", a: "Yes. Our camera teams are experienced across a wide range of filming conditions, from controlled studio environments to outdoor locations, live events, industrial settings and everything in between. We always carry the lighting and grip equipment necessary to handle whatever the location throws at us." },
          { q: "Do you provide a Director of Photography or just camera operators?", a: "Both, depending on what the project requires. For larger productions where the visual language of the film needs to be carefully established and maintained, we'd recommend a dedicated DoP. For smaller productions, an experienced camera operator can fulfil both roles effectively. We'll advise on what's right for your project and budget." },
        ] },
      { img: "uploads/IMG_3067.webp", slug: "podcast-recording", href: "/services/podcast-recording", num: "05", title: "Podcast Recording", desc: "Broadcast-quality audio, wherever you need to record.",
        lead: "Podcasts have never been more popular. But there's a significant gap between a podcast that exists and one that people actually come back to.",
        body: [
          "The barrier to entry might be low, but the bar for quality, real quality, is higher than most people realise. Audiences are discerning. They notice when the audio isn't quite right, when the conversation feels stilted, or when the production lacks the polish that keeps them engaged. Getting those things right takes more than a decent microphone and a quiet room.",
          "At Klaxon, we bring full production expertise to podcast recording, creating an environment where hosts and guests feel comfortable, conversations flow naturally, and the technical side is completely taken care of. Whether you're launching a brand new show or looking to elevate an existing one, we handle everything from studio setup and sound recording through to editing, mixing and final delivery.",
          "We understand that great podcast content lives or dies on the quality of the conversation. So we keep the process relaxed and straightforward, no complicated setups, no distracting technical fuss, just a professional recording environment that lets the dialogue do its job.",
          "We work with brands, broadcasters and independent creators across a range of formats, from interview-led series to panel discussions and narrative productions. Whatever the format, the goal is the same: audio that sounds exceptional and content that keeps your audience listening.",
        ],
        includes: ["Podcast Recording Studio London", "Location Recording", "Audio Editing", "Sound Mixing", "Music & Sound Design", "Multi-Guest Recording", "Podcast Production Services UK"],
        faqs: [
          { q: "Do you have a dedicated podcast recording studio in London?", a: "We don't have a fixed studio space, but that's by design. We work with a range of professional studio facilities when a fixed environment is the right call, and we also operate an industry-leading Rode portable podcast kit that delivers broadcast-quality audio wherever we set up. Either way, we bring the same standard of sound to every recording, the setup just depends on what works best for your project." },
          { q: "Can you record guests who are joining remotely?", a: "Yes. We use Riverside, the industry-standard platform for remote podcast recording, which captures each participant's audio locally at broadcast quality regardless of their internet connection. Remote guests integrate seamlessly into the recording, there's no compromise on audio quality compared to an in-person session." },
          { q: "Do you help with podcast editing and post-production as well as recording?", a: "Absolutely, we handle the full process from recording through to a distribution-ready master. That includes editing, sound mixing, music, intro and outro production, and delivery in the formats required by your chosen platforms." },
          { q: "Can our podcast be filmed as well as recorded?", a: "Absolutely - video podcasts have grown significantly in popularity and it's something we'd always encourage considering. Having a video version opens up a whole additional content channel: the full episode for YouTube, clipped highlights for social, and behind-the-scenes material that gives your audience a more personal connection with the show. We handle the video and audio production together in a single setup, so there's no additional complexity on your end." },
          { q: "We're launching a new podcast from scratch. Can you help with the format and concept as well as the recording?", a: "Yes. We can work with you from the very beginning of the podcast development process, helping to establish the format, editorial approach, episode structure and creative concept before a single word is recorded. Getting this right from the start makes everything that follows significantly easier." },
        ] },
      { img: "uploads/IMG_8106-6a253099.webp", slug: "editing", href: "/services/editing", num: "06", title: "Editing", desc: "Where everything comes together and great content is made.",
        lead: "This is where everything comes together. And where the difference between good content and great content is made.",
        body: [
          "Editing is far more than assembling the best shots in the right order. It's a creative discipline in its own right, one that shapes the emotional arc of a film, controls its pace and rhythm, and determines whether an audience stays with it to the end or switches off after thirty seconds. A great edit can elevate average footage. A poor one can squander the best material in the world.",
          "At Klaxon, our editors are involved from early in the production process, not just handed a hard drive and left to get on with it. That continuity matters. When your editor understands the creative intent behind every shot, every interview, every sequence, the decisions they make in the cut are informed by the whole picture, not just what's in front of them.",
          "We work meticulously through every element that makes a film feel finished: selecting the moments that carry genuine emotion, building pace that serves the story, choosing music that enhances rather than overwhelms, and sweating the small details that most viewers will never consciously notice but would immediately feel if they were missing.",
          "From a tight social cut to a long-form documentary, we approach every edit with the same care and the same question: what does this film need to be as good as it can possibly be?",
        ],
        includes: ["Video Editing Services London", "Colour Grading", "Sound Design", "Music Supervision", "Motion Graphics", "VFX", "Post Production London", "Versioning & Delivery"],
        faqs: [
          { q: "How long does video editing typically take?", a: "It varies depending on the length and complexity of the project. A short social cut might be turned around in a day or two. A long-form documentary or corporate film with multiple contributors could take several weeks. We always agree a realistic post-production timeline upfront and build in rounds of client feedback." },
          { q: "How many rounds of revisions are included?", a: "Our standard process includes three rounds of client revisions, which is sufficient for the vast majority of projects. We use Frame.io for all client feedback, it lets you leave time-coded comments directly on the video, which makes the amends process fast, clear and straightforward for everyone. Additional revision rounds can be accommodated where needed, we'd agree the terms of these at the project outset." },
          { q: "Do your editors work with footage shot by other production companies?", a: "Yes. If you have existing footage that needs editing, whether shot by us, another company, or in-house, our editors can work with it. We'd want to review the material first to make sure we have everything needed to deliver the edit you're looking for." },
          { q: "What editing software do you use?", a: "We work in Adobe Premiere Pro, the industry-standard editing platform used across broadcast, commercial and digital production. All project files are delivered in Premiere Pro format, and we're happy to share sequences or project files directly if your team needs to make changes downstream." },
        ] },
      { img: "uploads/pexels-jakubzerdzicki-30229850.webp", slug: "colour-grading", href: "/services/colour-grading", num: "07", title: "Colour Grading", desc: "Where the visual identity of your film comes to life.",
        lead: "Colour is one of the most powerful tools in a filmmaker's arsenal. It sets mood, creates atmosphere and tells the audience how to feel, often without them ever realising it.",
        body: [
          "Colour grading is the final visual layer that transforms raw footage into a finished film. It's the difference between images that look captured and images that look crafted. Done well, it's almost invisible, audiences don't notice the grade, they just feel it. Done poorly, it's the first thing that undermines an otherwise strong piece of content.",
          "At Klaxon, we treat grading as an integral part of the creative process rather than a technical afterthought. Our colourists work closely with the director and editor to understand the visual intent of each project, ensuring that the grade serves the story rather than just tidying up the footage. Whether that means a clean, natural look that keeps the focus on the subject, a rich cinematic palette that adds depth and drama, or something more stylised that reinforces a brand's identity, we have the skill and the tools to get it right.",
          "We grade across all formats and delivery requirements, broadcast, digital, social, and we understand that different platforms have different demands. A film that looks stunning on a cinema screen needs to work just as hard on a phone. We make sure it does.",
          "Colour grading is where a film stops looking like a film and starts looking like your film.",
        ],
        includes: ["Colour Grading Services London", "Video Colour Grading UK", "LUT Development", "Broadcast Delivery", "HDR", "Post Production Colour London", "Multi-Format Versioning"],
        faqs: [
          { q: "At what point in the post-production process does colour grading happen?", a: "Colour grading is the final stage of the picture post-production process, it happens after the edit has been locked and approved. We don't grade until the edit is signed off, as any changes to the cut after grading would require rework." },
          { q: "Can you match the grade across multiple videos in a series?", a: "Yes. Consistency across a content series is something we take seriously. We create and retain LUTs and reference grades for ongoing projects, ensuring every new piece of content in a series matches the established visual identity." },
          { q: "Do you grade for specific platforms - broadcast, social, digital?", a: "Yes, and this is an important distinction. Different platforms have different colour space and technical requirements. We ensure every graded master is correctly specified for its intended delivery format, whether that's broadcast, online or social media." },
        ] },
      { img: "uploads/IMG_2087.webp", slug: "sound-design", href: "/services/sound-design", num: "08", title: "Sound Design", desc: "Audio that immerses, moves and translates across every platform.",
        lead: "Close your eyes during a great film and it still works. That's not an accident, it's sound design.",
        body: [
          "Audio is the most underestimated element of video production. Audiences will tolerate imperfect visuals far longer than they'll tolerate imperfect sound. Yet for many productions, sound is treated as an afterthought, something to be fixed in post rather than crafted with intention. The results speak for themselves, and not in a good way.",
          "At Klaxon, we believe sound deserves the same creative attention as every other element of a film. From the ambient texture of an environment to the precise placement of an effect, from the emotional weight of a music choice to the clarity and warmth of a voice, every sonic decision shapes how an audience experiences your content, whether they're conscious of it or not.",
          "Our sound designers work across the full post-production process, collaborating closely with editors and colourists to ensure the audio and visual elements of a film feel completely unified. We build soundscapes that immerse, scores that move, and mixes that translate faithfully across every platform and playback environment, from cinema speakers to laptop audio to a phone speaker in someone's pocket.",
          "Because that's the reality of modern content. It needs to work everywhere. And it needs to feel intentional everywhere too.",
          "Great sound design doesn't call attention to itself. It just makes everything feel more real, more alive, and more impossible to ignore.",
        ],
        includes: ["Sound Design for Video", "Dialogue Editing", "Music Supervision", "Foley", "Film Sound Mixing Services", "Audio Post Production London", "Broadcast Audio Delivery"],
        faqs: [
          { q: "What's the difference between sound design and sound mixing?", a: "Sound mixing is the process of balancing and blending the audio elements of a film - dialogue, music, effects, to create the final mix. Sound design is the more creative process of actually building and crafting those audio elements in the first place - creating atmospheres, designing effects, and shaping the sonic world of the film. We offer both as part of our post-production services." },
          { q: "Can you help source and clear music for my video?", a: "Yes. We have access to a range of professional music libraries, giving us a broad catalogue of licensable tracks across every genre and mood. We'll find the right music for your project and handle the licensing as part of the process, meaning no clearance headaches on your end" },
          { q: "Do you deliver to broadcast audio specifications?", a: "Yes. We deliver to the relevant broadcast standards - including R128 for European broadcast and ATSC A/85 for US - as well as platform-specific requirements for digital and social delivery." },
        ] },
      { img: "uploads/pexels-dlxmedia-hu-215591835-11911058.webp", slug: "delivery-versioning", href: "/services/delivery-versioning", num: "09", title: "Delivery & Versioning", desc: "Every format, every platform, always on time.",
        lead: "You've invested in making something great. The last thing you want is for it to fall apart at the final hurdle.",
        body: [
          "Delivery is where productions either finish cleanly or unravel in a frustrating tangle of wrong formats, failed specs and last-minute amends. It's the least glamorous part of the process, but it's the part that determines whether your content actually reaches your audience in the way it was intended to be seen.",
          "At Klaxon, we treat delivery with the same rigour we bring to every other stage of production. That means understanding your requirements from the outset, not scrambling to interpret a technical spec at the eleventh hour, and building versioning and delivery into the production workflow rather than bolting it on at the end.",
          "Modern content rarely lives in one place. A brand film might need a cinema cut, a broadcast master, a sixty-second social edit, a fifteen-second bumper and a square-format version for Instagram, all from the same source material, all to different technical specifications, all needed at the same time. We've done this enough times to manage it without the chaos.",
          "We handle the full range of delivery formats and platform requirements, broadcast, digital, social, out-of-home, and we make sure every version is correctly specified, properly QC'd and delivered on time. No corners cut, no formats missed, no last-minute panics.",
          "Your content deserves to land perfectly. We make sure it does.",
        ],
        includes: ["Multi-Format Video Versioning", "Broadcast Video Delivery UK", "Digital & Social Optimisation", "Quality Control", "Subtitling & Captioning", "Video Post Production London", "Archive & Asset Management"],
        faqs: [
          { q: "What video formats do you deliver in?", a: "We deliver across all standard broadcast, digital and social formats, including H.264, H.265, ProRes, MXF and DNxHD among others. We also deliver to platform-specific specifications for YouTube, Instagram, TikTok and broadcast networks where required." },
          { q: "Can you create multiple versions of a film from the same source material?", a: "Yes - this is exactly what our versioning service is designed for. From a single master edit, we can produce broadcast cuts, social formats (square, vertical, horizontal), duration variants (60s, 30s, 15s, 6s), subtitled versions, and language variants. We manage the entire process from a single source to avoid inconsistency across versions." },
          { q: "Do you provide secure archive and asset management?", a: "Yes. We retain project files and master assets for an agreed period following delivery, and we can arrange longer-term archiving for clients who require it. We'd always recommend clients maintain their own copies of final deliverables." },
        ] },
      { img: "uploads/IMG_2693 2.webp", slug: "white-labelling", href: "/services/white-labelling", num: "10", title: "White Labelling", desc: "Brilliant production, delivered under your banner.",
        lead: "Sometimes the best creative partnership is the one your client never needs to know about.",
        body: [
          "White labelling is a pragmatic and increasingly common arrangement in the production industry, and one we're very comfortable with. Whether you're an agency that needs a trusted production partner behind the scenes, a consultancy that wants to offer video as part of a broader service, or a studio that's at capacity and needs overflow support, we can slot seamlessly into your workflow and deliver to your standards, under your banner.",
          "At Klaxon, we understand that when you bring us in as a white label partner, your reputation is on the line as much as ours. We take that seriously. The same quality of work, the same attention to detail and the same level of client service that we'd deliver under our own name is exactly what we bring to every white label engagement, because a job that reflects badly on you reflects badly on us too.",
          "We're experienced in working discreetly within existing client relationships, adapting to established processes and communicating in ways that support rather than complicate the agency-client dynamic. We know when to be visible and when to stay in the background, and we're flexible enough to operate in whatever way works best for your business.",
          "If you need a production partner you can rely on absolutely, one that delivers brilliant work and never makes you look anything other than completely in control, we should talk.",
        ],
        includes: ["White Label Video Production UK", "Agency Production Partner", "Outsource Video Production UK", "On-Site Embedding", "Multi-Project Retainers", "Overflow & Surge Capacity"],
        faqs: [
          { q: "How do you handle confidentiality in white label arrangements?", a: "Discreetly and professionally. We're accustomed to operating in the background and have no interest in being visible in arrangements where confidentiality matters. We're happy to sign NDAs and work within whatever communication protocols your client relationship requires." },
          { q: "Can you scale up quickly to handle multiple projects at once?", a: "Yes. One of the key advantages of working with us as a white label partner is access to our wider network of trusted crew and post-production resource. We're not limited by a fixed in-house headcount and can scale our capacity to match your pipeline." },
          { q: "Do you work on a project-by-project basis or offer retainer arrangements?", a: "Both. We're happy to work on individual projects as needed, or to agree retainer arrangements for agencies with an ongoing requirement for production support. Retainer arrangements can offer useful benefits in terms of resource planning and prioritisation." },
        ] },
      { img: "uploads/IMG_7933-a31cdb8b.webp", slug: "uk-production-services", href: "/services/uk-production-services", num: "11", title: "UK Production Services", desc: "Local crew, local knowledge, seamless delivery for international productions.",
        lead: "Filming in the UK? We'll make sure you hit the ground running.",
        body: [
          "Bringing a production into an unfamiliar country is a logistical challenge even before a camera rolls. Navigating local regulations, sourcing the right crew, finding locations, managing permits, it all takes local knowledge, established relationships and the kind of on-the-ground expertise that can only come from years of working in the market. That's exactly what we offer.",
          "At Klaxon, we provide experienced UK crew and comprehensive fixer services for international production companies looking to shoot in Britain. Whether you're arriving with a full creative team and simply need local crew to support, or you need us to take care of the entire production infrastructure from the ground up, we have the experience and the network to deliver.",
          "We work across London and the wider UK, with access to a deep roster of trusted professionals, Directors of Photography, camera operators, sound recordists, gaffers, grips, production managers and more. Every crew member we provide is thoroughly vetted, highly experienced and used to working at pace on international productions.",
          "Beyond the crew, we can assist with location scouting and securing, permit applications, equipment sourcing and logistics, local casting and talent, and all the practical coordination that makes a foreign shoot run smoothly. Think of us as your production home base, the team that makes an unfamiliar place feel like familiar territory.",
          "You bring the vision. We'll bring everything else.",
        ],
        includes: ["UK Production Services", "Film Crew Hire UK", "Fixer Services", "Location Scouting & Permitting", "Equipment Sourcing", "Camera Crew Hire London", "Local Production Management", "Casting & Talent"],
        faqs: [
          { q: "Which areas of the UK do you cover?", a: "We work across the whole of the UK - from London and the South East through to Scotland, Wales and Northern Ireland. We have an established network of crew and suppliers across the country, so we're not limited to any particular region." },
          { q: "Can you assist with filming permits and location access in the UK?", a: "Yes. Navigating permit applications, location agreements, local authority permissions and access negotiations is a core part of our UK production services. The UK has specific requirements that can catch out international productions - we know how to handle them efficiently." },
          { q: "How much lead time do you need to assemble a crew?", a: "Lead time really depends on the scale and complexity of the project. For straightforward productions we can often assemble a crew within days, while larger or more technically demanding shoots benefit from more planning time. Whatever your timeline, get in touch and we'll let you know what's achievable, we're used to working at pace when the situation demands it." },
          { q: "Do you assist with equipment hire as well as crew?", a: "Yes. We can source and manage all equipment requirements for an inbound production - cameras, lighting, grip, sound and specialist kit - through our established relationships with UK equipment rental houses." },
        ] },
      { img: "uploads/E9AF444E-5DA4-42D0-9B43-014D5C85AD2B-ea41897c.webp", slug: "film-crew-hire", href: "/services/film-crew-hire", num: "12", title: "Film Crew Hire", desc: "Vetted, experienced crew assembled fast, anywhere in the UK.",
        lead: "Need a film crew you can trust. We'll put the right people on the day, wherever the day is.",
        body: [
          "A production is only ever as good as the people running it. The best camera in the world is useless in the wrong hands, and a brilliant brief falls apart without a crew that knows how to deliver it under pressure. When you hire a film crew, you're not just booking a set of skills, you're trusting a group of people to turn up, work well together and make your shoot run smoothly. That's exactly what we provide.",
          "At Klaxon, we offer professional film crew hire across the UK, from single operators through to fully resourced multi-camera units. Whether you need a Director of Photography and a camera assistant for a one-day interview shoot in London, or a complete crew of camera, sound, lighting, grip and production personnel for a national campaign, we assemble the right team for the job. Every crew member on our books is thoroughly vetted, properly insured and chosen for their experience as much as their kit.",
          "We've spent years building a deep network of trusted freelance professionals across the country, so we're never scrambling to fill a role. We know who's good, who's reliable and who works well under the specific demands of your production. That means we can crew up quickly when timelines are tight, and we can match the people to the project rather than simply filling slots.",
          "Hiring crew through us also takes the administrative weight off your shoulders. We handle the bookings, the rates, the call sheets and the coordination, so you have a single point of contact rather than a dozen separate conversations. And because we produce video ourselves, we understand exactly what a shoot needs to succeed, not just on paper, but on the day.",
          "Tell us the brief, the dates and the location. We'll bring the crew that delivers.",
        ],
        includes: ["Film Crew Hire UK", "Film Crew Hire London", "Camera Crew Hire", "Freelance Film Crew", "DoP & Camera Operators", "Sound, Lighting & Grip", "Multi-Camera Crews", "Production Crew Hire"],
        faqs: [
          { q: "What areas of the UK does your film crew hire cover?", a: "We provide film crews across the whole of the UK. London and the South East are our home turf, but we regularly crew productions in the Midlands, the North, Scotland, Wales and Northern Ireland through our national network of trusted freelance professionals. Wherever you're filming, we can put a local or travelling crew on the ground." },
          { q: "Can I hire a full crew, or just individual roles?", a: "Both. You can hire a single Director of Photography or sound recordist to slot into your existing team, or you can hire a complete crew built from the ground up - camera, sound, lighting, grip, hair and makeup, production support and more. We scale the team to exactly what the production needs." },
          { q: "How quickly can you assemble a film crew?", a: "For straightforward shoots we can often crew up within a day or two, sometimes faster when it's urgent. Larger or more technically demanding productions benefit from more lead time, but our network is deep enough that we rarely struggle to find the right people at short notice. Get in touch with your dates and we'll tell you what's achievable." },
          { q: "Is equipment included when I hire a crew?", a: "It can be. Many of our crew own and operate their own kit, and we can also source any additional equipment you need - cameras, lighting, grip and specialist gear - through our established relationships with UK rental houses. Just let us know whether you need crew only or crew plus equipment and we'll quote accordingly." },
          { q: "Are your crew insured and vetted?", a: "Yes. Every crew member we provide is experienced, professionally insured and personally vetted by us. We don't put anyone on a shoot we wouldn't trust on our own productions." },
        ] },
];

// ── Content types (11) ──

export const contentTypes: ServiceDetail[] = [
      { slug: "branded-content", href: "/services/branded-content", num: "01", title: "Branded Content", desc: "Stories that move people and build lasting connections with your brand.", img: "uploads/vlcsnap-2024-06-10-15h38m45s397-40806154.webp",
        lead: "The best branded content doesn't feel like an advert. It feels like something worth watching, and that's exactly the point.",
        body: [
          "Audiences are savvier than ever. They scroll past interruptions, skip pre-rolls and tune out anything that feels like it's selling to them. But give them something genuinely compelling, a story that entertains, moves or surprises them, and they'll watch every second and share it without being asked. That's the power of branded content done right.",
          "At Klaxon, we've been making branded content long enough to know what separates the films people remember from the ones they forget before they've finished watching. It comes down to one thing: putting the story first. Your brand's role is to enable the narrative, not dominate it. When that balance is right, the connection an audience makes with your brand is deeper and more lasting than any traditional advertising can achieve.",
          "We work with brands across a wide range of sectors to develop and produce content that is ambitious, authentic and built around a genuine creative idea. From the initial concept through to final delivery, we keep the focus on making something that your audience will actually want to engage with, because content they choose to watch will always outperform content they're forced to sit through.",
          "Branded content isn't a compromise between creativity and commercial objectives. In the right hands, it's where the two things become the same thing.",
        ],
        includes: ["Branded Content Production London", "Brand Film Production UK", "Content Marketing Video", "Automotive", "FMCG", "Financial Services", "Sport & Lifestyle", "Hospitality", "Technology", "Charity & Not-for-Profit"],
        faqs: [
          { q: "What makes branded content different from a traditional advertisement?", a: "Traditional advertising puts the brand message at the centre. Branded content puts the story at the centre, with the brand playing an enabling role rather than a dominant one. The goal is to create something an audience genuinely wants to watch, content they'd seek out even if there were no brand attached, because the depth of engagement that creates is far more valuable than the passive exposure of a traditional ad." },
          { q: "How do you measure the success of branded content?", a: "Success metrics vary depending on the objectives of the campaign. They might include views and completion rates, engagement (shares, comments, saves), brand sentiment shifts, direct traffic or conversion data. We work with clients at the outset to agree what success looks like and ensure the content is built to deliver against those specific measures." },
          { q: "Do you handle distribution as well as production?", a: "Production is our core focus, but we can point clients in the right direction when it comes to distribution and activation. We have a network of trusted partners we're happy to recommend for clients who need end-to-end support beyond the production itself" },
        ] },
      { slug: "corporate-video", href: "/services/corporate-video", num: "02", title: "Corporate Video", desc: "Professional, purposeful films that say as much about you as your message does.", img: "uploads/vlcsnap-2025-12-01-10h35m19s188-b999ec69.webp",
        lead: "Corporate video has a reputation problem. Too often it's stiff, forgettable and made to satisfy an internal brief rather than engage an actual human being. We do it differently.",
        body: [
          "The truth is, corporate video is one of the most powerful communication tools a business has, when it's made with genuine craft and a clear sense of purpose. Whether you're communicating a strategic vision to your workforce, onboarding new employees, explaining a complex proposition to potential clients or showcasing your culture to the talent market, the quality of the film you put out says as much about your organisation as the message it contains.",
          "At Klaxon, we bring the same creative rigour to corporate work as we do to any other production. That means taking the time to understand your organisation, your audience and what you actually need the film to do, before we touch a camera. A corporate video that looks great but doesn't land with its intended audience isn't a success. We keep that front of mind throughout.",
          "We work closely with internal stakeholders to make the production process as smooth as possible, and we know how to get the best out of people who aren't professional on-screen talent. Clear communication, careful direction and a relaxed environment on set make an enormous difference to the end result.",
          "The goal is simple: a film your organisation is proud of, that does exactly what it needs to do.",
        ],
        includes: ["Corporate Video Production London", "Internal Communications Video", "Corporate Film Production UK", "Leadership Messaging", "Culture & Recruitment Films", "Investor Relations", "Training & Onboarding"],
        faqs: [
          { q: "How much does corporate video production cost in London?", a: "Corporate video costs vary significantly depending on the complexity of the production, the number of shoot days, the locations involved and the level of post-production required. As a rough guide, a professionally produced corporate film typically starts from around £5,000 to £8,000 for a straightforward single-day shoot, rising to £20,000 to £50,000 or more for larger, more complex productions. We provide detailed, transparent quotes for every project." },
          { q: "How long does a corporate video take to produce?", a: "From initial briefing to final delivery, timelines vary depending on the complexity of the project (as always). A straightforward single-shoot corporate film will move faster than a multi-location production with several contributors. As a rough guide, four to eight weeks covers most projects comfortably, accounting for concept development, pre-production, filming and post-production. Fast turnaround timelines can be accommodated where necessary, though we'd always recommend building in sufficient time to do the project justice." },
          { q: "Can you work with non-professional on-screen talent such as employees, executives, spokespeople?", a: "Yes, and we're particularly good at it. Getting natural, confident performances from people who don't normally appear on camera is a real skill, and it's one we've developed over many years of corporate production. The right preparation and a relaxed environment on set make an enormous difference." },
          { q: "Do you produce corporate videos for international use?", a: "Yes. We regularly produce corporate content for organisations with international audiences, including versioning for different markets, multilingual subtitling, and delivery in formats suitable for global distribution." },
        ] },
      { slug: "b2b-video", href: "/services/b2b-video", num: "03", title: "B2B Video", desc: "Content that builds trust, opens doors and works hard at every stage of the funnel.", img: "uploads/vlcsnap-2022-07-13-14h33m09s835-a351d372.webp",
        lead: "B2B buying decisions are rarely made on impulse. They're made by people who need to trust you before they'll commit, and video is one of the most effective ways to build that trust.",
        body: [
          "The B2B landscape is crowded. Every competitor is making similar claims, targeting similar audiences and showing up in the same channels. In that environment, the businesses that cut through are the ones that communicate with clarity, credibility and a degree of personality that makes them feel like a genuinely attractive proposition to work with. Video does all of that better than any other medium.",
          "At Klaxon, we understand the specific demands of B2B content. The audiences are sophisticated, the sales cycles are long, and the stakes around getting the messaging right are high. We work closely with you to understand not just what you do, but why it matters to the people you're trying to reach, and then we build content that speaks to them directly, in language that resonates and visuals that reflect the quality of your offer.",
          "From prospect-facing explainer films and case study content to thought leadership pieces and event coverage, we create video that works hard at every stage of the funnel. Content that opens doors, builds confidence and gives your sales and marketing teams something they're genuinely proud to put in front of clients.",
          "Because in B2B, how you show up matters. Video is your chance to show up brilliantly.",
        ],
        includes: ["B2B Video Production London", "Explainer Video Production", "B2B Marketing Video", "Case Studies & Testimonials", "Thought Leadership", "Sales Enablement", "Event & Conference Coverage"],
        faqs: [
          { q: "What types of video work best at different stages of the B2B sales funnel?", a: "At the awareness stage, brand films and thought leadership content work well to establish credibility. At the consideration stage, explainer videos, product demos and case studies help prospects understand specifically what you offer. At the decision stage, testimonial and case study content that demonstrates proven results is particularly effective. We can help you map content to your specific funnel and prioritise where video will have the most impact." },
          { q: "How do we ensure the video lands with a sophisticated B2B audience?", a: "By starting with a clear, honest understanding of what that audience actually cares about - not what your internal stakeholders want to say, but what your prospects and clients need to hear. The best B2B video is built around genuine audience insight, not internal messaging priorities. That's a distinction we push hard on during briefing." },
          { q: "Can video help us with account-based marketing?", a: "Absolutely. Highly targeted, personalised video content is one of the most effective tools in an ABM programme. Whether it's bespoke films for specific target accounts or a suite of content tailored to particular sectors or buyer types, we can help you build a video strategy that supports your ABM objectives." },
        ] },
      { slug: "documentary", href: "/services/documentary", num: "04", title: "Documentary", desc: "Real stories, told with depth, craft and the space they deserve.", img: "uploads/vlcsnap-2022-08-11-14h35m07s966-b6cd9118.webp",
        lead: "Some stories are too rich, too complex and too important to be told in sixty seconds. Documentary is where you give them the space they deserve.",
        body: [
          "Documentary filmmaking is at the heart of what we do at Klaxon, and it's where we feel most at home. There's a particular kind of skill involved in finding the truth of a story, earning the trust of the people at the centre of it, and shaping the material into something that holds an audience from beginning to end. It's a discipline that rewards patience, curiosity and a genuine commitment to the craft.",
          "We work across a broad spectrum of documentary formats, from short-form brand documentaries that tell a compelling human story in five to ten minutes, to longer productions for broadcasters, institutions and independent commissioners. Whatever the length or the subject, our approach is the same: get close to the story, listen carefully, and let the material lead.",
          "That means taking the time to properly research and develop each project before filming begins, building the kind of relationships with contributors that allow real moments to surface on camera, and bringing the same rigour to the edit that we bring to everything else. A documentary lives or dies in the cutting room, and we know how to shape complex, layered material into something coherent, moving and impossible to look away from.",
          "If you have a story worth telling, we'd love to hear it.",
        ],
        includes: ["Documentary Video Production UK", "Brand Documentary London", "Short Film Production UK", "Observational Documentary", "Biographical Film", "Broadcast & Streaming", "Archival Documentary"],
        faqs: [
          { q: "How do you develop a documentary concept from an initial idea?", a: "We start with a period of research and development - exploring the story, identifying the key contributors, and establishing whether the material has the depth and access required to sustain a documentary. This development phase is essential and often shapes the final form of the film significantly. We work collaboratively with clients throughout and won't commit to a full production until we're confident the story is there." },
          { q: "How do you approach gaining access and building trust with contributors?", a: "Carefully and honestly. Contributors need to understand what they're agreeing to, how the material will be used, and that they can trust the people filming them. We take time to build those relationships before filming begins, and we maintain them throughout the process. The quality of what appears on screen is directly proportional to the quality of the trust we've established." },
          { q: "What's the typical length for a brand documentary?", a: "Brand documentaries typically run between five and fifteen minutes, though the right length is always determined by the story rather than a pre-set format. We'd rather make a tight, compelling eight-minute film than pad a story to twenty minutes for the sake of it. For broadcaster or streaming contexts, we'd work to whatever format specifications apply." },
        ] },
      { slug: "product", href: "/services/product", num: "05", title: "Product", desc: "Your product, looking extraordinary. Because in a crowded market, extraordinary sells.", img: "uploads/vlcsnap-2024-06-10-16h08m14s922-527136a3.webp",
        lead: "A great product video doesn't just show what something does. It makes people want to own it.",
        body: [
          "There's a deceptively fine line between a product film that converts and one that simply informs. The difference lies in how the product is presented, the way it's lit, the way it moves, the angles chosen to reveal its best qualities, and the narrative built around it that connects its features to the desires of the person watching. Get those things right and a product video becomes one of the hardest-working assets in your entire marketing toolkit.",
          "At Klaxon, we've shot products across a huge range of categories, from automotive and consumer electronics to food and drink, luxury goods and lifestyle brands. Each brings its own visual language, its own set of technical challenges, and its own audience expectations. We understand what great looks like across all of them, and we know how to get there.",
          "We work closely with your creative and marketing teams to ensure the film reflects your brand identity as precisely as it showcases the product itself. Because product content isn't just about the object in front of the lens, it's about the world your brand inhabits and the story it tells about the people who choose it.",
          "Whether it's a hero launch film, an e-commerce asset or a suite of social content, we make your product look extraordinary. Because in a crowded market, extraordinary is what sells.",
        ],
        includes: ["Product Video Production London", "Product Launch Video", "E-Commerce Video Production", "360 Degree & Detail Shots", "Lifestyle & In-Context Filming", "Social Cutdowns", "Product Film Production UK"],
        faqs: [
          { q: "Do you handle the styling and art direction for product shoots?", a: "Yes. For product shoots, art direction - the way products are styled, the surfaces and props used, the overall visual world of the shoot - is as important as the cinematography itself. We either handle this in-house or bring in specialist stylists depending on the nature of the product and the scale of the production." },
          { q: "Can you produce both hero films and cutdown social assets from the same shoot?", a: "Absolutely, and we'd always recommend planning for this from the outset. Capturing the additional material needed for social cutdowns while you already have everything set up is significantly more cost-effective than returning for a separate shoot. We factor this into the production plan from day one." },
          { q: "Do you have studio space for product filming?", a: "We work with a range of studio spaces in London and can recommend facilities suited to your specific product and production requirements. We'll advise on the best option based on the scale of your shoot and the visual style you're aiming for." },
        ] },
      { slug: "sport", href: "/services/sport", num: "06", title: "Sport", desc: "Fast, raw and emotionally charged. Content that captures what makes sport worth watching.", img: "uploads/vlcsnap-2024-06-11-15h53m44s510-b8acf4f5.webp",
        lead: "Sport is raw, unpredictable and emotionally charged. Capturing it properly demands filmmakers who can keep up, technically, creatively and physically.",
        body: [
          "There's a reason sport produces some of the most compelling content in the world. The drama is real, the emotions are genuine, and the moments are unrepeatable. But that same spontaneity makes it one of the most demanding environments to film in. The margins are tight, the action is fast, and you rarely get a second chance at the shot that defines the story. Experience matters enormously here.",
          "At Klaxon, we've worked with some of the biggest names in sport, from global governing bodies and elite clubs to individual athletes and grassroots organisations. We understand the rhythms of a sporting environment, we know how to work within the access and accreditation constraints that come with it, and we have the technical capability to capture the pace, the power and the emotion that makes sport worth watching.",
          "But great sports content is about more than the action. It's about the people, the dedication, the sacrifice, the personality that exists behind the performance. We're as comfortable building a long-form athlete documentary as we are shooting a high-octane brand campaign or delivering live event coverage for broadcast.",
          "Whatever the sport, whatever the format, we bring a genuine passion for what we're filming. And that shows in everything we make.",
        ],
        includes: ["Sports Video Production London", "Sports Content Agency UK", "Athlete Profile Video", "Brand & Sponsorship Content", "Event & Match Coverage", "Sports Broadcast Production", "Social & Campaign Content"],
        faqs: [
          { q: "Can you film at professional sporting events and venues?", a: "Yes. We're experienced in working with the access, accreditation and operational constraints that come with professional sporting environments. We know how to navigate the protocols involved and work effectively within them and we have established relationships with a number of governing bodies, clubs and event organisers." },
          { q: "Do you produce event coverage as well as pre-produced content?", a: "Yes. Alongside pre-produced athlete profiles, brand campaigns and documentary content, we cover live sporting events - capturing the action, the atmosphere and the moments that make great sports content. We're comfortable working in fast-paced event environments where you rarely get a second chance at the shot." },
          { q: "Can you work with amateur and grassroots sport as well as elite level?", a: "Absolutely. Some of the most compelling sports content we've produced has been at grassroots level, where the emotional stories are often more accessible and the production logistics more straightforward. The same standards of craft apply regardless of the level." },
        ] },
      { slug: "health-sector", href: "/services/health-sector", num: "07", title: "Health Sector", desc: "Sensitive, accurate and compelling content for complex healthcare communications.", img: "uploads/vlcsnap-2024-06-13-15h25m53s540-79506618.webp",
        lead: "Healthcare is one of the most important communication challenges there is. The stakes are real, the audiences are diverse, and the need to get the message right is absolute.",
        body: [
          "Video has transformed the way health organisations communicate, with patients, with professionals, with policymakers and with the public. Done well, it simplifies complex information, builds trust in sensitive situations, and reaches people in ways that written content simply cannot. Done poorly, it risks undermining the very credibility it was meant to establish. At Klaxon, we understand the particular responsibilities that come with working in the health sector. We're experienced in navigating the compliance considerations, the ethical sensitivities and the approval processes that are part and parcel of producing content in this space. We work collaboratively with clinical, marketing and communications teams to ensure that every film is not only compelling to watch but accurate, appropriate and fully signed off.",
          "We bring the same creative ambition to health sector work as we do to any other production, because patients and professionals deserve content that respects their intelligence and holds their attention. Whether we're producing patient education films, internal training content, corporate communications for a pharmaceutical brand or public health campaigns, we approach each project with the care and rigour the subject matter demands.",
          "Healthcare audiences are not a captive market. They have to choose to engage. We make content worth choosing.",
        ],
        includes: ["Healthcare Video Production UK", "Patient Education Video", "Medical Video Production London", "Training & CPD", "Pharmaceutical Video Production", "Public Health Campaigns", "Corporate & Investor Relations"],
        faqs: [
          { q: "How do you handle compliance and approval requirements in healthcare video production?", a: "We build compliance into the production process from the very beginning, not as an afterthought. That means working with your regulatory and medical affairs teams during scripting and concept development, building sufficient review time into the production schedule, and ensuring all claims and references are properly evidenced and signed off by your compliance team before filming begins. We're experienced in the approval processes common to pharmaceutical, medical device and NHS organisations." },
          { q: "Can you produce patient-facing content in multiple languages?", a: "Yes. We regularly produce multilingual versioning, including on-screen translation, subtitling and voiceover in multiple languages, for organisations serving diverse patient populations." },
          { q: "Do you work with NHS organisations as well as private healthcare and pharmaceutical companies?", a: "Yes. We work across the full spectrum of the health sector, from NHS trusts and public health bodies through to pharmaceutical companies, medical device manufacturers and private healthcare providers." },
        ] },
      { slug: "podcast", href: "/services/podcast", num: "08", title: "Podcast", desc: "Strategy, production and delivery for shows built to find and keep an audience.", img: "uploads/pexels-abdellahbnz-33923596.webp",
        lead: "Podcast has become one of the most powerful content formats of our time. The question isn't whether your brand should have one, it's whether yours is good enough to deserve an audience.",
        body: [
          "The podcast landscape is vast and it's competitive. Millions of shows are vying for the same ears, and listeners have neither the time nor the patience for content that doesn't immediately earn their attention. The brands and organisations that are winning in this space aren't just publishing episodes, they're creating genuinely compelling audio experiences that people actively seek out and recommend to others.",
          "At Klaxon, we help brands develop and produce podcasts that are built to perform. That starts long before a microphone is switched on, with a clear editorial strategy, a format that suits both the subject matter and the audience, and a strong enough creative concept to sustain a series rather than just a one-off. Good intentions and interesting topics aren't enough. The craft has to be there too.",
          "We work with brands, institutions and broadcasters across a range of podcast formats, from interview-led series and panel discussions to narrative productions and documentary podcasts.",
          "We handle everything from concept development and guest research through to recording, editing, sound design and distribution-ready delivery.",
          "Because a podcast that finds its audience is one of the most cost-effective, high-impact content investments a brand can make. We help you make one worth finding.",
        ],
        includes: ["Podcast Production Company London", "Brand Podcast Production UK", "Interview Series", "Panel & Discussion Formats", "Narrative & Documentary Podcasts", "Internal Podcasts", "Podcast Series Production"],
        faqs: [
          { q: "How many episodes do we need to commit to before launching a podcast?", a: "We'd typically recommend launching with a minimum of three to five episodes already produced - giving new listeners enough content to get a genuine sense of the show before you've committed to an ongoing schedule. For series-based formats, we'd plan a full series of six to ten episodes at the outset, which also gives you the best chance of being featured or promoted by podcast platforms." },
          { q: "How do we grow a podcast audience?", a: "Distribution and promotion are as important as the content itself. That means getting your show onto all major platforms (Spotify, Apple Podcasts, Amazon Music), optimising your show notes and episode titles for search, repurposing audio content into social clips, and integrating the podcast into your wider content and marketing strategy. We advise on all of this as part of the production process." },
          { q: "What makes a branded podcast different from a marketing podcast?", a: "A branded podcast puts audience value first - it's content people choose to listen to because it's genuinely useful, entertaining or illuminating, not because it's selling something. A marketing podcast, in the pejorative sense, is essentially an extended advertisement. The former builds lasting audience relationships; the latter rarely survives beyond a few episodes. We only make the former." },
        ] },
      { slug: "social-content", href: "/services/social-content", num: "09", title: "Social Content", desc: "Platform-native video built to stop the scroll and keep your brand in the conversation.", img: "uploads/Channel 4 x Boots Great British Summer crop.webp",
        lead: "Social media has raised the bar for video content in ways that even broadcast television hasn't. Three seconds to grab attention. No second chances.",
        body: [
          "The social landscape is unforgiving. Audiences are scrolling fast, algorithms are ruthless and the competition for attention has never been more intense. In that environment, content that is merely competent gets ignored. Content that is genuinely arresting, surprising or emotionally immediate gets watched, shared and remembered. The gap between the two isn't luck, it's craft.",
          "At Klaxon, we create social video content that is built for the platform it lives on from the very first frame. That means understanding the specific demands of each channel, the formats, the behaviours, the culture, and developing content that feels native rather than repurposed. A brand film cut down to sixty seconds for Instagram is not a social strategy. Original content conceived for social from the ground up is.",
          "We work with brands to develop social content that is creatively ambitious without losing sight of the commercial objectives behind it. Whether that's a series of short-form films, a campaign launch, reactive content that taps into cultural moments, or an always-on content programme that keeps your brand present and relevant, we bring the same production values and creative thinking to social as we do to any other format.",
          "Because your audience doesn't lower their standards just because they're on their phone. Neither do we.",
        ],
        includes: ["Social Media Video Production London", "Short-Form Video Production", "Reels & TikTok Content", "Campaign Content", "Always-On Programming", "Paid Social Assets", "Instagram Video Production", "Social Video Content Agency UK"],
        faqs: [
          { q: "Should we be producing different content for each social platform?", a: "Ideally, yes, and the difference goes beyond just changing the aspect ratio. Each platform has its own content culture, audience behaviour and algorithm logic. Content that feels native on TikTok will feel out of place on LinkedIn. We help brands understand the specific demands of each platform and develop content strategies that are genuinely tailored rather than just reformatted." },
          { q: "How do we balance quality with the volume of content social media demands?", a: "This is one of the central challenges of social content strategy. The answer usually involves a tiered approach - investing in a smaller number of high-production hero pieces alongside a higher volume of lighter, more reactive content that can be produced more efficiently. We help brands find the right balance for their specific objectives and resources." },
          { q: "How quickly can you turn around social content?", a: "For reactive or time-sensitive content, we can turn around simple social cuts very quickly, sometimes within 24 to 48 hours of a shoot. For planned campaign content, we'd build a production and delivery schedule that fits your publishing calendar. We're experienced at working to tight social deadlines without compromising on quality." },
        ] },
      { slug: "explainer-video", href: "/services/explainer-video", num: "10", title: "Explainer Video", desc: "Complex ideas, made simple. Clear communication is a competitive advantage.", img: "uploads/A5E57E6A-967C-479D-8994-F7C78C351630-2-93ad9c3b.webp",
        lead: "Complex ideas, simply told. That's the art of a great explainer video - and it's harder than it looks.",
        body: [
          "Explainer videos have become one of the most widely used formats in marketing and communications. The reason is simple: nothing cuts through complexity faster than a well-crafted film that takes a difficult concept and makes it immediately clear. Whether you're explaining a product, a service, a process or a proposition, the right explainer video can do in sixty seconds what a brochure, a webpage or a sales presentation can't do in ten minutes.",
          "At Klaxon Studio, we produce explainer videos for brands, technology companies, financial services organisations, healthcare businesses and anyone else whose offer needs a little unpacking. We start with the same question on every project: what's the single most important thing the audience needs to understand? Everything else follows from there.",
          "That discipline, the ability to distil, simplify and communicate with clarity, is what separates explainer videos that actually work from the ones that add more confusion than they remove. It requires strong scriptwriting, clean visual thinking and the creative confidence to leave things out.",
          "We produce explainer videos across a range of formats; live action, animation, motion graphics, or hybrid approaches that combine elements of all three. We'll recommend the format that best serves the content and the audience, not the one that happens to be easiest to produce.",
          "Clear communication is a competitive advantage. A great explainer video is one of the most cost-effective ways to achieve it.",
        ],
        includes: ["Explainer Video Production London", "Animated Explainer Videos", "Motion Graphics", "Live Action Explainer Videos", "Product Explainer Videos", "SaaS & Technology Explainer Videos", "Financial Services Video"],
        faqs: [
          { q: "How long should an explainer video be?", a: "The honest answer is: as long as it needs to be, and no longer. Most explainer videos perform best between sixty seconds and two minutes. Beyond two minutes, drop-off rates increase significantly unless the content is exceptionally compelling. We always challenge clients to be ruthless about what stays in - if it doesn't serve the core message, it shouldn't be there." },
          { q: "Which works better, animation or live action?", a: "It depends entirely on what you're trying to explain and who you're explaining it to. Animation is excellent for abstract concepts, processes and products that don't physically exist or can't easily be filmed. Live action is often stronger for building trust and human connection, particularly in B2B or professional services contexts. A hybrid approach, combining live action with animated elements, often gives you the best of both. We'll recommend the right approach for your brief." },
          { q: "Can you help with the script as well as the production?", a: "Yes, in fact, the script is where we'd always start. A great explainer video is built on a great script. We work with you to develop messaging that is clear, accurate and engaging before we touch any visual elements. Getting the words right first makes everything that follows significantly more straightforward." },
          { q: "How much does an explainer video cost?", a: "Costs vary depending on the format, length and complexity. A straightforward animated explainer typically starts from around £3,000 to £5,000. A fully produced live action explainer with multiple locations and on-screen talent would be more. We provide detailed quotes for every project and will always recommend the most cost-effective approach to achieve your objectives." },
        ] },
      { slug: "automotive", href: "/services/automotive", num: "11", title: "Automotive", desc: "Car reviews, launch films and manufacturer content built by people who know cars.", img: "uploads/vlcsnap-2022-07-09-13h14m40s020-ff1d4201.webp",
        lead: "Automotive content lives or dies on craft. Get the camera work, the locations and the pace right, and a car review or launch film becomes something people genuinely want to watch.",
        body: [
          "Cars are one of the most demanding things to film well. The angles that make a vehicle look fast standing still, the choreography of a car-to-car shoot at speed, the light that makes paintwork sing, none of it happens by accident. It takes riggers who know how to mount a camera safely at 70mph, drivers who can hold a precise line for take after take, and an edit that understands rhythm as much as it understands horsepower.",
          "At Klaxon, automotive is where a lot of our team cut their teeth, and it shows. We've shot everything from official manufacturer launch films and multi-day international press drives to fast-turnaround car reviews and social-first content for dealerships and aftermarket brands. We know the specific demands of automotive production: closed-road logistics, tracking vehicles, low-loaders, drone-to-ground handoffs, and the insurance and safety planning that has to sit behind all of it.",
          "We work with manufacturers, dealership groups, motoring publications and automotive brands to produce content that respects what makes a car genuinely interesting, not just a spec sheet read aloud over b-roll. Whether that's a car-to-car chase sequence, a static studio reveal, or a presenter-led review shot on location, we bring the same technical rigour and the same eye for what makes a vehicle worth watching.",
          "If it has an engine, a badge and a story worth telling, we want to film it.",
        ],
        includes: ["Automotive Video Production London", "Car Review Production UK", "Car-to-Car Filming", "Vehicle Launch Films", "Manufacturer & Press Drive Content", "Dealership & Aftermarket Video", "Closed-Road & Track Filming"],
        faqs: [
          { q: "Do you have experience with car-to-car filming and closed-road shoots?", a: "Yes, extensively. Car-to-car filming requires specialist rigging, experienced precision drivers and careful safety planning, and we've built up real expertise in this over many productions. We handle the logistics of closed-road access, tracking vehicles and camera cars, and we work with accredited rigging and safety teams throughout." },
          { q: "Can you produce content for an official manufacturer launch?", a: "Yes. We've worked on official launch films and press drive content for major manufacturers, which comes with its own set of demands, brand guidelines, embargo dates, technical accuracy on specifications, and a level of visual polish that has to match the manufacturer's own marketing. We're comfortable operating within those constraints." },
          { q: "What's the difference between a car review and a launch film?", a: "A car review is typically presenter-led and editorial in tone, walking an audience through the driving experience, the design and the specification, often for a publication or platform's own channel. A launch film is a more controlled, brand-owned piece introducing a new model, usually with tighter creative direction from the manufacturer. We produce both, and the approach to camera work, pacing and tone differs accordingly." },
          { q: "Do you film at race circuits and motorsport events?", a: "Yes. We've filmed at circuits including Goodwood and other motorsport venues, covering everything from track day content to event coverage. We understand circuit access requirements, marshalling and the safety protocols that come with filming live motorsport." },
        ] },
];

// ── Founders ──

export const founders: Founder[] = [
      { id: "kx-f-charlie", name: "Charlie", role: "Co-Founder · Producer / Director", img: "uploads/founder_charlie.webp", bio: [
        "Charlie has been behind the camera since 2009. In that time he's shot TV commercials, cinematic sport, and pretty much everything in between. He's filmed in 23 countries in a single year, survived 48°C desert heat with no water on the border of Saudi Arabia, nearly stepped on a landmine in Croatia, and somehow still considers a highlight to be shooting at an industrial estate in Slough.",
        "These days Charlie is a filmmaker in the truest sense of the word. He takes the brief, shapes the creative and plans all things pre-production before moving onto the shoot as a DP and makes sure the finished film does exactly what it's supposed to. Start to finish, the whole thing.",
        "Outside of work he's a devoted Arsenal fan who plays football three days a week. It's unclear whether this is a passion or a coping mechanism. He owes his entire career to a teacher at school who pointed him towards the media industry. Mr Hawxwell has a lot to answer for.",
      ] },
      { id: "kx-f-jake", name: "Jake", role: "Co-Founder · Director of Photography", img: "uploads/founder_jake.webp", bio: [
        "Jake has been professionally pointing cameras at things since 2009. Originally from Dirranbandi, a town of 400 people in the middle of the Australian bush, he moved to London for two years about ten years ago. He's still here.",
        "Before co-founding Klaxon, Jake spent over a decade as a freelance DP, getting paid to carry expensive cameras to places most people only see on TV. National Geographic, Discovery, ITV, Food Network. Chopper rides through the New Zealand wilderness, dog sledding in Iceland, street food markets in Bangkok.",
        "At Klaxon, Jake is the workhorse. He takes the long shoots, the far-flung locations, and somehow keeps every piece of kit in perfect working order when he gets back. That's a lot of air miles and a lot of questionable hotels.",
        "Outside of work you'll find him sipping a flat white in Victoria Park or cycling the canals with Pops, the world's most well-travelled studio dog.",
      ] },
      { id: "kx-f-matt", name: "Matt", role: "Co-Founder · Director", img: "uploads/founder_matt.webp", bio: [
        "Matt has been shooting and directing across the world for over a decade. He's filmed in food markets in Hanoi, the restricted nuclear zone in Fukushima, and convinced celebrities to play tennis at the Royal Albert Hall. Starting out as a Camera Operator, he made the natural move into directing, producing and creative development, giving him an overview of the entire production process that very few people in the industry can match.",
        "At Klaxon, Matt works alongside Charlie on pitches and creative strategy. He has an exceptional ability to cut through the waffle, get straight to the point, and make sure every project delivers what the client actually needs. On shoots, Matt puts the creative to good use and directs crew, talent and clients(!) to ensure the final rushes meet the idea.",
        "Outside of work Matt is a devoted Arsenal fan, an F1 obsessive, a BigJet TV evangelist (yes it is cool, apparently), and a man who describes himself as a runner despite all available evidence suggesting otherwise. He also holds extremely strong opinions on the correct way to make a cup of tea. Non-negotiable. The rest of the office is always wrong and he will not be taking questions.",
      ] },
      { id: "kx-f-james", name: "James", role: "Co-Founder · Post-Production Lead", img: "uploads/founder_james.webp", bio: [
        "James is the man in the dark room. Originally from a post-production background, he has worked across TV, online campaigns, branded content and commercials and has spent the best part of his career making other people's footage look considerably better than it has any right to.",
        "At Klaxon, James is the backbone of every project. Post-production, workflow, tech, podcast production. If it happens after the shoot, it goes through James. The others would be completely lost without him, though you'll rarely hear them admit it.",
        "Outside of work James can be found sipping a cold pint in a beer garden, cooking ambitious dishes at home, or going for a hike to justify the previous two. He is also a Chelsea fan, which means he endures a level of daily mockery from Charlie and Matt that would break a lesser man. He takes it with dignity. His revenge is coming. Someday.",
      ] },
];

// ── Sectors ──

export const sectors: string[] = ["Finance", "Automotive", "Broadcast", "Heritage", "Food & Drink", "Sport", "Health", "Charity", "Consumer", "B2B"];

// ── Clients (logo strip) ──

export const clients: Client[] = [
      { name: "BBC", logo: "/uploads/logos/BBC.png", scale: 1 },
      { name: "Dove", logo: "/uploads/logos/Dove.png", scale: 1.9 },
      { name: "Rolex", logo: "/uploads/logos/Rolex.png", scale: 2.4 },
      { name: "BOSS", logo: "/uploads/logos/BOSS_LOGO_black_RGB-61af708c79410.png", scale: 1 },
      { name: "Warner Bros", logo: "/uploads/logos/1965px-Warner_Bros_logo.png", scale: 1.6 },
      { name: "Aston Martin", logo: "/uploads/logos/Aston_Martin-logo-E850023998-seeklogo.png", scale: 1 },
      { name: "McLaren", logo: "/uploads/logos/McLaren-Logo.png", scale: 1.5 },
      { name: "Jamie Oliver", logo: "/uploads/logos/Jamie-Oliver.png", scale: 1.8 },
      { name: "National Theatre", logo: "/uploads/logos/national-theatre-logo-sfw-2160x2160_0.png", scale: 2.3 },
      { name: "Heinz", logo: "/uploads/logos/Heinz.png", scale: 1.5 },
      { name: "Boots", logo: "/uploads/logos/Boots-logo-1.png", scale: 1.5 },
      { name: "Adobe", logo: "/uploads/logos/Adobe-logo2.png", scale: 2.1 },
      { name: "Shell", logo: "/uploads/logos/Shell.png", scale: 1.6 },
      { name: "Channel 4", logo: "/uploads/logos/channel-4-logo-for-stage-entertainment2.png", scale: 1.7 },
      { name: "ITV", logo: "/uploads/logos/ITV-Emblem2.png", scale: 1.3 },
      { name: "Wimbledon", logo: "/uploads/logos/941-9413086_wimbledon-logo-3-wimbledon-logo-3-harrison-county2.png", scale: 1.7 },
      { name: "Cunard", logo: "/uploads/logos/Cunard.png", scale: 1.3 },
      { name: "CNN", logo: "/uploads/logos/CNN-logo3.png", scale: 1.3 },
      { name: "Boeing", logo: "/uploads/logos/Boeing.png", scale: 1 },
      { name: "Good Food", logo: "/uploads/logos/1200px-Good_Food2.png", scale: 1.8 },
      { name: "3M", logo: "/uploads/logos/3m-logo-png-transparent.png", scale: 1.3 },
      { name: "England Rugby", logo: "/uploads/logos/England_Rugby.png", scale: 1 },
      { name: "GSK", logo: "/uploads/logos/GSK.png", scale: 1.5 },
      { name: "IBM", logo: "/uploads/logos/IBM.png", scale: 1 },
      { name: "RAPP", logo: "/uploads/logos/RAPP_Logo.png", scale: 1 },
      { name: "Publicis Media", logo: "/uploads/logos/Publicis-Media.png", scale: 1.3 },
      { name: "The Guardian", logo: "/uploads/logos/The_Guardian.png", scale: 1 },
      { name: "The Telegraph", logo: "/uploads/logos/The_Telegraph.png", scale: 1.5 },
      { name: "Amnesty International", logo: "/uploads/logos/Amnesty_logo.png", scale: 1.5 },
      { name: "Twitter", logo: "/uploads/logos/Twitter.png", scale: 1.9 },
      { name: "Vodafone", logo: "/uploads/logos/Vodafone.png", scale: 1.3 },
      { name: "P&O Cruises", logo: "/uploads/logos/PO-Cruises.png", scale: 1 },
      { name: "National Geographic", logo: "/uploads/logos/National-Geographic-logo2.png", scale: 2.1 },
];

// ── Testimonials ──

export const testimonials: Testimonial[] = [
      { quote: "Worked with Jake, Charlie and team on a couple of shoots - both creative and talking heads. Seriously dedicated and enterprising guys, who dovetailed perfectly with our creative team.", name: "Benedict Buckland", role: "CEO, Alan Agency", source: "Google review" },
      { quote: "I have worked and employed Klaxon on a number of occasions for various shoots and edits, I cannot fault the team.", name: "Ryan Gudge", role: "Producer, The Telegraph", source: "Google review" },
      { quote: "I've worked with Charlie, Jake and the team at Klaxon Studio for a number of years. A truly fantastic team who we love to collaborate with. They're attentive, creative and a true joy to work with.", name: "Charlotte Birch", role: "Senior Production Manager, Sunset + Vine", source: "Google review" },
      { quote: "We've worked with Klaxon for a number of years as our trusted video production outfit. Charlie and his incredibly professional team consistently provide an output of work at the highest quality.", name: "Ben Wackett", role: "Head of Marketing, Enso Sports Club", source: "Google review" },
      { quote: "Working with Klaxon could not have been a more seamless process. They delivered an intuitive and creative pitch, and produced exactly what was needed. I'd happily recommend them if you need a slick and friendly studio to handle everything from start to finish!", name: "Cherie Bridges", role: "Senior Producer, Historic England", source: "Google review" },
      { quote: "I've worked with Klaxon over the years and all of the team. They have been involved in many projects either running them for me or alongside as an integrated production. These are my go to London Based Video Production Company as they actually care about what they produce and have the passion which shows in their content.", name: "Andy Mackenzie", role: "Head of Digital Video, The Telegraph", source: "Google review" },
];

// ── Contact ──

export const contactRows: ContactRow[] = [
      { label: "Email", value: "hello@klaxon.studio", href: "mailto:hello@klaxon.studio", target: "_self" },
      { label: "Phone", value: "+44 (0) 208 0580 669", href: "tel:+442080580669", target: "_self" },
      { label: "Studio", value: "Unit 408, Cocoa Studio, 100 Drummond Road, London SE16 4FA", href: "https://maps.google.com/?q=Cocoa+Studio,+100+Drummond+Road,+London+SE16+4FA", target: "_blank" },
      { label: "Social", value: "@klaxonstudiouk", href: "https://instagram.com/klaxonstudiouk", target: "_blank" },
];

// ── Footer ──

export const footerCols: FooterCol[] = [
  { title: "Studio", links: [
    { label: "Work", href: "/work" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
    { label: "T&C's", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  ] },
  { title: "Services", links: [
    { label: "Ideation & Creative", href: "/services/ideation" },
    { label: "Filming", href: "/services/filming" },
    { label: "Editing", href: "/services/editing" },
    { label: "Podcast Recording", href: "/services/podcast-recording" },
    { label: "Production Management", href: "/services/production-management" },
    { label: "UK Production Services", href: "/services/uk-production-services" },
  ] },
  { title: "Connect", links: [
    { label: "Email", href: "mailto:hello@klaxon.studio" },
    { label: "Instagram", href: "https://instagram.com/klaxonstudiouk", target: "_blank" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/klaxon-studio", target: "_blank" },
  ] },
];

// ── London page ──

export const londonData: LondonData = {
  "lead": "London's a competitive market. We know, because we've been making videos here for years.",
  "body": [
    "As a video production company based in London, Klaxon Studio works with brands, agencies and organisations across the City - from established names in the city centre, through to ambitious companies in east London's creative corridor and beyond.",
    "We know the locations, we know the logistics, and we know what it takes to produce exceptional content in one of the world's most demanding production environments. London presents both enormous opportunity and genuine complexity for video production.",
    "The access requirements, location permits, traffic logistics and sheer density of the city mean that productions here require a level of local knowledge and operational precision that you can only develop through experience. We've spent years building that experience - and the network of trusted London-based crew, suppliers and location contacts that comes with it.",
    "We produce the full range of video content for London clients, from brand films, corporate videos and social content through to documentaries, product films and broadcast productions.",
    "London also means access to an extraordinary range of filming locations such as iconic architecture, world-class studios, diverse neighbourhoods and some of the most visually distinctive urban environments on the planet. We know how to make the city work for your production, not against it.",
    "If you're looking for a video production company in London that combines genuine creative quality with the operational expertise to deliver the city, we should talk."
  ],
  "includes": [
    "Video Production Company London",
    "Brand Film Production London",
    "Corporate Video Production London",
    "Branded Content Agency London",
    "Social Media Video Production London",
    "Documentary Filmmakers London",
    "Film Crew London",
    "Post Production London"
  ],
  "faqs": [
    {
      "q": "Where in London are you based?",
      "a": "We're based in Bermondsey, South London and work across the whole city and the wider South East. We're equally comfortable filming in the City, the West End, east London, south London and anywhere else a project takes us. For productions outside London, we have crew and contacts across the UK."
    },
    {
      "q": "Do you work with London-based businesses exclusively?",
      "a": "Not at all. While a significant part of our work is with London clients, we produce content for organisations across the UK and internationally. London is our home base, but our work takes us well beyond it on a regular basis."
    },
    {
      "q": "What types of London businesses do you typically work with?",
      "a": "We work across a very wide range of sectors including financial and professional services, technology, consumer brands, hospitality, sport, healthcare, charity and more. What our clients have in common isn't sector but ambition - they want to make video content that is genuinely good, not just adequate. That's who we're built for."
    },
    {
      "q": "Can you help with filming permits for London locations?",
      "a": "Yes. London has specific permitting requirements - the Royal Parks, TfL-managed locations, the City of London and many private locations all have their own processes. Navigating these efficiently is something we do regularly and are well practised at. We handle the permit process as part of our production management service."
    }
  ]
};

// ── FAQs page ──

export const faqsData: FaqsData = {
  "lead": "Got a question? We've probably been asked it before!",
  "intro": "Video production can feel like unfamiliar territory if you haven't commissioned it before and even experienced clients sometimes want a straight answer to a straightforward question. Here are the ones we get asked most often.",
  "sections": [
    {
      "heading": "Getting started",
      "qas": [
        {
          "q": "How do I commission a video with Klaxon Studio?",
          "a": "The simplest starting point is a conversation. Get in touch with a rough outline of what you're looking for, even if it's just a problem that needs solving rather than a fully formed brief, and we'll set up a call to talk it through. From there we'll develop a proposal covering creative approach, production plan and budget. We don't need everything figured out upfront; some of our best projects have started with very little more than an idea."
        },
        {
          "q": "What information do I need to get a quote?",
          "a": "The more context you can give us the better, but you don't need to have everything worked out. Helpful things to know upfront include: what the video is for, who the audience is, where it will be used, any sense of budget, and when you need it delivered. If you're not sure about some of those things yet, that's fine, we can help you work through them as part of the briefing process."
        },
        {
          "q": "How do we know if video is the right solution for what we're trying to achieve?",
          "a": "It usually is, but the format, length and approach matter enormously. A well-made sixty-second film and a poorly conceived ten-minute production can have completely opposite effects on an audience. That's why we always start with the objective rather than the output. If video is the right tool for what you're trying to achieve, we'll tell you. If a different approach would serve you better, we'll tell you that too."
        },
        {
          "q": "Do you work with clients who have never commissioned video before?",
          "a": "Yes, and we enjoy it. First-time commissioners often bring a freshness to the briefing process that's genuinely valuable; they ask the questions that more experienced clients sometimes stop asking. We take the time to explain each stage of the process clearly and make sure you always know what's happening and why."
        }
      ]
    },
    {
      "heading": "Working with us",
      "qas": [
        {
          "q": "What size of businesses do you work with?",
          "a": "We work with organisations of all sizes, from ambitious startups and growing SMEs through to global corporates, broadcasters and household name brands. The common thread isn't size but ambition: our clients want to make video content that is genuinely good, and they understand the value of investing in getting it right."
        },
        {
          "q": "How involved do we need to be in the production process?",
          "a": "As involved as you want to be. Some clients prefer to hand over a brief and trust us to run with it, checking in at key approval stages. Others want to be closely involved throughout. We're comfortable working either way. We'll agree a communication and approval process at the start of the project that works for your team."
        },
        {
          "q": "Do you sign NDAs?",
          "a": "Yes. We're happy to sign non-disclosure agreements before discussions begin if you're sharing commercially sensitive information as part of the briefing process. Just let us know and we'll sort it before the first call."
        },
        {
          "q": "Can we see examples of your previous work before we commit?",
          "a": "Yes, our showreel and case studies are on the website, and we're happy to share more specific examples relevant to your sector or project type on request. If you'd like to see work we've produced for clients in a similar space to yours, just ask."
        }
      ]
    },
    {
      "heading": "Production",
      "qas": [
        {
          "q": "How long does it take to make a video?",
          "a": "It depends on the complexity of the project. A straightforward single-shoot film can move from brief to delivery in two to three weeks. A more complex production involving multiple locations, contributors or a significant post-production workload would typically take six to ten weeks. We'll always give you a realistic timeline upfront and flag early if anything looks like it might affect delivery."
        },
        {
          "q": "Do you handle everything in-house or do you use freelancers?",
          "a": "Both. We have a core in-house team that leads and oversees every project, supplemented by a trusted network of experienced freelance crew and specialists where the project demands it. Every person we bring onto a production, whether staff or freelance, is someone we know, have worked with before, and trust to deliver to our standards."
        },
        {
          "q": "Can you film anywhere in the UK?",
          "a": "Yes. We're based in London but regularly travel across the UK. We have crew contacts in most major cities and are comfortable coordinating productions anywhere in the country and internationally when required."
        },
        {
          "q": "Do you travel outside the UK?",
          "a": "Yes. While the majority of our work is UK-based, we have extensive experience filming internationally and are completely comfortable taking productions abroad. We've worked across a wide range of international locations and understand the requirements to coordinate a production outside of the UK - the logistics, the local considerations, and the planning required to make it run smoothly. If your project takes us overseas, we're ready for it."
        },
        {
          "q": "What happens if something goes wrong on a shoot day?",
          "a": "We plan thoroughly precisely so that the chances of something going wrong are minimised. But productions are unpredictable, and when things shift (and they sometimes do) our job is to solve the problem quickly and quietly without it becoming your problem. We'll always keep you informed and, where necessary, agree on the best way forward together."
        }
      ]
    },
    {
      "heading": "Budget and pricing",
      "qas": [
        {
          "q": "How much does a video cost?",
          "a": "The honest answer is that it varies enormously depending on what you're making. A simple interview-based film shot in a single location is a very different proposition to a multi-day commercial production with locations, talent and extensive post-production. As a rough guide, professionally produced video content from Klaxon typically starts from around £3,000 to £5,000 for straightforward projects, rising significantly for more complex productions. We provide detailed, transparent quotes for every project - get in touch and we'll give you an honest picture of what your project is likely to cost."
        },
        {
          "q": "Do you work with fixed budgets?",
          "a": "Yes. If you have a fixed budget, tell us what it is and we'll tell you honestly what we can deliver within it. We'd always rather have that conversation upfront than propose something that doesn't fit and waste everyone's time. Working to a defined budget often produces more creative solutions anyway."
        },
        {
          "q": "Do you require a deposit?",
          "a": "Yes. We typically require a deposit at the point of project confirmation, with the balance due on delivery. Full payment terms are set out in our Terms of Engagement, which we'll share as part of the project agreement."
        }
      ]
    },
    {
      "heading": "After delivery",
      "qas": [
        {
          "q": "What format will we receive the finished video in?",
          "a": "We deliver in whatever format or formats your project requires - broadcast masters, digital files, social-optimised versions and everything in between. We'll agree delivery specifications at the start of the project so there are no surprises at the end."
        },
        {
          "q": "Do you retain the project files after delivery?",
          "a": "We retain project files and master assets for an agreed period following delivery. If you think you might need to make changes or create additional versions in the future, it's worth discussing archiving arrangements at the outset. We'd always recommend clients keep their own copies of all final deliverables."
        },
        {
          "q": "Can we come back to you for additional versions or edits after the project is closed?",
          "a": "Yes. We're happy to produce additional versions, cutdowns or edits from existing projects. Depending on how much time has passed and what's required, we'd agree a cost for any additional work before proceeding."
        }
      ]
    }
  ]
};

// ── Sustainability page ──

export const susData: SustainabilityData = {
  "lead": "We make great content. We try not to cost the earth doing it.",
  "body": [
    "Klaxon Studio recognises its responsibility to protect the environment, and we aim to go beyond the minimum legal requirements across the UK. That means embedding sustainable practice into our business strategy and our day-to-day operations, including every aspect of our filming and production work, not treating it as a box to tick.",
    "Environmental awareness is the shared responsibility of every employee, freelancer and contractor we work with. Everyone on a Klaxon shoot is expected to consider the impact of their actions and contribute to the aims below."
  ],
  "aims": [
    "Complying with all applicable environmental laws, regulations and industry best practice.",
    "Continuously monitoring and improving our environmental performance.",
    "Reducing our environmental impact across the business, with particular attention to production activities.",
    "Encouraging and supporting our staff in adopting more sustainable working habits."
  ],
  "pillars": [
    {
      "num": "01",
      "title": "Paper use",
      "points": [
        "Minimise paper use across all operations and on set.",
        "Use recycled and recyclable paper wherever possible.",
        "Promote digital call sheets, scripts and production notes over printed ones.",
        "Reuse and recycle any paper we do use."
      ]
    },
    {
      "num": "02",
      "title": "Energy & water",
      "points": [
        "Reduce energy and water consumption in the office and on location.",
        "Use energy-efficient lighting, including LED, and avoid unnecessary generator use.",
        "Turn off lights, kit and electrical equipment when not in use.",
        "Source renewable energy where it's available."
      ]
    },
    {
      "num": "03",
      "title": "Office & set supplies",
      "points": [
        "Hire, borrow or repurpose equipment and materials before buying new.",
        "Prioritise low-impact, recyclable supplies.",
        "Avoid single-use plastics on set, including catering and water bottles.",
        "Reuse set dressing, props and costumes when possible."
      ]
    },
    {
      "num": "04",
      "title": "Filming & production",
      "points": [
        "Plan shoots with environmental impact in mind, limiting unnecessary travel, kit or location use.",
        "Use local crew, suppliers and locations wherever possible.",
        "Provide digital call sheets and production documents.",
        "Partner with vendors and venues that demonstrate sustainable practice."
      ]
    },
    {
      "num": "05",
      "title": "Transportation",
      "points": [
        "Encourage public transport, cycling or walking where practical.",
        "Promote remote collaboration tools to reduce unnecessary travel.",
        "Encourage car-sharing and low-emission vehicles for cast and crew.",
        "Offset carbon emissions where significant travel is unavoidable."
      ]
    },
    {
      "num": "06",
      "title": "Monitoring & improvement",
      "points": [
        "Regularly review and update our environmental practices and targets.",
        "Keep full compliance with all applicable regulations.",
        "Collect feedback from staff and production partners to find new areas for improvement."
      ]
    },
    {
      "num": "07",
      "title": "Culture & communication",
      "points": [
        "Review and update this policy at least once a year, or after significant operational change.",
        "Involve the team in developing and implementing the policy.",
        "Treat sustainability as part of good filmmaking practice, not a constraint on it."
      ]
    }
  ],
  "approved": "Approved by Matt Hill, Director",
  "reviewed": "Last reviewed 31 May 2025 · Next review 31 May 2026"
};

// ── Glossary page ──

export const glossaryData: GlossaryTerm[] = [
  {
    "t": "DoP (Director of Photography)",
    "d": "The person responsible for the look of a film: camera, lighting and framing. Also known as the cinematographer."
  },
  {
    "t": "Cinematography",
    "d": "The craft of lighting and capturing images on camera in a way that serves the story."
  },
  {
    "t": "Pre-Production",
    "d": "All the planning before a shoot, scheduling, casting, location scouting, permits and logistics."
  },
  {
    "t": "Production",
    "d": "The filming itself, when the crew, talent and equipment come together on set or location."
  },
  {
    "t": "Post-Production",
    "d": "Everything after the shoot, editing, colour grading, sound, graphics and final delivery."
  },
  {
    "t": "Colour Grading",
    "d": "The final picture stage, where the colour and tone of every shot is balanced and styled for a consistent, cinematic look."
  },
  {
    "t": "Sound Design",
    "d": "Creating and assembling the non-musical sounds in a film, from atmospheres to effects, so a scene feels real."
  },
  {
    "t": "Sound Mixing",
    "d": "Balancing and blending all the audio elements, dialogue, music and effects, into a clean final soundtrack."
  },
  {
    "t": "Dialogue Editing",
    "d": "Cleaning and shaping recorded speech so every line is clear and consistent."
  },
  {
    "t": "Foley",
    "d": "Everyday sound effects such as footsteps and handled props, recorded in sync to picture to make a scene feel tangible."
  },
  {
    "t": "Music Supervision",
    "d": "Sourcing, licensing and placing the right music for a film."
  },
  {
    "t": "Motion Graphics",
    "d": "Animated text, graphics and design elements used to explain ideas or brand a film."
  },
  {
    "t": "VFX (Visual Effects)",
    "d": "Imagery created or enhanced digitally that could not be captured in camera."
  },
  {
    "t": "Storyboarding",
    "d": "Sketching a film shot by shot before the shoot to plan the visuals."
  },
  {
    "t": "Scripting",
    "d": "Writing the words and structure that underpin a film."
  },
  {
    "t": "Location Scouting",
    "d": "Finding and assessing places to film against the creative and practical needs of a production."
  },
  {
    "t": "Permits",
    "d": "The official permissions required to film in many public and private locations."
  },
  {
    "t": "Multi-Camera Production",
    "d": "Filming with several cameras at once, used for events, interviews and live coverage."
  },
  {
    "t": "HDR (High Dynamic Range)",
    "d": "A delivery format with a wider range of brightness and colour for richer, more lifelike images."
  },
  {
    "t": "Versioning & Delivery",
    "d": "Producing a film in the different formats, lengths and aspect ratios each platform requires."
  },
  {
    "t": "Subtitling & Captioning",
    "d": "Adding on-screen text of the spoken audio for accessibility and silent viewing."
  },
  {
    "t": "Showreel",
    "d": "A short, edited sampler of a studio's best work."
  }
];

// ── Terms of Engagement ──

export const termsData: TermsData = {
  updated: "Updated 2025",
  sections: [
        { heading: "1. Definitions & Interpretations", items: [
          "1.1 The words 'Klaxon Studio' 'we' 'us' 'our' and 'ours' refer to Klaxon Studio Ltd, a UK registered Limited Private Company.",
          "1.2 The words 'client' or 'customer' refers to the party who commissioned and/or funded the work and/or any person or organisation acting on their behalf.",
          "1.3 The words 'deliverables' and 'master copy' refers to any work specified on the quote under 'deliverables' which is accepted by the client.",
          "1.4 The word 'services' refers to the scope of work to be supplied by Klaxon Studio to the customer as set out in the quote.",
          "1.5 The word 'order' refers to the customer's signed acceptance of the quote from Klaxon Studio.",
          "1.6 'Production start date' constitutes the very first day of work on a project.",
          "1.7 These terms and conditions apply to video production and/or creative services and/or animation and/or motion graphics and/or photography and/or audio recordings and/or post-production services and/or any other services, creative or otherwise, supplied by Klaxon Studio.",
          "1.8 Any words following the terms 'including', 'include', 'in particular', 'for example' or any similar expression, shall be construed as illustrative and shall not limit the sense of the words, description, definition, phrase or term preceding those terms.",
          "1.9 Any reference to 'in writing' or 'written' includes email.",
        ] },
        { heading: "2. Basis of Contract", items: [
          "2.1 It is the customer's responsibility to ensure that the quote is thoroughly read and understood before signing off the quote.",
          "2.2 By signing the quote / confirming in writing, the client is confirming it as an order.",
          "2.3 Any quote given is only valid for a period of 30 days from its date of issue.",
          "2.4 By signing Klaxon Studios' quote and/or confirming it in writing as an order, the customer automatically accepts these Terms and Conditions which forms the contract between Klaxon Studio and the customer.",
          "2.5 Once the quote is confirmed as an order, any amendments to the scope of work, however small, will be subject to a fee of an agreed amount prior to work taking place.",
          "2.6 Any samples, drawings, storyboards, photos or descriptive matter issued by Klaxon Studio are issued or published for the sole purpose of giving an approximate idea of the services described in them. They shall not form part of the Contract or have any contractual force.",
          "2.7 Klaxon Studio shall supply the services to the customer in accordance with the order. Klaxon Studio cannot be held liable for any errors after the customer has confirmed in writing that the deliverables are accurate and correct and should be posted, published or broadcast. Amendments to the order can be requested via email to us, such requests only being valid once acknowledged by Klaxon Studio in writing.",
          "2.8 Having agreed a fee, Klaxon Studio keep accurate and transparent information of costs relating to the client's project. If after scoping the project during pre-production stage it is apparent the scope of work has either greatly expanded or reduced beyond what was originally agreed, Klaxon Studio shall alert the client that we may be forced to commit more or less resources than budgeted, and come to a mutually satisfactory arrangement.",
        ] },
        { heading: "3. Production", items: [
          "3.1 Klaxon Studios' rates are based on a 10 hour working day (including breaks). These hours will never be split over one day or multiple days, nor will half day rates be issued.",
          "3.2 Working days that exceed 10 hours will incur overtime costs. This will be charged per hour at 1.5 x the hourly rate of all crew on site at their respective rates.",
          "3.3 If filming locations are being organised by the client, it is the client's responsibility to ensure that all Klaxon Studio production crew and supporting personnel have clear access to all locations required throughout the day. Delays to production as a result of inadequate access or facilities will be the responsibility of the client and may incur additional charges.",
          "3.4 When filming on location, such as the client's office, or at any venue arranged by the client, adequate insurance cover should be in place as verified by the client themselves.",
          "3.5 Klaxon Studio takes health & safety matters seriously and we reserve the right in all instances to remove any of our personnel and/or equipment from a location if we deem it to be unsafe or if our crew are subjected to abusive or aggressive behaviour. In such circumstances, the client will be fully liable for any costs incurred or subsequently arising as a result. Klaxon Studio will observe the site safety rules at all times and will liaise with the appropriate responsible person(s) named by the client.",
          "3.6 Klaxon Studio reserves the right to assign or sub-contract all or any part of its obligations to the client.",
        ] },
        { heading: "4. Delivery", items: [
          "4.1 Deliverables shall be fulfilled by Klaxon Studio in accordance with the deliverables stated in the order only.",
          "4.2 Klaxon Studio reserves the right to amend the Specification if necessary to comply with any applicable law or regulatory requirement, or if the amendment will not materially affect the nature or quality of the services. We shall notify the customer in any such event.",
          "4.3 Klaxon Studio reserves the right to refuse to use, publish, broadcast or otherwise any content or information which it considers (in its absolute discretion) to be obscene or unsuitable.",
          "4.4 From time to time Klaxon Studio may need to engage third party suppliers for specialist services outside of our offering including studio space, specialist kit, presenters, actors and voice over artists, etc. Many third party services require client approval in writing and this must be received by us before any engagement of these services takes place. Failure to comply with this process may cause a delay of final deliverables which is entirely at the risk of the client and is not the liability of Klaxon Studio.",
          "4.5 Klaxon Studio shall produce a rough cut of the edit for the client to view as well as provide the means for them to view it e.g. an URL link. Three rounds of amends to the edit are covered within the quote as standard. Extra amendments may incur extra fees at an agreed daily rate.",
          "4.6 Klaxon Studio shall produce one master copy of each agreed deliverable for the client to own in perpetuity. Should the client require further copies an additional charge may apply.",
          "4.7 All video files and assets produced by Klaxon Studio on the client's behalf will be stored until project completion at which time all assets will be archived for 6 months. After 6 months all project files and associated assets are automatically deleted. It's the client's responsibility to contact Klaxon Studio if they wish to extend the storage duration within the 6 month time frame. Extended storage will incur a fee.",
          "4.8 Please note that unless paid for, all assets are owned and stored at Klaxon Studio and are not transferable to the client without further agreement. All Deliverable assets will be sent at the time of project completion, further copies may incur a charge.",
        ] },
        { heading: "5. Payment & Late Payment Fees", items: [
          "5.1 Clients must pay 50% of the agreed fee as per order upfront (non-refundable) before work commences. (Klaxon Studio reserves the right to change the payment structure as it sees fit on a quote by quote basis).",
          "5.2 Klaxon Studio payment terms are strictly 30 days from the date of invoice.",
          "5.3 From time to time there may be the need to receive immediate payment for services. Such occasions will be agreed before commencement of the project by both the client and Klaxon Studio.",
          "5.4 We reserve the right to charge further interest and late payment fees as set out under the Late Payment of Commercial Debts (Interest) Act, 1998 if we are not paid according to our payment terms. An additional administration fee of £100 will be applied for each invoice that is late in being paid by the customer. Information is readily available at www.legislation.gov.uk.",
          "5.6 Klaxon Studio reserves the right to withhold delivery and/or any granting or continuation of usage licence of any current work if accounts are not current or overdue invoices are not paid in full. All grants of any licence to use our copyright material under this agreement are conditional upon receipt of payment in full which shall be inclusive of any and all outstanding additional costs, taxes, expenses, and fees, charges or the costs of administration of changes.",
          "5.7 Any invoice queries must be raised within 7 days of receipt.",
        ] },
        { heading: "6. Cancellations", items: [
          "6.1 Either party may terminate the order in writing no later than 14 days prior to the Production start date, without penalty.",
          "6.2 For orders where a 50% non-refundable deposit has been paid by the customer the following terms apply:",
          "In the case that the customer terminates the order 14 days or less prior to the Production start date the following charges (inclusive of the 50% non refundable deposit) will be payable to Klaxon Studio by the customer.",
          "i. Giving notice of cancellation less than 14 days and up to 48 hours before the Production start date will incur a fee payable by the client to cover all costs sustained by Klaxon Studio up to the point of cancellation.",
          "ii. Giving notice of cancellation 48 hours or less before the Production start date will incur a fee payable by the client to cover one hundred percent of the order total.",
          "6.3 In the case that no deposit was paid up front by the customer the following applies:",
          "If the customer terminates the order 14 days or less prior to the Production start date the following charges will be payable to Klaxon Studio",
          "i. Giving notice of cancellation less than 14 days before the Production start date will incur a fee payable by the client to cover all costs sustained by Klaxon Studio up to the point of cancellation.",
          "ii. Giving notice of cancellation less than 7 days before the Production start date will incur a fee payable by the client to cover fifty percent of the order total.",
          "iii. Giving notice of cancellation 48 hours or less before the Production start date will incur a fee payable by the client to cover one hundred percent of the order total.",
          "6.4 Klaxon Studio reserve the right to cancel or terminate a contract or agreed project if:",
          "i. The customer or organisation becomes insolvent or subject to bankruptcy proceedings.",
          "ii. The reputation of Klaxon Studio and anyone connected with Klaxon Studio could be damaged.",
          "6.5 The client may terminate the contract at any time by written notice of termination, and on settlement of account. When the client terminates the contract, they will remain liable to pay in full for all work previously undertaken and in progress by Klaxon Studio unless any other written agreement is reached in advance. This includes any creative and/or pre-production activity prior to filming. The cost of pre-production will have been agreed as part of the quote and is non-negotiable.",
        ] },
        { heading: "7. Copyright and Licensing", items: [
          "7.1 Klaxon Studio asserts its full rights as the copyright owner of all material that has been captured, processed and/or produced by us, whether or not such material forms part of a finished project. The copyright of all produced material is solely owned by Klaxon Studio and is protected under UK law.",
          "i. For productions commissioned to Klaxon Studio, Klaxon Studio assigns joint copyright/ownership and in perpetuity usage license for all platforms and territories for any final deliverables produced only.",
          "ii. Unless otherwise agreed in writing, Klaxon Studio will retain full copyright/ownership of all RAW assets created and produced for a project commissioned by the client.",
          "iii. If the client requires full copyright and ownership of material, please contact Klaxon Studio to discuss arrangements and terms in writing.",
          "7.2 Electronic project files (for editing, motion graphics and other associated audio and visual works) remain the property of Klaxon Studio and are not supplied to the client as standard. However, at the discretion of Klaxon Studio, files can be supplied for an additional fee equal to 20% of the project's full invoice value ex VAT (plus the cost of a hard drive and postage), unless agreed otherwise in writing or via email.",
          "7.3 Rushes (all RAW filmed footage) are not supplied to the client as standard. Rushes/video files can be supplied for an additional fee equal to 30% of the project's full invoice value ex VAT (plus the cost of a hard drive and postage), unless agreed otherwise in writing or via email.",
          "7.4 Where the client provides material to Klaxon Studio for inclusion in any project, including but not limited to logos, images, trademarks, video footage and audio, the relevant permission must be obtained in advance from the original copyright holder by the client. By accepting these Terms and Conditions, the client hereby indemnifies Klaxon Studio against any possible claims, disputes, expenses or similar that may arise from breaching any copyright laws or pre-existing Terms and Conditions attributed to the material.",
          "7.5 We reserve the rights to use any footage and related files from any client-commissioned project in our showreels and for other promotional purposes.",
          "7.6 Klaxon Studio assigns to the client a licence to use the signed off master copy in perpetuity in its complete delivered form only. We do not give permission for any material to be altered, edited or used as part of another production unless this is expressly agreed in writing with Klaxon Studio.",
        ] },
        { heading: "8. Intellectual Property", items: [
          "8.1 If the client rejects a concept, or proposal, all material must be returned intact to Klaxon Studio. The client may not use rejected material in whole or part, either in its original form or adapted/amended for future projects.",
          "8.2 When pitching for projects, but not being formally hired by a customer, 8.1 still applies.",
        ] },
        { heading: "9. Insurance", items: [
          "9.1 Klaxon Studio carries public liability insurance cover of ten million pounds. A copy of our insurance certificate can be provided on receipt of a request to our offices.",
          "9.2 Extended or upgraded specific project insurance cover can be provided if required upon request, provided this is agreed at the time of booking and included in the production brief. Any amendments required to insurance cover after confirming the quote as an order may incur additional charges.",
        ] },
        { heading: "10. Force Majeure", items: [
          "10.1 Klaxon Studio Ltd shall not be in breach of the agreement with the client or liable for any failure to fulfil its obligations to the client if such failure results from events, circumstances or causes beyond its reasonable control. This includes, but is not limited to, acts of terrorism, government acts, labour strikes, inclement weather and public health emergencies.",
          "10.2 In the event of inclement weather which in our opinion would pose a risk to health & safety of our personnel or equipment or has the potential to prevent successful video or audio capture, we reserve the right to change the date or time of filming to a more suitable date or time.",
          "10.3 In the event of filming being delayed or aborted due to the client's failure to adhere to the agreed dates, times, access, facilities, organisation or any other matter specified in the production brief, we reserve the right to reschedule the affected days and to charge for any additional costs which arise. No refund or credit will be given in respect of costs associated with the delayed or aborted original filming day(s).",
        ] },
  ],
};

// ── Blog posts (12) ──

export const blogPosts: BlogPost[] = [
  {
    "slug": "how-to-brief-a-video-production-company",
    "img": "uploads/1 brief production company.webp",
    "title": "How to Brief a Video Production Company",
    "metaDesc": "A good brief makes for a better film. Here's exactly what to include when briefing a video production company, and the mistakes worth avoiding.",
    "lead": "A good brief is the foundation of a great film. Here's how to write one.",
    "blocks": [
      {
        "t": "p",
        "x": "Commissioning video for the first time can feel daunting. There's decisions to be made, lots of stakeholders with opinions, and the anxiety that if you don't get the brief right, the whole thing could go sideways before a camera has even been switched on!"
      },
      {
        "t": "p",
        "x": "The good news is that a good brief doesn't have to be complicated. It doesn't need to be long, perfectly formatted or written by someone with a marketing degree. It just needs to answer the right questions clearly and honestly. We'll take you through what those questions are."
      },
      {
        "t": "h2",
        "x": "Why the brief matters more than you think"
      },
      {
        "t": "p",
        "x": "A video production company can only work with what you give them. The brief is where your objectives, your audience, your budget and your timeline come together into something a creative team can actually respond to. A vague brief produces vague ideas. A clear, thoughtful brief produces work that is focused, purposeful and far more likely to achieve what you actually need it to."
      },
      {
        "t": "p",
        "x": "It's also worth knowing that a good production company will interrogate your brief, push back on assumptions, ask uncomfortable questions, and sometimes tell you that what you've asked for isn't quite what you need. That's not awkward, it's valuable. But they can only do that if you've given them something substantive to work with in the first place."
      },
      {
        "t": "h2",
        "x": "What to include in your brief"
      },
      {
        "t": "p",
        "x": "The objective Start with the most important question: what do you need this video to do? Not what you want it to look like, not how long it should be, but what is it for? Is it to generate leads, explain a product, communicate internally, build brand awareness, support a sales conversation? Be as specific as possible. \"We want a company video\" is not an objective. \"We want to reduce the amount of time our sales team spends explaining our proposition in initial meetings\" is."
      },
      {
        "t": "p",
        "x": "The audience Who is this video for? Be specific about who you're trying to reach - their role, their sector, what they care about, what they know about you already and what they don't. A film made for a procurement director at a FTSE 250 company needs to do something very different to one made for a first-time consumer encountering your brand on Instagram. The production company needs to understand who they're making it for."
      },
      {
        "t": "p",
        "x": "The message If the audience takes away one thing from this video, what should it be? Just one thing. Most briefs try to communicate too much, which leads to films that communicate nothing effectively. Being forced to distil your message to a single idea is a useful discipline, it clarifies your own thinking as much as it helps the production company."
      },
      {
        "t": "p",
        "x": "Where it will live Will this video be on your website, your social channels, shown at an event, sent to prospects by email, broadcast on TV? The answer shapes almost every creative decision - the length, the format, the tone, the technical specifications. A film designed to be watched in a boardroom presentation needs to work very differently to one that needs to stop a scroll on LinkedIn."
      },
      {
        "t": "p",
        "x": "The budget This is the one clients most often leave out of a brief, and it's the one that matters most. We totally understand the instinct - nobody wants to show their hand before they've seen what they're getting. But withholding your budget doesn't protect you, it just makes it harder for a production company to give you a useful response. If you tell us you have £15,000, we can tell you honestly what that gets you and make sure our proposal fits. If you don't tell us, we might come back with something brilliant that's three times your budget, which wastes everyone's time. Give us a number, even a ballpark one."
      },
      {
        "t": "p",
        "x": "The timeline When do you need the finished video? And are there any fixed points along the way such as a launch event, a board presentation or a campaign 'go-live' date that the production schedule needs to work around? Be honest about deadlines. If you need it in three weeks, say so upfront rather than halfway through the process."
      },
      {
        "t": "p",
        "x": "Examples If there are films that you've seen, whether it's your own previous work, a competitor's video or something completely unrelated that captures a tone, a style or an approach you like, share them with us. References are incredibly useful. They don't constrain the creative process, they give us guidance on the route you wish to take."
      },
      {
        "t": "h2",
        "x": "Common briefing mistakes to AVOID"
      },
      {
        "t": "p",
        "x": "Briefing by committee. This is a big one. The more people who have input into a brief before it reaches a production company, the more diluted and contradictory it tends to become. By all means involve stakeholders in signing off the final film, but try to have one person own the brief from the outset."
      },
      {
        "t": "p",
        "x": "Describing the solution rather than the problem. \"We want a two-minute animated explainer\" is a solution. \"We need to explain a complex product to non-technical buyers in under three minutes\" is a problem. Brief the problem and let the production company recommend the solution - it may be an even better idea than what you had in mind originally. Leaving out the awkward context. If there are internal politics around the project, previous videos that didn't land well, stakeholders with strong opinions, or sensitivities around the subject matter, tell us. We'd always rather know upfront than discover it halfway through production. Assuming we know your business. Even if you've worked with a production company before, every project needs a fresh brief. Don't assume anything carries over from previous work. And whoever you're working with, us or anyone else, share everything. The product detail, the company culture, the internal shorthand. The more embedded a production company is in your world, the more authentic the work becomes."
      },
      {
        "t": "h2",
        "x": "What happens after you submit a brief"
      },
      {
        "t": "p",
        "x": "A good production company will come back to you with questions before they come back with ideas. It means they've read the brief carefully and want to make sure they understand what you need before they start developing creative concepts."
      },
      {
        "t": "p",
        "x": "At Klaxon, we'd always rather have a conversation first, a proper call to get under the skin of the brief before we put anything on paper. It saves time, produces better proposals, and usually throws up something useful that wasn't in the brief to begin with. From there you'd typically expect a creative proposal covering the creative approach, a production plan and a budget breakdown."
      },
      {
        "t": "p",
        "x": "And if you're not quite ready to write a full brief yet? Get in touch anyway. Sometimes the best starting point is a conversation, and we're always happy to help you work out what you actually need before you commit to anything."
      }
    ],
    "href": "/blog/how-to-brief-a-video-production-company"
  },
  {
    "slug": "how-much-does-video-production-cost",
    "img": "uploads/2 video production cost.webp",
    "title": "How Much Does Video Production Cost?",
    "metaDesc": "Video production costs vary enormously. Here's an honest guide to what different types of video actually cost in the UK, and what affects the price.",
    "lead": "The honest answer to the question every client asks first.",
    "blocks": [
      {
        "t": "p",
        "x": "Ask any video production company how much a video costs and the honest answer is always going to start with \"it depends.\" That's not a cop-out, it's just the reality of a service where the variables are significant and no two projects are the same. The problem is that \"it depends\" without any further explanation isn't really very useful!"
      },
      {
        "t": "p",
        "x": "So here's what it actually depends on, an honest guide to what video production costs in the UK, what drives those costs up or down, and how to think about budget before you start a conversation with a production company."
      },
      {
        "t": "h2",
        "x": "Why pricing is so hard to pin down"
      },
      {
        "t": "p",
        "x": "Video production isn't like buying a product off a shelf. There isn't a standard price because all projects are different. A sixty-second film for a startup's website and a sixty-second film for a multinational brand campaign might look identical to a viewer but will involve completely different levels of resource, expertise and production complexity."
      },
      {
        "t": "h2",
        "x": "What affects the cost"
      },
      {
        "t": "p",
        "x": "Crew size A simple interview shoot might require two people - a camera operator and a director. A large commercial production might need fifteen or more. Every additional crew member adds cost, but also adds capability. The right crew size is always determined by what the project actually needs."
      },
      {
        "t": "p",
        "x": "Shoot days More shoot days means more cost - crew fees, equipment hire, location costs and logistics all multiply. A single-location, single-day shoot costs significantly less than a multi-location, multi-day production. Where it's possible to achieve what you need in fewer days, a good production company will tell you."
      },
      {
        "t": "p",
        "x": "Locations Filming in a client's own office costs very little in location fees. Hiring a studio, securing a landmark location or filming across multiple sites adds cost, sometimes significantly so. Location permits in London can be time-consuming to secure and, depending on the location, costly, particularly for high-profile public spaces managed by bodies like the Royal Parks, the City of London Corporation or Transport for London."
      },
      {
        "t": "p",
        "x": "On-screen talent If your production requires professional actors, presenters or voiceover artists, casting and talent fees can add significantly to the budget. Using your own employees or executives is more cost-effective, though it requires more time on set and more careful direction. Post-production Don't underestimate post. Editing, grading, sound and graphics can account for anywhere between twenty and fifty percent of a total budget, more if the project is animation-heavy, less if it's straightforward."
      },
      {
        "t": "p",
        "x": "Versioning and delivery If you need multiple cutdowns, social formats, subtitled versions or broadcast masters alongside your main deliverable, build this into your budget from the start. It's far more cost-effective to plan for versioning upfront than to come back and request it after the project has been completed."
      },
      {
        "t": "h2",
        "x": "Rough pricing guide by video type"
      },
      {
        "t": "p",
        "x": "These are indicative ranges for professionally produced content in the UK. They assume a reputable production company, experienced crew and broadcast-quality output. Cheaper options exist, but as with most things, you get what you pay for."
      },
      {
        "t": "p",
        "x": "Interview-based corporate video (single location, one shoot day, straightforward edit) £4,000 – £8,000 Brand film or promotional video (concept development, one to two shoot days, polished post-production) £8,000 – £25,000 Animated explainer video (script, voiceover, full animation) £3,000 – £12,000 depending on style and complexity Product video (single product, studio environment, social cutdowns included) £5,000 – £15,000 Documentary or long-form content (research, multiple shoot days, complex edit) £15,000 – £50,000+ Social content series (multiple short-form assets, single shoot day) £4,000 – £10,000 These ranges are broad because the variables are significant. A brand film at the lower end of its range looks very different to one at the upper end. The difference is usually in production ambition, the number of locations, the scale of the crew, the complexity of the post-production and the level of creative development involved."
      },
      {
        "t": "h2",
        "x": "How to get the most from a fixed budget"
      },
      {
        "t": "p",
        "x": "The most useful thing you can do before approaching a production company is decide on a budget, even a rough one, and commit to sharing it. This isn't about giving away your negotiating position. It's about making the conversation productive."
      },
      {
        "t": "p",
        "x": "A good production company will tell you honestly what your budget can achieve and help you prioritise. If your budget won't stretch to what you originally had in mind, they'll help you find a way to get as close to it as possible, perhaps by simplifying the approach, reducing shoot days, or phasing the production across a longer period."
      },
      {
        "t": "p",
        "x": "Working creatively within a defined budget can produce better results than an open-ended brief anyway. Constraints force decisions, and decisions make for sharper, more focused films."
      },
      {
        "t": "h2",
        "x": "Why the cheapest option rarely is the cheapest option"
      },
      {
        "t": "p",
        "x": "It's tempting to approach video production like any other procurement exercise - get three quotes, pick the lowest. But video is a creative service, and the difference between a competent production and a genuinely good one isn't just aesthetic. It's commercial. A film that doesn't achieve its objective isn't a saving, it's a write-off. The cost of reshooting, re-editing or simply starting again, far exceeds whatever was saved by going with the cheapest option in the first place. The question worth asking isn't \"how do I spend as little as possible on this?\" It's \"what do I need this film to achieve, and what's that outcome worth to my business?\" Starting from that point tends to lead to better decisions and better films."
      },
      {
        "t": "h2",
        "x": "The false economy problem"
      },
      {
        "t": "p",
        "x": "Sometimes the first thing that's tempting to do when you receive a production quote is to look for things to cut to save money on. Sometimes that's the right call, however often it isn't and it's one of the areas where clients most often go against our advice and later wish they hadn't. A runner costs a fraction of the day rate of any other crew member. But without one, fetching, carrying and keeping the day moving falls to people who should be focused on their primary jobs. A camera assistant keeps the shoot moving efficiently - without one, setups take longer, equipment moves slower and problems take longer to solve. A sound recordist is not an optional extra - audio problems are among the most expensive and difficult to fix in post, and poor sound can undermine footage that looks otherwise excellent. In every case, the saving on the day is real. The cost further down the line is realer."
      },
      {
        "t": "p",
        "x": "Not paying for a recce is another classic false economy. Not visiting a location before the shoot day feels like a time and cost saving, until the crew arrives and discovers a lighting problem nobody anticipated, a noise issue that makes filming impossible, or a space that simply doesn't work the way everyone assumed it would. Surprises on a shoot day are expensive. A recce costs a fraction of what it saves."
      },
      {
        "t": "p",
        "x": "The same logic applies to post-production. Cutting edit time to hit a budget produces a film that never quite reaches its potential, however good the footage."
      },
      {
        "t": "p",
        "x": "A good production company will always tell you where it's safe to trim and where it isn't. If you're tempted to cut against your production company's advice whether on crew, on recces, on post-production time, that's a conversation worth having properly before the shoot, not something to regret later."
      },
      {
        "t": "h2",
        "x": "How to choose the right production partner"
      },
      {
        "t": "p",
        "x": "Before committing to any production company, check examples of their work, but, look beyond their showreel. A showreel is a highlights package, every company's best footage, in an exciting edit with a great music track. What you actually need to see are finished films in their entirety - real deliverables for real clients. Watch them properly. Does the narrative make sense? Does the pacing hold your attention or does it drag? Does the edit serve the story? These are the things that a showreel doesn't reveal."
      },
      {
        "t": "p",
        "x": "A production company worth working with will have proper case studies on their website, not just a logo wall, but a genuine account of the brief, the creative approach and the outcome. That's where you find out how a company actually thinks and works, which tells you far more than a showreel ever will."
      },
      {
        "t": "p",
        "x": "And a final note worth bearing in mind. Price is only one dimension of the decision. Choosing a production company is also about choosing a creative partner, someone you'll be working closely with through a process that involves real trust, collaboration and a significant amount of your time. Getting that relationship right matters as much as getting the budget right. Ready to talk budget?"
      },
      {
        "t": "p",
        "x": "If you'd like a realistic sense of what your project might cost, just get in touch. We'll talk you through it honestly and help you work out the best approach for your budget"
      }
    ],
    "href": "/blog/how-much-does-video-production-cost"
  },
  {
    "slug": "how-long-should-a-brand-film-be",
    "img": "uploads/3 brand film length.webp",
    "title": "How Long Should a Brand Film Be?",
    "metaDesc": "How long should a video be? It's one of the most common questions we get asked and the answer is always more nuanced than people expect.",
    "lead": "The most common question about brand film. And why it's the wrong question to start with.",
    "blocks": [
      {
        "t": "p",
        "x": "At some point in almost every brief we receive, someone asks how long the video should be. It's a reasonable question, budgets need to be set, schedules need to be planned, scripts need to be written to the right length, and there's a natural instinct to want to nail down the specifics before the creative work begins."
      },
      {
        "t": "p",
        "x": "The thing is, length isn't really a creative decision, it's a consequence of other decisions such as objectives, audience, platform and story. Get those right first and the correct duration becomes obvious. Start with duration, and you risk building a film around an arbitrary number rather than around what it actually needs to achieve."
      },
      {
        "t": "p",
        "x": "That said, there are useful principles here and having a clear sense of the territory before the scripting begins is always worthwhile. Here's how we think about it."
      },
      {
        "t": "h2",
        "x": "Why the platform is the most important variable"
      },
      {
        "t": "p",
        "x": "If there's one factor that should drive your thinking about length more than any other, it's where the video is going to live. Different platforms have fundamentally different audience behaviours, and a film that performs well in one environment can fall flat in another."
      },
      {
        "t": "p",
        "x": "A video on your website homepage has a captive audience who have actively sought you out. They're in research mode, they're interested, and they'll give you more time than almost any other context. Two to three minutes is perfectly reasonable here, provided the content justifies it. Social media is the opposite. Audiences are scrolling fast, their attention is fractured, and the algorithm is monitoring to see whether people keep watching. For Instagram Reels and TikTok, under sixty seconds is a strong discipline. For LinkedIn, sixty to ninety seconds tends to work well. For YouTube pre-rolls, you have roughly five seconds before someone hits skip. A film shown at a live event has a different dynamic again - the audience is physically present, the environment is controlled, and you can hold attention for longer than you can online. Three to five minutes is not unusual in this context."
      },
      {
        "t": "p",
        "x": "The point is that \"how long should my brand film be\" is really \"how long should my brand film be on this specific platform for this specific audience in this specific context.\" And that's a much more interesting question."
      },
      {
        "t": "h2",
        "x": "What the data tells us"
      },
      {
        "t": "p",
        "x": "There's a lot of research on video drop-off rates, and while the specifics vary by platform and content type, the general picture is consistent: audience retention drops significantly after the first thirty seconds, and again at the two-minute mark."
      },
      {
        "t": "p",
        "x": "This doesn't mean every video should be under thirty seconds. It means that every second of a video needs to earn its place. If your film is holding its audience throughout and if people are watching to the end in significant numbers, then it's the right length. If drop-off is happening early, the problem is usually not that the film is too long, it's that it isn't compelling enough. Length and quality are related, but they're not the same thing. A poorly made sixty-second film will lose people faster than a brilliantly made three-minute one."
      },
      {
        "t": "h2",
        "x": "Length by format"
      },
      {
        "t": "p",
        "x": "While every project is different, here are the ranges that tend to work well for the most common video formats:"
      },
      {
        "t": "p",
        "x": "Social content: Fifteen to sixty seconds. The shorter end for paid social and Reels; up to sixty seconds for LinkedIn and organic content with a genuine story to tell."
      },
      {
        "t": "p",
        "x": "Brand and promotional films: Ninety seconds to three minutes. This is the sweet spot for most brand films - long enough to tell a story with some depth, short enough to hold attention in a digital environment."
      },
      {
        "t": "p",
        "x": "Explainer videos: Sixty seconds to two minutes. Anything longer and you risk losing people before you've made your point. Anything shorter and you may not have space to cover the ground properly."
      },
      {
        "t": "p",
        "x": "Corporate and internal communications: Two to four minutes. Internal audiences tend to be more patient than external ones, and the subject matter often warrants more depth. That said, the same discipline applies, every second should be earning its place."
      },
      {
        "t": "p",
        "x": "Documentary and long-form: Five minutes and beyond. Long-form content justifies its length through the quality and depth of the story. If the material is genuinely compelling, audiences will stay with it."
      },
      {
        "t": "p",
        "x": "Event and conference films: Three to five minutes. The captive environment gives you more latitude, but resist the temptation to fill the time just because you have it."
      },
      {
        "t": "h2",
        "x": "The case for editing ruthlessly"
      },
      {
        "t": "p",
        "x": "One of the most common mistakes in brand film production is trying to include too much. Every department has a message they want to communicate, every stakeholder has a line they want to keep, and the result is a film that tries to say everything and ends up saying nothing particularly well."
      },
      {
        "t": "p",
        "x": "The most effective brand films are built around a single, clear idea. Not three ideas, not five. One. Everything else, every scene, every line of narration, every visual choice, should serve that idea."
      },
      {
        "t": "p",
        "x": "This requires a level of editorial confidence that can feel uncomfortable, particularly when internal stakeholders have invested in the content. But the discipline is worth it - a tighter film is almost always a better film."
      },
      {
        "t": "h2",
        "x": "When longer is justified"
      },
      {
        "t": "p",
        "x": "All of that said, there are times when longer content is genuinely the right call. A brand documentary that gives proper space to a compelling human story, or, a thought leadership film that earns its runtime through the quality of what's being said, or an internal communications piece that deals with complex, important subject matter that deserves more than a superficial treatment."
      },
      {
        "t": "p",
        "x": "The test is simple - is the audience still getting value from every minute of the film? If yes, the length is justified. If there are sections where the honest answer is \"not really,\" those sections need to go."
      },
      {
        "t": "p",
        "x": "Length is never a proxy for quality or seriousness. The best films are exactly as long as they need to be."
      },
      {
        "t": "p",
        "x": "Not sure what length is right for your project?"
      },
      {
        "t": "p",
        "x": "It's one of the first things we talk through with clients. Get in touch and we'll help you work out what your film actually needs, before a brief has even been written."
      }
    ],
    "href": "/blog/how-long-should-a-brand-film-be"
  },
  {
    "slug": "what-is-branded-content",
    "img": "uploads/4 branded content matter.webp",
    "title": "What is Branded Content, and Why Does it Matter?",
    "metaDesc": "Branded content is one of the most misunderstood terms in the industry. Here's what it actually means, how it differs from traditional advertising, and why it works.",
    "lead": "Everyone's talking about branded content. Not everyone means the same thing. Branded content has become one of those terms that gets used so frequently, and in so many different contexts, that it has started to lose its meaning. Ask ten people in a marketing department to define it and you'll get ten different answers, some describing something genuinely distinctive, some essentially describing a slightly more expensive advert. The distinction matters. Because when branded content is done well, it works in a fundamentally different way to traditional advertising and delivers something that 'traditional' advertising simply can't. Here's what it actually is, how it differs, and why the brands investing in it seriously are making a smart decision.",
    "blocks": [
      {
        "t": "h2",
        "x": "What branded content actually is"
      },
      {
        "t": "p",
        "x": "Branded content is content created or commissioned by a brand that is built around what an audience actually wants to watch, rather than what a brand wants to say. The brand's role is enabling rather than dominant, it funds and frames the story, but the story itself is the point. A documentary about a community of athletes that happens to be made by a sportswear brand or, a podcast series about the future of a particular industry, funded by a company that operates in that industry, or, a short film that tells a human story with genuine emotional depth, where the brand appears (if it appears at all) as a subtle presence rather than a product placement. These are all branded content. What they have in common is that an audience would choose to watch or listen to them regardless of which brand made them. The content stands on its own. That's the test. Would someone watch this if there were no brand attached? If the honest answer is yes, you're in branded content territory. If the honest answer is no, if the content only makes sense in the context of selling something, you're making an advert, however sophisticated it looks."
      },
      {
        "t": "h2",
        "x": "How it differs from traditional advertising"
      },
      {
        "t": "p",
        "x": "Traditional advertising is transactional. It interrupts an audience, delivers a message, and asks them to do something - buy this, click here, remember us next time. It's a one-way communication designed to create a short-term commercial response."
      },
      {
        "t": "p",
        "x": "There's nothing wrong with that, advertising works, and it has its place in any balanced marketing strategy. Guinness has made ads that people talk about for years. John Lewis owns Christmas and who can forget the Dairy Milk gorilla?? These are traditional adverts and brilliant ones. The question isn't whether advertising is good or bad, it's whether it's the right tool for what you're trying to achieve."
      },
      {
        "t": "p",
        "x": "The fundamental limitation of advertising is that audiences know what it is. They know they're being sold to, and their defences go up accordingly. The average person encounters thousands of advertising messages every day and has become extraordinarily good at filtering them out. Branded content works differently. It doesn't interrupt, it gives something first. A story, a perspective, an experience worth having, with no immediate commercial strings attached. When an audience chooses to engage with your content rather than being interrupted by it, the relationship they form with your brand is shaped not by exposure but by genuine experience. There's also a practical dimension. In an era of ad blockers, skip buttons and subscription services that eliminate advertising entirely, branded content reaches audiences that paid advertising increasingly cannot. If your content is genuinely worth watching, people will seek it out, no media budget required."
      },
      {
        "t": "h2",
        "x": "What great branded content looks like in practice"
      },
      {
        "t": "p",
        "x": "The best branded content shares a few consistent characteristics:"
      },
      {
        "t": "p",
        "x": "It's made with genuine craft. Branded content produced on a shoestring, or that clearly had too many compromises forced on it by internal stakeholders, undermines itself. The production quality signals how seriously the brand takes the story and by extension, how seriously the audience should take the brand."
      },
      {
        "t": "p",
        "x": "The best branded content has something to say - it takes a position, asks a question, or explores a tension that is genuinely relevant to the world that the brand inhabits. Content that tries to be all things to all people rarely connects with anyone."
      },
      {
        "t": "p",
        "x": "It respects the audience's intelligence. Audiences are sophisticated, they know when they're being talked down to, and they know when a brand is telling them what it thinks they want to hear rather than something honest and interesting. The branded content that earns loyalty treats its audience as equals, not as a consumer to be reached."
      },
      {
        "t": "p",
        "x": "It comes with a plan for being seen. Great branded content that nobody sees is a missed opportunity - the best campaigns treat the film as a centrepiece and build social, PR and editorial activity around it to extend its reach well beyond the initial release."
      },
      {
        "t": "h2",
        "x": "The ROI question"
      },
      {
        "t": "p",
        "x": "Branded content is harder to measure than advertising, and that makes some marketing teams nervous. There's no click-through rate, no immediate conversion to point to. The return is real, but it operates through different mechanisms - brand awareness, affinity, consideration and trust rather than direct response."
      },
      {
        "t": "p",
        "x": "The brands that invest in branded content seriously tend to think about it differently. Rather than asking \"what did this film directly generate in sales,\" they ask \"what did this film do to the relationship between our brand and our audience?\" Those are different questions with different answers, and both matter."
      },
      {
        "t": "p",
        "x": "It's also worth noting that branded content can drive measurable outcomes such as views, shares, earned media coverage, direct traffic, all of which provide meaningful indicators of impact even without a direct conversion event attached. It isn't unmeasurable, it just requires a different measurement framework."
      },
      {
        "t": "h2",
        "x": "How to commission branded content that actually works"
      },
      {
        "t": "p",
        "x": "The most important practical step is finding a production partner who genuinely understands the format, one who knows the difference between a branded content brief and an advertising brief, who will push back when the creative starts to tip too far towards promotion, and who has the craft to tell the story with the quality it deserves."
      },
      {
        "t": "p",
        "x": "Beyond that, be honest about what you're willing to let go of. The brands that get the most from branded content are the ones that trust the process, that give their production partner the creative freedom to find what's genuinely interesting rather than trying to predetermine every message. The more control a brand tries to retain, the more the content tends to drift back towards advertising. And at that point, you'd be better off making an advert. Thinking about branded content for your brand?"
      },
      {
        "t": "p",
        "x": "It's a conversation worth having before the brief is written. Get in touch and we'll help you work out whether it's the right approach and what it could look like for your brand."
      }
    ],
    "href": "/blog/what-is-branded-content"
  },
  {
    "slug": "animation-vs-live-action-explainer-video",
    "img": "uploads/5 animation v live.webp",
    "title": "Animation vs Live Action: Which is Right for Your Explainer Video?",
    "metaDesc": "Animation or live action? It's one of the first questions clients ask about explainer videos. Here's how to decide which is right for your project.",
    "lead": "It's one of the first questions clients ask. Here's how to actually answer it. When a brief for an explainer video lands on our desk, one of the earliest conversations we have is about format. Animation or live action? It seems like a simple choice, but it's one that shapes everything that follows - the creative approach, the production process, the timeline and the budget.",
    "blocks": [
      {
        "t": "p",
        "x": "The honest answer is that neither format is inherently better than the other. Each has genuine strengths, each has real limitations, and the right choice for your project depends on a specific set of factors that are worth thinking through carefully before you commit. Here's the framework we use."
      },
      {
        "t": "h2",
        "x": "What each format actually involves"
      },
      {
        "t": "p",
        "x": "Before getting into the decision, it's worth being clear about what we mean by each option. Live action explainer videos use real footage - real people, real environments, real products. They might feature a presenter talking directly to camera, a demonstration of a product in use, footage of a team at work, or a combination of all three. The production process involves a shoot day, crew, locations and on-screen talent."
      },
      {
        "t": "p",
        "x": "Animation covers a broad range of styles, from simple motion graphics and icon-based animation through to character animation, 2D illustration styles, 3D rendering and everything in between. The production process is largely post-production based: script, voiceover, design, animation. There's no shoot day, but there's a significant amount of skilled creative work involved in building the visual world from scratch."
      },
      {
        "t": "p",
        "x": "Hybrid approaches, which combine filmed footage with animated elements, are increasingly common and often give you the best of both worlds. More on that later."
      },
      {
        "t": "h2",
        "x": "When animation works best"
      },
      {
        "t": "p",
        "x": "Animation is the stronger choice in a number of specific circumstances."
      },
      {
        "t": "p",
        "x": "When you're explaining something abstract. If your product or service is conceptual such as a software platform, a financial process or a complex system, there's nothing to film. Animation lets you visualise ideas, processes and data in ways that live action simply can't. You can show the inside of a system, compress time, simplify a complex process into a clear visual sequence. Live action can't do any of that."
      },
      {
        "t": "p",
        "x": "When you don't have a physical product. B2B technology companies, financial services organisations, SaaS businesses, their offer exists in the digital world, not the physical one. Animation is the natural home for content that needs to bring an intangible proposition to life. When you need flexibility and longevity. Animated content can be updated more easily than live action. If your product changes, your messaging evolves, or you need a different language version, it's far simpler to revise an animated asset than to reshoot. For content that needs to work hard over a long period, animation can be the more cost-effective long-term choice. When brand consistency is paramount. Animation gives you complete control over every visual element - colours, typography, style, motion. Everything can be built to your brand guidelines precisely, which can be harder to achieve in a live action environment. When budget is a significant constraint. A well-produced simple animated explainer can be more cost-effective than a live action shoot with locations, crew, talent and post-production. This isn't universally true, high-end animation is expensive, but at the simpler end of the spectrum, animation can deliver strong results at a lower price point."
      },
      {
        "t": "h2",
        "x": "When live action works best"
      },
      {
        "t": "p",
        "x": "For all its versatility, animation has limitations that live action doesn't. When trust and human connection are the priority. People connect with people. A real human face, a founder talking about why they started their company, a client explaining the difference a product has made, an expert speaking with genuine authority, these build trust in a way that animation cannot replicate. In B2B environments where credibility and relationship are central to the sales process, live action often works harder."
      },
      {
        "t": "p",
        "x": "When you have something worth showing. If your product is visually compelling - a piece of hardware, a physical environment, a service that produces tangible results, then film it. Animation is a workaround for things that can't be filmed. If you can film it, you probably should. When you want to express genuine personality. Animation has a style and a tone, but it's a constructed one. Live action captures something real, the energy of a team, the character of a founder, the atmosphere of a workspace. If authenticity and culture are part of what you're trying to communicate, live action carries that in ways animation can't."
      },
      {
        "t": "p",
        "x": "When your audience is senior or traditional. This varies enormously by sector and context, but there are audiences, particularly in more conservative industries, for whom heavily animated content can feel too informal or too generic. A well-produced live action film can carry more weight in these contexts."
      },
      {
        "t": "h2",
        "x": "The hybrid approach"
      },
      {
        "t": "p",
        "x": "Increasingly, the most effective explainer videos combine live action and animation, using real footage to establish trust and personality, and animated elements to explain, illustrate and clarify where the live footage can't do that job alone."
      },
      {
        "t": "p",
        "x": "A common approach: open with a real person establishing the problem or the context, then use animation to explain the solution visually, then return to live action for testimony or a call to action. This structure gives you the human warmth and credibility of live action alongside the explanatory power of animation."
      },
      {
        "t": "p",
        "x": "The hybrid approach does require careful planning, the animation needs to be designed to complement the live footage rather than sit awkwardly alongside it, but when it's done well, it often outperforms either format used in isolation."
      },
      {
        "t": "h2",
        "x": "The cost and timeline question"
      },
      {
        "t": "p",
        "x": "It's a common assumption that animation is always cheaper than live action. It isn't, at least not at the quality end of the market. A highly polished character animation with a bespoke illustrated style and complex motion can cost significantly more than a well-produced live action shoot. The difference is where the cost sits: live action front-loads cost in the production phase, animation front-loads it in post."
      },
      {
        "t": "p",
        "x": "Timeline-wise, animation tends to take longer overall, particularly in the design and revision phases, which can be iterative and time-consuming. A live action shoot compresses a lot of decisions into a single day, which can actually speed up the overall process. Neither is categorically faster; it depends on the complexity of the project and how efficiently the approval process runs."
      },
      {
        "t": "p",
        "x": "So which should you choose?"
      },
      {
        "t": "p",
        "x": "Here's a simple framework for making the decision:"
      },
      {
        "t": "p",
        "x": "If what you're explaining is abstract, intangible or impossible to film, animate it. If trust, personality and human connection are central to your message, film it. If you're not sure, consider a hybrid, or talk it through with your production company before you commit. The format should always serve the content, not the other way around. A good production company will have a clear recommendation based on your brief, and if they're recommending a format without understanding your objectives and your audience, that's a sign to ask more questions."
      },
      {
        "t": "p",
        "x": "Not sure which direction to take your explainer video?"
      },
      {
        "t": "p",
        "x": "It's one of the first things we talk through. Get in touch and we'll give you an honest recommendation based on what your project actually needs, before any creative work begins."
      }
    ],
    "href": "/blog/animation-vs-live-action-explainer-video"
  },
  {
    "slug": "why-your-corporate-video-isnt-working",
    "img": "uploads/6 corporate video blog.webp",
    "title": "Why Your Corporate Video isn't Working (And How to Fix It)",
    "metaDesc": "Most corporate video is forgettable. Here's why, and what you can do differently to make content your organisation is actually proud of.",
    "lead": "Most corporate video is forgettable. Here's why, and what to do about it.",
    "blocks": [
      {
        "t": "p",
        "x": "If you've ever sat through a corporate video that made you feel nothing, polished enough, professionally produced, technically competent, but somehow completely inert, you'll know exactly what we're talking about."
      },
      {
        "t": "p",
        "x": "It's one of the most common problems in video production, and it's not a budget problem. Some of the most forgettable corporate videos we've ever seen cost a lot of money. The problem is almost never resources. It's decisions, specifically, a series of very understandable decisions that individually seem reasonable but collectively produce content that fails to connect with anyone."
      },
      {
        "t": "p",
        "x": "Here are the ones we see most often, and what to do instead."
      },
      {
        "t": "p",
        "x": "Mistake one: Starting with what you want to say rather than what your audience needs to hear This is the root cause of most corporate video failure, and it stems from a completely understandable place. You know your organisation. You're proud of what you do. You want to communicate it. So the brief starts with a list of messages, the values, the history, the capabilities, the achievements, and the film becomes an attempt to deliver all of them. The problem is that your audience doesn't care about any of those things in isolation. They care about what your organisation can do for them, what problem it solves, what it makes possible. A corporate video that leads with \"we were founded in 1987 and have offices in six countries\" is asking an audience to care about something before giving them any reason to. The fix is simple in principle, harder in practice: start with the audience. Who are they? What do they care about? What would make them lean forward rather than sit back? Build the film around what matters to them, and your messages will land naturally in that context. Build it around your messages, and it will feel like exactly what it is, a company talking about itself."
      },
      {
        "t": "h2",
        "x": "Mistake two: Trying to say too much"
      },
      {
        "t": "p",
        "x": "Related to the above, but distinct enough to deserve its own entry. The desire to include everything is almost universal in corporate video production, and it's almost universally damaging."
      },
      {
        "t": "p",
        "x": "Every department has something they want to say. Every stakeholder has a line they want to protect. The result is a film that covers fifteen topics at thirty seconds each, leaving the audience with no clear sense of what they were supposed to take away from it."
      },
      {
        "t": "p",
        "x": "The most effective corporate videos are built around a single idea. Not a list of ideas. One. Everything else, every scene, every line, every visual choice, serves that idea. The discipline required to get there is significant, particularly when internal stakeholders are invested in their specific contribution. But a film with one clear message will always outperform a film with ten unclear ones."
      },
      {
        "t": "p",
        "x": "When we work with clients on corporate video, one of the most valuable things we do is help them identify the one thing their audience most needs to understand. It's a harder question than it sounds. But the answer is usually the foundation of something genuinely good."
      },
      {
        "t": "h2",
        "x": "Mistake three: Safe creative"
      },
      {
        "t": "p",
        "x": "Corporate video has a visual language, talking heads in nice offices, generic b-roll of people in meetings, stock music that sounds like every other piece of stock music. It's familiar because it's safe. Nobody got into trouble for making a corporate video that looked like a corporate video. But safe creative is also invisible creative. An audience that has seen hundreds of corporate videos will process yours on autopilot and retain almost nothing. The visual language of safe corporate production is so well established that it's become a signal to switch off. This doesn't mean every corporate video needs to be an avant-garde experiment. It means finding the specific, authentic detail that makes your organisation different and building the film around that. A genuine character. An unexpected story. A visual approach that reflects what your brand actually stands for rather than what corporate video generically looks like. The organisations whose corporate videos people remember and share aren't the ones with the biggest budgets. They're the ones who were willing to do something a little unexpected."
      },
      {
        "t": "h2",
        "x": "Mistake four: Underestimating the on-camera challenge"
      },
      {
        "t": "p",
        "x": "Getting natural, compelling performances from people who don't normally appear on camera is one of the most underestimated challenges in corporate video production. A senior executive who is brilliant in a boardroom can become stilted and unconvincing the moment a camera is pointed at them. It's not a reflection of their ability, it's a completely normal response to an unfamiliar environment."
      },
      {
        "t": "p",
        "x": "The solution isn't to script every word and have them read it to camera. That rarely works and usually looks exactly like what it is. The solution is to invest time in putting people at ease before filming begins, talking through what they want to say rather than what they're supposed to say, creating an environment where it's safe to get it wrong a few times, and finding the moments of genuine conviction and authenticity that every person has."
      },
      {
        "t": "p",
        "x": "A good director can get a compelling performance out of almost anyone. But it takes time and skill, and rushing this part of the process, which happens more often than it should, produces exactly the kind of stiff, uncomfortable corporate content that gives the format a bad name."
      },
      {
        "t": "h2",
        "x": "Mistake five: Neglecting post-production"
      },
      {
        "t": "p",
        "x": "A lot of corporate video budgets are weighted too heavily towards the shoot and not heavily enough towards post-production. The logic is understandable, the shoot day is visible, tangible, exciting. Post-production happens in an edit suite and is easy to under-resource. But post-production is where a film is made or broken. The edit determines the pace, the emotion and the clarity of the story. The grade determines the visual quality and consistency. The sound design and music choices shape the entire feeling of the film. Rushing any of these stages, or cutting corners to stay on budget, produces a film that looks and feels less than it should, regardless of how good the raw material is."
      },
      {
        "t": "p",
        "x": "If you're working with a limited budget, it's almost always better to simplify the production, fewer shoot days, simpler locations, and protect the post-production budget. The audience never sees the shoot. They only ever see the finished film."
      },
      {
        "t": "h2",
        "x": "Mistake six: No clear call to action"
      },
      {
        "t": "p",
        "x": "A corporate video that leaves its audience feeling positive but uncertain about what to do next has done half the job. Every film needs to answer the question your audience will be asking at the end of it: so what do I do now?"
      },
      {
        "t": "p",
        "x": "This doesn't need to be heavy-handed. A subtle, confident direction, visit our website, speak to our team, find out more, is enough. But it needs to be there. A film without a clear next step is a missed commercial opportunity, however good everything else about it is."
      },
      {
        "t": "h2",
        "x": "The common thread"
      },
      {
        "t": "p",
        "x": "Look at the mistakes above and you'll notice a pattern. Most of them stem from the same place: making the film for internal stakeholders rather than for the audience it's supposed to reach. The organisations that make corporate video that actually works have made a deliberate choice to prioritise the audience's experience over the internal desire to cover all bases. It requires confidence, editorial discipline and a willingness to leave things out. But it's the difference between a film your team watches once at a launch event and a film that continues to work for your organisation for years."
      },
      {
        "t": "p",
        "x": "Think your corporate video could be doing more?"
      },
      {
        "t": "p",
        "x": "It's a conversation worth having. Get in touch and we'll give you an honest view of what yours could look like, and what it would take to get there."
      }
    ],
    "href": "/blog/why-your-corporate-video-isnt-working"
  },
  {
    "slug": "why-most-b2b-video-is-forgettable",
    "img": "uploads/7 b2b video people.webp",
    "title": "Why Most B2B Video is Forgettable, and What to Do About It",
    "metaDesc": "B2B video has a quality problem. Here's why so much of it fails to land, and what the brands getting it right are doing differently.",
    "lead": "B2B video has a quality problem. Here's what's causing it, and how to fix it. There's more B2B video content being produced right now than at any point in history. And most of it is, if we're being honest, not very good.",
    "blocks": [
      {
        "t": "p",
        "x": "That's not a criticism of the people making it. It's a structural problem, one that emerges from the specific pressures and dynamics of B2B marketing, and one that can be solved once you understand where it comes from. The organisations that are getting B2B video right aren't doing it by accident. They've made a set of deliberate decisions that most of their competitors haven't. Here's what those decisions are."
      },
      {
        "t": "h2",
        "x": "The root problem: B2B video is made for internal audiences"
      },
      {
        "t": "p",
        "x": "The most common failure mode in B2B video isn't a production quality issue. It isn't a budget issue. It's an audience issue."
      },
      {
        "t": "p",
        "x": "B2B video content is almost always created by a marketing team working under pressure from senior stakeholders who have strong views about what the video should say. The result is content that reflects internal priorities, the messages the organisation wants to communicate, rather than the questions, concerns and motivations of the people it's trying to reach. This produces a particular kind of video that B2B buyers have become very good at recognising and tuning out. It leads with product features rather than business outcomes. It uses language that makes sense internally but means little to an external audience. It assumes a level of existing knowledge that most buyers don't have. And it asks audiences to care about the brand before giving them any reason to."
      },
      {
        "t": "p",
        "x": "The fix requires a genuine shift in perspective, from \"what do we want to say?\" to \"what does our audience need to hear?\" Those are different questions, and they produce very different films."
      },
      {
        "t": "h2",
        "x": "The features vs outcomes problem"
      },
      {
        "t": "p",
        "x": "B2B products and services are complex. There's often a lot to explain, multiple features, multiple use cases, multiple stakeholder groups with different needs. The temptation is to try to cover all of it, or at least as much of it as possible, in a single film."
      },
      {
        "t": "p",
        "x": "The problem is that features, in isolation, don't move people. Outcomes do. A procurement director watching a product video doesn't care about the technical specifications of what you've built. They care about what it will do for their organisation, the time it will save, the risk it will reduce, the competitive advantage it will create. A marketing director doesn't want to know how your platform works. They want to know what results it produces. The best B2B video starts from the outcome and works backwards. What is the most compelling result a customer can achieve by working with you? Build the film around that, and the features become supporting evidence for a story that already has the audience's attention."
      },
      {
        "t": "h2",
        "x": "The sophistication gap"
      },
      {
        "t": "p",
        "x": "B2B audiences are more sophisticated than most B2B video gives them credit for, and this creates a particular kind of problem."
      },
      {
        "t": "p",
        "x": "When a senior decision-maker watches a video that oversimplifies their world, underestimates their intelligence or treats them as if they've never encountered the category before, the effect isn't neutral. It actively undermines credibility. The implicit message is that the brand doesn't really understand the space it's operating in, and if it doesn't understand the space, why would you trust it with your business?"
      },
      {
        "t": "p",
        "x": "The best B2B video treats its audience as the experts they are. It speaks to them as peers rather than prospects. It acknowledges the complexity of their world without drowning in it. And it earns credibility through specificity, real data, real outcomes, real client experiences, rather than generic claims about quality and capability that every competitor is also making."
      },
      {
        "t": "h2",
        "x": "The role of emotion in B2B decision making"
      },
      {
        "t": "p",
        "x": "One of the most persistent myths in B2B marketing is that buying decisions are purely rational. They aren't."
      },
      {
        "t": "p",
        "x": "Research consistently shows that emotion plays a significant role in B2B purchasing, particularly at the shortlisting and final decision stages. When two suppliers have similar capabilities and similar pricing, the decision often comes down to trust, confidence and a sense that the relationship will work. Those are emotional responses, not rational ones. B2B video that ignores this, that leads entirely with logic, data and feature sets, is leaving the most powerful persuasive lever unused. The best B2B films combine rational credibility with emotional resonance. They give the audience the evidence they need to justify the decision, and the feeling they need to want to make it."
      },
      {
        "t": "p",
        "x": "This doesn't mean making B2B video sentimental or over-produced. It means finding the human truth at the centre of what you do, the real impact on real people, and building the film around that alongside the commercial case."
      },
      {
        "t": "h2",
        "x": "What the best B2B video has in common"
      },
      {
        "t": "p",
        "x": "Across the B2B video content that genuinely performs, that generates leads, supports sales conversations, builds brand consideration, a few consistent characteristics appear. It leads with the customer, not the brand. The most effective B2B films put a real client voice at the centre, someone who can speak to the specific outcomes they've achieved with credibility and specificity. A well-produced case study or testimonial film, built around a genuinely compelling client story, will almost always outperform a brand-led promotional film. It is specific rather than general. Vague claims, \"we help businesses work smarter\", register as noise. Specific outcomes, \"we reduced onboarding time by forty percent for a team of two hundred people\", register as signal. Specificity is credibility. The more precise you can be about the results you deliver, the more convincing your content becomes."
      },
      {
        "t": "p",
        "x": "It respects the viewer's time. B2B audiences are busy. A film that takes ninety seconds to make its point will be watched to the end. A film that takes four minutes to make the same point will be abandoned at the two-minute mark. Brevity and clarity are not the enemies of depth, they are a form of respect for the audience."
      },
      {
        "t": "p",
        "x": "It has a clear purpose within the sales process. The best B2B video content is built around a specific job to do, opening a conversation, addressing a specific objection, supporting a proposal, closing a deal. Content built for a specific moment in the sales process is almost always more effective than content built for a vague general awareness objective."
      },
      {
        "t": "h2",
        "x": "A framework for better B2B video"
      },
      {
        "t": "p",
        "x": "If you're planning B2B video content, here's a simple set of questions worth answering before the brief is written:"
      },
      {
        "t": "p",
        "x": "Who specifically is this for, not a broad category, but a specific type of person with a specific set of priorities? What is the single most important thing they need to understand or feel as a result of watching this? What is the most compelling evidence we have that we can deliver that? Where exactly in the sales process will this content be used, and what do we want the viewer to do next?"
      },
      {
        "t": "p",
        "x": "Answer those questions honestly and you have the foundation of a brief that will produce something genuinely useful. Skip them, and you're likely to end up with another piece of B2B video that nobody watches twice."
      },
      {
        "t": "p",
        "x": "Ready to make B2B video that actually works?"
      },
      {
        "t": "p",
        "x": "It starts with the brief. Get in touch and we'll help you build a content approach that works as hard as your sales team does."
      }
    ],
    "href": "/blog/why-most-b2b-video-is-forgettable"
  },
  {
    "slug": "the-case-for-the-brand-documentary",
    "img": "uploads/8 brand documentary blog.webp",
    "title": "The Case for the Brand Documentary",
    "metaDesc": "Short-form content dominates, but some stories need more space. Here's why the brand documentary deserves a place in your content strategy.",
    "lead": "In a world obsessed with short-form content, here's why some stories deserve more space.",
    "blocks": [
      {
        "t": "p",
        "x": "Everything in modern content strategy pushes towards shorter. Shorter attention spans, shorter formats, shorter windows to make an impression before someone scrolls past. The conventional wisdom is clear: if you can say it in sixty seconds, don't take ninety. If you can say it in a reel, don't make a film."
      },
      {
        "t": "p",
        "x": "And for a lot of content, that's right. Social media demands brevity and the data supports it. But there's a category of content where the conventional wisdom is not just wrong, it's actively counterproductive. And that's the brand documentary."
      },
      {
        "t": "p",
        "x": "Done well, a brand documentary can do something that no amount of short-form content can achieve. It can make an audience genuinely care."
      },
      {
        "t": "h2",
        "x": "What a brand documentary actually is"
      },
      {
        "t": "p",
        "x": "A brand documentary is a long-form film, typically anywhere from five to thirty minutes, that tells a real story connected to a brand's world, values or impact. The key word is real. Not a promotional narrative constructed to make the brand look good. A genuine story, told with the craft and rigour of documentary filmmaking, that happens to be funded and commissioned by a brand."
      },
      {
        "t": "p",
        "x": "The subject might be a person, a founder, a craftsperson, an athlete, a community figure whose story connects authentically to what the brand stands for. It might be a place, a movement, a subculture, a social issue. It might be the brand's own origin story, told honestly rather than hagiographically. What matters is that the story has genuine human interest, that it would be worth telling regardless of which brand commissioned it."
      },
      {
        "t": "p",
        "x": "That distinction is everything. A brand documentary that exists primarily to make the brand look good is a long advert. A brand documentary that exists primarily to tell a compelling story, and trusts that telling that story well will reflect positively on the brand, is something else entirely. Audiences can tell the difference immediately, and they respond to the two things in completely different ways."
      },
      {
        "t": "h2",
        "x": "Why short-form content has limits"
      },
      {
        "t": "p",
        "x": "Short-form content is extraordinarily good at certain things. It drives awareness. It reaches new audiences efficiently. It keeps a brand present and relevant in the daily scroll. These are genuinely valuable outcomes and there's no argument for abandoning short-form content in favour of long-form."
      },
      {
        "t": "p",
        "x": "But short-form content has a ceiling. It can make someone aware of your brand. It can reinforce an existing impression. What it struggles to do, what it almost never does, is fundamentally change how someone feels about you. It doesn't have the space. By the time an emotional connection is beginning to form, the content is over."
      },
      {
        "t": "p",
        "x": "Long-form storytelling works differently because it has time. Time to develop a character. Time to build tension, create stakes, take the audience somewhere unexpected. Time to make someone laugh, or feel moved, or see the world slightly differently than they did before. These are the experiences that create lasting emotional associations, the kind that influence consideration and preference long after the viewing is over."
      },
      {
        "t": "p",
        "x": "Brand awareness fades. Emotional connection doesn't, or at least it fades much more slowly. A brand documentary that genuinely moves an audience creates a relationship with that audience that a hundred short-form posts cannot replicate."
      },
      {
        "t": "h2",
        "x": "The trust dividend"
      },
      {
        "t": "p",
        "x": "There's a specific mechanism through which brand documentaries build brand equity that's worth understanding: the trust dividend."
      },
      {
        "t": "p",
        "x": "When a brand commissions a documentary and tells a real story, one that has rough edges, complexity, genuine human stakes, it is implicitly communicating something about itself. It's saying: we're confident enough in what we stand for to let a real story speak for us. We don't need to control every message. We trust the audience to draw their own conclusions. That implicit confidence is compelling. It's the opposite of the defensive, over-controlled communication that most brand content represents. And audiences respond to it with a degree of trust that polished promotional content rarely earns."
      },
      {
        "t": "p",
        "x": "This is particularly powerful when the story being told involves something difficult, a genuine challenge, a failure, a moment of vulnerability. Brands that are willing to be honest about their journey, rather than presenting a curated highlight reel, tend to build deeper connections with their audiences than those that play it safe."
      },
      {
        "t": "h2",
        "x": "What makes a story worth a documentary treatment"
      },
      {
        "t": "p",
        "x": "Not every brand story warrants a documentary. The format demands a genuine story, one with characters, stakes and a narrative arc that gives an audience reason to stay invested over the course of the film. Finding that story, and establishing whether the necessary access and material exist to tell it properly, is the most important part of the development process. The questions worth asking: Is there a real person at the centre of this whose story is genuinely compelling? Is there something at stake, something the audience will care about? Does the story go somewhere unexpected, or does it follow a predictable arc that gives the audience no reason to stay with it? Is there enough material, enough access, enough authentic moments, to sustain a film of the length the story requires?"
      },
      {
        "t": "p",
        "x": "If the answers are yes, you probably have a documentary. If the story only works when everything is controlled and scripted, you probably have a promotional film, and there's nothing wrong with that, but it's a different thing."
      },
      {
        "t": "h2",
        "x": "Distribution and where brand documentaries live"
      },
      {
        "t": "p",
        "x": "One of the practical objections to brand documentary is the distribution question. Short-form content has obvious homes, Instagram, TikTok, LinkedIn, YouTube. Where does a twenty-minute film live?"
      },
      {
        "t": "p",
        "x": "The honest answer is that distribution for long-form branded content requires more deliberate planning than social content. But the options are better than most brands assume. YouTube is the obvious starting point, it's the world's second largest search engine and long-form content performs well there with the right optimisation. A brand's own website, particularly a dedicated content hub, is another strong option. Streaming platforms and broadcaster partnerships are increasingly open to well-produced branded documentary content. Film festivals, particularly those with specific categories for branded or documentary content, offer both distribution and credibility."
      },
      {
        "t": "p",
        "x": "The brands getting most value from brand documentaries are also the ones treating them as campaign centrepieces rather than standalone pieces, building social cutdowns, editorial content and PR activity around the film to extend its reach and lifespan well beyond the initial release."
      },
      {
        "t": "h2",
        "x": "How to commission a brand documentary"
      },
      {
        "t": "p",
        "x": "The development process for a documentary is different to the process for a promotional film, and it's worth understanding those differences before commissioning."
      },
      {
        "t": "p",
        "x": "A documentary requires a research and development phase before production can begin, a period of story exploration to establish whether the material is there, identify the key contributors, and determine the right approach. This phase can take several weeks and is a genuine investment of time and resource. But it's essential. Committing to a full documentary production before the story has been properly developed is the single biggest risk in the format. Find a production partner with genuine documentary experience, not just video production experience. Documentary filmmaking is a distinct discipline that requires specific skills: the ability to build trust with contributors, to find and shape real stories, to work with unscripted material in the edit. These skills don't automatically transfer from promotional production. And above all, commit to the story. The brands that get the most from documentary are the ones that trust the process, that give the filmmakers the access and the editorial freedom to find what's actually there, rather than trying to predetermine the outcome. The films that result from that kind of trust are the ones that make audiences feel something. And that's the whole point. Have a story worth telling?"
      },
      {
        "t": "p",
        "x": "It's the first question we ask. Get in touch and let's find out whether you do."
      }
    ],
    "href": "/blog/the-case-for-the-brand-documentary"
  },
  {
    "slug": "what-makes-a-great-podcast",
    "img": "uploads/pexels-abdellahbnz-33923596.webp",
    "title": "What Makes a Great Podcast? (And Why So Many Fail)",
    "metaDesc": "Millions of podcasts have launched. Most won't survive their first series. Here's what separates the ones that find an audience from the ones that don't.",
    "lead": "Millions of podcasts have launched. Most of them are already dead. Here's why. The numbers are striking. There are more than four million podcasts registered on major platforms. The vast majority of them have published fewer than ten episodes. A significant proportion have published just one.",
    "blocks": [
      {
        "t": "p",
        "x": "This isn't because podcasting is hard, technically. The barrier to entry has never been lower. A decent microphone, a quiet room and a free hosting account is all you need to put a show into the world. The problem isn't starting a podcast. The problem is making one that people actually want to listen to, and keep coming back to. That's a much more demanding challenge than most people realise when they decide to launch."
      },
      {
        "t": "p",
        "x": "Here's what the shows that succeed have in common, and what the ones that fail almost always get wrong."
      },
      {
        "t": "h2",
        "x": "The most common reason podcasts fail"
      },
      {
        "t": "p",
        "x": "Before getting into what great podcasts do well, it's worth being honest about why most don't make it. The answer, in the majority of cases, is the same: the show was built around what the creators wanted to say rather than what an audience would genuinely want to listen to. This is the podcast equivalent of the corporate video problem. The instinct to communicate, to share expertise, to tell stories, to build a platform, is entirely understandable. But communication without a clear sense of who you're communicating to, and why they should care, produces content that feels like broadcasting into a void. Because that's essentially what it is."
      },
      {
        "t": "p",
        "x": "The podcasts that build and sustain audiences start from a different place. They start with a specific listener in mind, someone with specific interests, specific questions, specific gaps in their knowledge or specific desires for entertainment, and they build the entire editorial proposition around serving that person. Everything else follows from that."
      },
      {
        "t": "h2",
        "x": "Format and editorial discipline"
      },
      {
        "t": "p",
        "x": "One of the most underestimated factors in podcast success is format discipline. The best podcasts are built around a clear, consistent structure that listeners can rely on, they know what they're getting, they know roughly how long it will take, and they can build the show into their routine accordingly."
      },
      {
        "t": "p",
        "x": "This sounds like a constraint, but it's actually a creative foundation. Having a clear format forces decisions that are easy to avoid if everything is fluid. How long is each episode? What's the ratio of conversation to solo content? Does the show have a consistent segment structure, or does it flow freely? How is each episode introduced and closed? These decisions shape the entire listening experience, and getting them right early saves enormous amounts of friction later. The shows that struggle with format are usually the ones that treat every episode as a blank canvas, varying wildly in length, structure and tone depending on what happened to feel right that week. Inconsistency is the enemy of habit formation, and habit formation is everything in podcasting. Your listeners need to know what to expect from you before they'll trust you enough to make you a regular part of their week."
      },
      {
        "t": "h2",
        "x": "The quality of the conversation"
      },
      {
        "t": "p",
        "x": "For interview and conversation-based podcasts, which represent the majority of shows, the quality of the conversation is the product. Everything else is packaging."
      },
      {
        "t": "p",
        "x": "This seems obvious, but it has implications that aren't always followed through on. A great podcast conversation isn't a great conversation that happened to be recorded. It's a conversation that has been prepared for, shaped and guided with skill, one where the host knows enough about the guest and their subject to ask the questions that go beyond the surface, to push back when an answer is too polished, and to find the moments of genuine insight or honesty that make a listener stop what they're doing and pay attention. Pre-interview preparation is one of the most significant differentiators between good podcast hosts and great ones. The best hosts arrive having done serious research, not just a Google search, but a genuine attempt to understand their guest's work, their perspective and the specific territory they want to explore. That preparation shows in the quality of the questions, and the quality of the questions determines the quality of the answers."
      },
      {
        "t": "p",
        "x": "The other side of this is listening. The hosts that make the best podcasts are not waiting for their turn to speak. They are genuinely engaged with what their guest is saying, and they follow the conversation where it actually goes rather than where they planned for it to go. Some of the best podcast moments happen when a host abandons their prepared questions because something more interesting has emerged. That kind of responsiveness only comes from genuine attention."
      },
      {
        "t": "h2",
        "x": "Production quality matters more than you think"
      },
      {
        "t": "p",
        "x": "There's a school of thought in podcasting that says production quality doesn't matter, that audiences will forgive poor audio if the content is compelling enough. This is partly true and mostly wrong."
      },
      {
        "t": "p",
        "x": "It's true that extraordinary content can overcome significant production limitations. A handful of shows with genuinely exceptional content have built large audiences despite audio quality that would make a broadcast engineer wince."
      },
      {
        "t": "p",
        "x": "But for the vast majority of shows, the ones still building their audience, still establishing their reputation, still competing for attention against thousands of alternatives, production quality is a credibility signal. Poor audio doesn't just make a show harder to listen to. It tells the audience something about how seriously the creator takes their work. And in a landscape where listeners have unlimited alternatives, giving them a reason to choose something else is a mistake worth avoiding."
      },
      {
        "t": "p",
        "x": "This doesn't mean every podcast needs a professional studio. A good location kit, used well, produces broadcast-quality audio in almost any environment. What it does mean is that audio quality should be treated as a non-negotiable baseline, not an optional extra."
      },
      {
        "t": "h2",
        "x": "Consistency and the long game"
      },
      {
        "t": "p",
        "x": "Here's the hardest truth about podcasting: the results are almost never immediate. The shows that build significant audiences do so over months and years, not weeks. They publish consistently, not just when inspiration strikes, but on a schedule that their audience can rely on, and they improve gradually over time, episode by episode, series by series. The improvement is often invisible in the short term and dramatic in the long term. This is why so many podcasts fail at the ten-episode mark. The creators launched with enthusiasm, published regularly for a few weeks, looked at the download numbers, felt the gap between their expectations and reality, and quietly stopped. The shows that make it through that period, that keep publishing even when the audience feels small, are the ones that eventually build something worth having."
      },
      {
        "t": "p",
        "x": "Consistency is a competitive advantage in podcasting, because most shows don't have it. Turning up reliably, week after week, series after series, is both harder than it sounds and more valuable than most people realise."
      },
      {
        "t": "h2",
        "x": "The branded podcast question"
      },
      {
        "t": "p",
        "x": "For brands considering launching a podcast, all of the above applies, with one additional consideration. A branded podcast that exists primarily to promote the brand will almost never build a loyal audience, because listeners can feel the commercial intent and it undermines the experience."
      },
      {
        "t": "p",
        "x": "The branded podcasts that succeed are the ones where the editorial proposition is genuinely valuable to the listener, independent of any commercial interest the brand might have. The brand funds the show, shapes its general territory and benefits from the association, but the content itself is built for the listener, not the brand. That distinction is the difference between a podcast that finds an audience and one that sits unlistened-to on a hosting platform, gathering digital dust."
      },
      {
        "t": "p",
        "x": "Thinking about launching a podcast?"
      },
      {
        "t": "p",
        "x": "The concept and format decisions are the most important ones you'll make, and they're worth getting right before a single episode is recorded. Get in touch and we'll help you build something worth listening to."
      }
    ],
    "href": "/blog/what-makes-a-great-podcast"
  },
  {
    "slug": "what-happens-on-a-shoot-day",
    "img": "uploads/10 happens on a shoot.webp",
    "title": "What Actually Happens on a Shoot Day?",
    "metaDesc": "If you've never been on a video shoot before, here's exactly what to expect, from the call time to the wrap, and everything in between.",
    "lead": "Never been on a video shoot before? Here's exactly what to expect.",
    "blocks": [
      {
        "t": "p",
        "x": "For anyone who hasn't spent time on a film set, a shoot day can feel like a slightly mysterious event. You know it involves cameras and crew and a lot of people doing things with purpose, but the specifics, who does what, how decisions get made, why it all takes so long, aren't always obvious from the outside."
      },
      {
        "t": "p",
        "x": "Understanding what actually happens on a shoot day is useful for two reasons. First, it helps you prepare properly, knowing what to expect means you can show up ready to contribute rather than feeling like a visitor in someone else's world. Second, it helps you understand why certain decisions are made the way they are, which makes the whole process feel less opaque and more collaborative."
      },
      {
        "t": "p",
        "x": "Here's a straightforward account of what a typical shoot day looks like, from the moment the crew arrives to the moment they leave."
      },
      {
        "t": "h2",
        "x": "Before the cameras roll"
      },
      {
        "t": "p",
        "x": "The shoot day starts earlier than most clients expect, and earlier than most clients arrive. The crew call time is typically an hour or two before filming begins. This is the setup phase, and it's one of the most important parts of the day. Cameras are rigged, lenses are selected, lighting is built, sound equipment is checked, monitors are positioned, and the entire technical infrastructure of the shoot is assembled and tested. By the time the first subject walks in front of the camera, everything should be ready to go."
      },
      {
        "t": "p",
        "x": "This phase also includes a briefing between the director and the key crew members, a final alignment on the shot list, the running order for the day, and any specific technical requirements for each setup. A well-prepared crew will have done most of this thinking in pre-production, but the morning briefing is where everything is confirmed and any last-minute adjustments are made."
      },
      {
        "t": "p",
        "x": "If you're a client attending the shoot, this is a good time to arrive, early enough to walk the space, meet the crew and flag anything that might have changed since the pre-production call, but not so early that you're in the middle of a setup that requires concentration."
      },
      {
        "t": "h2",
        "x": "The first setup"
      },
      {
        "t": "p",
        "x": "Once the crew is ready, filming begins with the first setup of the day. A setup is a specific configuration of camera, lighting and sound for a particular shot or sequence of shots. Each time the camera moves to a significantly different position, or the lighting needs to be rebuilt for a new environment or look, that's a new setup."
      },
      {
        "t": "p",
        "x": "Setups take time, sometimes a lot of it. Building and adjusting lighting for a single interview shot can take thirty minutes or more, even for an experienced gaffer working efficiently. This surprises clients who are new to production. From the outside, it can look like a lot of standing around. From the inside, it's a meticulous process of creating the right conditions for the shot to look exactly as it should."
      },
      {
        "t": "p",
        "x": "The number of setups you can achieve in a day depends on the complexity of each one, the size of the location, and how smoothly everything runs. A realistic working assumption for a typical corporate production is four to six setups in a full day, though simpler shoots with minimal lighting requirements can achieve more, and highly complex setups may deliver fewer."
      },
      {
        "t": "h2",
        "x": "Filming the talent"
      },
      {
        "t": "p",
        "x": "When the setup is ready and the talent, whether that's an employee, an executive, a subject or a professional presenter, steps in front of the camera, the director's focus shifts entirely to performance."
      },
      {
        "t": "p",
        "x": "This is where the preparation done with contributors before shoot day pays off. A subject who has been briefed properly, who knows what questions they'll be asked and roughly what they want to say, will settle into the camera environment much more quickly than one who is encountering the process cold. That said, almost everyone needs a few minutes to adjust, to find their natural register in front of the lens, to stop thinking about the camera and start thinking about what they're saying."
      },
      {
        "t": "p",
        "x": "A good director creates the space for that adjustment without it feeling pressured. They'll often start with easier, more conversational questions to warm the subject up before moving to the material that really matters. They'll give clear, simple feedback, not technical direction, but guidance on tone, pace and emphasis, that helps the subject find their best performance. Rarely is the first take the best one. The willingness to go again, to try something slightly differently, to be patient enough to wait for the moment when everything comes together, is one of the things that separates a great shoot from an adequate one."
      },
      {
        "t": "h2",
        "x": "B-roll and cutaway footage"
      },
      {
        "t": "p",
        "x": "Alongside the main interview or performance footage, almost every production requires b-roll, the supplementary footage that an editor will use to illustrate what's being said, break up the visual rhythm of the cut, and add texture and context to the film."
      },
      {
        "t": "p",
        "x": "B-roll might be footage of a workspace, a product being used, a team in action, a location being explored, or any number of other visual elements that support the story. It's often filmed in a more run-and-gun style than the main setup, the camera moving through a space, capturing moments and details that can be assembled in the edit."
      },
      {
        "t": "p",
        "x": "B-roll is sometimes treated as an afterthought, particularly when the schedule is tight. This is a mistake. The b-roll is often what gives a film its visual richness and its sense of place. A generous allocation of time for b-roll filming almost always pays off in the edit."
      },
      {
        "t": "h2",
        "x": "What clients should and shouldn't do on set"
      },
      {
        "t": "p",
        "x": "The client's role on a shoot day is a genuinely important one, but it's different from what many clients expect."
      },
      {
        "t": "p",
        "x": "Your job is not to direct the shoot. That's the director's job, and having multiple voices giving direction to the talent creates confusion and slows everything down. Your job is to be available, to answer questions about the content, to flag if something being said is factually incorrect or doesn't reflect your organisation's position, and to make decisions quickly when decisions need to be made."
      },
      {
        "t": "p",
        "x": "The best thing a client can do on set is watch and trust. Watch what's being captured. Trust that the crew knows what they're doing. And raise concerns through the director, privately and calmly, rather than in front of the subject or the wider crew."
      },
      {
        "t": "p",
        "x": "One practical note: be decisive. Shoot days move fast, and the cost of indecision, in time, in crew fees, in the momentum of the day, is significant. If you need to make a call about something, make it. You can always refine it in post."
      },
      {
        "t": "h2",
        "x": "When things don't go to plan"
      },
      {
        "t": "p",
        "x": "They will. Not always, not dramatically, but some degree of deviation from the plan is a feature of almost every shoot day. A location that looks different to the recce. A contributor who arrives late, or is more nervous than expected. A technical issue that takes twenty minutes to resolve. Weather that changes the available light."
      },
      {
        "t": "p",
        "x": "The measure of a good production team isn't whether things go smoothly, it's how quickly and quietly they solve problems when they don't. An experienced crew has seen most of it before. They have contingencies, they make decisions fast, and they don't create drama around problems that are solvable. You'll often not even be aware that something has gone sideways, because it was dealt with before it reached you."
      },
      {
        "t": "p",
        "x": "If something significant changes, a location falls through, a key contributor can't attend, the production manager will bring you into the conversation immediately and work through the options together. These situations are rare, but they happen, and transparent communication is the only way to navigate them well."
      },
      {
        "t": "h2",
        "x": "The wrap"
      },
      {
        "t": "p",
        "x": "At the end of the day, or whenever the shot list has been completed, the director will call a wrap. This is the formal end of filming, and it's followed by the pack-down: equipment is dismantled, cases are repacked, locations are returned to their original state, and the camera cards containing all the day's footage are logged and backed up."
      },
      {
        "t": "p",
        "x": "The backup process is non-negotiable and happens on set before anything else is done. Footage is copied to at least two separate drives, both of which leave the location separately. Losing footage from a shoot day is an almost unrecoverable situation, and the protocols around it reflect how seriously good production companies take their responsibility to protect what has been captured."
      },
      {
        "t": "p",
        "x": "Once the wrap is called, the focus shifts to post-production. The shoot day is over, but the work of making the film is just beginning."
      },
      {
        "t": "p",
        "x": "Planning a production and not sure what to expect?"
      },
      {
        "t": "p",
        "x": "We walk every client through the process before we get to set. Get in touch and we'll make sure you're prepared for everything a shoot day involves."
      }
    ],
    "href": "/blog/what-happens-on-a-shoot-day"
  },
  {
    "slug": "video-for-the-health-sector",
    "img": "uploads/11 health sector blog image.webp",
    "title": "Video for the Health Sector: Why Getting it Right Matters",
    "metaDesc": "Healthcare video comes with unique responsibilities. Here's what makes great health sector content, and the pitfalls that undermine it.",
    "lead": "Healthcare communication has always mattered. Video has made it more powerful, and more demanding, than ever.",
    "blocks": [
      {
        "t": "p",
        "x": "There are very few sectors where the quality of communication has a more direct impact on real outcomes than healthcare. A patient education film that explains a treatment clearly can improve adherence, reduce anxiety and lead to measurably better clinical results. A poorly made one can confuse, mislead or, in the worst cases, cause genuine harm. That's a level of responsibility that most marketing content doesn't carry. And it's why healthcare video production is a discipline that demands more than good filmmaking. It demands a specific understanding of the sector, the audiences it serves, and the obligations that come with communicating in a space where the stakes are genuinely high."
      },
      {
        "t": "h2",
        "x": "Why healthcare video is different"
      },
      {
        "t": "p",
        "x": "Every sector has its specific demands, but healthcare has a combination of characteristics that make it particularly exacting."
      },
      {
        "t": "p",
        "x": "The audiences are exceptionally diverse. A single health organisation might need to communicate with patients who have no clinical knowledge, GPs who have significant clinical knowledge but limited time, specialists who want detailed technical information, commissioners who think in terms of systems and budgets, and the general public who encounter health content in a context of varying levels of trust and anxiety. These are not the same audience, and content that works for one will often fail completely for another."
      },
      {
        "t": "p",
        "x": "The regulatory environment is complex and unforgiving. Claims made in healthcare content, about treatments, products, outcomes or services, are subject to strict regulatory oversight. The Medicines and Healthcare products Regulatory Agency (MHRA), the Advertising Standards Authority (ASA), and the Association of the British Pharmaceutical Industry (ABPI) all have codes and guidelines that govern what can and can't be said, and how it can be said. Getting this wrong isn't just an embarrassment, it can result in regulatory action, reputational damage and, in some cases, patient harm."
      },
      {
        "t": "p",
        "x": "The emotional stakes are high. People encountering health content are often vulnerable, anxious about a diagnosis, navigating a complex treatment decision, trying to understand something that will directly affect their quality of life or that of someone they care about. Content that fails to acknowledge this emotional context, or that communicates in a way that increases rather than reduces anxiety, is doing a disservice to the people it's supposed to help."
      },
      {
        "t": "h2",
        "x": "The compliance challenge"
      },
      {
        "t": "p",
        "x": "For anyone who hasn't produced healthcare content before, the compliance process can come as a shock. In pharmaceutical and medical device production in particular, every word of a script, every claim, every reference, every piece of data, needs to be evidenced, reviewed and signed off by medical affairs and regulatory teams before filming begins. Changes requested after filming are expensive and disruptive. Changes requested after editing are more so. The way to handle this isn't to treat compliance as an obstacle to be managed at the end of the process. It's to build it into the process from the very beginning."
      },
      {
        "t": "p",
        "x": "That means involving medical affairs and regulatory stakeholders in the scripting and concept development phase, not just the review phase. It means building sufficient review time into the production schedule, not the two days that feels tight, but the two weeks that reflects the reality of how long a proper review takes in a large organisation. It means being specific about claims and evidencing them properly, rather than relying on language that sounds reasonable but can't be substantiated."
      },
      {
        "t": "p",
        "x": "Production companies that work regularly in the healthcare sector understand this rhythm. They build compliance into their workflows rather than treating it as an external constraint, and they know how to write and structure content that is both creatively strong and regulatory-compliant, the two things are not mutually exclusive, but achieving both requires experience."
      },
      {
        "t": "h2",
        "x": "Patient-facing content: the clarity imperative"
      },
      {
        "t": "p",
        "x": "Of all the different types of healthcare video content, patient-facing material carries the greatest responsibility, and has the greatest potential for positive impact when it's done well. The challenge is clarity. Medical information is inherently complex, and the instinct of clinicians and medical affairs teams is often to include more information rather than less, in the interest of accuracy and completeness. This is understandable, but it frequently produces content that is technically accurate and practically unusable, too dense, too jargon-heavy and too cognitively demanding for a patient who is already dealing with the stress of a health situation. The evidence on health literacy is sobering. A significant proportion of the UK adult population struggles with health-related written information. Video addresses some of this challenge automatically, moving images and spoken language are easier to process than dense text, but only if the content itself is designed with clarity as the primary objective. This means plain language, not clinical language. It means one clear message per film, not a comprehensive information download. It means testing content with real patients before finalising it, not just with clinical reviewers. And it means being willing to leave things out, to trust that a patient who understands one thing clearly is better served than a patient who has been overwhelmed with ten things partially."
      },
      {
        "t": "h2",
        "x": "Professional-facing content: credibility is everything"
      },
      {
        "t": "p",
        "x": "At the other end of the spectrum, content aimed at healthcare professionals, GPs, consultants, pharmacists, nurses, operates in a completely different register. Professional audiences are time-poor and expert. They have no patience for oversimplification, no interest in content that treats them as if they've never encountered the subject before, and a finely calibrated sensitivity to anything that feels promotional rather than informative. They are also the gatekeepers to patient access, which means that content designed to influence their clinical decisions carries both significant commercial value and significant ethical weight. The best professional-facing healthcare video is built around genuine clinical value. It provides information that helps clinicians make better decisions, understand a treatment more fully, or stay current with an evolving evidence base. It is specific, evidence-based and honest, including about limitations and side effects, not just benefits. And it is produced to a standard that reflects the professional context in which it will be viewed."
      },
      {
        "t": "p",
        "x": "Cutting corners in professional-facing healthcare content doesn't just produce poor results, it actively undermines credibility. A poorly produced or factually thin film signals that the brand doesn't take its professional audience seriously, and that is an impression that is very difficult to recover from."
      },
      {
        "t": "h2",
        "x": "The role of storytelling in healthcare"
      },
      {
        "t": "p",
        "x": "Given everything above, it might seem as though healthcare video is necessarily dry, a world of regulatory constraints and clinical language that leaves little room for the kind of storytelling that makes video compelling."
      },
      {
        "t": "p",
        "x": "It isn't. The best healthcare content combines rigorous accuracy with genuine human storytelling, and the results can be extraordinary."
      },
      {
        "t": "p",
        "x": "A patient sharing their experience of a treatment, honestly, specifically, without the sanitised language of a corporate testimonial, can communicate something that a clinical data set never could. A clinician speaking with genuine passion about the impact of a new approach on their patients' lives is more persuasive than any promotional claim. A documentary that follows the journey of a patient through a healthcare system, showing the real human stakes of good and poor communication, can change how an entire organisation thinks about the content it produces."
      },
      {
        "t": "p",
        "x": "These films are harder to make than straightforward informational content. They require access, trust, patience and real documentary skill. But when they work, when the human truth of a healthcare story is told with the craft it deserves, they produce something that generic health information content cannot: content that people actually watch, remember and act on."
      },
      {
        "t": "h2",
        "x": "Working in the health sector"
      },
      {
        "t": "p",
        "x": "Healthcare video production is not a discipline you want to learn on the job. The combination of regulatory complexity, audience sensitivity and genuine responsibility for outcomes demands experience, both in the craft of filmmaking and in the specific demands of the sector. If you're commissioning health sector video content, the questions worth asking a production company are not just about their general capability. Ask whether they've worked in your specific area of the sector. Ask how they approach the compliance process. Ask to see examples of patient-facing and professional-facing content they've produced. The answers will tell you quickly whether you're talking to someone who understands what's actually involved. Working on a healthcare video project?"
      },
      {
        "t": "p",
        "x": "It's a space we know well. Get in touch and we'll talk through what your project needs, and how to navigate the specific challenges that come with it."
      }
    ],
    "href": "/blog/video-for-the-health-sector"
  },
  {
    "slug": "how-to-build-a-video-content-strategy",
    "img": "uploads/12 video content strategy blog.webp",
    "title": "How to Build a Video Content Strategy for the Year Ahead",
    "metaDesc": "Planning your video content for the year ahead? Here's a practical framework for building a strategy that delivers against your marketing objectives.",
    "lead": "Most brands don't have a video strategy. They have a collection of individual videos. Here's the difference, and why it matters.",
    "blocks": [
      {
        "t": "p",
        "x": "At some point in the year, usually around budget-setting time, most marketing teams have a version of the same conversation. How much should we spend on video? What should we make? What worked last time, and what didn't? The answers are often driven by what's most urgent, what a senior stakeholder has asked for, or what the team happens to have capacity to deliver. What they're rarely driven by is a coherent strategy."
      },
      {
        "t": "p",
        "x": "The distinction between having a video strategy and having a collection of individual video projects isn't just semantic. A strategy means that every piece of content you make has a defined purpose, a specific audience, a clear place in the broader marketing effort, and a way of measuring whether it's working. Individual projects, produced in isolation, often lack all four. The result is a body of video content that costs a lot to produce, is hard to evaluate, and doesn't compound, each piece starting from zero rather than building on what came before. Building a proper video content strategy doesn't have to be complicated. Here's a practical framework for doing it."
      },
      {
        "t": "h2",
        "x": "Start with objectives, not formats"
      },
      {
        "t": "p",
        "x": "The most common mistake in video strategy planning is starting with the content. What videos should we make this year? Should we do more social content, or focus on a big brand film? Should we launch a podcast?"
      },
      {
        "t": "p",
        "x": "These are format questions, and they're the wrong ones to start with. The right starting point is the business objective. What does your organisation most need to achieve in the next twelve months, and where can video contribute most effectively to that?"
      },
      {
        "t": "p",
        "x": "The answer might be generating more leads at the top of the funnel. It might be improving conversion at the consideration stage. It might be reducing churn by improving how customers understand and use your product. It might be building employer brand to attract better talent. It might be all of these things, in which case you need to prioritise."
      },
      {
        "t": "p",
        "x": "Once you know what video needs to achieve, the format question becomes much easier. Content built to generate awareness looks different to content built to support a sales conversation. Content built to retain customers looks different to content built to recruit employees. Starting from the objective keeps the creative and production decisions grounded in something real."
      },
      {
        "t": "h2",
        "x": "Map your content to the funnel"
      },
      {
        "t": "p",
        "x": "A useful discipline in video strategy is to map your planned content against the stages of your marketing and sales funnel, awareness, consideration and decision, and make sure you're not over-indexing on one stage at the expense of others."
      },
      {
        "t": "p",
        "x": "Most brands, when they audit their existing video content, discover that the majority of it sits at the awareness stage. Brand films, social content, company overviews, content designed to introduce the brand to new audiences. This is valuable, but it leaves significant gaps. Consideration-stage content, explainer videos, product demos, case studies, thought leadership, is where video can have a direct impact on the decision-making process of people who are already aware of you and evaluating their options. This is often the content with the clearest commercial impact, and it's frequently under-invested in relative to its value. Decision-stage content, detailed testimonials, specific use-case films, content that addresses common objections, is often the most neglected category of all. Yet it's the content that sales teams most need, and the content that can make the difference between a prospect who converts and one who chooses a competitor."
      },
      {
        "t": "p",
        "x": "A balanced video content strategy covers all three stages, with a clear sense of what each piece is designed to do and how it connects to the next step in the customer journey."
      },
      {
        "t": "h2",
        "x": "The hero, hub and hygiene framework"
      },
      {
        "t": "p",
        "x": "One of the most useful frameworks for thinking about video content planning comes from Google's content strategy model: hero, hub and hygiene."
      },
      {
        "t": "p",
        "x": "Hero content is the big stuff, the high-production brand films, the major campaign launches, the content designed to generate significant awareness and reach. You don't need a lot of it. One or two hero pieces a year is typically enough, provided they're ambitious and well-executed. Hero content earns attention rather than paying for it, and it sets the tone and ambition for everything else."
      },
      {
        "t": "p",
        "x": "Hub content is the regular, recurring content that keeps your brand present and relevant, the always-on social series, the monthly thought leadership films, the podcast. Hub content builds habit and relationship over time. It's not designed to go viral; it's designed to deepen the connection with an audience that already knows you."
      },
      {
        "t": "p",
        "x": "Hygiene content is the functional stuff, the product explainers, the how-to videos, the FAQ films. It's designed to be found by people who are actively searching for the information it provides, and to answer their questions clearly and helpfully. It's often the least glamorous category, but it drives consistent organic traffic and supports both the sales process and the customer experience."
      },
      {
        "t": "p",
        "x": "A good video content strategy has all three. Most brands have some hero content and some hygiene content, and neglect hub content entirely. The result is a pattern of occasional big launches with nothing in between, peaks of activity followed by long silences that erode the audience relationship built during the peak."
      },
      {
        "t": "h2",
        "x": "Build a realistic production plan"
      },
      {
        "t": "p",
        "x": "Once you know what you want to make, the next step is working out whether you can actually make it. This is where strategy meets reality, and where a lot of video content plans fall apart. The most common mistake is underestimating both the time and the cost involved in producing video content to a professional standard. A social content series that looks simple to produce often involves significantly more resource than it appears to. A brand film that's been scoped at a certain budget frequently needs more to deliver the quality the brief demands. The planning questions worth asking: How many shoot days will this require? What post-production resource does it need? How long is the approval process likely to take? Are there fixed points in the calendar, product launches, events, campaign dates, that create hard deadlines?"
      },
      {
        "t": "p",
        "x": "Being honest about these questions early is significantly less painful than discovering the answers under pressure later. A production plan that builds in realistic timelines, accounts for the approval process, and doesn't assume everything will go perfectly is one that is far more likely to deliver what was promised."
      },
      {
        "t": "h2",
        "x": "Think about distribution from the start"
      },
      {
        "t": "p",
        "x": "One of the most common and costly mistakes in video strategy is producing content without a clear distribution plan. The film gets made, it's delivered to the marketing team, and then the question of where it actually goes gets figured out retrospectively. This is almost always suboptimal."
      },
      {
        "t": "p",
        "x": "Distribution should be part of the brief, not an afterthought. Where will this content live? How will it be promoted? What budget exists for paid distribution alongside organic? Are there PR or partnership opportunities that could extend its reach? How will it be adapted for different platforms and contexts?"
      },
      {
        "t": "p",
        "x": "Thinking about distribution from the start also shapes the production itself. A film designed to work on a brand's website homepage is a different brief to one designed to work as a LinkedIn ad. A documentary intended for YouTube has different pacing and structural requirements to one that will be shown at a live event. Getting these decisions made before production begins, not after, produces better content and better outcomes."
      },
      {
        "t": "h2",
        "x": "Measure what matters"
      },
      {
        "t": "p",
        "x": "The final element of a proper video content strategy is a clear framework for measuring success. This sounds obvious, but it's surprisingly rare in practice. Video content is often evaluated on vanity metrics, views, likes, shares, that feel meaningful but don't tell you whether the content is actually achieving its objective."
      },
      {
        "t": "p",
        "x": "The right metrics depend on the objective. Awareness content should be measured on reach, brand recall and sentiment. Consideration content should be measured on engagement, time spent and downstream intent signals. Decision-stage content should be measured on its direct contribution to conversion, leads generated, proposals supported, deals influenced. Getting this right requires agreement upfront, before the content is made, on what success looks like and how it will be measured. It also requires the infrastructure to capture the data, proper tracking, integration with CRM systems, a methodology for attributing commercial outcomes to specific content. This is work worth doing. Content that can demonstrate its impact is content that gets funded again."
      },
      {
        "t": "h2",
        "x": "Putting it together"
      },
      {
        "t": "p",
        "x": "A video content strategy doesn't need to be a complex document. At its simplest, it's a clear answer to four questions: what are we trying to achieve, who are we trying to reach, what content will we make to get there, and how will we know if it's working?"
      },
      {
        "t": "p",
        "x": "The brands that answer those questions clearly, and build their production plans around the answers, consistently get more value from their video investment than the ones that don't. They make fewer pieces of content, but better ones. They spend their production budget more deliberately, and the results show."
      },
      {
        "t": "p",
        "x": "If there's one resolution worth making for the year ahead, it's to treat video as a strategic asset rather than a tactical output. The difference in results is significant, and the discipline required to get there is less demanding than most teams assume."
      },
      {
        "t": "p",
        "x": "Ready to build a video content strategy for the year ahead?"
      },
      {
        "t": "p",
        "x": "It's one of our favourite conversations to have. Get in touch and let's plan something worth making."
      }
    ],
    "href": "/blog/how-to-build-a-video-content-strategy"
  }
];

// ── Pricing page ──

export const pricingBands: PricingBand[] = [
      { key: "single", num: "01", name: "Single day shoot & edit", price: "£4,500", tag: "",
        includes: ["1 day shoot, one location, interviews and b-roll", "A small crew (DoP + sound)", "1 × 1–2 minute film", "Social cutdowns, versioned for your channels"],
        idealFor: "Interview-led brand content, talking-heads series, product films and simple case studies." },
      { key: "director", num: "02", name: "Director-led shoot & edit", price: "£9,500", tag: "Most briefs land here",
        includes: ["Two shoot days, multicam, across locations or setups", "Director-led, with a fuller crew", "A treatment and shot plan before we roll", "1 × 1.5–3 minute film + a family of social cutdowns"],
        idealFor: "Recruitment films, multi-stakeholder case studies, event-led content and founder stories." },
      { key: "full", num: "03", name: "Full production", price: "£18,000", tag: "",
        includes: ["Creative development and full pre-production", "Concept, treatment, scripting and storyboards", "Location scouting, casting and shoot logistics", "1 × 2–4 minute film + social cutdowns"],
        idealFor: "Corporate films, brand films and campaign content with more moving parts." },
];

export const pricingFaqItems: Faq[] = [
      { q: "Why does video production cost what it does?", a: "Because you're paying for skilled professionals - directors, camera operators, sound recordists, editors, colourists - along with professional equipment and more working time than people expect. A two-minute film might represent two or three weeks of work by the time everything is done properly." },
      { q: "Can you work within a fixed budget?", a: "Yes. If you come to us with a budget, we'll tell you honestly what's achievable within it. Sometimes that means scaling the brief, sometimes the budget fits exactly. Either way, you'll know upfront." },
      { q: "Do you charge for the initial conversation?", a: "No. We're happy to discuss your project, sense-check your budget, and give you a realistic picture of what's involved, before you've committed to anything." },
      { q: "What's included as standard?", a: "Every quote covers up to three rounds of edit amends, a master copy of each deliverable, and six months of asset archiving. Our rates are based on a ten-hour shooting day." },
      { q: "How and when do we pay?", a: "We ask for 50% upfront before work begins, with the balance due on delivery. Quotes are valid for 30 days, and once accepted, any change to the scope is agreed and re-priced before we proceed." },
];
