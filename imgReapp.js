  /*
	Reappraisal Images and Reappraisals 

	Liz Song, <lizsong@stanford.edu>
	May, 2021
*/

var reapp_low = '[ \
    { "img": "img/1271.jpg", "reappraisal": "The bugs look like they are happy and healthy in their enclosure" }, \
    { "img": "img/1301.jpg", "reappraisal": "The dog is excited and salivating to eat a piece of food being thrown to it" }, \
    { "img": "img/2278.jpg", "reappraisal": "The girls may be looking up at the sky and cloudwatching" }, \
    { "img": "img/2312.jpg", "reappraisal": "The boy is sad because he did not want to leave the park and his mom is consoling him" }, \
    { "img": "img/2399.jpg", "reappraisal": "The woman is having a hard time deciding what to eat for dinner" }, \
    { "img": "img/1111.jpg", "reappraisal": "These snakes aren\'t trying to hurt me. They\'re living a happy life."},\
    { "img": "img/1270.jpg", "reappraisal": "The insect\'s shimmering exoskeleton is beautiful. The insect is not that big in real life."},\
    { "img": "img/1274.jpg", "reappraisal": "These insects may be scary, but they are an important part of our ecosystem."},\
    { "img": "img/1275.jpg", "reappraisal": "The insects aren\'t that big in real life."},\
    { "img": "img/1280.jpg", "reappraisal": "The rat is nowhere near me. It can\'t affect me."},\
    { "img": "img/2120.jpg", "reappraisal": "The cops could protect me from this man."},\
    { "img": "img/2456.jpg", "reappraisal": "These people must be overcome with joy because they just won a huge prize."},\
    { "img": "img/2490.jpg", "reappraisal": "The man is probably in a nursing home where people can help him."},\
    { "img": "img/2590.jpg", "reappraisal": "The old woman will feel better soon because she has someone there to help her."},\
    { "img": "img/2682.jpg", "reappraisal": "This officer will protect us so that we are safer than we would be otherwise."},\
    { "img": "img/2691.jpg", "reappraisal": "These people are fighting for an issue they care about and things will get better soon. Humans have enacted a lot of social change in the past and will continue to do so in the future."},\
    { "img": "img/2692.jpg", "reappraisal": "The person is just making this weapon as a movie prop"},\
    { "img": "img/2700.jpg", "reappraisal": "These women just learned that they won the right to vote."},\
    { "img": "img/2722.jpg", "reappraisal": "Things will be better once the man gets out of prison. In fact, there are organizations that will help him find a job even better than before he went to prison."},\
    { "img": "img/2753.jpg", "reappraisal": "We could help the man by sending him to an Alcoholics Anonymous meeting."},\
    { "img": "img/2795.jpg", "reappraisal": "The boy is just delivering flowers to his mom and it happens to be raining outside."},\
    { "img": "img/3216.jpg", "reappraisal": "The doctors there will save the man\'s life; everything will be okay."},\
    { "img": "img/3280.jpg", "reappraisal": "After going to the dentist, this boy will have cleaner and healthier teeth than he would have otherwise."},\
    { "img": "img/6010.jpg", "reappraisal": "This man committed a terrible crime and deserves to be in prison."},\
    { "img": "img/6190.jpg", "reappraisal": "This is just a scene from a movie where someone fires a gun."},\
    { "img": "img/6561.jpg", "reappraisal": "The woman is in an emotional state, but the man is there to comfort her. She will let him in and he will help her."},\
    { "img": "img/6562.jpg", "reappraisal": "The woman can stay calm and do what is asked of her until the cops arrive to help."},\
    { "img": "img/6836.jpg", "reappraisal": "This man committed a terrible crime and justice is being served."},\
    { "img": "img/7092.jpg", "reappraisal": " This person\'s weight does not affect me. I am my own person with my own body."},\
    { "img": "img/7135.jpg", "reappraisal": "Car accidents happen sometimes. Everyone in the car is safe and unharmed."},\
    { "img": "img/7359.jpg", "reappraisal": "If the bug on the plate is gross, I don\'t have to eat the pie. "},\
    { "img": "img/7360.jpg", "reappraisal": "If the bug on the plate is gross, I don\'t have to eat the pie. "},\
    { "img": "img/7361.jpg", "reappraisal": "That is not actually the man\'s hand, he is just grinding some meat to cook. "},\
    { "img": "img/7520.jpg", "reappraisal": "It is great that the hospital beds are empty because their occupants have recovered and gone home."},\
    { "img": "img/7521.jpg", "reappraisal": "Hospitals can be scary, but they help save a lot of lives so they are important to society."},\
    { "img": "img/8231.jpg", "reappraisal": "The man took a hard loss, but now he will be motivated to work harder and come back better than he would have been otherwise. "},\
    { "img": "img/9001.jpg", "reappraisal": "There\'s nobody that I know here in this graveyard, so it\'s not that sad."},\
    { "img": "img/9002.jpg", "reappraisal": "This person is in a better place now."},\
    { "img": "img/9008.jpg", "reappraisal": "This will actually be used for important scientific work. "},\
    { "img": "img/9010.jpg", "reappraisal": "This fence is a historical artifact that does not affect me."},\
    { "img": "img/9031.jpg", "reappraisal": "This person can get home and take a shower to clean off. "},\
    { "img": "img/9041.jpg", "reappraisal": "This girl\'s caregiver will come cheer her up."},\
    { "img": "img/9045.jpg", "reappraisal": "Things are not that bad because the baby and woman look happy and healthy and the monkey is being fed."},\
    { "img": "img/9046.jpg", "reappraisal": "This family is together and their story is being told. They are not going unnoticed so their situation will improve soon. "},\
    { "img": "img/9090.jpg", "reappraisal": "Cars release harmful gases into the environment, but environmentalists and car manufacturers are working hard to change that."},\
    { "img": "img/9101.jpg", "reappraisal": "People who are addicted to drugs can get help in rehabilitation centers."},\
    { "img": "img/9102.jpg", "reappraisal": "I don\'t know this person; their actions don\'t affect me."},\
    { "img": "img/9110.jpg", "reappraisal": "This oil can be cleaned up so that it is not dangerous. "},\
    { "img": "img/9120.jpg", "reappraisal": "The boy is safe because he is very far away from the black clouds of smoke."},\
    { "img": "img/9145.jpg", "reappraisal": "This animal is suffering, but it will be out of its misery soon."},\
    { "img": "img/9160.jpg", "reappraisal": "This man is proud to be serving his country, and his country is proud to have him as a representative. "},\
    { "img": "img/9171.jpg", "reappraisal": "These fish are important to these peoples\' culture. They will go to good use."},\
    { "img": "img/9180.jpg", "reappraisal": "These sea lions suffered, but there is no way to change that. Many people and organizations are working hard to prevent situations like this in the future."},\
    { "img": "img/9182.jpg", "reappraisal": "These horses lived a long, happy life together and passed on peacefully."},\
    { "img": "img/9190.jpg", "reappraisal": "This person seems hot and uncomfortable, but it will be better once the sun goes down."},\
    { "img": "img/9270.jpg", "reappraisal": "The person is safe because they are wearing protective gear."},\
    { "img": "img/9280.jpg", "reappraisal": "This is just the way our cities look because big factories give us the comforts of modern life. "},\
    { "img": "img/9290.jpg", "reappraisal": "The trash can be cleaned up to make this place even nicer than before."},\
    { "img": "img/9291.jpg", "reappraisal": "The trash is compact enough to be picked up by the next garbage truck."},\
    { "img": "img/9330.jpg", "reappraisal": "This city is very far away from me, I will never have to walk down these streets."},\
    { "img": "img/9331.jpg", "reappraisal": "The man is in better condition than he could be because he has clean clothes and shoes."},\
    { "img": "img/9341.jpg", "reappraisal": "The boy will be okay because he is light enough to make it to the other side of the river on the debris."},\
    { "img": "img/9342.jpg", "reappraisal": "Disasters like this are a natural occurrence. Humanitarian efforts will help this man and his home."},\
    { "img": "img/9360.jpg", "reappraisal": "The pool has not been used for a few years, but it can be fixed up to look brand new in no time."},\
    { "img": "img/9373.jpg", "reappraisal": "This is not real. it is just gore used in for a movie stunt."},\
    { "img": "img/9390.jpg", "reappraisal": "There are not that many dishes here. It will only take a few minutes to clean."},\
    { "img": "img/9404.jpg", "reappraisal": "We are proud of these people for representing our country. They are protecting us even though it is dangerous."},\
    { "img": "img/9415.jpg", "reappraisal": "These people are in line to receive care or benefits that will make their lives better."},\
    { "img": "img/9417.jpg", "reappraisal": "The driver broke the law and thus deserves to get a ticket."},\
    { "img": "img/9426.jpg", "reappraisal": "These people are just actors in a movie."},\
    { "img": "img/9427.jpg", "reappraisal": "I am very far away from this situation and will never have to participate."},\
    { "img": "img/9440.jpg", "reappraisal": "These skulls are just movie props."},\
    { "img": "img/9445.jpg", "reappraisal": "This skull is from someone who lived a happy, healthy life long ago."},\
    { "img": "img/9452.jpg", "reappraisal": "These men were committing an act of public indecency and deserve to be punished."},\
    { "img": "img/9469.jpg", "reappraisal": "This house has fallen into disrepair, but it can be renovated to look even better than brand new."},\
    { "img": "img/9470.jpg", "reappraisal": "This was a disaster, but the area will slowly be rebuilt over time."},\
    { "img": "img/9471.jpg", "reappraisal": "Corporations with money and power will want this shopping center back and will have it renovated."},\
    { "img": "img/9530.jpg", "reappraisal": "The boys are far away from the dark buildings and are getting closer to someone who can help them. "},\
    { "img": "img/9584.jpg", "reappraisal": "This man is having his teeth cleaned so that he will be in better condition than before."},\
    { "img": "img/9590.jpg", "reappraisal": "This person is just receiving a routine medical procedure that will help them in the long run."},\
    { "img": "img/9592.jpg", "reappraisal": "This person is having blood drawn so they can save others\' lives."},\
    { "img": "img/9594.jpg", "reappraisal": "This person is having blood drawn so they can save others\' lives."},\
    { "img": "img/9610.jpg", "reappraisal": "The plane may have crashed but all the passengers made it out unharmed."},\
    { "img": "img/9912.jpg", "reappraisal": "This crash did not happen to me, it does not affect me in any way."},\
    { "img": "img/9926.jpg", "reappraisal": "The people are still able to touch the ground, they can make it out of the water just fine."}\
]';

