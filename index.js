function bgChange(personagemId, novaImagem) {
    var personagem = document.getElementById(personagemId);
    document.body.style.backgroundImage =`url('${novaImagem}')`;

}


document.getElementById("personagem1").addEventListener("click", function() {
    bgChange("personagem1", "https://images4.alphacoders.com/110/110948.jpg");
    document.getElementById("paragrafo").innerHTML = "Itachi Uchiha, foi um prodígio do clã Uchiha de Konohagakure. Ele se tornou um criminoso internacional depois de assassinar seu clã inteiro, poupando apenas a vida de seu irmão mais novo, Sasuke. Ele se juntou a organização criminosa Akatsuki, onde ele entrou em frequentes conflitos com Konoha e seus ninjas, incluindo Sasuke, que procurou vingar sua família. Depois de morrer durante uma batalha contra Sasuke, as motivações de Itachi foram reveladas serem mais complicadas do que pareciam, uma vez que seu clã tramava um golpe de estado contra Konoha que traria guerra à aldeia. No fim, Itachi desejava proteger a sua vila e seu irmão, permanecendo um shinobi leal a Konohagakure até o fim.";
})

document.getElementById("kakuzu").addEventListener("click", function() {
    bgChange("kakuzu", "https://images8.alphacoders.com/122/1221721.jpg");
    document.getElementById("paragrafo").innerHTML = "Kakuzu, foi um membro da Akatsuki e o parceiro de Hidan, antes de desertar de Takigakure. Apesar da antipatia mútua entre Kakuzu e Hidan, eles faziam uma dupla quase perfeita, porque as suas habilidades se complementavam extremamente bem. Tanto ele como Hidan eram praticamente imortais.era um indivíduo ganancioso e avarento, organizando as metas em termos de maior lucro que ele poderia obter a partir deles, e foi muitas vezes disposto a envolver-se em algo a menos, se não houver algo a ganhar.";
})

document.getElementById("kisami").addEventListener("click", function() {
    bgChange("kisami", "https://images3.alphacoders.com/665/665366.jpg");
    document.getElementById("paragrafo").innerHTML = "Kisame Hoshigaki, o Monstro da Névoa Oculta, foi um nukenin de Rank S que fazia parte dos Sete Espadachins da Névoa de Kirigakure e foi parceiro de Itachi Uchiha dentro da organização Akatsuki. Como um dos mais fortes membros da Akatsuki, Kisame tinha um gosto formidável em lutar. No entanto, ele geralmente era incapaz de terminar suas batalhas, sendo corriqueiramente interrompido por Itachi, que só lutava quando necessário";
})

document.getElementById("hidan").addEventListener("click", function() {
    bgChange("hidan", "https://images4.alphacoders.com/106/106958.jpg");
    document.getElementById("paragrafo").innerHTML = "Hidan, foi um nukenin de rank S que desertou de Yugakure e mais tarde juntou-se à Akatsuki. Lá ele fez dupla com Kakuzu, apesar de ambos manterem um desagrado mútuo. Ele também foi o segundo membro mais novo da Akatsuki, no momento da introdução de Tobi. Kisame Hoshigaki sorridentemente referiu-se a Hidan e Kakuzu como o Dueto Zumbi.  foi um dos personagens mais bizarros e desrespeitosos da série, xingando e reclamando com freqüência com os aliados e adversários, ao contrário de ser uma pessoa religiosa. Ele raramente usava sufixos quando falava, e, mesmo assim, geralmente falava como uma forma de sarcasmo, por exemplo, quando ele chamou Deidara de Deidara-chan.";
})

document.getElementById("deidara").addEventListener("click", function() {
    bgChange("deidara", "https://staticg.sportskeeda.com/editor/2022/03/ba956-16470918728956-1920.jpg");
    document.getElementById("paragrafo").innerHTML = "Deidara, foi um nukenin de rank S de Iwagakure. Ele também foi um dos mais jovens membros da Akatsuki, e foi um parceiro de Sasori e Tobi consecutivamente antes de sua morte. Deidara é extremamente orgulhoso, acredita que a arte é uma potência perfeita, que pode se tornar imbatível. Nunca aceita uma derrota, e cada vez que isso acontece, ele sempre planeja uma vingança.";
})

document.getElementById("konan").addEventListener("click", function() {
    bgChange("konan", "https://motionbgs.com/media/927/konan-akatsuki.jpg");
    document.getElementById("paragrafo").innerHTML = "Konan, foi uma kunoichi de Amegakure e um membro da Akatsuki. Ela foi uma parceira de Nagato, e foi o único membro a chamá-lo pelo nome. Após a morte de Nagato, ela desertou da organização e se tornou a líder de Amegakure antes de sua própria morte. era inteligente, estóica, calma e sangue-frio (muito parecida com o que seu parceiro, Nagato, foi). Quando criança, ela era brilhante, compassiva, e relativamente alegre, em comparação com a atitude dura de Yahiko e a sensibilidade de Nagato.";
})

