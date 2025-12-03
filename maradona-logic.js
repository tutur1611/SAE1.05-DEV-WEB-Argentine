var clubMaps = {
    club1: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23403362.406969078!2d-85.27658276086802!3d-25.55792430569759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc9fcdf7b6361%3A0x81d7742c61cdb1b3!2sAsociaci%C3%B3n%20Atl%C3%A9tica%20Argentinos%20Juniors!5e0!3m2!1sfr!2sfr!4v1764423968728!5m2!1sfr!2sfr",
    club2: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25705139.94182795!2d-89.37559225486825!3d-28.021416901642066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb50027442ed3%3A0x800543c1ca9a9146!2sBoca%20Juniors!5e0!3m2!1sfr!2sfr!4v1764423915149!5m2!1sfr!2sfr",
    club3: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23409430.987600304!2d-32.53263093452535!3d44.25654529146924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a300320a8cd5%3A0x25bce8813607617b!2sFC%20Barcelona!5e0!3m2!1sfr!2sfr!4v1764424012057!5m2!1sfr!2sfr",
    club4: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9587817.769540306!2d-6.449491901271023!3d42.33841237553475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414620b632f271a7%3A0x2f8af14e867669b4!2sSSC%20Napoli%20Training%20Center!5e0!3m2!1sfr!2sfr!4v1764424136290!5m2!1sfr!2sfr",
    club5: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23031119.298823137!2d-30.294893858115145!3d37.72653313794883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126935dca01af5%3A0x41560e7c4925240!2sSevilla%20FC%20Official%20Store%20Outlet!5e0!3m2!1sfr!2sfr!4v1764424358453!5m2!1sfr!2sfr",
    club6: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26358099.547109555!2d-79.63532983281634!3d-25.150287308878543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7ab44524e837b%3A0x8567456159008b34!2sBoys%20Club%20Atletico%20Newell%20S%20Old!5e0!3m2!1sfr!2sfr!4v1764425159209!5m2!1sfr!2sfr"
};
function initClubClicks() {
    var clubs = document.querySelectorAll(".perso-club");
    //parcours tous les éléments avec des classe club et y met un Ecouteur de click dessus, en gros ça écoute en continu jusqu'a ce qu'il y a un clique
    //au clique, ca displayMap
    for (var i = 0; i < clubs.length; i++) {
        clubs[i].addEventListener("click", displayMap);
    }
}

function displayMap(event) {
    var clubElement = event.currentTarget; // l'élement qui a été cliqué
    var iframe = document.getElementById("map-iframe");
    iframe.src = clubMaps[clubElement.id]; // on applique le lien du club correspondant
}

initClubClicks();