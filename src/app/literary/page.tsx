"use client";

import { BookOpen, Feather, Heart, Star, Moon, Sparkles, Pen } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const literaryWorks = [
  {
    title: "Whispers of Hanoi",
    language: "English",
    preview: `In the quiet hours when stars confess their secrets to the night sky, I find myself tracing the heartbeat of Hanoi — thirty-six streets woven with light, longing, and untold love.
Each alley hums a story, each lantern remembers a name. Step closer, and you might just hear the whispers between moonlight and memory. CLICK IN TO READ`,
    fullText: `36 ALLEYWAYS INTO THE PAST

Have you ever wondered how on earth can we conjure up a sense of what had faded away right within this modern world? Have you ever wondered if there exists a miraculous door bursting right onto the path of a whole new world, one coated with nostalgia and which cuddles the souls seeking the echoes of the past. This chimerical world is a sanctuary of simple intimacy, a refuge from the hurried pace of life, a solace against the restless assaults of the bustling of modernity. 

Hà Nội - The capital of the S-shaped land of thousand years of civilization, which has proved its long-lasting endurance throughout the millennial period of time. The city has graced my barren soul with the fluttering breeze of Spring, a resplendent ray of sunshine when Summer arrives, the gentle atmosphere of Fall and the hardy strength of Winter - the sole season that can bear the acts of God. From the unapologetically chaotic mornings to the calm, peaceful breaths of nighttime, I have always been proud of all facets of life here. Unbeknownst to me, my love for the people and the place has knitted itself into the very fabric of my being. Hà Nội has taken on a new exterior over the years, one of modernity and remarkable change, but beneath that exterior an extraordinary, ancient beauty is preserved, a serene essence that continues to provide consolation for fatigued souls yearning to return to the carefree days of youth and for the torrid spirits of the young seeking an evanescent break from the city's unrelenting pace.

Sometimes I am full of curiosity about a life like my grandparents’—a life they say is exquisitely old, stippled with poetic appeal, and infused with characteristics specific to their time. My peers and I, those young Vietnamese students, have internalized a poem since elementary school that, despite the fact that it is rarely recited word for word, clings to my memory like a relic from the past:

Let’s wander through Long Thành,
Thirty-six streets, clearly marked, no doubt remains.
Hàng Bồ, Hàng Bạc, Hàng Gai,
Hàng Buồm, Hàng Thiếc, Hàng Hài, Hàng Khay.
Mã Vĩ, Hàng Điếu, Hàng Giầy,
…
(Đặng Huy Thu)

I've always thought of the 36 streets as a separate world, one full of secrets and pleasures that wind through each alleyway and reflect the pride of the people who live in the capital. The lively scene of the 36 streets, however, often lacks potency at certain times in the viewpoint of a passing observer who never truly probes into and dissects its spirit to the molecular level. When I walk by the streets, even though my senses are supposed to be stimulated, they stay dulled and restricted to superficial sights as I pass each row of stores without much introspection. This has made my recollections of these streets over the years drab and ephemeral, like a black-and-white painting lacking the colorful strokes that give it life. 

As soft breezes blew past on a chilly autumn day in Hanoi, I was overcome with a desire to lose myself in a world of nostalgia and savor the splendor of every street, store, and culinary treat this city has to offer. Unbelievably, what started off as a quick sightseeing excursion filled me with rapture and anticipation, as though I were embarking on an adventure into a new country, a phantasmal world I had never seen before. I opened the door to that amazing world slowly as I followed the gentle fall air with my camera in hand and followed the aroma of milk flowers at every turn.

I. THE LIGHTS OF THE “WORLD”

Hàng Mã, Mã Vĩ: 
Hàng Mã is more than just a location where offerings are sold for religious rites or festive events; ever since I was a young child, I have been completely mesmerized every time my parents took me there for the Mid-Autumn Festival. Casting my gaze into the rays of light flickering from those luminous lanterns, I unintendedly fell into the trappings of the beauty of a forest with hundreds of fireflies glowing at night. And this scene, all of a sudden, was reminiscent of my childhood experience with Mid-Autumn Festival, when I was too scared of those strange traditional masks to rid myself from my father’s arms, but too captivated by the lanterns to catch sight of anything other than those “shining orbs”.

II. THE CLOTHES OF THE “WORLD”

Hàng Da, Hàng Đào, Hàng Bông, Hàng Gai, Hàng Hài, Hàng Giầy, and Hàng Ngang
Every time I enter a street like Hàng Đào that is lined with endless swaths of cloth and clothes, I am surrounded by the merchants' beckoning cries and never-ending grins. This atmosphere, gently blending with the scenery, flung me into a distant recollection of a decade ago, the first time I had ever dressed up with Áo Dài tailored from the soft pink fabric picked and choosed meticulously by the hands of my mother. It was not simply a sheer Tet holiday present that I received from my mother, but that Áo Dài was filled with maternal love inextricably intertwined with the sense of belonging to my “own world”. Not until I set a journey to pay a visit to these streets again and set my childhood eyes on those clothes did it dawn on me that perhaps it was time I bought such a meaningful present to my mother, just like she did to me as a virtue of love. 

III. THE ARTS OF THE “WORLD”

Hàng Bồ, Hàng Buồm, Hàng Mây:
Handicrafts have long been considered an old craft in Hanoi, according to Hàng Bồ, Hàng Buồm, and Hàng Mây. Every gorgeous handcrafted item fills the booths and gives the streets a remarkable allure that draws every tourist’s attention. Striding along the road, I longed to retrieve my vivid memories about Tò He in my childhood days - a traditional kind of toy for Vietnamese children sculptured from colored rice dough. It dealt a blow to me when there was no left trace of this activity, which more or less hindered my forward steps, though my past experience with it is something everlasting whenever I walk past those streets. But it was a sight for sore eyes when I still could cast my eyes on a variety of handmade traditional items, each was instilled with the unique features of my country and showcased all over the streets. 

IV. THE SCENTS OF THE “WORLD”

Hàng Khay, Hàng Mắm, Hàng Đậu, Hàng Gà, Hàng Bè:
Each street adds to the unique blend of aromas that permeate these lanes, making the mixture identifiable and unmatched. For many years, the stores that sell chicken, fish sauce, and tofu have flourished and changed, creating a legacy that has been upheld for many generations. The scents of this “world” are ordinary, familiar but irreplaceable by any other delicacies. They all jog my memory of my childhood meals when I stayed with my grandparents house every weekend and was taken to the nearby street-side Phở shop every single morning, from which the fragrant smell made its gentle move in the air and spread every nook and cranny. The look, the smell and the taste of those dishes awakened every corner of my senses and also the glimmering remnants of my past feelings.

……

I arrived at Hoan Kiem Lake. There was the moss-stained basin, with its disturbingly still surfaces, and around, there were the throngs of tourists that pushed to and fro. I squinted. And I suddenly felt lost. And yet relieved. Being surrounded by so many myths and people. So much of the past and the jostling present. The quiet grace and the ruthless chaos. And I dashed forward, flinging myself in the unforgiving current of mopeds and cars. That is when I unexpectedly escaped that “world” by way of the miraculous door once again, at which time I realized that 36 streets had, without any purpose, not necessary brought me into a “whole new world” but resurrected my “childhood world” in some ways that never sprang to my mind before. 

All of my feelings became ensnared in the inextricable resonance of 36 streets, the scent of crushing nostalgia and the sensation of the enchanting scenery. This excursion has definitely infused into my mind an everlasting sense of tranquility otherwise lacking in my life. And it has, satisfactorily, provided my curious mind with the answer to my original question; however, simultaneously and even unintendedly, provoked a new question to my insatiably inquisitive soul: Is there a sliver of chance that this “world” - 36 streets mingled with their surrounding whorls of scenery - will stand the test of time; or when I had another chance in a lifetime to set my foot on it again, I can no longer treat myself to those transcendental sensations?
`,
    icon: Moon,
    color: "cosmic-lilac"
  },
  {
    title: "The Little Dog with a Basket of Roses",
    language: "Vietnamese",
    preview: "After finishing The Little Dog with a Basket of Roses by Nguyễn Nhật Ánh, I found myself quietly overwhelmed — the kind of warmth that lingers long after you close the book. His words breathe life into the simplest bonds: love, loyalty, and the tender ache of growing up. Perhaps it touched me even more because I, too, have a dog — one who waits by the door, follows every step, and reminds me that affection doesn’t need language. Through Nguyễn Nhật Ánh’s storytelling, I rediscovered how deeply animals weave into our lives, carrying fragments of our hearts in their soft gazes and clumsy paws. It’s a story not only about dogs, but about us — our kindness, our loss, and the quiet, unwavering love that makes us human.",
    fullText: `Bạn đã bao giờ mở lòng đón nhận một chú chó, yêu thương nó như người bạn tri kỷ của mình chưa? Khi nhịp sống xung quanh quá đỗi vội vã, bạn có từng lặng lẽ ngắm nhìn nó trong từng khoảnh khắc giản đơn nhất, khi đôi mắt ngập tràn sự chân thành, như thể chỉ có bạn và nó tồn tại? Mỗi lần bạn cầm dĩa thức ăn, ánh nhìn của nó sáng lên, đôi tai vểnh cao, đuôi vẫy tít – những cử chỉ ngọt ngào như một lời cảm ơn không lời. Và liệu bạn đã bao giờ nuôi chú chó ấy như nuôi chính đứa con mình, âu lo với mỗi thay đổi nhỏ nhất? Khi bạn nhận ra ánh mắt lo lắng của nó khi bạn rời đi, hay khi sự mừng vui tíu tít hòa quyện với trái tim thổn thức tràn ngập yêu thương của nó được bừng lên khi bạn trở về, làm cho tâm hồn bạn như được chiếu rọi và sưởi ấm sau những bộn bề chất đống ngoài kia? Rồi khi đêm về, trong cái tĩnh lặng của không gian, bạn có bao giờ nhìn thấy nó ngồi im lặng trước cửa phòng bạn, đôi mắt sáng long lanh trong bóng tối, như muốn níu giữ từng khoảnh khắc bên bạn, không muốn xa rời dù chỉ một giây? Hơn tất thảy những điều giản đơn nhưng diệu kỳ trên, nếu bạn nuôi nhiều hơn một chú chó, liệu bạn có từng chứng kiến những trận "chiến đấu", những lúc chúng vui đùa, quấn quýt nhau trong tiếng gầm gừ rộn rã, như thể thế giới chỉ có chúng và những trò nghịch ngợm? Nhưng cũng có khi, trong những phút giây cuồng nhiệt ấy, chúng vồ lấy nhau, khiến cơ thể sứt mẻ, xây xước, và bạn, mặc dù xót xa, lại cảm nhận được một cách sâu sắc tình cảm gắn bó mà chúng dành cho nhau. Bởi dù có cãi vã, dù có đùa nghịch đến mức tổn thương, giữa chúng vẫn là một tình yêu nguyên vẹn, một sự kết nối không thể nào tách rời. Và nếu trong một khoảnh khắc nào đó, với guồng quay bộn bề của cuộc sống, bạn vô tình không thể hướng ánh nhìn về phía chúng, để rồi bỏ quên những phút giây đời thường ấy, thì hãy để những trang sách của Nguyễn Nhật Ánh đưa bạn đến với một thế giới mới - nơi mà đằng sau cánh cửa ấy, bạn sẽ là vị khách ghé thăm cuộc đời của những chú chó. Nguyễn Nhật Ánh – cái tên chắc hẳn chẳng còn xa lạ gì đối với mỗi độc giả Việt Nam, là người thổi hồn vào những câu chuyện giản dị nhưng trọn vẹn cảm xúc, như một nhạc sĩ tài hoa viết nên những nốt nhạc ngọt ngào của tuổi thơ, của tình bạn và tình yêu. Từng câu chữ của ông là những vết thương, những nụ cười, những bâng khuâng mà bất kỳ ai đã từng lớn lên đều có thể cảm nhận được. Cây bút văn chương tài năng ấy luôn dùng cả trái tim của mình để viết về tuổi thơ với một tình yêu tha thiết, về những ngóc ngách nhỏ của cuộc sống mà dường như chúng ta đã quên lãng trong nhịp sống hối hả, nhưng vẫn luôn tồn tại trong những ký ức ngọt ngào được cất giấu đâu đó sâu nơi tâm trí của mỗi con người. Những tác phẩm của ông không chỉ là những trang sách, mà là những cây cầu nối liền quá khứ và hiện tại, đưa người đọc bước vào một thế giới đầy ắp tình cảm chân thật và giản dị. “Con chó nhỏ mang giỏ hoa hồng” như một bản nhạc nhẹ nhàng nhưng sâu lắng, kể về năm chú chó nhỏ: Suku, Haili, Êmê, Pig và Bato, những người bạn trung thành trong một gia đình ba thế hệ. Qua lời kể đầy ắp tình cảm của Bato – chú chó thông minh, tinh nghịch, chúng ta như được bước vào một thế giới nơi tình yêu, sự quan tâm và những khoảnh khắc giản dị của đời sống được khắc họa một cách tinh tế và đầy xúc cảm. Từng câu chữ, từng trang sách đều như mang hơi thở của những buổi sáng tinh mơ khi ánh nắng ấm áp chiếu qua cửa sổ, chiếu rọi những hạnh phúc bình dị nhưng sâu sắc.

Xuyên suốt câu chuyện là kết tinh của những gì Nguyễn Nhật Ánh đã chắt lọc được khi thầm lặng và ân cần quan sát những hoạt động của các chú chó với phong cách khác nhau nhưng lại là những mảnh ghép hoàn chỉnh nhất cho cuộc đời của chúng. 5 chương sách với 86 câu chuyện không chỉ đơn thuần là những khoảnh khắc ấn tượng, mà còn là những thông điệp về tình bạn, tình yêu và sự hi sinh, những giá trị tưởng chừng giản đơn nhưng lại luôn là những bài học quý giá trong cuộc sống. Mỗi chú chó, dù là Suku với tính cách sôi nổi, Haili dịu dàng, Êmê ngây thơ, Pig thầm lặng hay Bato thông minh, đều như những nét màu tạo nên một bức tranh cuộc sống tươi đẹp và đa dạng. Chúng không chỉ là con vật, mà là những con người thu nhỏ với đầy đủ cảm xúc: đam mê, sợ hãi, ước mơ, và cả những phút giây yếu đuối, lấp lánh niềm vui.

Đọc từng trang sách, người đọc chắc hẳn sẽ cảm nhận được sự ấm áp từ những câu chuyện tình bạn giữa chúng với nhau, giữa chúng với chị Ni, ba mẹ hay khách đến nhà. Đây không chỉ là một quyển sách dành cho trẻ em như cảm giác mà cái tên của nó đem lại, mà còn là một tác phẩm dành cho những tâm hồn đang tìm kiếm sự dịu dàng và ánh sáng trong những giờ phút tĩnh lặng của cuộc đời.

Từng nhiều lần đặt trái tim chân thành của mình vào những áng văn giản dị, đời thường nhưng nhuốm màu cảm xúc của ông, từng để cho từng trang sách điểm tô sắc màu rực rỡ cho bức tranh tâm hồn vốn đơn sắc nhạt nhòa của mình, tôi như bị cuốn vào mỗi con chữ, mỗi dòng kể đầy xúc cảm bao trùm lấy cuộc đời của ngòi bút tài ba Nguyễn Nhật Ánh. Nếu cuốn sách “Tôi thấy hoa vàng trên cỏ xanh” là một giai điệu nồng nàn, trong sáng của vùng thôn quê bát ngát cái màu xanh mơn mởn của những câu chuyện tuổi thơ hồn nhiên, và nếu “Cho tôi xin một vé đi tuổi thơ” cũng lại là vùng ký ức tươi đẹp của những tâm hồn đồng điệu chốn quê hương giản dị, thì “Con chó nhỏ mang giỏ hoa hồng” có lẽ sẽ là một cuốn nhật ký đặc biệt, ghi dấu hành trình trưởng thành và là nơi cất giữ hồi ức đáng tin cậy nhất, không phải của những người bạn, cũng không phải của những mẩu chuyện tình non nớt, mà là của năm chú chó với năm góc nhìn, màu sắc và cá tính khác nhau. "Con chó nhỏ mang giỏ hoa hồng" được xuất bản vào năm 2016, do Nhà xuất bản Trẻ phát hành. Ngay khi được tung ra, cuốn sách đã để lại nhiều dấu ấn sâu sắc cho những tâm hồn yêu sách cũng như những nhà phê bình. Thực ra, đây không phải là tác phẩm đầu tiên và duy nhất mà hình ảnh hóm hỉnh, ngộ nghĩnh của những chú chó lại được Nguyễn Nhật Ánh khắc họa một cách sâu sắc và giản dị đến thế, ông đã từng viết ra cuốn “Chó con dũng cảm” hay “Xin lỗi mày Tai To”, nhưng có lẽ, “Con chó nhỏ mang giỏ hoa hồng” sẽ là sự kết hợp hoàn thiện của mọi xúc cảm tươi đẹp nhất, bởi nhà văn đã đặt mình vào góc nhìn của một chú chó, vào câu chuyện của cả năm chú chó chứ không đơn thuần chỉ một. Tác giả Nguyễn Nhật Ánh cũng từng chia sẻ: “Những con chó trong truyện này được đặt tên theo các nhân vật trong tác phẩm Chuyện xứ Lang Biang của tôi, trừ con Pig. Tôi đã sống với chúng nhiều năm, gắn bó với chúng và từ lâu đã xem chúng là bạn nhưng tôi cũng biết chúng không thể ở với tôi mãi mãi. Tôi không thể hình dùng được một ngày những con chó của mình lần lượt ra đi, tôi sẽ như thế nào. Hẳn là tôi sẽ tất nhớ chúng, vì vậy tôi muốn lưu giữ những kỷ niệm về chúng trong cuốn sách này như tôi đã cố gắng lưu giữ tuổi thơ của mình trong những cuốn sách khác. Thực ra, tôi không tự viết cuốn sách này. Kẻ trực tiếp kể chuyện là con chó Batô. Tôi chỉ làm một việc đơn giản là ghi lại.” Quả thật, càng đi sâu vào câu chuyện, ta mới hiểu được nỗi lòng mà nhà văn gửi gắm qua mỗi câu chuyện, mỗi câu từ sâu sắc tới đượm lòng của mình. Có ai trong chúng ta lại không từng yêu thương một sinh vật bé nhỏ, sống bên cạnh ta mỗi ngày, và rồi tưởng tượng cuộc sống sẽ tiếp diễn ra sao khi chúng không còn nữa? Một nỗi buồn sâu thẳm, hay nỗi tiếc thương khôn nguôi? Chắc hẳn, nỗi nhớ sẽ là một ngọn lửa không bao giờ tắt, một vết thương âm ỉ trong trái tim vốn luôn căng tràn sức sống của tình yêu thương mãnh liệt.

Nhân vật đầu tiên được nhắc tới từ kí ức của Bato trong câu chuyện chính là Suku, bé cún thiên thần với bộ lông trắng muốt như mây, dễ thương đến mức ai cũng yêu ngay từ cái nhìn đầu tiên. Ấy vậy mà, đằng sau vẻ ngoài ngây thơ ấy, Suku lại mang trong mình một căn bệnh rất đỗi kỳ lạ – căn bệnh nỗi nhớ con người. Nó luôn khao khát một thứ gì đó mà chẳng bao giờ được thỏa mãn, có thể là hơi ấm từ người thân, từ bạn bè, là sự chở che vô bờ bến. Tuy nhỏ nhắn và đáng yêu, nhưng Suku lại sở hữu tính cách lười biếng, tham lam và đặc biệt là thói cắn người sảng. Không phân biệt Tây, Ta, Việt kiều, tất cả đều là nạn nhân dưới chiếc răng sắc nhọn của nó. Mặc dù vậy, chính những khuyết điểm ấy lại khiến Suku trở nên gần gũi, như thể là hiện thân của những tính xấu mà ai cũng có, nhưng lại khó lòng ghét bỏ. Mỗi hành động nghịch ngợm của nó, từ việc tè bậy đến cắn xé đồ đạc, đều không thể làm giảm đi tình yêu mà mọi người dành cho Suku. Nó như một phần không thể thiếu, một biểu tượng của sự ngây ngô và nghịch ngợm, khiến ai nhìn vào cũng phải mỉm cười, dù biết rằng những trò nghịch của nó chẳng bao giờ có điểm dừng. Trong thế giới loài chó, nơi quyền lực và tự do không bao giờ dễ dàng dung hòa, có hai nhân vật làm nên cuộc chiến của những khát vọng trái ngược: Haili và Êmê. Haili, với dáng vẻ "chân dài miên man" và khuôn mặt thánh thiện, mang trong mình khát vọng cháy bỏng được thống trị. Đằng sau vẻ ngoài hoàn hảo ấy là một tham vọng vô tận, một khao khát quyền lực như những chính trị gia tham lam. Nó muốn dẫn đầu, muốn tất cả phải kính sợ và phục tùng mình. Nhưng đối diện với Haili, Êmê lại mang một nguyên tắc sống vững chắc, không muốn cai trị và cũng không chịu sự cai trị. Êmê không có sức mạnh vạm vỡ, cũng không sở hữu tốc độ nhanh nhẹn của Haili, nhưng nó có một điều mà không con chó nào có: sự kiên định không thể khuất phục. Cuối cùng, là Bato – con chó kể chuyện, với ngoại hình chẳng có gì nổi bật, thậm chí có phần xấu xí, ục ịch và tròn lẳn, nhưng lại là người trưởng thành nhất trong đám bạn. Dù cơ thể không vạm vỡ như những con chó khác, ánh mắt của Bato lại thấm đẫm sự sâu lắng, trải rộng qua năm tháng sống thu mình, tĩnh lặng. Chính vì vậy, nó có cái nhìn tinh tế, khác biệt, hơn hẳn những người bạn của mình. Bato luôn quan sát mọi thứ xung quanh, nhìn vào cuộc sống của những con chó khác với một thái độ đầy suy tư. Nó nhớ mãi hình ảnh Êmê, con chó nhỏ nhắn nhưng kiên cường, ngậm giỏ hoa và chạy đến bên ba chị Ni – cảnh tượng ấy trong mắt Bato như một biểu tượng sinh động của lòng biết ơn, của sự trân trọng cuộc sống mà con người đã dành tặng cho chúng, tràn ngập yêu thương và rộng mở. Chính khoảnh khắc ấy khiến Bato nảy ra ý tưởng muốn kể lại những câu chuyện, những gì nó đã chứng kiến và ghi nhớ từ thuở nhỏ đến giờ, như một cách để ghi lại những kỷ niệm, để truyền tải sự trân trọng cuộc sống, những giá trị đẹp đẽ mà nó đã từng sống qua. 

Câu chuyện bắt đầu khi những cuộc chiến thực sự nổ ra, giữa bốn con chó sống chung trong ngôi nhà nhỏ và hai con chó hoang to lớn, trong một đêm trăng thanh gió mát. Gia đình chị Ni thức khuya, chờ đợi dì Tám từ Úc trở về, không ngờ lại chứng kiến trận ẩu đả dữ dội giữa những con chó. Cuộc chiến này, giống như cuộc đối đầu giữa Haili và Êmê, không chỉ là sự xung đột giữa kẻ mạnh và kẻ yếu, mà còn là sự giằng co của những tư tưởng, của quyền lực và sự tự do. Tuy nhiên, lần này, quy mô của nó lớn hơn, đau thương và mất mát cũng lớn hơn, khi tất cả những con chó của gia đình chị Ni đều bị thương, đặc biệt là Pig – con chó nhỏ bé nhất, bị thương nặng đến mức có thể ra đi bất cứ lúc nào. Pig nằm gục trên sàn, không một chút động đậy, và trận chiến giữa Haili và Êmê chỉ kết thúc khi mọi thứ dường như đã vượt qua giới hạn của sự chịu đựng. Thế nhưng, lúc này, hình ảnh hai con chó, trước đây còn đánh nhau thừa sống thiếu chết, giờ đây nằm bên con Pig, gục đầu vào chân nó, khiến tôi không thể không suy nghĩ về hòa bình. Tôi vẫn nhớ mãi cái cảnh con Pig ngậm giỏ hoa hồng, một hình ảnh đơn giản nhưng đầy ý nghĩa, như một biểu tượng sống động của lòng biết ơn về cuộc sống tươi đẹp mà con người đã mang lại cho chúng một cách hào phóng và đầy yêu thương. Những con chó chạy nhảy trong buổi triển lãm tranh, những cuộc trò chuyện thân mật giữa chú Peter và các con chó, những giọt nước mắt hạnh phúc của dì Tám khi được ôm Suku – tất cả như những hoa hồng, là những khoảnh khắc đẹp đẽ nhất trong cuộc sống, những lát cắt hoàn hảo mà quyển sách này muốn gửi gắm đến mọi người.Triết lý của Nguyễn Nhật Ánh không cần những lời lẽ hoa mỹ, mà như dòng suối mát, nhẹ nhàng lướt qua tâm hồn, nuôi dưỡng những cảm xúc trong sáng. Ông vẽ nên một thế giới đầy sắc màu, nơi những đứa trẻ có thể cảm nhận được vẻ đẹp của cuộc sống, từ đó nảy sinh những hành động đầy nhân văn. Có lẽ, ông tin rằng, chỉ khi tâm hồn của trẻ thơ được nuôi dưỡng trong sự chân thành và lòng biết ơn, xã hội sẽ trở nên tốt đẹp hơn trong tương lai. Trên 250 trang sách tưởng chừng như thật dài mà lại cô đọng ấy, cảm xúc hòa quyện, mượt mà đến mức ta cảm thấy như thời gian ngừng trôi. Những chú chó trong câu chuyện, với những tính cách riêng biệt, đôi lúc khiến ta giật mình nhận ra mình đã từng là họ, hay thậm chí là người xung quanh ta. Và đôi khi, chính những thói quen tưởng chừng vô hại lại vô tình làm tổn thương những người ta yêu quý. Chỉ khi khoảng cách lớn dần, khi ta nhìn lại những điều mình đã bỏ lỡ, ta mới nhận ra sự cần thiết của sự thay đổi. Tựa đề "Con chó nhỏ mang giỏ hoa hồng" tưởng chừng như một câu chuyện tình yêu ngây thơ, với những chú chó thông minh, nhưng thực ra lại ẩn chứa một ý nghĩa sâu sắc. Đó là hình ảnh Êmê – chú chó ngậm giỏ hoa hồng mang đến cho chủ nhân, một chi tiết giản dị mà đầy tinh tế. Theo lời Bato, chú chó kể chuyện, đó là biểu tượng của lòng biết ơn đối với cuộc sống tươi đẹp mà con người đã ban tặng chúng ta – một món quà "hào phóng và tràn đầy yêu thương", như một lời nhắc nhở về những điều quý giá trong cuộc đời.

Quả thật, không một nỗi buồn nào có thể so sánh với nỗi buồn khi ta sắp mất một người thân. Đó là loại nỗi buồn không thể đem đóng gói rồi giấu vào một góc khuất nào đó trong vỏ não. Nó luôn tan chảy và len lỏi vào mọi khe hở trong tâm hồn bạn, Nó khiến bạn không làm gì vẫn thấy kiệt sức từng giờ từng phút từng giây. Nhẹ nhàng thôi nhưng "Con chó nhỏ mang giỏ hoa hồng" đã lặng lẽ gieo vào lòng người một ý thức sâu sắc về việc bảo vệ loài chó – người bạn thân thiết của con người. Nếu mỗi chúng ta đều coi trọng sự sống của một con chó như chính sự sống của bản thân, thì cuộc sống sẽ trở nên giản đơn hơn, đầy ắp lòng nhân ái. Con người sẽ không còn hành động một cách vô cảm, không còn làm những điều xấu xa, và mỗi ngày sẽ trôi qua trong sự yêu thương, tôn trọng, và thấu hiểu lẫn nhau. Và quả thật, “Nếu bạn đối xử với một chó như một con người, nó sẽ đối xử với bạn như một con chó”Và cuộc chiến bắt đầu, không phải giữa sức mạnh và yếu đuối, mà giữa tham vọng và nguyên tắc. Haili với mọi thủ đoạn trong tay, và Êmê, với lòng kiên định bảo vệ tự do và phẩm giá. Cuộc chiến này không có hồi kết, như là sự đối đầu vĩnh viễn giữa những khát vọng không bao giờ hòa hợp. Trong thế giới của loài chó, như trong cuộc đời con người, khi tham vọng không chịu nhường bước, khi nguyên tắc sống không chịu gục ngã, chỉ còn lại những trận chiến không hồi kết, nơi mà quyền lực và tự do mãi mãi không thể đứng chung một bầu trời. 

Pig, con chó cuối cùng được đưa về nhà, mang trong mình sức mạnh và trí thông minh của giống chó săn, nhưng trái tim nó lại đầy sự nhút nhát. Dẫu dòng máu mạnh mẽ chảy trong cơ thể, Pig vẫn là con chó yếu ớt, bị Suku, con chó trưởng thành, áp đảo đến mức tai nó chẳng thể ngóc lên. Nhưng chính con chó tai cụp ấy lại là hình mẫu vĩ đại của lòng trung thành, của sức mạnh tiềm ẩn, và là sợi dây vô hình gắn kết những con chó với nhau, sẵn sàng đứng lên khi cần bảo vệ những người bạn đồng hành. Điểm đặc biệt của Pig là trực giác tuyệt vời. Nó có thể nhận ra kẻ xấu qua ánh mắt và cử chỉ, như một linh cảm tinh tế mà không con chó nào có. Một đêm, khi cả bọn dạo chơi trong bóng tối, hai con chó hoang bất ngờ lao vào tấn công. Dù bị thương nặng, Pig vẫn chiến đấu đến cùng, bảo vệ anh em bằng tất cả sức lực, thể hiện rằng sức mạnh không chỉ nằm ở thân hình, mà còn ở trái tim can đảm và sự hy sinh. Con chó nhỏ bé, dù yếu đuối bên ngoài, lại là biểu tượng của lòng dũng cảm vô hạn, của tình bạn vĩnh cửu không gì có thể làm phai mờ.

TRANSLATION:
Have you ever opened your heart to a dog — loved it as if it were your dearest soulmate?

When life around you rushes by, have you ever quietly watched your dog in those simplest moments — when its eyes overflow with sincerity, as though the world exists only between you and it? Every time you pick up a plate of food, its gaze lights up, ears perk high, tail wagging eagerly — sweet gestures that speak a silent thank-you. Have you ever cared for your dog as if it were your own child, worrying over every small change? When you catch that worried look in its eyes as you leave, or feel the pure joy bursting in its heart when you return home — doesn’t it feel like your soul is being gently warmed and illuminated after a long, exhausting day?
And at night, in the stillness of your room, have you ever noticed it sitting quietly by your door — eyes glimmering in the dark, as if trying to hold onto every moment by your side, unwilling to part even for a second?
 Beyond these simple yet miraculous things — if you’ve ever raised more than one dog, you’ve surely witnessed their playful “battles,” their endless chasing and growling, as if the world belonged only to their laughter and chaos. But amidst those frenzied moments, when their roughhousing leaves them scratched and bruised, you might still feel the deep affection that binds them together — for even through quarrels and mischief, their love remains whole and inseparable.
And if, at some point, the fast rhythm of life pulls your gaze away from them — making you forget those ordinary yet precious moments — let Nguyễn Nhật Ánh’s pages guide you into another world, one where you become a guest in the lives of dogs.
 Nguyễn Nhật Ánh — a name no stranger to Vietnamese readers — breathes life into ordinary tales with the warmth of a poet. His stories sing like tender melodies of childhood, friendship, and love. Each word carries laughter and ache, nostalgia and tenderness — emotions that anyone who has ever grown up can feel. With his pen and his heart, he writes about childhood and the forgotten corners of life that quietly dwell in our memories — soft, glowing, and sweet.
His works are more than stories; they are bridges between past and present, leading readers into a world rich with sincerity and simplicity. “The Little Dog Carrying a Basket of Roses” feels like a gentle, heartfelt symphony — telling the story of five small dogs: Suku, Haili, Êmê, Pig, and Bato — loyal companions of a three-generation family. Through the tender narration of Bato — the clever, playful storyteller — we step into a world where love, care, and the beauty of everyday life are painted with remarkable delicacy and emotion. Every word, every page seems to carry the breath of early morning sunlight — warm and radiant, illuminating the most modest yet profound happiness.
Throughout the story, Nguyễn Nhật Ánh distills what he has quietly observed in the dogs’ lives — five unique personalities that complete one another like pieces of a single soul. The five chapters, woven through 86 small tales, are not merely amusing snapshots but also messages of friendship, love, and sacrifice — timeless values disguised in everyday simplicity. Each dog — Suku’s lively energy, Haili’s grace, Êmê’s innocence, Pig’s quiet strength, and Bato’s wisdom — adds a color to the portrait of life. They are not mere animals but reflections of us — with our dreams, fears, passions, and tender frailties.
As you read, warmth seeps in — from their bonds with one another, with Sister Ni, with their family, and even with strangers. This book is not just for children, as its title might suggest, but for anyone seeking gentleness and light in life’s quieter hours.
Many times, I’ve found myself entranced by Nguyễn Nhật Ánh’s gentle prose — letting his words paint bright colors over the faded canvas of my heart. If “I See Yellow Flowers on the Green Grass” is a sweet, vivid melody of rural childhood, and “Give Me a Ticket Back to Childhood” a tender return to innocent memories, then “The Little Dog Carrying a Basket of Roses” is perhaps a diary of growing up — a keeper of trust and memory. Not of childhood friends or first loves, but of five dogs — each with its own voice, hue, and heart.
Published in 2016 by Nhà Xuất Bản Trẻ, the book quickly left a deep mark on readers and critics alike. This was not Nguyễn Nhật Ánh’s first time writing about dogs — he had penned “The Brave Puppy” and “Sorry, Big Ears” before — but here, he reaches the height of his craft. By letting the story be told through a dog’s eyes — not one, but five — he gifts readers an intimate and complete view of love, loyalty, and loss.
The author himself once said:
 “The dogs in this story are named after characters from my Lang Biang series, except for Pig. I lived with them for years, loved them as friends, but I knew they couldn’t stay with me forever. I cannot imagine the day they’ll all leave me. I will surely miss them dearly — so I wrote this book to keep them close, just as I’ve kept my childhood in other stories. In truth, I didn’t write this book — Bato did. I merely recorded his words.”
And as the story unfolds, you understand what he meant — the quiet ache behind each line, the tenderness that lingers in every word.
 Because who among us hasn’t loved a small creature that shared our days? And who hasn’t wondered what life would be like without them — that hollow sadness, that aching emptiness? Such grief cannot be locked away; it seeps through the cracks of one’s soul, soft yet relentless.
Suku, the snow-white angel of the group, captures everyone’s heart with his innocence — yet behind his beauty lies a strange ailment: the longing for human affection. Lazy, gluttonous, mischievous — Suku is flawed but irresistibly real, embodying our own imperfections. His chaos and charm blend into one, impossible not to love.
 Then there is Haili, elegant and ambitious — born to lead, craving power like a politician chasing glory — and Êmê, gentle but unyielding, refusing both domination and submission. Their clash is more than a dogfight; it’s a reflection of opposing ideals — authority versus freedom.
Bato, the narrator, is neither strong nor handsome. Plump, quiet, and observant, he sees the world with a depth the others lack. To him, every small gesture — like Êmê carrying a basket of roses to Sister Ni’s father — glows with gratitude and love for life itself. That image, Êmê with the roses, becomes the soul of the story: a symbol of thankfulness, of beauty offered back to the world.
But life isn’t all tenderness. One moonlit night, a real battle breaks out — between the four family dogs and two strays. It’s not merely teeth and claws — it’s the war between dominance and dignity. When it ends, all are wounded, especially Pig — the smallest one, lying still and broken. Yet even in pain, the dogs huddle close together — enemies turned kin — as if to whisper that peace, not pride, is the truest victory.
That image — Pig clutching the basket of roses — stays with you. It’s a living metaphor for gratitude, for the quiet beauty of life’s gifts. Through such scenes, Nguyễn Nhật Ánh’s philosophy shines — not through grand words, but through the softness of his soul. He teaches that only when children grow up in sincerity and gratitude can the world become gentler.
Across 250 pages, time seems to pause. Each dog, with its quirks and wounds, mirrors us — the way we love, hurt, and heal. We realize how often our smallest habits can harm those we love, and how change sometimes begins only after distance and loss.
The title “The Little Dog Carrying a Basket of Roses” may sound like a sweet fairy tale, but within it lies something profound — the story of a dog offering roses to its human, a gesture of love and appreciation.
For truly, no sorrow compares to the sorrow of losing someone dear. It seeps through your veins, quietly exhausting you. Yet this gentle book plants in its readers a deep compassion — a reminder to cherish and protect the loyal souls beside us.
If each of us could value a dog’s life as we do our own, the world would be simpler — kinder. Love would replace indifference, and every day would pass in warmth, respect, and understanding.
Because, after all — “If you treat a dog like a human, it will treat you like the best kind of dog.”
`,
    icon: Star,
    color: "cosmic-pink"
  },
  {
    title: "Celestial Musings",
    language: "English",
    preview: "Between the spaces of heartbeats and dreams, there exists a realm where words dance like fireflies in summer dusk...",
    fullText: "[Your contemplative English piece]",
    icon: Sparkles,
    color: "cosmic-gold"
  },
  {
    title: "Hồi Ức Mùa Hoa",
    language: "Tiếng Việt",
    preview: "Mùa xuân về mang theo những cánh hoa rơi, như những lời thoại thầm trong gió...",
    fullText: "[Vietnamese literary work]",
    icon: Heart,
    color: "cosmic-silver"
  },
  {
    title: "Letters to Tomorrow",
    language: "English",
    preview: "Dear future self, if you're reading this, know that every moment we lived was painted with colors of hope...",
    fullText: "[Your English letter/essay]",
    icon: Feather,
    color: "cosmic-lilac"
  },
  {
    title: "Dòng Chảy Của Thời Gian",
    language: "Tiếng Việt",
    preview: "Thời gian trôi như dòng sông, mang theo những ký ức ngọt ngào và đắng cay...",
    fullText: "[Vietnamese time reflection piece]",
    icon: Moon,
    color: "cosmic-pink"
  },
  {
    title: "Stardust Memories",
    language: "English",
    preview: "We are all made of stardust, carrying within us the echoes of ancient cosmic symphonies...",
    fullText: "[Your philosophical English essay]",
    icon: Pen,
    color: "cosmic-gold"
  }
];