document.getElementById("pain").addEventListener("click", function() {
    bgChange("pain", "https://motionbgs.com/media/1292/pain-nagato.jpg");
    document.getElementById("paragrafo").innerHTML = "Nagato, foi um shinobi de Amegakure descendente do clã Uzumaki. Órfão pelos conflitos da Segunda Guerra Mundial Shinobi, Nagato se uniu de seus companheiros órfãos de guerra, Yahiko e Konan, para formar a Akatsuki, uma organização cujo objetivo era cessar os ciclos infinitos de ódio e morte. Nagato sonhava em trazer paz ao mundo violento dos shinobi. Os três foram alunos de Jiraiya durante três anos, nos quais o Sannin ensinou ninjutsu a eles para que sustentassem seus objetivos, protegessem uns aos outros e para que Nagato controlasse seus poderes, uma vez que ele possuia o Rinnegan, os olhos do Eremita dos Seis Caminhos. Depois de seu melhor amigo e líder, Yahiko, ser traído e morto por pregar a paz, Nagato se convenceu de que o mundo nunca iria parar de lutar voluntariamente a menos que ele conhecesse o que é a verdadeira dor. Por conta disso, ele adotou o pseudônimo de Pain";
})

document.getElementById("sasori").addEventListener("click", function() {
    bgChange("sasori", "https://www.hdwallpapers.in/download/sasori_third_kazekage_hd_naruto-HD.jpg");
    document.getElementById("paragrafo").innerHTML = "Sasori, também conhecido como Sasori da Areia Vermelha, Akasuna no Sasori era um shinobi de Sunagakure e que se juntou a Akatsuki, onde foi parceiro de Orochimaru e Deidara, respectivamente. Quando criança, Sasori sempre pareceu triste, devido à falta de amor dos pais. Quando introduzido à arte do teatro de bonecos por sua avó, Chiyo, ele cresceu um pouco mais feliz. Ele finalmente criou fantoches com a semelhança de seus pais, mas os bonecos não poderiam dar-lhe o amor que ele desejava, ele tornou-se frio e distante.";
})

document.getElementById("tobi").addEventListener("click", function() {
    bgChange("tobi", "https://cdn.wallpapersafari.com/27/99/7QoFvd.png");
    document.getElementById("paragrafo").innerHTML = "Obito Uchiha, foi um membro do clã Uchiha de Konohagakure. Acreditava-se que ele tinha morrido durante a Terceira Guerra Mundial Shinobi, com seu único legado sobrevivente sendo o Sharingan que ele deu ao seu companheiro de equipe, Kakashi Hatake. Na verdade, Obito foi salvo da morte e treinado por Madara Uchiha, mas os acontecimentos da guerra deixaram Obito desiludido com o mundo, e ele tentou substituí-lo por um novo. Madara Uchiha fez Obito Uchiha ser seu sucessor, lhe dando o Plano Olho da Lua. Usando o pseudônimo de Tobi e Madara Uchiha, Obito manipulou a Akatsuki das sombras para dar continuidade aos seus planos, eventualmente, indo a público com eles e, no processo, iniciando a Quarta Guerra Mundial Shinobi. Durante a guerra, Obito teve uma mudança no coração, porém, ele acabou sacrificando sua vida para ajudar a salvar o mundo.";
})

document.getElementById("orochimaru").addEventListener("click", function() {
    bgChange("orochimaru", "https://wallpaperboat.com/wp-content/uploads/2020/05/orochimaru-02.jpg");
    document.getElementById("paragrafo").innerHTML = "Orochimaru logo se juntou à elite da organização criminosa Akatsuki, mas seu objetivo nela estava claro, embora ele formasse uma parceria com Sasori, no qual ele contribuiu muito para a Akatsuki. No entanto, quando Itachi Uchiha se juntou a Akatsuki após cometer o massacre do clã Uchiha, Orochimaru viu sua oportunidade de roubar o seu corpo para ganhar a posse do Sharingan. Itachi usou seu Sharingan para impedi-lo de fazê-lo, ao mesmo tempo, arrancando a mão esquerda de Orochimaru para impedi-lo de quebrar o genjutsu que estava sob ele, o que o levou a abandonar a Akatsuki para adquirir um novo corpo.";
})

document.getElementById("akatsuki").addEventListener("click", function() {
    bgChange("akatsuki", "./imagens/akatsuki-g.jpg");
    document.getElementById("paragrafo").innerHTML = "Akatsuki foi, inicialmente, uma organização criada por Yahiko e seus dois companheiros, Konan e Nagato, em um esforço para lutar contra a tirania e a opressão que sua aldeia natal, Amegakure, estava enfrentando durante a Terceira Guerra Mundial Shinobi, além da ambição de conquistar a paz mundial. Após a morte de Yahiko e sob a influência de Obito Uchiha, a Akatsuki tornou-se uma organização criminosa formada por nukenin de Rank S e é o grupo mais procurado em todo o mundo shinobi. Seu principal objetivo é recolher todas as Bijū para o seu plano de dominação mundial.";
})