var reapp_high = '[ \
    { "img": "img/blue.png", "reappraisal": "this is a blue circle" }, \
    { "img": "img/orange.png", "reappraisal": "this is an orange circle" }, \
    { "img": "img/2053.jpg", "reappraisal": "Skilled doctors will be able to help this premature baby to a healthy condition."},\
    { "img": "img/2730.jpg", "reappraisal": "The child is just playing with the animals and will get cleaned up later."},\
    { "img": "img/2800.jpg", "reappraisal": "The parents of the crying child have the abilities and skills to handle the situation and stop their child\'s distress."},\
    { "img": "img/3000.jpg", "reappraisal": "The man is lucky to be alive, and the injury is less painful than it looks."},\
    { "img": "img/3005.1.jpg", "reappraisal": "The image is of a prop from a horror movie, and it is not a real child."},\
    { "img": "img/3010.jpg", "reappraisal": "The man will receive medical help and make a miraculous recovery."},\
    { "img": "img/3015.jpg", "reappraisal": " I have no relation whatsoever to this person or situation, their pain does not impact me."},\
    { "img": "img/3030.jpg", "reappraisal": "The situation is not that bad because the man\'s wounds look clean and he is resting."},\
    { "img": "img/3060.jpg", "reappraisal": "Injuries and accidents happen to people, that\'s the unfortunate way life is."},\
    { "img": "img/3064.jpg", "reappraisal": "The people who committed this crime will be brought to justice and face the consequences."},\
    { "img": "img/3068.jpg", "reappraisal": "This is an image from a crime TV show, the situation is staged and not real."},\
    { "img": "img/3071.jpg", "reappraisal": "I am not emotionally impacted by this situation, it is of no relation to me."},\
    { "img": "img/3080.jpg", "reappraisal": "The man is receiving medical care and the doctors will do the best they can to help him."},\
    { "img": "img/3100.jpg", "reappraisal": "This burn victim can take the necessary steps to heal, according to the detailed standards of care for burn injuries."},\
    { "img": "img/3101.jpg", "reappraisal": "The man is very lucky that he is alive. The situation could be much worse."},\
    { "img": "img/3102.jpg", "reappraisal": "This image is from a movie, and the blood and injury is not real."},\
    { "img": "img/3110.jpg", "reappraisal": "This is just a mummy prop for a movie."},\
    { "img": "img/3120.jpg", "reappraisal": "He\'s in a better place, no longer in pain."},\
    { "img": "img/3130.jpg", "reappraisal": "The man was a criminal and the injuries pictures were the results of an encounter with police, who saved a potential victim."},\
    { "img": "img/3140.jpg", "reappraisal": "These injuries will be healed in the future and the situation will soon improve."},\
    { "img": "img/3150.jpg", "reappraisal": "The hand can be salvaged if the proper steps are taken, such as calling 911 so that medical professionals can take over."},\
    { "img": "img/3168.jpg", "reappraisal": "This is a prop for a horror movie, the image is not of a real person."},\
    { "img": "img/3170.jpg", "reappraisal": "The baby is not in pain and is not suffering."},\
    { "img": "img/3180.jpg", "reappraisal": "The woman might be experiencing  abuse, but there are steps she can take to improve her situation, including contacting a social worker, the police, and reaching out to friends and family."},\
    { "img": "img/3230.jpg", "reappraisal": "Death is a part of the circle of life, he isn\'t the first nor last to experience a fatal disease."},\
    { "img": "img/3261.jpg", "reappraisal": "I am far away in distance and relation to this situation."},\
    { "img": "img/3266.jpg", "reappraisal": "The child is not in a lot of pain and his condition is actually very treatable."},\
    { "img": "img/3350.jpg", "reappraisal": "The child is malnourished, but he is now in the care of medical professions who will help him."},\
    { "img": "img/3400.jpg", "reappraisal": "This is an image from a thriller and horror movie, the hand is a fake prop."},\
    { "img": "img/3530.jpg", "reappraisal": "This situation is not irreversible— the conflict can be resolved before physical harm is done."},\
    { "img": "img/3550.jpg", "reappraisal": "The man is okay because the blood is not his."},\
    { "img": "img/6212.jpg", "reappraisal": "The child will escape this situation and find safety."},\
    { "img": "img/6230.jpg", "reappraisal": "You have been trained in detailed steps on what to do in this situation; you can talk down the gunman, so that he calms down, giving time for the police arrive."},\
    { "img": "img/6312.jpg", "reappraisal": "The girl depicted was kidnapped after she ran from home, but she is saved by the police and then better appreciates her comfortable home life and loving parents."},\
    { "img": "img/6313.jpg", "reappraisal": "There are detailed steps of what to do in this situation: once the scissors are put away, the girl can scream and fight in self defense, attacking sensitive areas in order to get away."},\
    { "img": "img/6315.jpg", "reappraisal": "What this image actually depicts is a father helping his daughter who was bitten in the neck by a large spider."},\
    { "img": "img/6350.jpg", "reappraisal": "The police and detectives have the abilities to locate this woman and bring her back to safety."},\
    { "img": "img/6360.jpg", "reappraisal": "This image is actually of a couple dancing and laughing."},\
    { "img": "img/6510.jpg", "reappraisal": "There are evil people in the world, this is not the first or last person who wants to harm another, it is an unfortunate truth."},\
    { "img": "img/6520.jpg", "reappraisal": "I am physically and emotionally very distance to this situation, it cannot hurt me."},\
    { "img": "img/6540.jpg", "reappraisal": "The police have the skills to help this woman and save her from the attacker."},\
    { "img": "img/6550.jpg", "reappraisal": "The woman will escape this situation and gain a greater appreciation for life that she would not have had this scary experience not occurred."},\
    { "img": "img/6570.jpg", "reappraisal": "Suicide can be prevented by calling the National Suicide Hotline."},\
    { "img": "img/6831.jpg", "reappraisal": "The police has the ability to bring the person who committed this crime to justice."},\
    { "img": "img/6838.jpg", "reappraisal": "I don\'t know the child in this image, and the situation is not related to me."},\
    { "img": "img/9040.jpg", "reappraisal": "Malnourishment is a global issue that humanitarians are working to address, with the ability to prevent future situations like this one."},\
    { "img": "img/9050.jpg", "reappraisal": "At least the people have each other to help them get through this difficult situation."},\
    { "img": "img/9181.jpg", "reappraisal": "Death is simply part of the circle of life."},\
    { "img": "img/9183.jpg", "reappraisal": "This photo was taken by animal rescue, who have brought the dog into their care now."},\
    { "img": "img/9250.jpg", "reappraisal": "The woman will be saved by the hardworking doctors pictured."},\
    { "img": "img/9252.jpg", "reappraisal": "This situation is very far from me geographically, and I have no relation to the injured person."},\
    { "img": "img/9300.jpg", "reappraisal": "The photo is of a crime scene, where careful steps can be taken to analyze the scene in order to find out what happened there."},\
    { "img": "img/9400.jpg", "reappraisal": "It is the inevitable reality that some soldiers will get injured when serving their country."},\
    { "img": "img/9410.jpg", "reappraisal": "This child will be okay and grow up to do amazing things in life."},\
    { "img": "img/9412.jpg", "reappraisal": "The man will be tended to by medical professionals and will end up healthy, despite his current situation."},\
    { "img": "img/9413.jpg", "reappraisal": "There is a rescue team dedicated to save these hostages, with the necessary skills to save these individuals."},\
    { "img": "img/9420.jpg", "reappraisal": "This situation is very far from me, and I have no relation to the people in danger."},\
    { "img": "img/9500.jpg", "reappraisal": "The animals depicted provide much-needed food for the surrounding community, and the contributions to society of these animal products outweigh the negatives."},\
    { "img": "img/9570.jpg", "reappraisal": "This animal is roadkill, and has simply decayed, it was not savagely killed and is in no pain."},\
    { "img": "img/9571.jpg", "reappraisal": "Unfortunately, accidents happen and animals are often killed by cars, but such is life."},\
    { "img": "img/9600.jpg", "reappraisal": "This ship\'s sinking caused no casualties, and in fact, its sinking led to better and safer boats than before."},\
    { "img": "img/9635.1.jpg", "reappraisal": "There are specific steps to take when on fire; obviously, it is important to call 911, but you may also try to stop, drop, and roll, or use a fire blanket before the first responders arrive."},\
    { "img": "img/9908.jpg", "reappraisal": "Despite the scary situation, the person in the car will be saved and will not be harmed."},\
    { "img": "img/9910.jpg", "reappraisal": "The driver survived the accident and is now a better, safer, and more aware driver as a result of this dangerous experience."},\
    { "img": "img/9911.jpg", "reappraisal": "This car suffered damage during a tornado, but there were no fatalities, as the car was empty. "},\
    { "img": "img/9921.jpg", "reappraisal": "The firefighters have the necessary skills to save these civilians and any other people trapped in the building."},\
    { "img": "img/209.jpg", "reappraisal": "The older brother will learn from the experience of taking care of his younger brother, invaluable lessons he would not gain otherwise."},\
    { "img": "img/212.jpg", "reappraisal": "These children have been saved from an abusive home, in the image they are safe now."},\
    { "img": "img/231.jpg", "reappraisal": "There are workers from the United Nations who have the skills to fight the hunger and poverty on display in the image."},\
    { "img": "img/232.jpg", "reappraisal": "In the near future, the child will be brought back to health will the help of medical professionals."},\
    { "img": "img/233.jpg", "reappraisal": "This situation is far from me geographically, and I don\'t know the child."},\
    { "img": "img/234.jpg", "reappraisal": "This is an image from a medical TV show, the injuries are all fake and staged."},\
    { "img": "img/235.jpg", "reappraisal": "The child\'s health issues will be over soon and his/her parents will realize how grateful they are for their child, leading them to raise him/her with even more love than had the child not had these medical issues."},\
    { "img": "img/236.jpg", "reappraisal": "Sometimes terrible injuries happen, but such is life, and the patient must accept that."},\
    { "img": "img/238.jpg", "reappraisal": "There is a strict protocol for such injuries, and if the patient and his care team follows through on these steps, the patient will be fine."},\
    { "img": "img/239.jpg", "reappraisal": "The child simply had a bloody nose, no serious injuries are pictured, so they will be fine."},\
    { "img": "img/240.jpg", "reappraisal": "This is an image from a movie about a natural disaster, the image is fake and staged with actors."},\
    { "img": "img/241.jpg", "reappraisal": "This image shows a man and his daughter who are reunited after a natural disaster, and this scary event brings the father and daughter closer together than before."},\
    { "img": "img/242.jpg", "reappraisal": "The person carrying the man has the ability to handle the situation."},\
    { "img": "img/243.jpg", "reappraisal": "I am very far from this situation, and this situation does not relate to me"},\
    { "img": "img/244.jpg", "reappraisal": "The child\'s injuries will be healed by careful doctors, and the child will be fine."},\
    { "img": "img/245.jpg", "reappraisal": "These people have escaped from a dangerous situation, this image shows them in safety."},\
    { "img": "img/246.jpg", "reappraisal": "The child is sick, but his illness is very treatable, so given that his doctors follow this treatment protocol, the child will end up okay."},\
    { "img": "img/247.jpg", "reappraisal": "This man is homeless and unfortunately, homelessness is an issue that is always present, this man is not the first nor last to experience it."},\
    { "img": "img/248.jpg", "reappraisal": "The man in the green shirt can handle the situation and has the abilities to help the man on the ground to safety."},\
    { "img": "img/249.jpg", "reappraisal": "This situation occurred during a protest that actually led to vast improvements in the community, left better off than before."},\
    { "img": "img/250.jpg", "reappraisal": "This man is lucky to even be alive and his injuries appear more serious than they really are."},\
    { "img": "img/251.jpg", "reappraisal": "She is in a better place, her suffering is over."},\
    { "img": "img/252.jpg", "reappraisal": "The man is being treated at a psychiatric ward and has a detailed treatment plan that will address his condition, so with following these steps, he will be able to reenter society."}\
    ]';

/*
	template: { "img": "img/1271.jpg", "reappraisal": "" }, \
	
	reminder: don't forget to remove comma after the last image in each array
*/