export default function LiteraryPage() {
  const [selectedWork, setSelectedWork] = useState<number | null>(null);

  return (
    <main className="min-h-screen pt-24 pb-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 animate-float">
          <div className="inline-block mb-4 relative">
            <BookOpen className="w-16 h-16 text-cosmic-lilac animate-twinkle mx-auto" />
            <Feather className="w-6 h-6 text-cosmic-gold absolute -top-2 -right-2 animate-float" />
          </div>
          <h1 className="font-elegant text-5xl md:text-6xl text-cosmic-lilac">
            Literary Works
          </h1>
          <p className="font-script text-2xl text-cosmic-pink mb-4">
            Romantic Prose & Spontaneous Essays
          </p>
          <p className="text-cosmic-silver/80 max-w-2xl mx-auto italic">
            A bilingual journey through emotions and imagination. Each piece is a window 
            into my soul, written in moments of inspiration under starlit skies.
          </p>
        </div>

        {/* Book Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {literaryWorks.map((work, index) => {
            const Icon = work.icon;
            
            return (
              <div
                key={index}
                className="relative"
                style={{
                  animation: `drift ${7 + index * 0.5}s ease-in-out infinite`,
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <div
                  className="relative w-full h-[500px] cursor-pointer"
                  onClick={() => setSelectedWork(index)}
                >
                  <div className="h-full rounded-2xl border-2 border-cosmic-lilac/30 bg-gradient-to-br from-cosmic-navy/80 to-cosmic-navy/60 backdrop-blur-md overflow-hidden group hover:border-cosmic-pink/50 hover:shadow-2xl hover:shadow-cosmic-lilac/40 transition-all duration-500">
                    {/* Book Cover Design */}
                    <div className="relative h-full p-8 flex flex-col justify-between">
                      {/* Decorative book texture */}
                      <div className="absolute inset-0 opacity-5">
                        <svg width="100%" height="100%">
                          <pattern id={`book-texture-${index}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                            <line x1="0" y1="0" x2="40" y2="0" stroke="currentColor" strokeWidth="0.5" />
                            <line x1="0" y1="20" x2="40" y2="20" stroke="currentColor" strokeWidth="0.5" />
                          </pattern>
                          <rect width="100%" height="100%" fill={`url(#book-texture-${index})`} />
                        </svg>
                      </div>

                      {/* Book spine effect */}
                      <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-cosmic-navy to-transparent border-r border-cosmic-lilac/20" />

                      {/* Content */}
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-6">
                          <div className="px-3 py-1 rounded-full bg-cosmic-lilac/20 border border-cosmic-lilac/30">
                            <span className="text-xs font-elegant text-cosmic-cream">{work.language}</span>
                          </div>
                          <Icon className="w-8 h-8 text-cosmic-gold animate-twinkle" />
                        </div>
                        
                        <h3 className="font-elegant text-2xl text-cosmic-cream mb-4 group-hover:text-cosmic-pink transition-colors">
                          {work.title}
                        </h3>
                        
                        <div className="space-y-2 mb-6">
                          <div className="h-px bg-cosmic-lilac/30 w-full" />
                          <div className="h-px bg-cosmic-lilac/20 w-5/6" />
                          <div className="h-px bg-cosmic-lilac/10 w-4/6" />
                        </div>
                        
                        <p className="text-cosmic-silver/90 leading-relaxed italic text-sm line-clamp-6">
                          {work.preview}
                        </p>
                      </div>

                      {/* Click to read indicator */}
                      <div className="relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 text-cosmic-gold text-sm font-script animate-pulse">
                          <BookOpen className="w-4 h-4" />
                          <span>Click to read</span>
                        </div>
                      </div>

                      {/* Decorative corners */}
                      <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-cosmic-gold/20" />
                      <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-cosmic-pink/20" />
                      
                      {/* Stars */}
                      <div className="absolute top-1/4 right-8 w-1 h-1 bg-cosmic-gold rounded-full animate-twinkle" />
                      <div className="absolute bottom-1/3 left-12 w-1 h-1 bg-cosmic-pink rounded-full animate-twinkle" style={{ animationDelay: '1s' }} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reading Dialog */}
        <Dialog open={selectedWork !== null} onOpenChange={(open) => !open && setSelectedWork(null)}>
          <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto bg-gradient-to-br from-cosmic-navy/95 to-cosmic-navy/90 backdrop-blur-xl border-2 border-cosmic-lilac/40">
            {selectedWork !== null && (
              <>
                <DialogHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      {(() => {
                        const Icon = literaryWorks[selectedWork].icon;
                        return <Icon className="w-8 h-8 text-cosmic-gold animate-twinkle" />;
                      })()}
                      <div>
                        <DialogTitle className="font-elegant text-3xl text-cosmic-cream mb-2">
                          {literaryWorks[selectedWork].title}
                        </DialogTitle>
                        <div className="px-3 py-1 rounded-full bg-cosmic-lilac/20 border border-cosmic-lilac/30 inline-block">
                          <span className="text-xs font-elegant text-cosmic-cream">
                            {literaryWorks[selectedWork].language}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogHeader>

                {/* Divider */}
                <div className="space-y-2 mb-6">
                  <div className="h-px bg-cosmic-lilac/30 w-full" />
                  <div className="h-px bg-cosmic-lilac/20 w-5/6" />
                  <div className="h-px bg-cosmic-lilac/10 w-4/6" />
                </div>

                {/* Book page texture background */}
                <div className="absolute inset-0 opacity-3 pointer-events-none">
                  <svg width="100%" height="100%">
                    <pattern id="page-texture-dialog" x="0" y="0" width="100%" height="20" patternUnits="userSpaceOnUse">
                      <line x1="0" y1="10" x2="100%" y2="10" stroke="currentColor" strokeWidth="0.3" opacity="0.2" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#page-texture-dialog)" />
                  </svg>
                </div>

                {/* Content */}
                <div className="relative prose prose-invert prose-lg max-w-none">
                  <p className="text-cosmic-silver/90 leading-relaxed italic whitespace-pre-wrap">
                    {literaryWorks[selectedWork].fullText}
                  </p>
                </div>

                {/* Decorative footer */}
                <div className="mt-8 pt-6 border-t border-cosmic-lilac/20">
                  <p className="font-calligraphy text-cosmic-lilac text-center text-2xl">
                    ✦ ✦ ✦
                  </p>
                </div>

                {/* Decorative stars */}
                <div className="absolute top-20 right-12 w-2 h-2 bg-cosmic-gold rounded-full animate-twinkle" />
                <div className="absolute bottom-32 left-16 w-2 h-2 bg-cosmic-pink rounded-full animate-twinkle" style={{ animationDelay: '1s' }} />
              </>
            )}
          </DialogContent>
        </Dialog>

        {/* Footer Quote */}
        <div className="mt-20 text-center p-10 rounded-3xl bg-cosmic-navy/30 backdrop-blur-sm border border-cosmic-lilac/20 animate-glow">
          <Feather className="w-12 h-12 text-cosmic-lilac mx-auto mb-4 animate-float" />
          <p className="font-calligraphy text-3xl text-cosmic-pink mb-4">
            "Words are the bridges between souls..."
          </p>
          <p className="text-cosmic-silver/70 italic max-w-2xl mx-auto">
            Every piece written here is a piece of my heart, floating in the cosmic library of dreams and memories.
          </p>
        </div>
      </div>
    </main>
  );
}

