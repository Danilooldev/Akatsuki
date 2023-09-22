function bgChange(personagemId, novaImagem) {
    var personagem = document.getElementById(personagemId);
    document.body.style.backgroundImage =`url('${novaImagem}')`;
}


document.getElementById("personagem1").addEventListener("click", function() {
    bgChange("personagem1", "https://images4.alphacoders.com/110/110948.jpg");
})

document.getElementById("kakuzu").addEventListener("click", function() {
    bgChange("kakuzu", "https://images8.alphacoders.com/122/1221721.jpg");
})
document.getElementById("kisami").addEventListener("click", function() {
    bgChange("kisami", "https://images3.alphacoders.com/665/665366.jpg");
})
document.getElementById("hidan").addEventListener("click", function() {
    bgChange("hidan", "https://images4.alphacoders.com/106/106958.jpg");
})
document.getElementById("deidara").addEventListener("click", function() {
    bgChange("deidara", "https://staticg.sportskeeda.com/editor/2022/03/ba956-16470918728956-1920.jpg");
})
document.getElementById("konan").addEventListener("click", function() {
    bgChange("konan", "https://motionbgs.com/media/927/konan-akatsuki.jpg");
})
document.getElementById("pain").addEventListener("click", function() {
    bgChange("pain", "https://motionbgs.com/media/1292/pain-nagato.jpg");
})
document.getElementById("sasori").addEventListener("click", function() {
    bgChange("sasori", "https://www.hdwallpapers.in/download/sasori_third_kazekage_hd_naruto-HD.jpg");
})
document.getElementById("tobi").addEventListener("click", function() {
    bgChange("tobi", "https://cdn.wallpapersafari.com/27/99/7QoFvd.png");
})
document.getElementById("orochimaru").addEventListener("click", function() {
    bgChange("orochimaru", "https://wallpaperboat.com/wp-content/uploads/2020/05/orochimaru-02.jpg");
})
document.getElementById("akatsuki").addEventListener("click", function() {
    bgChange("akatsuki", "./imagens/akatsuki-g.jpg");
})



